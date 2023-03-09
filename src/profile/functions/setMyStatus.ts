/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StatusStore, UserPrefs } from '../../whatsapp';
import * as wa_functions from '../../whatsapp/functions';

/**
 * Update your current text status
 *
 * @example
 * ```javascript
 * await WPP.profile.setMyStatus('Example text');
 * ```
 *
 * @category Profile
 */

export async function setMyStatus(statusText: string) {
  await wa_functions.setMyStatus(statusText);

  const myStatus = await StatusStore.find(UserPrefs.getMaybeMeUser());

  if (myStatus) {
    myStatus.status = statusText;
  }

  return true;
}
