import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAvatar,
  ScAvatarFallback,
  ScAvatarImage,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-avatar-demo',
  imports: [ScAvatar, ScAvatarFallback, ScAvatarImage],
  template: `
    <div class="space-y-8">
      <!-- Basic Avatar -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Avatar</h3>
        <div class="flex items-center gap-4">
          <span sc-avatar>
            <img
              sc-avatar-image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <span sc-avatar-fallback>CN</span>
          </span>
        </div>
      </div>

      <!-- Fallback Only -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Fallback (No Image)</h3>
        <div class="flex items-center gap-4">
          <span sc-avatar>
            <span sc-avatar-fallback>JD</span>
          </span>
          <span sc-avatar>
            <span sc-avatar-fallback>AB</span>
          </span>
          <span sc-avatar>
            <span sc-avatar-fallback>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
          </span>
        </div>
      </div>

      <!-- Different Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Different Sizes</h3>
        <div class="flex items-end gap-4">
          <span sc-avatar class="size-6">
            <img
              sc-avatar-image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <span sc-avatar-fallback class="text-xs">CN</span>
          </span>
          <span sc-avatar class="size-8">
            <img
              sc-avatar-image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <span sc-avatar-fallback class="text-xs">CN</span>
          </span>
          <span sc-avatar>
            <img
              sc-avatar-image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <span sc-avatar-fallback>CN</span>
          </span>
          <span sc-avatar class="size-14">
            <img
              sc-avatar-image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <span sc-avatar-fallback class="text-lg">CN</span>
          </span>
          <span sc-avatar class="size-20">
            <img
              sc-avatar-image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <span sc-avatar-fallback class="text-xl">CN</span>
          </span>
        </div>
      </div>

      <!-- Avatar Group -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Avatar Group</h3>
        <div class="flex -space-x-4">
          <span sc-avatar class="border-2 border-background">
            <img
              sc-avatar-image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <span sc-avatar-fallback>CN</span>
          </span>
          <span sc-avatar class="border-2 border-background">
            <span sc-avatar-fallback>JD</span>
          </span>
          <span sc-avatar class="border-2 border-background">
            <span sc-avatar-fallback>AB</span>
          </span>
          <span sc-avatar class="border-2 border-background">
            <span sc-avatar-fallback class="text-xs">+3</span>
          </span>
        </div>
      </div>

      <!-- With Status Indicator -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Status Indicator</h3>
        <div class="flex items-center gap-4">
          <div class="relative">
            <span sc-avatar>
              <img
                sc-avatar-image
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <span sc-avatar-fallback>CN</span>
            </span>
            <span
              class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-green-500"
            ></span>
          </div>
          <div class="relative">
            <span sc-avatar>
              <span sc-avatar-fallback>JD</span>
            </span>
            <span
              class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-yellow-500"
            ></span>
          </div>
          <div class="relative">
            <span sc-avatar>
              <span sc-avatar-fallback>AB</span>
            </span>
            <span
              class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-gray-500"
            ></span>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAvatarDemo {}
