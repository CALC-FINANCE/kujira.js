import { WasmExtension } from "@cosmjs/cosmwasm-stargate";
import * as s from "@cosmjs/stargate";
import { Coin } from "@cosmjs/stargate";
import { FeegrantExtension, SlashingExtension } from "@cosmjs/stargate/build/modules";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { GovExtension } from "./cosmos/gov";
import { StakingExtension } from "./cosmos/staking";
import { GravityExtension } from "./gravity/v1";
import { DenomExtension } from "./kujira/kujira.denom";
import { OracleExtension } from "./kujira/kujira.oracle";
import { SchedulerExtension } from "./kujira/kujira.scheduler";
export declare type KujiraQueryClient = s.QueryClient & s.AuthExtension & AuthzExtension & s.BankExtension & s.DistributionExtension & DenomExtension & FeegrantExtension & GovExtension & OracleExtension & SchedulerExtension & SlashingExtension & StakingExtension & s.TxExtension & WasmExtension & s.IbcExtension & GravityExtension;
export declare const kujiraQueryClient: ({ client, }: {
    client: Tendermint34Client;
}) => KujiraQueryClient;
export declare const fetchTokens: (query: KujiraQueryClient, paginationKey?: Uint8Array) => Promise<Coin[]>;
