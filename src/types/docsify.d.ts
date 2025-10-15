declare global {
  interface Window {
    $docsify?: {
      vueComponents?: {
        [name: string]: any;
      };
      plugins?: any[];
    };
  }
}

export {};
