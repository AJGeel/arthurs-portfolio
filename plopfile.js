module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component called?",
      },
      {
        type: "confirm",
        name: "hasFolder",
        message: "Does your component reside in a subfolder?",
      },
      {
        type: "input",
        name: "folder",
        message: "What is your component's subfolder name?",
        when: (answers) => !!answers.hasFolder,
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components{{#if folder}}/{{folder}}{{/if}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "dev/templates/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{#if folder}}/{{folder}}{{/if}}/{{pascalCase name}}/index.ts",
        templateFile: "dev/templates/component/index.ts.hbs",
      },
    ],
  });

  plop.setGenerator("hook", {
    description: "Create a reusable React hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook's name?",
        filter: (value) =>
          value.startsWith("use")
            ? value
            : `use${value.charAt(0).toUpperCase()}${value.slice(1)}`,
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{ camelCase name }}.ts",
        templateFile: "dev/templates/hook/hook.ts.hbs",
      },
    ],
  });

  plop.setGenerator("util", {
    description: "Create a generic utility function",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your util function's name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/utils/{{ camelCase name }}.ts",
        templateFile: "dev/templates/util/util.ts.hbs",
      },
      {
        type: "add",
        path: "src/utils/index.ts",
        skipIfExists: true,
      },
      {
        type: "modify",
        path: "src/utils/index.ts",
        pattern: /([\s\S]*)/,
        template: "$1export * from './{{camelCase name}}';\n",
      },
    ],
  });
};
