export class NodeInfo {
  static self: NodeInfo = new NodeInfo('__self', '0.0.0.0', '0.0.0.0');
  title: string;
  internalIP: string;
  externalIP: string;
  NAT: boolean;
  constructor(title, internalIP, externalIP) {
    this.title = title;
    this.internalIP = internalIP;
    this.externalIP = externalIP;
    this.NAT = this.internalIP !== this.externalIP;
  }
}
