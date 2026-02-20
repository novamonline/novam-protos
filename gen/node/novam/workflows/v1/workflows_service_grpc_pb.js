// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_workflows_v1_workflows_service_pb = require('../../../novam/workflows/v1/workflows_service_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');
var novam_common_v1_pagination_pb = require('../../../novam/common/v1/pagination_pb.js');
var novam_entities_v1_flow_definition_pb = require('../../../novam/entities/v1/flow_definition_pb.js');
var novam_entities_v1_flow_node_pb = require('../../../novam/entities/v1/flow_node_pb.js');
var novam_entities_v1_flow_ui_data_pb = require('../../../novam/entities/v1/flow_ui_data_pb.js');
var novam_entities_v1_workflow_run_pb = require('../../../novam/entities/v1/workflow_run_pb.js');

function serialize_novam_workflows_v1_CancelRunRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.CancelRunRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.CancelRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_CancelRunRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.CancelRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_CancelRunResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.CancelRunResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.CancelRunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_CancelRunResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.CancelRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_CreateFlowDefinitionRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.CreateFlowDefinitionRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.CreateFlowDefinitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_CreateFlowDefinitionRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.CreateFlowDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_CreateFlowDefinitionResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.CreateFlowDefinitionResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.CreateFlowDefinitionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_CreateFlowDefinitionResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.CreateFlowDefinitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_DeleteFlowDefinitionRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.DeleteFlowDefinitionRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.DeleteFlowDefinitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_DeleteFlowDefinitionRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.DeleteFlowDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_DeleteFlowDefinitionResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.DeleteFlowDefinitionResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.DeleteFlowDefinitionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_DeleteFlowDefinitionResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.DeleteFlowDefinitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_GetFlowDefinitionRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.GetFlowDefinitionRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.GetFlowDefinitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_GetFlowDefinitionRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.GetFlowDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_GetFlowDefinitionResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.GetFlowDefinitionResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.GetFlowDefinitionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_GetFlowDefinitionResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.GetFlowDefinitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_GetFlowUIDataRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.GetFlowUIDataRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.GetFlowUIDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_GetFlowUIDataRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.GetFlowUIDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_GetFlowUIDataResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.GetFlowUIDataResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.GetFlowUIDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_GetFlowUIDataResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.GetFlowUIDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_GetRunRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.GetRunRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.GetRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_GetRunRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.GetRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_GetRunResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.GetRunResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.GetRunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_GetRunResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.GetRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_ListFlowDefinitionsRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.ListFlowDefinitionsRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.ListFlowDefinitionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_ListFlowDefinitionsRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.ListFlowDefinitionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_ListFlowDefinitionsResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.ListFlowDefinitionsResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.ListFlowDefinitionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_ListFlowDefinitionsResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.ListFlowDefinitionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_ListFlowNodesRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.ListFlowNodesRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.ListFlowNodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_ListFlowNodesRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.ListFlowNodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_ListFlowNodesResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.ListFlowNodesResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.ListFlowNodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_ListFlowNodesResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.ListFlowNodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_SetFlowUIDataRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.SetFlowUIDataRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.SetFlowUIDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_SetFlowUIDataRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.SetFlowUIDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_SetFlowUIDataResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.SetFlowUIDataResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.SetFlowUIDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_SetFlowUIDataResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.SetFlowUIDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_StartRunRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.StartRunRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.StartRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_StartRunRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.StartRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_StartRunResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.StartRunResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.StartRunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_StartRunResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.StartRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_UpdateFlowDefinitionRequest(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.UpdateFlowDefinitionRequest)) {
    throw new Error('Expected argument of type novam.workflows.v1.UpdateFlowDefinitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_UpdateFlowDefinitionRequest(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.UpdateFlowDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_workflows_v1_UpdateFlowDefinitionResponse(arg) {
  if (!(arg instanceof novam_workflows_v1_workflows_service_pb.UpdateFlowDefinitionResponse)) {
    throw new Error('Expected argument of type novam.workflows.v1.UpdateFlowDefinitionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_workflows_v1_UpdateFlowDefinitionResponse(buffer_arg) {
  return novam_workflows_v1_workflows_service_pb.UpdateFlowDefinitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// WorkflowsService manages flow definitions, UI data, catalog nodes, and workflow runs.
var WorkflowsServiceService = exports.WorkflowsServiceService = {
  // Flow definition CRUD
getFlowDefinition: {
    path: '/novam.workflows.v1.WorkflowsService/GetFlowDefinition',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.GetFlowDefinitionRequest,
    responseType: novam_workflows_v1_workflows_service_pb.GetFlowDefinitionResponse,
    requestSerialize: serialize_novam_workflows_v1_GetFlowDefinitionRequest,
    requestDeserialize: deserialize_novam_workflows_v1_GetFlowDefinitionRequest,
    responseSerialize: serialize_novam_workflows_v1_GetFlowDefinitionResponse,
    responseDeserialize: deserialize_novam_workflows_v1_GetFlowDefinitionResponse,
  },
  listFlowDefinitions: {
    path: '/novam.workflows.v1.WorkflowsService/ListFlowDefinitions',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.ListFlowDefinitionsRequest,
    responseType: novam_workflows_v1_workflows_service_pb.ListFlowDefinitionsResponse,
    requestSerialize: serialize_novam_workflows_v1_ListFlowDefinitionsRequest,
    requestDeserialize: deserialize_novam_workflows_v1_ListFlowDefinitionsRequest,
    responseSerialize: serialize_novam_workflows_v1_ListFlowDefinitionsResponse,
    responseDeserialize: deserialize_novam_workflows_v1_ListFlowDefinitionsResponse,
  },
  createFlowDefinition: {
    path: '/novam.workflows.v1.WorkflowsService/CreateFlowDefinition',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.CreateFlowDefinitionRequest,
    responseType: novam_workflows_v1_workflows_service_pb.CreateFlowDefinitionResponse,
    requestSerialize: serialize_novam_workflows_v1_CreateFlowDefinitionRequest,
    requestDeserialize: deserialize_novam_workflows_v1_CreateFlowDefinitionRequest,
    responseSerialize: serialize_novam_workflows_v1_CreateFlowDefinitionResponse,
    responseDeserialize: deserialize_novam_workflows_v1_CreateFlowDefinitionResponse,
  },
  updateFlowDefinition: {
    path: '/novam.workflows.v1.WorkflowsService/UpdateFlowDefinition',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.UpdateFlowDefinitionRequest,
    responseType: novam_workflows_v1_workflows_service_pb.UpdateFlowDefinitionResponse,
    requestSerialize: serialize_novam_workflows_v1_UpdateFlowDefinitionRequest,
    requestDeserialize: deserialize_novam_workflows_v1_UpdateFlowDefinitionRequest,
    responseSerialize: serialize_novam_workflows_v1_UpdateFlowDefinitionResponse,
    responseDeserialize: deserialize_novam_workflows_v1_UpdateFlowDefinitionResponse,
  },
  deleteFlowDefinition: {
    path: '/novam.workflows.v1.WorkflowsService/DeleteFlowDefinition',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.DeleteFlowDefinitionRequest,
    responseType: novam_workflows_v1_workflows_service_pb.DeleteFlowDefinitionResponse,
    requestSerialize: serialize_novam_workflows_v1_DeleteFlowDefinitionRequest,
    requestDeserialize: deserialize_novam_workflows_v1_DeleteFlowDefinitionRequest,
    responseSerialize: serialize_novam_workflows_v1_DeleteFlowDefinitionResponse,
    responseDeserialize: deserialize_novam_workflows_v1_DeleteFlowDefinitionResponse,
  },
  // Flow UI data (React Flow state)
getFlowUIData: {
    path: '/novam.workflows.v1.WorkflowsService/GetFlowUIData',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.GetFlowUIDataRequest,
    responseType: novam_workflows_v1_workflows_service_pb.GetFlowUIDataResponse,
    requestSerialize: serialize_novam_workflows_v1_GetFlowUIDataRequest,
    requestDeserialize: deserialize_novam_workflows_v1_GetFlowUIDataRequest,
    responseSerialize: serialize_novam_workflows_v1_GetFlowUIDataResponse,
    responseDeserialize: deserialize_novam_workflows_v1_GetFlowUIDataResponse,
  },
  setFlowUIData: {
    path: '/novam.workflows.v1.WorkflowsService/SetFlowUIData',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.SetFlowUIDataRequest,
    responseType: novam_workflows_v1_workflows_service_pb.SetFlowUIDataResponse,
    requestSerialize: serialize_novam_workflows_v1_SetFlowUIDataRequest,
    requestDeserialize: deserialize_novam_workflows_v1_SetFlowUIDataRequest,
    responseSerialize: serialize_novam_workflows_v1_SetFlowUIDataResponse,
    responseDeserialize: deserialize_novam_workflows_v1_SetFlowUIDataResponse,
  },
  // Catalog of available node types
listFlowNodes: {
    path: '/novam.workflows.v1.WorkflowsService/ListFlowNodes',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.ListFlowNodesRequest,
    responseType: novam_workflows_v1_workflows_service_pb.ListFlowNodesResponse,
    requestSerialize: serialize_novam_workflows_v1_ListFlowNodesRequest,
    requestDeserialize: deserialize_novam_workflows_v1_ListFlowNodesRequest,
    responseSerialize: serialize_novam_workflows_v1_ListFlowNodesResponse,
    responseDeserialize: deserialize_novam_workflows_v1_ListFlowNodesResponse,
  },
  // Run lifecycle (workflow_id is flow_definition_id)
startRun: {
    path: '/novam.workflows.v1.WorkflowsService/StartRun',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.StartRunRequest,
    responseType: novam_workflows_v1_workflows_service_pb.StartRunResponse,
    requestSerialize: serialize_novam_workflows_v1_StartRunRequest,
    requestDeserialize: deserialize_novam_workflows_v1_StartRunRequest,
    responseSerialize: serialize_novam_workflows_v1_StartRunResponse,
    responseDeserialize: deserialize_novam_workflows_v1_StartRunResponse,
  },
  cancelRun: {
    path: '/novam.workflows.v1.WorkflowsService/CancelRun',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.CancelRunRequest,
    responseType: novam_workflows_v1_workflows_service_pb.CancelRunResponse,
    requestSerialize: serialize_novam_workflows_v1_CancelRunRequest,
    requestDeserialize: deserialize_novam_workflows_v1_CancelRunRequest,
    responseSerialize: serialize_novam_workflows_v1_CancelRunResponse,
    responseDeserialize: deserialize_novam_workflows_v1_CancelRunResponse,
  },
  getRun: {
    path: '/novam.workflows.v1.WorkflowsService/GetRun',
    requestStream: false,
    responseStream: false,
    requestType: novam_workflows_v1_workflows_service_pb.GetRunRequest,
    responseType: novam_workflows_v1_workflows_service_pb.GetRunResponse,
    requestSerialize: serialize_novam_workflows_v1_GetRunRequest,
    requestDeserialize: deserialize_novam_workflows_v1_GetRunRequest,
    responseSerialize: serialize_novam_workflows_v1_GetRunResponse,
    responseDeserialize: deserialize_novam_workflows_v1_GetRunResponse,
  },
};

exports.WorkflowsServiceClient = grpc.makeGenericClientConstructor(WorkflowsServiceService, 'WorkflowsService');
