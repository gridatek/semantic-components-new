export type CodeEditorLanguage =
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'json'
  | 'python'
  | 'sql'
  | 'markdown'
  | 'plaintext';

export type TokenType =
  | 'keyword'
  | 'string'
  | 'number'
  | 'comment'
  | 'function'
  | 'operator'
  | 'punctuation'
  | 'property'
  | 'tag'
  | 'attribute'
  | 'selector'
  | 'variable'
  | 'builtin'
  | 'plain';

export interface Token {
  type: TokenType;
  value: string;
}

interface LanguageDefinition {
  keywords: string[];
  builtins?: string[];
  operators: RegExp;
  strings: RegExp;
  comments: { line?: string; block?: [string, string] };
  numbers: RegExp;
  functions?: RegExp;
  special?: { pattern: RegExp; type: TokenType }[];
}

const LANGUAGES: Record<string, LanguageDefinition> = {
  javascript: {
    keywords: [
      'async',
      'await',
      'break',
      'case',
      'catch',
      'class',
      'const',
      'continue',
      'debugger',
      'default',
      'delete',
      'do',
      'else',
      'export',
      'extends',
      'false',
      'finally',
      'for',
      'from',
      'function',
      'if',
      'import',
      'in',
      'instanceof',
      'let',
      'new',
      'null',
      'of',
      'return',
      'static',
      'super',
      'switch',
      'this',
      'throw',
      'true',
      'try',
      'typeof',
      'undefined',
      'var',
      'void',
      'while',
      'with',
      'yield',
    ],
    builtins: [
      'Array',
      'Boolean',
      'Date',
      'Error',
      'Function',
      'JSON',
      'Math',
      'Number',
      'Object',
      'Promise',
      'RegExp',
      'String',
      'Symbol',
      'console',
      'window',
      'document',
      'Map',
      'Set',
      'WeakMap',
      'WeakSet',
      'parseInt',
      'parseFloat',
      'isNaN',
      'isFinite',
      'decodeURI',
      'encodeURI',
      'setTimeout',
      'setInterval',
      'clearTimeout',
      'clearInterval',
      'fetch',
      'alert',
      'confirm',
      'prompt',
    ],
    operators: /[+\-*/%=<>!&|^~?:]+/,
    strings: /(['"`])(?:(?!\1)[^\\]|\\.)*?\1/,
    comments: { line: '//', block: ['/*', '*/'] },
    numbers:
      /\b(?:0x[\da-fA-F]+|0b[01]+|0o[0-7]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    functions: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/,
  },
  typescript: {
    keywords: [
      'abstract',
      'any',
      'as',
      'async',
      'await',
      'boolean',
      'break',
      'case',
      'catch',
      'class',
      'const',
      'constructor',
      'continue',
      'debugger',
      'declare',
      'default',
      'delete',
      'do',
      'else',
      'enum',
      'export',
      'extends',
      'false',
      'finally',
      'for',
      'from',
      'function',
      'get',
      'if',
      'implements',
      'import',
      'in',
      'infer',
      'instanceof',
      'interface',
      'is',
      'keyof',
      'let',
      'module',
      'namespace',
      'never',
      'new',
      'null',
      'number',
      'object',
      'of',
      'override',
      'package',
      'private',
      'protected',
      'public',
      'readonly',
      'return',
      'set',
      'static',
      'string',
      'super',
      'switch',
      'symbol',
      'this',
      'throw',
      'true',
      'try',
      'type',
      'typeof',
      'undefined',
      'unique',
      'unknown',
      'var',
      'void',
      'while',
      'with',
      'yield',
    ],
    builtins: [
      'Array',
      'Boolean',
      'Date',
      'Error',
      'Function',
      'JSON',
      'Math',
      'Number',
      'Object',
      'Promise',
      'RegExp',
      'String',
      'Symbol',
      'console',
      'Map',
      'Set',
      'WeakMap',
      'WeakSet',
      'Partial',
      'Required',
      'Readonly',
      'Record',
      'Pick',
      'Omit',
      'Exclude',
      'Extract',
      'NonNullable',
      'ReturnType',
      'Parameters',
    ],
    operators: /[+\-*/%=<>!&|^~?:]+/,
    strings: /(['"`])(?:(?!\1)[^\\]|\\.)*?\1/,
    comments: { line: '//', block: ['/*', '*/'] },
    numbers:
      /\b(?:0x[\da-fA-F]+|0b[01]+|0o[0-7]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    functions: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/,
  },
  python: {
    keywords: [
      'and',
      'as',
      'assert',
      'async',
      'await',
      'break',
      'class',
      'continue',
      'def',
      'del',
      'elif',
      'else',
      'except',
      'False',
      'finally',
      'for',
      'from',
      'global',
      'if',
      'import',
      'in',
      'is',
      'lambda',
      'None',
      'nonlocal',
      'not',
      'or',
      'pass',
      'raise',
      'return',
      'True',
      'try',
      'while',
      'with',
      'yield',
    ],
    builtins: [
      'abs',
      'all',
      'any',
      'bin',
      'bool',
      'bytes',
      'callable',
      'chr',
      'dict',
      'dir',
      'divmod',
      'enumerate',
      'eval',
      'exec',
      'filter',
      'float',
      'format',
      'frozenset',
      'getattr',
      'globals',
      'hasattr',
      'hash',
      'help',
      'hex',
      'id',
      'input',
      'int',
      'isinstance',
      'issubclass',
      'iter',
      'len',
      'list',
      'locals',
      'map',
      'max',
      'min',
      'next',
      'object',
      'oct',
      'open',
      'ord',
      'pow',
      'print',
      'property',
      'range',
      'repr',
      'reversed',
      'round',
      'set',
      'setattr',
      'slice',
      'sorted',
      'staticmethod',
      'str',
      'sum',
      'super',
      'tuple',
      'type',
      'vars',
      'zip',
      '__import__',
    ],
    operators: /[+\-*/%=<>!&|^~@]+|:=/,
    strings:
      /(?:f|r|b|fr|rf|br|rb)?(['"])(?:(?!\1)[^\\]|\\.)*?\1|'''[\s\S]*?'''|"""[\s\S]*?"""/,
    comments: { line: '#' },
    numbers:
      /\b(?:0x[\da-fA-F]+|0b[01]+|0o[0-7]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?j?)\b/i,
    functions: /\b([a-zA-Z_][\w]*)\s*(?=\()/,
  },
  html: {
    keywords: [],
    operators: /=/,
    strings: /(['"])(?:(?!\1)[^\\]|\\.)*?\1/,
    comments: { block: ['<!--', '-->'] },
    numbers: /\b\d+\b/,
    special: [
      { pattern: /<\/?[\w-]+/g, type: 'tag' },
      { pattern: /[\w-]+(?=\s*=)/g, type: 'attribute' },
      { pattern: />/g, type: 'tag' },
      { pattern: /\/>/g, type: 'tag' },
    ],
  },
  css: {
    keywords: [
      'important',
      'inherit',
      'initial',
      'unset',
      'revert',
      'auto',
      'none',
    ],
    operators: /[+>~*]/,
    strings: /(['"])(?:(?!\1)[^\\]|\\.)*?\1/,
    comments: { block: ['/*', '*/'] },
    numbers: /\b\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|deg|s|ms)?\b/,
    special: [
      { pattern: /[.#][\w-]+/g, type: 'selector' },
      { pattern: /@[\w-]+/g, type: 'keyword' },
      { pattern: /[\w-]+(?=\s*:)/g, type: 'property' },
      { pattern: /#[\da-fA-F]{3,8}\b/g, type: 'number' },
    ],
  },
  json: {
    keywords: ['true', 'false', 'null'],
    operators: /:/,
    strings: /"(?:[^"\\]|\\.)*"/,
    comments: {},
    numbers: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    special: [{ pattern: /"[\w-]+"(?=\s*:)/g, type: 'property' }],
  },
  sql: {
    keywords: [
      'select',
      'from',
      'where',
      'and',
      'or',
      'not',
      'in',
      'like',
      'between',
      'is',
      'null',
      'order',
      'by',
      'asc',
      'desc',
      'limit',
      'offset',
      'insert',
      'into',
      'values',
      'update',
      'set',
      'delete',
      'create',
      'table',
      'alter',
      'drop',
      'index',
      'on',
      'join',
      'left',
      'right',
      'inner',
      'outer',
      'full',
      'cross',
      'union',
      'all',
      'distinct',
      'as',
      'case',
      'when',
      'then',
      'else',
      'end',
      'having',
      'group',
      'exists',
      'primary',
      'key',
      'foreign',
      'references',
      'constraint',
      'unique',
      'default',
      'check',
      'view',
      'trigger',
      'procedure',
      'function',
      'begin',
      'commit',
      'rollback',
      'transaction',
      'true',
      'false',
    ],
    builtins: [
      'count',
      'sum',
      'avg',
      'min',
      'max',
      'abs',
      'ceil',
      'floor',
      'round',
      'concat',
      'substring',
      'length',
      'upper',
      'lower',
      'trim',
      'coalesce',
      'nullif',
      'cast',
      'convert',
      'date',
      'time',
      'timestamp',
      'now',
      'year',
      'month',
      'day',
      'hour',
      'minute',
      'second',
    ],
    operators: /[+\-*/%=<>!&|]+/,
    strings: /(['"])(?:(?!\1)[^\\]|\\.)*?\1/,
    comments: { line: '--', block: ['/*', '*/'] },
    numbers: /\b\d+(?:\.\d+)?\b/,
    functions: /\b([a-zA-Z_][\w]*)\s*(?=\()/,
  },
  markdown: {
    keywords: [],
    operators: /(?:)/,
    strings: /(?:)/,
    comments: {},
    numbers: /(?:)/,
    special: [
      { pattern: /^#{1,6}\s.+$/gm, type: 'keyword' },
      { pattern: /\*\*[^*]+\*\*/g, type: 'keyword' },
      { pattern: /\*[^*]+\*/g, type: 'string' },
      { pattern: /`[^`]+`/g, type: 'function' },
      { pattern: /^\s*[-*+]\s/gm, type: 'punctuation' },
      { pattern: /^\s*\d+\.\s/gm, type: 'punctuation' },
      { pattern: /\[[^\]]+\]\([^)]+\)/g, type: 'string' },
      { pattern: /^>\s.+$/gm, type: 'comment' },
    ],
  },
  plaintext: {
    keywords: [],
    operators: /(?:)/,
    strings: /(?:)/,
    comments: {},
    numbers: /(?:)/,
  },
};

export function tokenize(code: string, language: CodeEditorLanguage): Token[] {
  const lang = LANGUAGES[language] || LANGUAGES['plaintext'];
  const tokens: Token[] = [];
  let remaining = code;

  while (remaining.length > 0) {
    let matched = false;

    // Skip whitespace
    const wsMatch = remaining.match(/^(\s+)/);
    if (wsMatch) {
      tokens.push({ type: 'plain', value: wsMatch[1] });
      remaining = remaining.slice(wsMatch[1].length);
      continue;
    }

    // Check for comments
    if (lang.comments.line && remaining.startsWith(lang.comments.line)) {
      const endIdx = remaining.indexOf('\n');
      const comment = endIdx === -1 ? remaining : remaining.slice(0, endIdx);
      tokens.push({ type: 'comment', value: comment });
      remaining = remaining.slice(comment.length);
      matched = true;
    } else if (
      lang.comments.block &&
      remaining.startsWith(lang.comments.block[0])
    ) {
      const endIdx = remaining.indexOf(
        lang.comments.block[1],
        lang.comments.block[0].length,
      );
      const comment =
        endIdx === -1
          ? remaining
          : remaining.slice(0, endIdx + lang.comments.block[1].length);
      tokens.push({ type: 'comment', value: comment });
      remaining = remaining.slice(comment.length);
      matched = true;
    }

    if (matched) continue;

    // Check for strings
    const stringMatch = remaining.match(
      new RegExp(`^${lang.strings.source}`, lang.strings.flags),
    );
    if (stringMatch) {
      tokens.push({ type: 'string', value: stringMatch[0] });
      remaining = remaining.slice(stringMatch[0].length);
      continue;
    }

    // Check for special patterns (language-specific)
    if (lang.special) {
      for (const { pattern, type } of lang.special) {
        const specialMatch = remaining.match(new RegExp(`^${pattern.source}`));
        if (specialMatch) {
          tokens.push({ type, value: specialMatch[0] });
          remaining = remaining.slice(specialMatch[0].length);
          matched = true;
          break;
        }
      }
      if (matched) continue;
    }

    // Check for numbers
    const numMatch = remaining.match(
      new RegExp(`^${lang.numbers.source}`, lang.numbers.flags),
    );
    if (numMatch) {
      tokens.push({ type: 'number', value: numMatch[0] });
      remaining = remaining.slice(numMatch[0].length);
      continue;
    }

    // Check for functions
    if (lang.functions) {
      const funcMatch = remaining.match(
        new RegExp(`^${lang.functions.source}`),
      );
      if (funcMatch) {
        tokens.push({ type: 'function', value: funcMatch[1] });
        remaining = remaining.slice(funcMatch[1].length);
        continue;
      }
    }

    // Check for identifiers (keywords, builtins, or plain)
    const identMatch = remaining.match(/^[a-zA-Z_$][\w$]*/);
    if (identMatch) {
      const word = identMatch[0];
      let type: TokenType = 'plain';

      if (
        lang.keywords.includes(word) ||
        lang.keywords.includes(word.toLowerCase())
      ) {
        type = 'keyword';
      } else if (lang.builtins?.includes(word)) {
        type = 'builtin';
      }

      tokens.push({ type, value: word });
      remaining = remaining.slice(word.length);
      continue;
    }

    // Check for operators
    const opMatch = remaining.match(new RegExp(`^${lang.operators.source}`));
    if (opMatch) {
      tokens.push({ type: 'operator', value: opMatch[0] });
      remaining = remaining.slice(opMatch[0].length);
      continue;
    }

    // Check for punctuation
    const punctMatch = remaining.match(/^[{}[\]();,.<>]/);
    if (punctMatch) {
      tokens.push({ type: 'punctuation', value: punctMatch[0] });
      remaining = remaining.slice(punctMatch[0].length);
      continue;
    }

    // Default: single character as plain
    tokens.push({ type: 'plain', value: remaining[0] });
    remaining = remaining.slice(1);
  }

  return tokens;
}

export function highlightCode(
  code: string,
  language: CodeEditorLanguage,
): string {
  const tokens = tokenize(code, language);
  return tokens
    .map((token) => {
      const escaped = escapeHtml(token.value);
      if (token.type === 'plain') {
        return escaped;
      }
      return `<span class="token-${token.type}">${escaped}</span>`;
    })
    .join('');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function detectLanguage(
  code: string,
  filename?: string,
): CodeEditorLanguage {
  if (filename) {
    const ext = filename.split('.').pop()?.toLowerCase();
    const extMap: Record<string, CodeEditorLanguage> = {
      js: 'javascript',
      mjs: 'javascript',
      cjs: 'javascript',
      jsx: 'javascript',
      ts: 'typescript',
      tsx: 'typescript',
      mts: 'typescript',
      cts: 'typescript',
      html: 'html',
      htm: 'html',
      css: 'css',
      scss: 'css',
      sass: 'css',
      less: 'css',
      json: 'json',
      py: 'python',
      pyw: 'python',
      sql: 'sql',
      md: 'markdown',
      markdown: 'markdown',
      txt: 'plaintext',
    };
    if (ext && extMap[ext]) {
      return extMap[ext];
    }
  }

  // Try to detect from content
  if (
    code.includes('<!DOCTYPE') ||
    code.includes('<html') ||
    /<\w+[^>]*>/.test(code)
  ) {
    return 'html';
  }
  if (/^\s*\{[\s\S]*\}\s*$/.test(code) || /^\s*\[[\s\S]*\]\s*$/.test(code)) {
    try {
      JSON.parse(code);
      return 'json';
    } catch {
      // Not JSON
    }
  }
  if (/^(import|export|const|let|var|function|class)\s/.test(code)) {
    if (
      /:\s*(string|number|boolean|any|void|never)\b/.test(code) ||
      /interface\s+\w+/.test(code)
    ) {
      return 'typescript';
    }
    return 'javascript';
  }
  if (
    /^(def|class|import|from|if __name__)\s/.test(code) ||
    /:\s*$/.test(code.split('\n')[0])
  ) {
    return 'python';
  }
  if (/^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP)\s/i.test(code)) {
    return 'sql';
  }
  if (/^#\s/.test(code) || /^\*\*.*\*\*$/.test(code)) {
    return 'markdown';
  }

  return 'plaintext';
}
