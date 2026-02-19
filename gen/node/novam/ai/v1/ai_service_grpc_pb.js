// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_ai_v1_ai_service_pb = require('../../../novam/ai/v1/ai_service_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');
var novam_entities_v1_ai_pb = require('../../../novam/entities/v1/ai_pb.js');

function serialize_novam_ai_v1_ChatRequest(arg) {
  if (!(arg instanceof novam_ai_v1_ai_service_pb.ChatRequest)) {
    throw new Error('Expected argument of type novam.ai.v1.ChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_ai_v1_ChatRequest(buffer_arg) {
  return novam_ai_v1_ai_service_pb.ChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_ai_v1_ChatResponse(arg) {
  if (!(arg instanceof novam_ai_v1_ai_service_pb.ChatResponse)) {
    throw new Error('Expected argument of type novam.ai.v1.ChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_ai_v1_ChatResponse(buffer_arg) {
  return novam_ai_v1_ai_service_pb.ChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_ai_v1_SummarizeRequest(arg) {
  if (!(arg instanceof novam_ai_v1_ai_service_pb.SummarizeRequest)) {
    throw new Error('Expected argument of type novam.ai.v1.SummarizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_ai_v1_SummarizeRequest(buffer_arg) {
  return novam_ai_v1_ai_service_pb.SummarizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_ai_v1_SummarizeResponse(arg) {
  if (!(arg instanceof novam_ai_v1_ai_service_pb.SummarizeResponse)) {
    throw new Error('Expected argument of type novam.ai.v1.SummarizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_ai_v1_SummarizeResponse(buffer_arg) {
  return novam_ai_v1_ai_service_pb.SummarizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// AIService provides chat and summarization.
var AIServiceService = exports.AIServiceService = {
  chat: {
    path: '/novam.ai.v1.AIService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: novam_ai_v1_ai_service_pb.ChatRequest,
    responseType: novam_ai_v1_ai_service_pb.ChatResponse,
    requestSerialize: serialize_novam_ai_v1_ChatRequest,
    requestDeserialize: deserialize_novam_ai_v1_ChatRequest,
    responseSerialize: serialize_novam_ai_v1_ChatResponse,
    responseDeserialize: deserialize_novam_ai_v1_ChatResponse,
  },
  summarize: {
    path: '/novam.ai.v1.AIService/Summarize',
    requestStream: false,
    responseStream: false,
    requestType: novam_ai_v1_ai_service_pb.SummarizeRequest,
    responseType: novam_ai_v1_ai_service_pb.SummarizeResponse,
    requestSerialize: serialize_novam_ai_v1_SummarizeRequest,
    requestDeserialize: deserialize_novam_ai_v1_SummarizeRequest,
    responseSerialize: serialize_novam_ai_v1_SummarizeResponse,
    responseDeserialize: deserialize_novam_ai_v1_SummarizeResponse,
  },
};

exports.AIServiceClient = grpc.makeGenericClientConstructor(AIServiceService, 'AIService');
