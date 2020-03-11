import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class UserProfileComponent extends Component {
  @service login;

  @action
  deleteAccount() {
    this.login.deleteUser();
  }
}
