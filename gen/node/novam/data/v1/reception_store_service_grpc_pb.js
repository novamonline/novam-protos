// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_data_v1_reception_store_service_pb = require('../../../novam/data/v1/reception_store_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');

function serialize_novam_data_v1_AddCallTurnRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.AddCallTurnRequest)) {
    throw new Error('Expected argument of type novam.data.v1.AddCallTurnRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_AddCallTurnRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.AddCallTurnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_AddCallTurnResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.AddCallTurnResponse)) {
    throw new Error('Expected argument of type novam.data.v1.AddCallTurnResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_AddCallTurnResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.AddCallTurnResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_EndCallRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.EndCallRequest)) {
    throw new Error('Expected argument of type novam.data.v1.EndCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_EndCallRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.EndCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_EndCallResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.EndCallResponse)) {
    throw new Error('Expected argument of type novam.data.v1.EndCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_EndCallResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.EndCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetBusinessRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.GetBusinessRequest)) {
    throw new Error('Expected argument of type novam.data.v1.GetBusinessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetBusinessRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.GetBusinessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetBusinessResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.GetBusinessResponse)) {
    throw new Error('Expected argument of type novam.data.v1.GetBusinessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetBusinessResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.GetBusinessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_HandOffRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.HandOffRequest)) {
    throw new Error('Expected argument of type novam.data.v1.HandOffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_HandOffRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.HandOffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_HandOffResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.HandOffResponse)) {
    throw new Error('Expected argument of type novam.data.v1.HandOffResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_HandOffResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.HandOffResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_HoldTimeRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.HoldTimeRequest)) {
    throw new Error('Expected argument of type novam.data.v1.HoldTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_HoldTimeRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.HoldTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_HoldTimeResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.HoldTimeResponse)) {
    throw new Error('Expected argument of type novam.data.v1.HoldTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_HoldTimeResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.HoldTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListClientVisitsRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.ListClientVisitsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListClientVisitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListClientVisitsRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.ListClientVisitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListClientVisitsResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.ListClientVisitsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListClientVisitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListClientVisitsResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.ListClientVisitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListOpenTimesRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.ListOpenTimesRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListOpenTimesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListOpenTimesRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.ListOpenTimesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListOpenTimesResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.ListOpenTimesResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListOpenTimesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListOpenTimesResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.ListOpenTimesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_SaveContactRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.SaveContactRequest)) {
    throw new Error('Expected argument of type novam.data.v1.SaveContactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_SaveContactRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.SaveContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_SaveContactResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.SaveContactResponse)) {
    throw new Error('Expected argument of type novam.data.v1.SaveContactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_SaveContactResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.SaveContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_StartCallRequest(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.StartCallRequest)) {
    throw new Error('Expected argument of type novam.data.v1.StartCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_StartCallRequest(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.StartCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_StartCallResponse(arg) {
  if (!(arg instanceof novam_data_v1_reception_store_service_pb.StartCallResponse)) {
    throw new Error('Expected argument of type novam.data.v1.StartCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_StartCallResponse(buffer_arg) {
  return novam_data_v1_reception_store_service_pb.StartCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ReceptionStoreService is what the Reception agent may do while it chats with a business's visitor: read the
// business's services and hours, find open times, hold one on the chat's Front Desk thread, note the visitor's
// contact details and pass the chat to the owner. Every call is about one thread, `thread_id`, scoped to
// `metadata.tenant_context.org_id`; nothing here books, charges or reads other clients. Called with the
// engine's credential, like BusinessStoreService.
var ReceptionStoreServiceService = exports.ReceptionStoreServiceService = {
  getBusiness: {
    path: '/novam.data.v1.ReceptionStoreService/GetBusiness',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.GetBusinessRequest,
    responseType: novam_data_v1_reception_store_service_pb.GetBusinessResponse,
    requestSerialize: serialize_novam_data_v1_GetBusinessRequest,
    requestDeserialize: deserialize_novam_data_v1_GetBusinessRequest,
    responseSerialize: serialize_novam_data_v1_GetBusinessResponse,
    responseDeserialize: deserialize_novam_data_v1_GetBusinessResponse,
  },
  // Free times from the business's hours, leaving out appointments and times other chats hold.
listOpenTimes: {
    path: '/novam.data.v1.ReceptionStoreService/ListOpenTimes',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.ListOpenTimesRequest,
    responseType: novam_data_v1_reception_store_service_pb.ListOpenTimesResponse,
    requestSerialize: serialize_novam_data_v1_ListOpenTimesRequest,
    requestDeserialize: deserialize_novam_data_v1_ListOpenTimesRequest,
    responseSerialize: serialize_novam_data_v1_ListOpenTimesResponse,
    responseDeserialize: deserialize_novam_data_v1_ListOpenTimesResponse,
  },
  // Holds an open time on the thread for the owner to confirm; a later hold replaces it.
holdTime: {
    path: '/novam.data.v1.ReceptionStoreService/HoldTime',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.HoldTimeRequest,
    responseType: novam_data_v1_reception_store_service_pb.HoldTimeResponse,
    requestSerialize: serialize_novam_data_v1_HoldTimeRequest,
    requestDeserialize: deserialize_novam_data_v1_HoldTimeRequest,
    responseSerialize: serialize_novam_data_v1_HoldTimeResponse,
    responseDeserialize: deserialize_novam_data_v1_HoldTimeResponse,
  },
  saveContact: {
    path: '/novam.data.v1.ReceptionStoreService/SaveContact',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.SaveContactRequest,
    responseType: novam_data_v1_reception_store_service_pb.SaveContactResponse,
    requestSerialize: serialize_novam_data_v1_SaveContactRequest,
    requestDeserialize: deserialize_novam_data_v1_SaveContactRequest,
    responseSerialize: serialize_novam_data_v1_SaveContactResponse,
    responseDeserialize: deserialize_novam_data_v1_SaveContactResponse,
  },
  // Passes the chat to the owner with a summary; the thread then waits for them in Front Desk.
handOff: {
    path: '/novam.data.v1.ReceptionStoreService/HandOff',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.HandOffRequest,
    responseType: novam_data_v1_reception_store_service_pb.HandOffResponse,
    requestSerialize: serialize_novam_data_v1_HandOffRequest,
    requestDeserialize: deserialize_novam_data_v1_HandOffRequest,
    responseSerialize: serialize_novam_data_v1_HandOffResponse,
    responseDeserialize: deserialize_novam_data_v1_HandOffResponse,
  },
  // The chat's own client's upcoming visits, what they owe, their stamp card and the codes they saved. Empty for a
// visitor who isn't signed in, so the agent can never read another client's records.
listClientVisits: {
    path: '/novam.data.v1.ReceptionStoreService/ListClientVisits',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.ListClientVisitsRequest,
    responseType: novam_data_v1_reception_store_service_pb.ListClientVisitsResponse,
    requestSerialize: serialize_novam_data_v1_ListClientVisitsRequest,
    requestDeserialize: deserialize_novam_data_v1_ListClientVisitsRequest,
    responseSerialize: serialize_novam_data_v1_ListClientVisitsResponse,
    responseDeserialize: deserialize_novam_data_v1_ListClientVisitsResponse,
  },
  // Phone calls. When nobody answers the business number, novam-data connects the caller's audio to the engine
// with a one-time token; the engine trades it here for the call's thread and how to answer. The token works
// once and only for a few minutes, so a replayed stream gets nothing.
startCall: {
    path: '/novam.data.v1.ReceptionStoreService/StartCall',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.StartCallRequest,
    responseType: novam_data_v1_reception_store_service_pb.StartCallResponse,
    requestSerialize: serialize_novam_data_v1_StartCallRequest,
    requestDeserialize: deserialize_novam_data_v1_StartCallRequest,
    responseSerialize: serialize_novam_data_v1_StartCallResponse,
    responseDeserialize: deserialize_novam_data_v1_StartCallResponse,
  },
  // One finished turn of the call's transcript, written to its thread as it happens.
addCallTurn: {
    path: '/novam.data.v1.ReceptionStoreService/AddCallTurn',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.AddCallTurnRequest,
    responseType: novam_data_v1_reception_store_service_pb.AddCallTurnResponse,
    requestSerialize: serialize_novam_data_v1_AddCallTurnRequest,
    requestDeserialize: deserialize_novam_data_v1_AddCallTurnRequest,
    responseSerialize: serialize_novam_data_v1_AddCallTurnResponse,
    responseDeserialize: deserialize_novam_data_v1_AddCallTurnResponse,
  },
  // The call ended: how long the agent talked, which counts toward the plan's agent minutes.
endCall: {
    path: '/novam.data.v1.ReceptionStoreService/EndCall',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_reception_store_service_pb.EndCallRequest,
    responseType: novam_data_v1_reception_store_service_pb.EndCallResponse,
    requestSerialize: serialize_novam_data_v1_EndCallRequest,
    requestDeserialize: deserialize_novam_data_v1_EndCallRequest,
    responseSerialize: serialize_novam_data_v1_EndCallResponse,
    responseDeserialize: deserialize_novam_data_v1_EndCallResponse,
  },
};

exports.ReceptionStoreServiceClient = grpc.makeGenericClientConstructor(ReceptionStoreServiceService, 'ReceptionStoreService');
