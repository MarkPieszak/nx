export interface Schema {
  name: string;
  directory: string;
  npmScope?: string;
  prefix?: string;
  style?: string;
  minimal?: boolean;
  skipInstall?: boolean;
  commit?: { name: string, email: string, message?: string };
  skipGit?: boolean;
  sourceDir?: string;
  path?: string;
  inlineStyle?: boolean;
  inlineTemplate?: boolean;
  /**
   * Generates a routing module.
   */
  routing?: boolean;
  /**
   * The prefix to apply to generated selectors.
   */
  prefix?: string;
  /**
   * The file extension to be used for style files.
   */
  style?: string;
  /**
   * Skip creating spec files.
   */
  skipTests?: boolean;
  /**
   * Skip installing dependency packages.
   */
  skipInstall?: boolean;
  /**
   * Link CLI to global version (internal development only).
   */
  linkCli?: boolean;
  /**
   * Skip initializing a git repository.
   */
  skipGit?: boolean;
  /**
   * Initial repository commit information.
   */
  commit?: { name: string, email: string, message?: string };
  /**
   * Create a minimal app (no test structure, inline styles/templates).
   */
  minimal?: boolean;
  /**
   * Installs the @angular/service-worker.
   */
  serviceWorker?: boolean;
  /**
   * Specifies the view encapsulation strategy.
   */
  viewEncapsulation?: ('Emulated' | 'Native' | 'None');
  /**
   * The version of the Angular CLI to use.
   */
  version?: string;
}
