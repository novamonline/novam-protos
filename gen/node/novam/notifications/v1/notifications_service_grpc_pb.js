// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var novam_notifications_v1_notifications_service_pb = require('../../../novam/notifications/v1/notifications_service_pb.js');
var novam_common_v1_common_pb = require('../../../novam/common/v1/common_pb.js');

function serialize_novam_notifications_v1_ResyncOrgRequest(arg) {
  if (!(arg instanceof novam_notifications_v1_notifications_service_pb.ResyncOrgRequest)) {
    throw new Error('Expected argument of type novam.notifications.v1.ResyncOrgRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_notifications_v1_ResyncOrgRequest(buffer_arg) {
  return novam_notifications_v1_notifications_service_pb.ResyncOrgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_notifications_v1_ResyncOrgResponse(arg) {
  if (!(arg instanceof novam_notifications_v1_notifications_service_pb.ResyncOrgResponse)) {
    throw new Error('Expected argument of type novam.notifications.v1.ResyncOrgResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_notifications_v1_ResyncOrgResponse(buffer_arg) {
  return novam_notifications_v1_notifications_service_pb.ResyncOrgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_notifications_v1_SendTestNotificationRequest(arg) {
  if (!(arg instanceof novam_notifications_v1_notifications_service_pb.SendTestNotificationRequest)) {
    throw new Error('Expected argument of type novam.notifications.v1.SendTestNotificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_notifications_v1_SendTestNotificationRequest(buffer_arg) {
  return novam_notifications_v1_notifications_service_pb.SendTestNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_novam_notifications_v1_SendTestNotificationResponse(arg) {
  if (!(arg instanceof novam_notifications_v1_notifications_service_pb.SendTestNotificationResponse)) {
    throw new Error('Expected argument of type novam.notifications.v1.SendTestNotificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_novam_notifications_v1_SendTestNotificationResponse(buffer_arg) {
  return novam_notifications_v1_notifications_service_pb.SendTestNotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// NotificationsService runs in novam-engine. It learns about changes from business events on NATS
// JetStream (novam.events.v1) and sends reminders and alerts by email, push and in-app. novam-data calls
// it only for the few things events can't express.
var NotificationsServiceService = exports.NotificationsServiceService = {
  // Rebuilds the org's scheduled reminders from its current rules and upcoming appointments and invoices.
// Use after a bulk import, or to recover from missed events.
resyncOrg: {
    path: '/novam.notifications.v1.NotificationsService/ResyncOrg',
    requestStream: false,
    responseStream: false,
    requestType: novam_notifications_v1_notifications_service_pb.ResyncOrgRequest,
    responseType: novam_notifications_v1_notifications_service_pb.ResyncOrgResponse,
    requestSerialize: serialize_novam_notifications_v1_ResyncOrgRequest,
    requestDeserialize: deserialize_novam_notifications_v1_ResyncOrgRequest,
    responseSerialize: serialize_novam_notifications_v1_ResyncOrgResponse,
    responseDeserialize: deserialize_novam_notifications_v1_ResyncOrgResponse,
  },
  // Sends a sample reminder to the given address or user, so an owner can see what clients will get.
sendTestNotification: {
    path: '/novam.notifications.v1.NotificationsService/SendTestNotification',
    requestStream: false,
    responseStream: false,
    requestType: novam_notifications_v1_notifications_service_pb.SendTestNotificationRequest,
    responseType: novam_notifications_v1_notifications_service_pb.SendTestNotificationResponse,
    requestSerialize: serialize_novam_notifications_v1_SendTestNotificationRequest,
    requestDeserialize: deserialize_novam_notifications_v1_SendTestNotificationRequest,
    responseSerialize: serialize_novam_notifications_v1_SendTestNotificationResponse,
    responseDeserialize: deserialize_novam_notifications_v1_SendTestNotificationResponse,
  },
};

exports.NotificationsServiceClient = grpc.makeGenericClientConstructor(NotificationsServiceService, 'NotificationsService');
