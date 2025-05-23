import { InMemoryCache } from '@apollo/client';
import result from '../../possible-types';
import createAccountsFieldPolicy from './createAccountsFieldPolicy';
import createBasicFieldPolicy from './createBasicFieldPolicy';
import createPostReactionsFieldPolicy from './createPostReactionsFieldPolicy';
import createPostReferencesFieldPolicy from './createPostReferencesFieldPolicy';
import createTimelineFieldPolicy from './createTimelineFieldPolicy';
import createWhoReferencedPostFieldPolicy from './createWhoReferencedPostFieldPolicy';

const cache = new InMemoryCache({
  possibleTypes: result.possibleTypes,
  typePolicies: {
    AccountManager: { keyFields: ["manager"] },
    Query: {
      fields: {
        timeline: createTimelineFieldPolicy(),
        timelineHighlights: createTimelineFieldPolicy(),
        posts: createBasicFieldPolicy(),
        postReferences: createPostReferencesFieldPolicy(),
        postReactions: createPostReactionsFieldPolicy(),
        whoReferencedPost: createWhoReferencedPostFieldPolicy(),
        postBookmarks: createBasicFieldPolicy(),
        groups: createBasicFieldPolicy(),
        accounts: createAccountsFieldPolicy(),
        accountsBlocked: createBasicFieldPolicy(),
        accountManagers: createBasicFieldPolicy(),
        authenticatedSessions: createBasicFieldPolicy(),
        usernames: createBasicFieldPolicy(),
        notifications: createBasicFieldPolicy(),
        mlPostsExplore: createBasicFieldPolicy(),
        mlPostsForYou: createBasicFieldPolicy(),
      }
    }
  }
});

export default cache;
