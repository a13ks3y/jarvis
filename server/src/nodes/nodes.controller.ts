import { Controller, Get, Req } from '@nestjs/common';
import { NodeInfo } from '../../shared/nodeInfo';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pubIp = require('ip-public');

@Controller('nodes')
export class NodesController {
  nodes: NodeInfo[] = [];
  @Get()
  async root(@Req() request) {
    const currentNode = await this.getCurrentNodeInfo();
    const requestNode = new NodeInfo(
      `REQ_NODE#${Math.floor(Math.random() * 10)}`,
      request.ip,
      request.ip,
    );
    this.createOrUpdateNodeInfo(currentNode);
    this.createOrUpdateNodeInfo(requestNode);
    return this.nodes;
  }

  async getCurrentNodeInfo(): Promise<NodeInfo> {
    // @todo: ipv4 is obtain by default, should it use ipv6 if ipv4 is failed for some reason?
    const internalIP = pubIp.getInternalIP();
    const externalIP = await pubIp.getExternalIP([], 6666);
    // @todo: get current version from package.json (how?)
    return {
      title: `NODE#${Math.floor(Math.random() * 10)}`, // @todo: get real device name
      internalIP,
      externalIP,
      NAT: internalIP !== externalIP,
    };
  }

  // @todo: use NodeInfo type from client? Move it (file) to the "shared" folder? Move it to server?
  createOrUpdateNodeInfo(nodeInfo: NodeInfo): NodeInfo {
    const nodeToUpdate = this.nodes.find((node: NodeInfo) => {
      return (
        node.internalIP === nodeInfo.internalIP &&
        node.externalIP === nodeInfo.externalIP
      );
    });
    if (nodeToUpdate) {
      Object.assign(nodeToUpdate, nodeInfo);
      return nodeToUpdate;
    } else {
      return this.nodes[this.nodes.push(nodeInfo) - 1];
    }
  }
}
