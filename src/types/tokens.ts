import { ChainTypes } from "../constants/ChainTypes";

export enum TokenType {
	JUNO = "ujuno",
	HOPE = "hope",
	RAW = "raw",
	NETA = "neta",
	ATOM = "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
	USDC = "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
	HOPERS = "hopers",
	PUNK = "punk",
	HUAHUA = "ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241",
	CANLAB = "canlab",
	RED = "red",
	BLUE = "blue",
	WYND = "wynd",
}

export const getTokenName = (tokenType: TokenType): string =>
	(Object.keys(TokenType) as Array<keyof typeof TokenType>).filter(
		(key) => TokenType[key] === tokenType
	)[0];

export const TokenFullName: { [key in TokenType]: string } = {
	[TokenType.JUNO]: "JUNO",
	[TokenType.HOPE]: "HOPE GALAXY",
	[TokenType.RAW]: "JunoSwap Raw Dao",
	[TokenType.NETA]: "NETA",
	[TokenType.ATOM]: "COSMOS HUB",
	[TokenType.USDC]: "USDC",
	[TokenType.HOPERS]: "HOPERS",
	[TokenType.PUNK]: "PUNK",
	[TokenType.HUAHUA]: "HUAHUA",
	[TokenType.CANLAB]: "CANLAB",
	[TokenType.RED]: "RED",
	[TokenType.BLUE]: "BLUE",
	[TokenType.WYND]: "WYND",
};

export type TokenStatusType = {
	isNativeCoin: boolean;
	isIBCCoin: boolean;
	contractAddress?: string;
	originChain?: ChainTypes;
	chain: ChainTypes;
	coinName?: string;
	decimal?: number;
};

export const TokenStatus: { [key in TokenType]: TokenStatusType } = {
	[TokenType.JUNO]: {
		isNativeCoin: true,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
	},
	[TokenType.HOPE]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
	},
	[TokenType.RAW]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
		// "juno1sn67lmh4gzx8kcz9cpek4suyglvley2vnksj7tdadfeamfe4089ssvfkgx", // this is only for swap testing
	},
	[TokenType.NETA]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
	},
	[TokenType.ATOM]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.COSMOS,
		originChain: ChainTypes.COSMOS,
	},
	[TokenType.USDC]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.AXELAR,
		originChain: ChainTypes.AXELAR,
	},
	[TokenType.HOPERS]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
	},
	[TokenType.PUNK]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno13926947pmrjly5p9hf5juey65c6rget0gqrnx3us3r6pvnpf4hwqm8mchy",
	},
	[TokenType.HUAHUA]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.CHIHUAHUA,
		originChain: ChainTypes.CHIHUAHUA,
	},
	[TokenType.CANLAB]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1vn38rzq0wc7zczp4dhy0h5y5kxh2jjzeahwe30c9cc6dw3lkyk5qn5rmfa",
		decimal: 3,
	},
	[TokenType.RED]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
	},
	[TokenType.BLUE]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
	},
	[TokenType.WYND]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
	},
};

export const OtherTokens: { [key: string]: string } = {
	juno13926947pmrjly5p9hf5juey65c6rget0gqrnx3us3r6pvnpf4hwqm8mchy: "PUNK",
};
