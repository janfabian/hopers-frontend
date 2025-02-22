import { TokenType } from "../types/tokens";

export type TLiquidity = {
	tokenA: TokenType;
	tokenB: TokenType;
	contractAddress: string;
	stakingAddress?: string;
};

export const Liquidities: TLiquidity[] = [
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.JUNO,
		contractAddress:
			"juno1g5j9vd76cqt7fsq22ne7jqfkz4v9ptkvh4jknsvwchpj753atwfs942a25",
		stakingAddress:
			"juno19nnwh49lwsqy6c5wg9p943yt9txe5mw6kdztecl5j4q3rgyh0h0sekwl8c",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.ATOM,
		contractAddress:
			"juno17estllyc6qyq6tlxg9hv4xwcy069fuu0rmytvkw6xskchcq9czxsd5fd98",
		stakingAddress:
			"juno163upe9ymxtc5fsx0kvrfcyx9e5puu2zhqt82lexrlajzmx9sm79shac88f",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.USDC,
		contractAddress:
			"juno1pugg623zsg2xanvuumna6y4ca48t0la7pxgtt96ed55rctea47lsqxu36a",
		stakingAddress:
			"juno1vuygss25pehh3rqx0gra09tzfhc32q3clamhdnpq9ueh29dntfmsv9tgds",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.HOPE,
		contractAddress:
			"juno185jw0uh2v9zn8zfhulu2akxxplcd7fjnkvmp84tkjgtadyuxruzsjnexnw",
		stakingAddress:
			"juno1yp0a7e2y6cc2mtux92qzm24gyu85y8a2adf85k9w33hswfzs8e7qrlazqs",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.RAW,
		contractAddress:
			"juno1qm57tvmvnplv5xym9gu8xjrxmwzv2e85meyhvsax52e5s4phax4s03uvq5",
		stakingAddress:
			"juno1u7ty7jqqzxapkrxydd7jergetd0dpyfnr7mh240aq2dducxkymhsdd4w4d",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.NETA,
		contractAddress:
			"juno19kfk94nqz7ehdmkk5a9hcl8qxq9kksupqzurz9gsgs4tk5xlgqqqrr067a",
		stakingAddress:
			"juno1cltx5qnrjzsf2ynyl8wdea79zckj5mvvpv06qur7qjjq6yx5702q436qxe",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.PUNK,
		contractAddress:
			"juno1guya74r8qe3x8sds4p74jg38eunjnukwlqgz68hlkasn3ralwxpsgx08mv",
		stakingAddress:
			"juno1wquw22g0spap7qvesxagwdjmt6trmafztz8yyaau4v5nqkpsrqqs3sqk02",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.HUAHUA,
		contractAddress:
			"juno162xnar9ndm7e66dzc2tzt2rx495v9ey0xw3zkjqur36dghqd600s0e3mzz",
		stakingAddress:
			"juno1g5na5yq4qj5wxprcrknhcww469v440658schln8s80l7gxl7f5pq9w2z5t",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.CANLAB,
		contractAddress:
			"juno1f6hyczl2yn6gwrh0yqwr0mjpzqywcy5p80ntn40cn7ha0etqtl3qs6xfv3",
		stakingAddress:
			"juno1ll35ncyf6vmenh2yvsh3ut9lj7kkrcgssxza3jpr60l80qt7c26skawpeg",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.RED,
		contractAddress:
			"juno1d7tz6q4ky06stcrquyuge6rujp9gsa6y4v7qzaa02rm0cj8gzznszc5ftj",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.BLUE,
		contractAddress:
			"juno1pdal0fr38tfjuslpq3ne68242zsfs30t6rda2dnmfmjv2skk8z6qgmrrer",
	},
	{
		tokenA: TokenType.BLUE,
		tokenB: TokenType.RED,
		contractAddress:
			"juno1u75a3r5ysfmtucngmy0s5t3j0vdl0n0qu5vhtc9sj5vclfpf96qsecp6sd",
	},
	{
		tokenA: TokenType.HOPERS,
		tokenB: TokenType.WYND,
		contractAddress:
			"juno1hmt7nw863s2alr5efnnj8tmxprdlvzcepna4htaujq74zgmm25ksyl9u4h",
	},
];

export const getLiquiditiesByTokens = (
	tokenA: TokenType,
	tokenB: TokenType
): TLiquidity | null =>
	Liquidities.find(
		(liquidity) => liquidity.tokenA === tokenA && liquidity.tokenB === tokenB
	) || null;
