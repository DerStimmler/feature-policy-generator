export class AllowList {
  type: AllowType;
  origins?: string[];

  constructor(type: AllowType, origins?: string[]) {
    this.type = type;
    this.origins = origins;
  }

  setNextType() {
    const allowTypeValues = Object.values(AllowType);

    const currentIndex = allowTypeValues.indexOf(this.type);

    if (currentIndex === allowTypeValues.length - 1) {
      this.type = allowTypeValues[0];
      return;
    }

    this.type = allowTypeValues[currentIndex + 1];
  }

  isOriginsEnabled(): boolean {
    return this.type === AllowType.SRC || this.type === AllowType.SELF;
  }
}

export enum AllowType {
  ALL = '*',
  NONE = 'none',
  SELF = 'self',
  SRC = 'src'
}

export class Feature {
  directive: string;
  allowList: AllowList;

  constructor(directive: string, allowList: AllowList) {
    this.directive = directive;
    this.allowList = allowList;
  }

  changeType() {
    this.allowList.setNextType();
  }

  exportAsFeature(): string {
    if (!this.allowList.isOriginsEnabled()) {
      return `${this.directive} '${this.allowList.type}'`;
    }

    if (!this.allowList.origins) {
      return `${this.directive} '${this.allowList.type}'`;
    }

    const origins = this.allowList.origins?.filter(x => x).join(' ');

    return `${this.directive} '${this.allowList.type}' ${origins}`;
  }

  exportAsPermission(): string {
    if (this.allowList.type === AllowType.NONE) {
      return `${this.directive}=()`;
    }

    if (!this.allowList.isOriginsEnabled()) {
      return `${this.directive}=(${this.allowList.type})`;
    }

    if (!this.allowList.origins) {
      return `${this.directive}=(${this.allowList.type})`;
    }

    const origins = this.allowList.origins
      ? this.allowList.origins
          ?.filter(x => x)
          .map(s => `"${s}"`)
          .join(' ')
      : '';

    return `${this.directive}=(${this.allowList.type} ${origins})`;
  }
}
