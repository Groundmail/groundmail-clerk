/**
 * Public entry for Clerk + Groundmail email delivery.
 * Implementation lives in the core SDK; this package exists for discoverability
 * (npm/GitHub search: clerk + transactional email).
 */
export {
  createClerkEmailDeliverer,
  deliverClerkEmail,
  type ClerkEmailCreatedData,
  type GroundmailClerkOptions,
} from 'groundmail/clerk'
