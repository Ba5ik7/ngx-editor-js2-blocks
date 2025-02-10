# Ngx-EditorJs2 Blocks

DEMO: [https://ba5ik7.github.io/ngx-editor-j](https://ba5ik7.github.io/ngx-editor-js2-blocks)

This repository contains custom blocks for [Ngx-EditorJs2](https://github.com/Ba5ik7/ngx-editorjs2). These blocks extend the editor with additional content types that can be used within the editor environment.

## Getting Started

### Installation, Building, and Running

To use the blocks in your project, clone the repository and install the dependencies:

```sh
# Clone the repo
git clone https://github.com/your-repo/ngx-editor-js2-blocks.git

# Navigate to the project directory
cd ngx-editor-js2-blocks

# Install dependencies
npm install

# Build All Libraries
npm run build-all-libraries

# Serve Demo Application
npm run watch-demo

# Visit localhost:4200
```

## Creating a Custom Block

To create a new block, implement the `BlockComponent` interface as shown below.

### BlockComponent Interface

Each block must implement the following interface:

```typescript
export interface BlockComponent {
  sortIndex: InputSignal<number>;
  componentInstanceName: string;
  formControlName: InputSignal<string>;
  formGroup: InputSignal<FormGroup>;
  blockOptionActions: InputSignal<BlockOptionAction[]>;
  savedAction: Signal<string>;
  actionCallback?: (action: string) => void;
}
```

### BlockComponent Properties

| Property              | Type                              | Description |
|-----------------------|---------------------------------|-------------|
| `sortIndex`          | `InputSignal<number>`           | The index position of the block within the editor. |
| `componentInstanceName` | `string`                   | The unique identifier for the block component. |
| `formControlName`     | `InputSignal<string>`          | The form control name for binding. |
| `formGroup`          | `InputSignal<FormGroup>`       | The form group containing this block. |
| `blockOptionActions` | `InputSignal<BlockOptionAction[]>` | A list of available block actions. |
| `savedAction`        | `Signal<string>`               | Stores the currently selected action. |
| `actionCallback`     | `(action: string) => void`     | Function to execute when an action is triggered. |

### BlockOptionAction Interface

Each block can have a set of toolbar options defined using `BlockOptionAction`. These define the actions available for formatting or customization.

```typescript
export interface BlockOptionAction {
  action: string;
  icon?: string;
  text?: string;
}
```

### Styling Considerations

For the toolbar floating action button (`toolbarFab`) to work correctly, add the following SCSS styles inside your block component’s `:host` selector:

```scss
:host {
  display: block;
  position: relative;
}
```

### Required Directives Explained

Your block component should include the following directives:

```html
<p
  controlAccessor
  contentEditable
  toolbarFab
  cleanPasteData
  [ngClass]="savedAction()"
  [defaultValue]="formGroup().get(formControlName())?.value"
  [actionCallback]="actionCallbackBind"
  [autofocus]="autofocus()"
  [blockOptionActions]="blockOptionActions()"
  [formControlName]="formControlName()"
  [componentContextPositionIndex]="sortIndex()"
></p>
```

#### Directive Breakdown
- **`controlAccessor`** → Provides reactive form control binding.
- **`contentEditable`** → Makes the block content editable.
- **`toolbarFab`** → Enables floating action toolbar behavior.
- **`cleanPasteData`** → Cleans up pasted content to remove unwanted formatting.
- **`[ngClass]`** → Binds styling based on the selected action.
- **`[defaultValue]`** → Sets the initial content from the form control.
- **`[actionCallback]`** → Registers the action handler.
- **`[autofocus]`** → Automatically focuses the block on creation.
- **`[blockOptionActions]`** → Passes available toolbar actions.
- **`[formControlName]`** → Links the component to the form field.
- **`[componentContextPositionIndex]`** → Keeps track of the block’s order.

## Usage

Once your block component is implemented, you can integrate it into Ngx-EditorJs2 by importing and registering it in the appropriate module.

```typescript
import { ParagraphBlockComponent } from './paragraph-block.component';

@NgModule({
  declarations: [ParagraphBlockComponent],
  exports: [ParagraphBlockComponent],
})
export class BlocksModule {}
```

## Contributing

Feel free to submit pull requests to enhance or add new block components.

## License

MIT License © 2025 [Wesley DuSell](https://github.com/ba5ik7)