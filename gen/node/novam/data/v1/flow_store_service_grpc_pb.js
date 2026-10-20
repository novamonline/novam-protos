// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_data_v1_flow_store_service_pb = require('../../../novam/data/v1/flow_store_service_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');
var novam_common_v1_pagination_pb = require('../../../novam/common/v1/pagination_pb.js');
var novam_entities_v1_flow_definition_pb = require('../../../novam/entities/v1/flow_definition_pb.js');
var novam_entities_v1_flow_state_pb = require('../../../novam/entities/v1/flow_state_pb.js');

function serialize_novam_data_v1_ClaimDueFlowInstancesRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ClaimDueFlowInstancesRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ClaimDueFlowInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ClaimDueFlowInstancesRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ClaimDueFlowInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ClaimDueFlowInstancesResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ClaimDueFlowInstancesResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ClaimDueFlowInstancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ClaimDueFlowInstancesResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ClaimDueFlowInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_novam_data_v1_GetFlowStepStatsRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.GetFlowStepStatsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.GetFlowStepStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetFlowStepStatsRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.GetFlowStepStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetFlowStepStatsResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.GetFlowStepStatsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.GetFlowStepStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetFlowStepStatsResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.GetFlowStepStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListFlowDefinitionsForEventRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListFlowDefinitionsForEventRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListFlowDefinitionsForEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListFlowDefinitionsForEventRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListFlowDefinitionsForEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListFlowDefinitionsForEventResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListFlowDefinitionsForEventResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListFlowDefinitionsForEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListFlowDefinitionsForEventResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListFlowDefinitionsForEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListFlowInstancesRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListFlowInstancesRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListFlowInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListFlowInstancesRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListFlowInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListFlowInstancesResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListFlowInstancesResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListFlowInstancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListFlowInstancesResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListFlowInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListRunStepsRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListRunStepsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListRunStepsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListRunStepsRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListRunStepsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListRunStepsResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListRunStepsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListRunStepsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListRunStepsResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListRunStepsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListScheduledFlowDefinitionsRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListScheduledFlowDefinitionsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListScheduledFlowDefinitionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListScheduledFlowDefinitionsRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListScheduledFlowDefinitionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListScheduledFlowDefinitionsResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListScheduledFlowDefinitionsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListScheduledFlowDefinitionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListScheduledFlowDefinitionsResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListScheduledFlowDefinitionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListWaitingRunsRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListWaitingRunsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListWaitingRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListWaitingRunsRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListWaitingRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListWaitingRunsResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.ListWaitingRunsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListWaitingRunsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListWaitingRunsResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.ListWaitingRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_RecordEnrollmentRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.RecordEnrollmentRequest)) {
    throw new Error('Expected argument of type novam.data.v1.RecordEnrollmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_RecordEnrollmentRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.RecordEnrollmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_RecordEnrollmentResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.RecordEnrollmentResponse)) {
    throw new Error('Expected argument of type novam.data.v1.RecordEnrollmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_RecordEnrollmentResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.RecordEnrollmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_novam_data_v1_SaveRunStepRequest(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.SaveRunStepRequest)) {
    throw new Error('Expected argument of type novam.data.v1.SaveRunStepRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_SaveRunStepRequest(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.SaveRunStepRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_SaveRunStepResponse(arg) {
  if (!(arg instanceof novam_data_v1_flow_store_service_pb.SaveRunStepResponse)) {
    throw new Error('Expected argument of type novam.data.v1.SaveRunStepResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_SaveRunStepResponse(buffer_arg) {
  return novam_data_v1_flow_store_service_pb.SaveRunStepResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// FlowStoreService is the storage novam-data provides to the services that run flows. novam-data owns
// the data; novam-engine keeps none and calls this to load definitions and save run progress, with its own
// credential (`authorization: Bearer <token>` metadata, a client-credentials token from novam-data's
// /oauth/token). Every call is scoped to `metadata.tenant_context.org_id`, except ListScheduledFlowDefinitions
// and ClaimDueFlowInstances, which span orgs.
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
  // The org's enabled flows that a business event starts: event triggers naming the event, and
// data_change triggers naming its resource.
listFlowDefinitionsForEvent: {
    path: '/novam.data.v1.FlowStoreService/ListFlowDefinitionsForEvent',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.ListFlowDefinitionsForEventRequest,
    responseType: novam_data_v1_flow_store_service_pb.ListFlowDefinitionsForEventResponse,
    requestSerialize: serialize_novam_data_v1_ListFlowDefinitionsForEventRequest,
    requestDeserialize: deserialize_novam_data_v1_ListFlowDefinitionsForEventRequest,
    responseSerialize: serialize_novam_data_v1_ListFlowDefinitionsForEventResponse,
    responseDeserialize: deserialize_novam_data_v1_ListFlowDefinitionsForEventResponse,
  },
  // Enabled flows with a schedule trigger, across all orgs, so the scheduler can work out when each fires.
listScheduledFlowDefinitions: {
    path: '/novam.data.v1.FlowStoreService/ListScheduledFlowDefinitions',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.ListScheduledFlowDefinitionsRequest,
    responseType: novam_data_v1_flow_store_service_pb.ListScheduledFlowDefinitionsResponse,
    requestSerialize: serialize_novam_data_v1_ListScheduledFlowDefinitionsRequest,
    requestDeserialize: deserialize_novam_data_v1_ListScheduledFlowDefinitionsRequest,
    responseSerialize: serialize_novam_data_v1_ListScheduledFlowDefinitionsResponse,
    responseDeserialize: deserialize_novam_data_v1_ListScheduledFlowDefinitionsResponse,
  },
  // Atomically leases waiting runs whose wake_at has passed, across all orgs, so each is resumed by one
// worker only. A lease that runs out without the run being saved returns it to the queue.
claimDueFlowInstances: {
    path: '/novam.data.v1.FlowStoreService/ClaimDueFlowInstances',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.ClaimDueFlowInstancesRequest,
    responseType: novam_data_v1_flow_store_service_pb.ClaimDueFlowInstancesResponse,
    requestSerialize: serialize_novam_data_v1_ClaimDueFlowInstancesRequest,
    requestDeserialize: deserialize_novam_data_v1_ClaimDueFlowInstancesRequest,
    responseSerialize: serialize_novam_data_v1_ClaimDueFlowInstancesResponse,
    responseDeserialize: deserialize_novam_data_v1_ClaimDueFlowInstancesResponse,
  },
  // Creates or replaces one step of a run, keyed by run and sequence. Saving the same update twice is harmless.
saveRunStep: {
    path: '/novam.data.v1.FlowStoreService/SaveRunStep',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.SaveRunStepRequest,
    responseType: novam_data_v1_flow_store_service_pb.SaveRunStepResponse,
    requestSerialize: serialize_novam_data_v1_SaveRunStepRequest,
    requestDeserialize: deserialize_novam_data_v1_SaveRunStepRequest,
    responseSerialize: serialize_novam_data_v1_SaveRunStepResponse,
    responseDeserialize: deserialize_novam_data_v1_SaveRunStepResponse,
  },
  // A run's steps in sequence order.
listRunSteps: {
    path: '/novam.data.v1.FlowStoreService/ListRunSteps',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.ListRunStepsRequest,
    responseType: novam_data_v1_flow_store_service_pb.ListRunStepsResponse,
    requestSerialize: serialize_novam_data_v1_ListRunStepsRequest,
    requestDeserialize: deserialize_novam_data_v1_ListRunStepsRequest,
    responseSerialize: serialize_novam_data_v1_ListRunStepsResponse,
    responseDeserialize: deserialize_novam_data_v1_ListRunStepsResponse,
  },
  // Runs parked on a step that waits for an event (wait_for_event) about a subject, such as a reply text from
// a client, so the event can wake them.
listWaitingRuns: {
    path: '/novam.data.v1.FlowStoreService/ListWaitingRuns',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.ListWaitingRunsRequest,
    responseType: novam_data_v1_flow_store_service_pb.ListWaitingRunsResponse,
    requestSerialize: serialize_novam_data_v1_ListWaitingRunsRequest,
    requestDeserialize: deserialize_novam_data_v1_ListWaitingRunsRequest,
    responseSerialize: serialize_novam_data_v1_ListWaitingRunsResponse,
    responseDeserialize: deserialize_novam_data_v1_ListWaitingRunsResponse,
  },
  // A flow's runs, newest first, optionally only those with a status or about a subject (the client of the
// record that started them, else that record). Test runs are left out unless asked for.
listFlowInstances: {
    path: '/novam.data.v1.FlowStoreService/ListFlowInstances',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.ListFlowInstancesRequest,
    responseType: novam_data_v1_flow_store_service_pb.ListFlowInstancesResponse,
    requestSerialize: serialize_novam_data_v1_ListFlowInstancesRequest,
    requestDeserialize: deserialize_novam_data_v1_ListFlowInstancesRequest,
    responseSerialize: serialize_novam_data_v1_ListFlowInstancesResponse,
    responseDeserialize: deserialize_novam_data_v1_ListFlowInstancesResponse,
  },
  // Per step of a flow, since a time: how many runs reached it, are on it now, and failed there. Test runs
// are left out.
getFlowStepStats: {
    path: '/novam.data.v1.FlowStoreService/GetFlowStepStats',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.GetFlowStepStatsRequest,
    responseType: novam_data_v1_flow_store_service_pb.GetFlowStepStatsResponse,
    requestSerialize: serialize_novam_data_v1_GetFlowStepStatsRequest,
    requestDeserialize: deserialize_novam_data_v1_GetFlowStepStatsRequest,
    responseSerialize: serialize_novam_data_v1_GetFlowStepStatsResponse,
    responseDeserialize: deserialize_novam_data_v1_GetFlowStepStatsResponse,
  },
  // Enrolls a subject in a flow under its re-enrollment rule, atomically: "once" allows one enrollment ever,
// "cooldown" one per cooldown_hours since the last. Enrolling again with the same run_id is allowed, so a
// redelivered event can still start the run it enrolled.
recordEnrollment: {
    path: '/novam.data.v1.FlowStoreService/RecordEnrollment',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_flow_store_service_pb.RecordEnrollmentRequest,
    responseType: novam_data_v1_flow_store_service_pb.RecordEnrollmentResponse,
    requestSerialize: serialize_novam_data_v1_RecordEnrollmentRequest,
    requestDeserialize: deserialize_novam_data_v1_RecordEnrollmentRequest,
    responseSerialize: serialize_novam_data_v1_RecordEnrollmentResponse,
    responseDeserialize: deserialize_novam_data_v1_RecordEnrollmentResponse,
  },
};

exports.FlowStoreServiceClient = grpc.makeGenericClientConstructor(FlowStoreServiceService, 'FlowStoreService');
