// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_data_v1_business_store_service_pb = require('../../../novam/data/v1/business_store_service_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');
var novam_events_v1_business_events_pb = require('../../../novam/events/v1/business_events_pb.js');

function serialize_novam_data_v1_CreateInvoiceRequest(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.CreateInvoiceRequest)) {
    throw new Error('Expected argument of type novam.data.v1.CreateInvoiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_CreateInvoiceRequest(buffer_arg) {
  return novam_data_v1_business_store_service_pb.CreateInvoiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_CreateInvoiceResponse(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.CreateInvoiceResponse)) {
    throw new Error('Expected argument of type novam.data.v1.CreateInvoiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_CreateInvoiceResponse(buffer_arg) {
  return novam_data_v1_business_store_service_pb.CreateInvoiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_CreateTaskRequest(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.CreateTaskRequest)) {
    throw new Error('Expected argument of type novam.data.v1.CreateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_CreateTaskRequest(buffer_arg) {
  return novam_data_v1_business_store_service_pb.CreateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_CreateTaskResponse(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.CreateTaskResponse)) {
    throw new Error('Expected argument of type novam.data.v1.CreateTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_CreateTaskResponse(buffer_arg) {
  return novam_data_v1_business_store_service_pb.CreateTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetRecordRequest(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.GetRecordRequest)) {
    throw new Error('Expected argument of type novam.data.v1.GetRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetRecordRequest(buffer_arg) {
  return novam_data_v1_business_store_service_pb.GetRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetRecordResponse(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.GetRecordResponse)) {
    throw new Error('Expected argument of type novam.data.v1.GetRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetRecordResponse(buffer_arg) {
  return novam_data_v1_business_store_service_pb.GetRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListRecordsRequest(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.ListRecordsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListRecordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListRecordsRequest(buffer_arg) {
  return novam_data_v1_business_store_service_pb.ListRecordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListRecordsResponse(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.ListRecordsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListRecordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListRecordsResponse(buffer_arg) {
  return novam_data_v1_business_store_service_pb.ListRecordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_UpdateRecordRequest(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.UpdateRecordRequest)) {
    throw new Error('Expected argument of type novam.data.v1.UpdateRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_UpdateRecordRequest(buffer_arg) {
  return novam_data_v1_business_store_service_pb.UpdateRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_UpdateRecordResponse(arg) {
  if (!(arg instanceof novam_data_v1_business_store_service_pb.UpdateRecordResponse)) {
    throw new Error('Expected argument of type novam.data.v1.UpdateRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_UpdateRecordResponse(buffer_arg) {
  return novam_data_v1_business_store_service_pb.UpdateRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// BusinessStoreService is how workflow steps read and change a business's records. novam-data owns the
// records and applies its own rules and permissions as `acting_user_id`; the engine keeps none. Called with
// the engine's credential (`authorization: Bearer <token>` metadata, a client-credentials token from
// novam-data's /oauth/token), scoped to `metadata.tenant_context.org_id`.
//
// Writes are made safe to repeat with `metadata.idempotency_key`: a second call with the same key returns the
// first call's result without changing anything, so a step retried after a crash never acts twice.
var BusinessStoreServiceService = exports.BusinessStoreServiceService = {
  // One record, as the REST API would return it.
getRecord: {
    path: '/novam.data.v1.BusinessStoreService/GetRecord',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_business_store_service_pb.GetRecordRequest,
    responseType: novam_data_v1_business_store_service_pb.GetRecordResponse,
    requestSerialize: serialize_novam_data_v1_GetRecordRequest,
    requestDeserialize: deserialize_novam_data_v1_GetRecordRequest,
    responseSerialize: serialize_novam_data_v1_GetRecordResponse,
    responseDeserialize: deserialize_novam_data_v1_GetRecordResponse,
  },
  // Records of one collection that match, newest first: for the assistant to look things up.
listRecords: {
    path: '/novam.data.v1.BusinessStoreService/ListRecords',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_business_store_service_pb.ListRecordsRequest,
    responseType: novam_data_v1_business_store_service_pb.ListRecordsResponse,
    requestSerialize: serialize_novam_data_v1_ListRecordsRequest,
    requestDeserialize: deserialize_novam_data_v1_ListRecordsRequest,
    responseSerialize: serialize_novam_data_v1_ListRecordsResponse,
    responseDeserialize: deserialize_novam_data_v1_ListRecordsResponse,
  },
  // Changes the given fields of one record. Fields the resource doesn't allow to change are INVALID_ARGUMENT.
updateRecord: {
    path: '/novam.data.v1.BusinessStoreService/UpdateRecord',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_business_store_service_pb.UpdateRecordRequest,
    responseType: novam_data_v1_business_store_service_pb.UpdateRecordResponse,
    requestSerialize: serialize_novam_data_v1_UpdateRecordRequest,
    requestDeserialize: deserialize_novam_data_v1_UpdateRecordRequest,
    responseSerialize: serialize_novam_data_v1_UpdateRecordResponse,
    responseDeserialize: deserialize_novam_data_v1_UpdateRecordResponse,
  },
  createTask: {
    path: '/novam.data.v1.BusinessStoreService/CreateTask',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_business_store_service_pb.CreateTaskRequest,
    responseType: novam_data_v1_business_store_service_pb.CreateTaskResponse,
    requestSerialize: serialize_novam_data_v1_CreateTaskRequest,
    requestDeserialize: deserialize_novam_data_v1_CreateTaskRequest,
    responseSerialize: serialize_novam_data_v1_CreateTaskResponse,
    responseDeserialize: deserialize_novam_data_v1_CreateTaskResponse,
  },
  createInvoice: {
    path: '/novam.data.v1.BusinessStoreService/CreateInvoice',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_business_store_service_pb.CreateInvoiceRequest,
    responseType: novam_data_v1_business_store_service_pb.CreateInvoiceResponse,
    requestSerialize: serialize_novam_data_v1_CreateInvoiceRequest,
    requestDeserialize: deserialize_novam_data_v1_CreateInvoiceRequest,
    responseSerialize: serialize_novam_data_v1_CreateInvoiceResponse,
    responseDeserialize: deserialize_novam_data_v1_CreateInvoiceResponse,
  },
};

exports.BusinessStoreServiceClient = grpc.makeGenericClientConstructor(BusinessStoreServiceService, 'BusinessStoreService');
