import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class SendMessageComponent extends Component {
  @action
  async sendMessage(messageType, messageText) {
    console.log(`Type: ${messageType} - text: ${messageText}`);
  }
}
