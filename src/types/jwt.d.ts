/*!
 * Copyright (c) 2017-2021, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
import { Client } from './client';

export declare class Jwt {
  constructor(claims: Record<string, string>, enforceDefaultFields: boolean);

  compact(): string;
  isExpired(): boolean;
  isNotBefore(): boolean;
  isSupportedAlg(alg: string): boolean;
  setClaim(claim: string, value: string): Jwt;
  setExpiration(exp: Date | number): Jwt;
  setHeader(param: string, value: unknown): Jwt;
  setIssuedAt(iat: number): Jwt;
  setIssuer(iss: string): Jwt;
  setJti(jti: string): Jwt;
  setNotBefore(nbf: Date | number): Jwt;
  setSigningAlgorithm(alg: string): Jwt;
  setSigningKey(key: string | ArrayBuffer | Buffer): Jwt;
  setSubject(sub: string): Jwt;
  sign(payload: Record<string, unknown>, algorithm: string, cryptoInput: string | ArrayBuffer | Buffer): string;
  toString(): string;
}

export function makeJwt(client: Client, endpoint: string): Jwt;
export function getPemAndJwk(privateKey: string | Record<string, unknown>): {jwk: Record<string, string>, pem: string};
