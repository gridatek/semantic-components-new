import {
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { cn } from '../../utils';
import { ScxSidebarState } from './sidebar-state.service';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
const MOBILE_BREAKPOINT = 768;

@Component({
  selector: 'div[scx-sidebar-provider]',
  template: '<ng-content />',
  providers: [ScxSidebarState],
  host: {
    'data-slot': 'sidebar-wrapper',
    '[class]': 'class()',
    '[style.--sidebar-width]': '"16rem"',
    '[style.--sidebar-width-mobile]': '"18rem"',
    '[style.--sidebar-width-icon]': '"3rem"',
  },
})
export class ScxSidebarProvider implements OnInit, OnDestroy {
  readonly state = inject(ScxSidebarState);

  readonly classInput = input<string>('', { alias: 'class' });

  // Two-way binding support
  readonly open = model<boolean>(true);

  protected readonly class = computed(() =>
    cn(
      'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
      this.classInput(),
    ),
  );

  private keydownHandler?: (event: KeyboardEvent) => void;
  private resizeHandler?: () => void;

  constructor() {
    // Sync model with state
    effect(() => this.state.setOpen(this.open()));
    effect(() => this.open.set(this.state.open()));

    // Save to cookie when state changes
    effect(() => {
      this.saveToCookie(this.state.open());
    });
  }

  ngOnInit(): void {
    // Load initial state from cookie
    const savedState = this.loadFromCookie();
    if (savedState !== null) {
      this.open.set(savedState);
    }

    // Setup keyboard shortcut (Cmd/Ctrl + B)
    this.keydownHandler = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key === SIDEBAR_KEYBOARD_SHORTCUT
      ) {
        event.preventDefault();
        this.state.toggle();
      }
    };
    window.addEventListener('keydown', this.keydownHandler);

    // Setup mobile detection
    this.resizeHandler = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      this.state.setIsMobile(isMobile);
    };
    this.resizeHandler(); // Initial check
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    if (this.keydownHandler) {
      window.removeEventListener('keydown', this.keydownHandler);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  private saveToCookie(open: boolean): void {
    if (typeof document === 'undefined') return;
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }

  private loadFromCookie(): boolean | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(
      new RegExp(`${SIDEBAR_COOKIE_NAME}=([^;]+)`),
    );
    return match ? match[1] === 'true' : null;
  }
}
