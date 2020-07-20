/*
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

type values = value | valueArray;
type valueArray = value[] | string;
type value = any;
type anyType = string | number | boolean | object;
export interface IAnimateItemCommand {
  /* An optional description for this command */
  description?: string;
  /* Delay time in milliseconds before this event fires */
  delay?: number | string;
  /* If true, disable the Interaction Timer */
  screenLock?: boolean | string;
  /* If this evaluates to false, the command is skipped */
  when?: boolean | string;
  /* The id of the component. */
  componentId?: string;
  /* The duration of the animation (in milliseconds) */
  duration: number | string;
  /* Specify an easing curve. */
  easing?: string;
  /* Number of times to repeat. */
  repeatCount?: number | string;
  /* How repeated animations will play. */
  repeatMode?: string;
  /* An array of animated component properties. */
  value: values;
  [key: string]: unknown;
  readonly type: 'AnimateItem';
}
