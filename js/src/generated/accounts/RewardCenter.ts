/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import * as beet from '@metaplex-foundation/beet';
import { RewardRules, rewardRulesBeet } from '../types/RewardRules';

/**
 * Arguments used to create {@link RewardCenter}
 * @category Accounts
 * @category generated
 */
export type RewardCenterArgs = {
  tokenMint: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  rewardRules: RewardRules;
  bump: number;
};

export const rewardCenterDiscriminator = [28, 31, 56, 90, 176, 54, 120, 105];
/**
 * Holds the data for the {@link RewardCenter} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class RewardCenter implements RewardCenterArgs {
  private constructor(
    readonly tokenMint: web3.PublicKey,
    readonly auctionHouse: web3.PublicKey,
    readonly rewardRules: RewardRules,
    readonly bump: number,
  ) {}

  /**
   * Creates a {@link RewardCenter} instance from the provided args.
   */
  static fromArgs(args: RewardCenterArgs) {
    return new RewardCenter(args.tokenMint, args.auctionHouse, args.rewardRules, args.bump);
  }

  /**
   * Deserializes the {@link RewardCenter} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [RewardCenter, number] {
    return RewardCenter.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link RewardCenter} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<RewardCenter> {
    const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
    if (accountInfo == null) {
      throw new Error(`Unable to find RewardCenter account at ${address}`);
    }
    return RewardCenter.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('RwDDvPp7ta9qqUwxbBfShsNreBaSsKvFcHzMxfBC3Ki'),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, rewardCenterBeet);
  }

  /**
   * Deserializes the {@link RewardCenter} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [RewardCenter, number] {
    return rewardCenterBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link RewardCenter} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return rewardCenterBeet.serialize({
      accountDiscriminator: rewardCenterDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link RewardCenter}
   */
  static get byteSize() {
    return rewardCenterBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link RewardCenter} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(RewardCenter.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link RewardCenter} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === RewardCenter.byteSize;
  }

  /**
   * Returns a readable version of {@link RewardCenter} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      tokenMint: this.tokenMint.toBase58(),
      auctionHouse: this.auctionHouse.toBase58(),
      rewardRules: this.rewardRules,
      bump: this.bump,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const rewardCenterBeet = new beet.BeetStruct<
  RewardCenter,
  RewardCenterArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['tokenMint', beetSolana.publicKey],
    ['auctionHouse', beetSolana.publicKey],
    ['rewardRules', rewardRulesBeet],
    ['bump', beet.u8],
  ],
  RewardCenter.fromArgs,
  'RewardCenter',
);
