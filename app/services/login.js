import Service from "@ember/service";
import { action } from "@ember/object";

export default class LoginService extends Service {
  @action
  deleteUser() {
    console.log("Service:// User was deleted!");
  }
}
