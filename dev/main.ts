import JSONSchemaEditor from '../src/index';

(globalThis as any).JSONSchemaEditor = JSONSchemaEditor;

const $app = document.querySelector<HTMLDivElement>('#app')!;
$app.innerHTML = `
  <h1>json-schema-editor (dev)</h1>
  <p>Открой консоль: доступно <code>JSONSchemaEditor</code> в globalThis.</p>
`;
console.log('JSONSchemaEditor:', JSONSchemaEditor);
