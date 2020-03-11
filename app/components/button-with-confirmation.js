import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ButtonWithConfirmationComponent extends Component {
  @tracked isConfirming = false;

  @action
  launchConfirmationDialog() {
    this.isConfirming = true;
  }

  @action
  async submitConfirm() {
    if (this.args.onConfirm) {
      await this.args.onConfirm(this.confirmValue);
    }

    this.isConfirming = false;
  }

  @action
  cancelConfirm() {
    this.isConfirming = false;
  }
}
