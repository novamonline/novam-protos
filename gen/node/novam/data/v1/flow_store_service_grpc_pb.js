// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_data_v1_flow_store_service_pb = require('../../../novam/data/v1/flow_store_service_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');
var novam_entities_v1_flow_definition_pb = require('../../../novam/entities/v1/flow_definition_pb.js');
var novam_entities_v1_flow_state_pb = require('../../../novam/entities/v1/flow_state_pb.js');

function serialize_novam_data_v1_GetFlowDefinitionRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.GetFlowDefinitionRequest)) {
    throw new Error('Expected argument of type novam.data.v1.GetFlowDefinitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetFlowDefinitionRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.GetFlowDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetFlowDefinitionResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.GetFlowDefinitionResponse)) {
    throw new Error('Expected argument of type novam.data.v1.GetFlowDefinitionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetFlowDefinitionResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.GetFlowDefinitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetFlowInstanceRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.GetFlowInstanceRequest)) {
    throw new Error('Expected argument of type novam.data.v1.GetFlowInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetFlowInstanceRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.GetFlowInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetFlowInstanceResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.GetFlowInstanceResponse)) {
    throw new Error('Expected argument of type novam.data.v1.GetFlowInstanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetFlowInstanceResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.GetFlowInstanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetFlowStateRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.GetFlowStateRequest)) {
    throw new Error('Expected argument of type novam.data.v1.GetFlowStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetFlowStateRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.GetFlowStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetFlowStateResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.GetFlowStateResponse)) {
    throw new Error('Expected argument of type novam.data.v1.GetFlowStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetFlowStateResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.GetFlowStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_SaveFlowInstanceRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.SaveFlowInstanceRequest)) {
    throw new Error('Expected argument of type novam.data.v1.SaveFlowInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_SaveFlowInstanceRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.SaveFlowInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_SaveFlowInstanceResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.SaveFlowInstanceResponse)) {
    throw new Error('Expected argument of type novam.data.v1.SaveFlowInstanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_SaveFlowInstanceResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.SaveFlowInstanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_SaveFlowStateRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.SaveFlowStateRequest)) {
    throw new Error('Expected argument of type novam.data.v1.SaveFlowStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_SaveFlowStateRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.SaveFlowStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_SaveFlowStateResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.SaveFlowStateResponse)) {
    throw new Error('Expected argument of type novam.data.v1.SaveFlowStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_SaveFlowStateResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.SaveFlowStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// FlowStoreService is the storage novam-data provides to the services that run flows. novam-data owns
// the data; novam-engine keeps none and calls this to load definitions and save run progress, with its own
// credential (`authorization: Bearer <token>` metadata, a client-credentials token from novam-data's
// /oauth/token). Every call is scoped to `metadata.tenant_context.org_id`.
var FlowStoreServiceService = exports.FlowStoreServiceService = {
  // A flow definition with its nodes and edges, as the engine runs it.
getFlowDefinition: {
    path: '/novam.data.v1.FlowStoreService/GetFlowDefinition',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.GetFlowDefinitionRequest,
    responseType: novam_data_v1_flow_store_service_pb.GetFlowDefinitionResponse,
    requestSerialize: serialize_novam_data_v1_GetFlowDefinitionRequest,
    requestDeserialize: deserialize_novam_data_v1_GetFlowDefinitionRequest,
    responseSerialize: serialize_novam_data_v1_GetFlowDefinitionResponse,
    responseDeserialize: deserialize_novam_data_v1_GetFlowDefinitionResponse,
  },
  // A run (flow instance): status, current node, variables, timing.
getFlowInstance: {
    path: '/novam.data.v1.FlowStoreService/GetFlowInstance',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.GetFlowInstanceRequest,
    responseType: novam_data_v1_flow_store_service_pb.GetFlowInstanceResponse,
    requestSerialize: serialize_novam_data_v1_GetFlowInstanceRequest,
    requestDeserialize: deserialize_novam_data_v1_GetFlowInstanceRequest,
    responseSerialize: serialize_novam_data_v1_GetFlowInstanceResponse,
    responseDeserialize: deserialize_novam_data_v1_GetFlowInstanceResponse,
  },
  // Creates or replaces a run. Saving the same update twice is harmless.
saveFlowInstance: {
    path: '/novam.data.v1.FlowStoreService/SaveFlowInstance',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.SaveFlowInstanceRequest,
    responseType: novam_data_v1_flow_store_service_pb.SaveFlowInstanceResponse,
    requestSerialize: serialize_novam_data_v1_SaveFlowInstanceRequest,
    requestDeserialize: deserialize_novam_data_v1_SaveFlowInstanceRequest,
    responseSerialize: serialize_novam_data_v1_SaveFlowInstanceResponse,
    responseDeserialize: deserialize_novam_data_v1_SaveFlowInstanceResponse,
  },
  // A run's process state: envelope and context.
getFlowState: {
    path: '/novam.data.v1.FlowStoreService/GetFlowState',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.GetFlowStateRequest,
    responseType: novam_data_v1_flow_store_service_pb.GetFlowStateResponse,
    requestSerialize: serialize_novam_data_v1_GetFlowStateRequest,
    requestDeserialize: deserialize_novam_data_v1_GetFlowStateRequest,
    responseSerialize: serialize_novam_data_v1_GetFlowStateResponse,
    responseDeserialize: deserialize_novam_data_v1_GetFlowStateResponse,
  },
  // Creates or replaces a run's process state. Saving the same update twice is harmless.
saveFlowState: {
    path: '/novam.data.v1.FlowStoreService/SaveFlowState',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.SaveFlowStateRequest,
    responseType: novam_data_v1_flow_store_service_pb.SaveFlowStateResponse,
    requestSerialize: serialize_novam_data_v1_SaveFlowStateRequest,
    requestDeserialize: deserialize_novam_data_v1_SaveFlowStateRequest,
    responseSerialize: serialize_novam_data_v1_SaveFlowStateResponse,
    responseDeserialize: deserialize_novam_data_v1_SaveFlowStateResponse,
  },
};

exports.FlowStoreServiceClient = grpc.makeGenericClientConstructor(FlowStoreServiceService, 'FlowStoreService');
