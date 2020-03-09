import Component from "@glimmer/component";

export default class DefaultArgumentsComponent extends Component {
  get title() {
    return this.args.title ?? "default-for-title";
  }

  get text() {
    return this.args.text ?? "default-for-text";
  }
}
