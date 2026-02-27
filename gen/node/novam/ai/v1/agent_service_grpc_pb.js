// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_ai_v1_agent_service_pb = require('../../../novam/ai/v1/agent_service_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');
var novam_entities_v1_ai_pb = require('../../../novam/entities/v1/ai_pb.js');

function serialize_novam_ai_v1_SendMessageRequest(arg) {
  if (!(arg instanceof novam_ai_v1_agent_service_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type novam.ai.v1.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_ai_v1_SendMessageRequest(buffer_arg) {
  return novam_ai_v1_agent_service_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_ai_v1_SendMessageResponse(arg) {
  if (!(arg instanceof novam_ai_v1_agent_service_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type novam.ai.v1.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_ai_v1_SendMessageResponse(buffer_arg) {
  return novam_ai_v1_agent_service_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// AgentService provides ADK-backed agent messaging.
var AgentServiceService = exports.AgentServiceService = {
  sendMessage: {
    path: '/novam.ai.v1.AgentService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: novam_ai_v1_agent_service_pb.SendMessageRequest,
    responseType: novam_ai_v1_agent_service_pb.SendMessageResponse,
    requestSerialize: serialize_novam_ai_v1_SendMessageRequest,
    requestDeserialize: deserialize_novam_ai_v1_SendMessageRequest,
    responseSerialize: serialize_novam_ai_v1_SendMessageResponse,
    responseDeserialize: deserialize_novam_ai_v1_SendMessageResponse,
  },
};

exports.AgentServiceClient = grpc.makeGenericClientConstructor(AgentServiceService, 'AgentService');
