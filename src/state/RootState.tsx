import {action, computed, observable} from 'mobx';
class RootStore {
  @observable name: string = 'Dave';
  @observable email: string = '';
  @observable isLogin: boolean = false;
  @observable images: any = [] 

  @action setName(name: string) {
    this.name = name;
  }

  @action setEmail(email: string) {
    this.email = email;
  }
  @action setIsLogin(isLogin: boolean) {
    this.isLogin = isLogin;
  }
  @action setImages(arr: []) {
    this.images = arr;
  }

  @computed get userName(): string {
    return this.name;
  }

  @computed get userIsLogin(): boolean {
    return this.isLogin;
  }

  @computed get userEmail(): string {
    return this.email;
  }
  @computed get userImages() {
    return this.images;
  }
}

const rootStore = new RootStore();
export default rootStore;
