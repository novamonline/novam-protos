// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_data_v1_notification_store_service_pb = require('../../../novam/data/v1/notification_store_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');
var novam_events_v1_business_events_pb = require('../../../novam/events/v1/business_events_pb.js');

function serialize_novam_data_v1_CancelScheduledNotificationsRequest(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.CancelScheduledNotificationsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.CancelScheduledNotificationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_CancelScheduledNotificationsRequest(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.CancelScheduledNotificationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_CancelScheduledNotificationsResponse(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.CancelScheduledNotificationsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.CancelScheduledNotificationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_CancelScheduledNotificationsResponse(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.CancelScheduledNotificationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ClaimDueNotificationsRequest(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.ClaimDueNotificationsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ClaimDueNotificationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ClaimDueNotificationsRequest(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.ClaimDueNotificationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ClaimDueNotificationsResponse(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.ClaimDueNotificationsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ClaimDueNotificationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ClaimDueNotificationsResponse(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.ClaimDueNotificationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_CreateInAppNotificationRequest(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.CreateInAppNotificationRequest)) {
    throw new Error('Expected argument of type novam.data.v1.CreateInAppNotificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_CreateInAppNotificationRequest(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.CreateInAppNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_CreateInAppNotificationResponse(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.CreateInAppNotificationResponse)) {
    throw new Error('Expected argument of type novam.data.v1.CreateInAppNotificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_CreateInAppNotificationResponse(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.CreateInAppNotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetRecipientRequest(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.GetRecipientRequest)) {
    throw new Error('Expected argument of type novam.data.v1.GetRecipientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetRecipientRequest(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.GetRecipientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_GetRecipientResponse(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.GetRecipientResponse)) {
    throw new Error('Expected argument of type novam.data.v1.GetRecipientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_GetRecipientResponse(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.GetRecipientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListReminderRulesRequest(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.ListReminderRulesRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListReminderRulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListReminderRulesRequest(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.ListReminderRulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListReminderRulesResponse(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.ListReminderRulesResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListReminderRulesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListReminderRulesResponse(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.ListReminderRulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListReminderTargetsRequest(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.ListReminderTargetsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ListReminderTargetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListReminderTargetsRequest(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.ListReminderTargetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ListReminderTargetsResponse(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.ListReminderTargetsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ListReminderTargetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ListReminderTargetsResponse(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.ListReminderTargetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_RecordDeliveryRequest(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.RecordDeliveryRequest)) {
    throw new Error('Expected argument of type novam.data.v1.RecordDeliveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_RecordDeliveryRequest(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.RecordDeliveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_RecordDeliveryResponse(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.RecordDeliveryResponse)) {
    throw new Error('Expected argument of type novam.data.v1.RecordDeliveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_RecordDeliveryResponse(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.RecordDeliveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ReplaceScheduledNotificationsRequest(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.ReplaceScheduledNotificationsRequest)) {
    throw new Error('Expected argument of type novam.data.v1.ReplaceScheduledNotificationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ReplaceScheduledNotificationsRequest(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.ReplaceScheduledNotificationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_data_v1_ReplaceScheduledNotificationsResponse(arg) {
  if (!(arg instanceof novam_data_v1_notification_store_service_pb.ReplaceScheduledNotificationsResponse)) {
    throw new Error('Expected argument of type novam.data.v1.ReplaceScheduledNotificationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_data_v1_ReplaceScheduledNotificationsResponse(buffer_arg) {
  return novam_data_v1_notification_store_service_pb.ReplaceScheduledNotificationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// NotificationStoreService is the storage novam-data provides to the notifications service. novam-data owns
// the data; the service keeps none. It calls this with its own credential (`authorization: Bearer <token>`
// metadata, a client-credentials token from novam-data's /oauth/token). Calls are scoped to
// `metadata.tenant_context.org_id`, except ClaimDueNotifications, which spans orgs.
var NotificationStoreServiceService = exports.NotificationStoreServiceService = {
  // The org's enabled reminder rules.
listReminderRules: {
    path: '/novam.data.v1.NotificationStoreService/ListReminderRules',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_notification_store_service_pb.ListReminderRulesRequest,
    responseType: novam_data_v1_notification_store_service_pb.ListReminderRulesResponse,
    requestSerialize: serialize_novam_data_v1_ListReminderRulesRequest,
    requestDeserialize: deserialize_novam_data_v1_ListReminderRulesRequest,
    responseSerialize: serialize_novam_data_v1_ListReminderRulesResponse,
    responseDeserialize: deserialize_novam_data_v1_ListReminderRulesResponse,
  },
  // Appointments starting, or invoices due, in a time range. Used to rebuild schedules when rules change.
listReminderTargets: {
    path: '/novam.data.v1.NotificationStoreService/ListReminderTargets',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_notification_store_service_pb.ListReminderTargetsRequest,
    responseType: novam_data_v1_notification_store_service_pb.ListReminderTargetsResponse,
    requestSerialize: serialize_novam_data_v1_ListReminderTargetsRequest,
    requestDeserialize: deserialize_novam_data_v1_ListReminderTargetsRequest,
    responseSerialize: serialize_novam_data_v1_ListReminderTargetsResponse,
    responseDeserialize: deserialize_novam_data_v1_ListReminderTargetsResponse,
  },
  // Replaces the scheduled notifications for one target (an appointment or invoice) under one rule.
// Already-sent notifications are kept. Sending the same request twice is harmless.
replaceScheduledNotifications: {
    path: '/novam.data.v1.NotificationStoreService/ReplaceScheduledNotifications',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_notification_store_service_pb.ReplaceScheduledNotificationsRequest,
    responseType: novam_data_v1_notification_store_service_pb.ReplaceScheduledNotificationsResponse,
    requestSerialize: serialize_novam_data_v1_ReplaceScheduledNotificationsRequest,
    requestDeserialize: deserialize_novam_data_v1_ReplaceScheduledNotificationsRequest,
    responseSerialize: serialize_novam_data_v1_ReplaceScheduledNotificationsResponse,
    responseDeserialize: deserialize_novam_data_v1_ReplaceScheduledNotificationsResponse,
  },
  // Cancels unsent notifications for a target, or for every target of a rule.
cancelScheduledNotifications: {
    path: '/novam.data.v1.NotificationStoreService/CancelScheduledNotifications',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_notification_store_service_pb.CancelScheduledNotificationsRequest,
    responseType: novam_data_v1_notification_store_service_pb.CancelScheduledNotificationsResponse,
    requestSerialize: serialize_novam_data_v1_CancelScheduledNotificationsRequest,
    requestDeserialize: deserialize_novam_data_v1_CancelScheduledNotificationsRequest,
    responseSerialize: serialize_novam_data_v1_CancelScheduledNotificationsResponse,
    responseDeserialize: deserialize_novam_data_v1_CancelScheduledNotificationsResponse,
  },
  // Atomically leases due, unsent notifications across all orgs, so each is handed to one sender only.
// A lease that runs out without a RecordDelivery returns the notification to the queue.
claimDueNotifications: {
    path: '/novam.data.v1.NotificationStoreService/ClaimDueNotifications',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_notification_store_service_pb.ClaimDueNotificationsRequest,
    responseType: novam_data_v1_notification_store_service_pb.ClaimDueNotificationsResponse,
    requestSerialize: serialize_novam_data_v1_ClaimDueNotificationsRequest,
    requestDeserialize: deserialize_novam_data_v1_ClaimDueNotificationsRequest,
    responseSerialize: serialize_novam_data_v1_ClaimDueNotificationsResponse,
    responseDeserialize: deserialize_novam_data_v1_ClaimDueNotificationsResponse,
  },
  // Records the outcome of sending a claimed notification.
recordDelivery: {
    path: '/novam.data.v1.NotificationStoreService/RecordDelivery',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_notification_store_service_pb.RecordDeliveryRequest,
    responseType: novam_data_v1_notification_store_service_pb.RecordDeliveryResponse,
    requestSerialize: serialize_novam_data_v1_RecordDeliveryRequest,
    requestDeserialize: deserialize_novam_data_v1_RecordDeliveryRequest,
    responseSerialize: serialize_novam_data_v1_RecordDeliveryResponse,
    responseDeserialize: deserialize_novam_data_v1_RecordDeliveryResponse,
  },
  // What a sender needs to address a client: contact details, push devices, and the org's name and time zone.
getRecipient: {
    path: '/novam.data.v1.NotificationStoreService/GetRecipient',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_notification_store_service_pb.GetRecipientRequest,
    responseType: novam_data_v1_notification_store_service_pb.GetRecipientResponse,
    requestSerialize: serialize_novam_data_v1_GetRecipientRequest,
    requestDeserialize: deserialize_novam_data_v1_GetRecipientRequest,
    responseSerialize: serialize_novam_data_v1_GetRecipientResponse,
    responseDeserialize: deserialize_novam_data_v1_GetRecipientResponse,
  },
  // Adds an entry to a person's in-app notification center.
createInAppNotification: {
    path: '/novam.data.v1.NotificationStoreService/CreateInAppNotification',
    requestStream: false,
    responseStream: false,
    requestType: novam_data_v1_notification_store_service_pb.CreateInAppNotificationRequest,
    responseType: novam_data_v1_notification_store_service_pb.CreateInAppNotificationResponse,
    requestSerialize: serialize_novam_data_v1_CreateInAppNotificationRequest,
    requestDeserialize: deserialize_novam_data_v1_CreateInAppNotificationRequest,
    responseSerialize: serialize_novam_data_v1_CreateInAppNotificationResponse,
    responseDeserialize: deserialize_novam_data_v1_CreateInAppNotificationResponse,
  },
};

exports.NotificationStoreServiceClient = grpc.makeGenericClientConstructor(NotificationStoreServiceService, 'NotificationStoreService');
