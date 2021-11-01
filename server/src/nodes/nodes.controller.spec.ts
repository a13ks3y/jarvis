import { Test, TestingModule } from '@nestjs/testing';
import { NodesController } from './nodes.controller';
import {NodeInfo} from "../../shared/nodeInfo";

describe('NodesController', () => {
  let controller: NodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodesController],
    }).compile();

    controller = module.get<NodesController>(NodesController);
  });

  it('should be defined and has initially empty list of nodes', () => {
    expect(controller).toBeDefined();
    expect(controller.nodes).toBeDefined();
    expect(controller.nodes.length).toEqual(0);
  });
  // @todo: obtain self-node info, test requests etc.
  it('should return current node-info', async () => {
    const nodeInfo = await controller.getCurrentNodeInfo();
    // @hack: @todo: how to not hardcode ip addresses?
    expect(nodeInfo.internalIP).toEqual('192.168.1.66');
    expect(nodeInfo.externalIP).toEqual('93.72.215.181');
  });
  it('should create or update node info, with no duplicates', () => {
    const nodeInfoA = { title: 'A', internalIP: 'a', externalIP: 'ea', NAT: true };
    const nodeInfoB = { title: 'B', internalIP: 'b', externalIP: 'eb', NAT: true };
    controller.createOrUpdateNodeInfo(nodeInfoA as NodeInfo);
    expect(controller.nodes.length).toEqual(1);
    expect(controller.nodes[0]).toEqual(nodeInfoA);
    controller.createOrUpdateNodeInfo(nodeInfoB as NodeInfo);
    expect(controller.nodes.length).toEqual(2);
    expect(controller.nodes[1]).toEqual(nodeInfoB);

    controller.createOrUpdateNodeInfo(nodeInfoB);
    expect(controller.nodes.length).toEqual(2);
    // @todo: test update some fields either
  });
});
