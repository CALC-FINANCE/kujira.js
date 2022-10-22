"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factor = exports.USDT = exports.USDC = exports.ATOM = exports.DEMO = exports.KUJI = exports.USK = exports.USK_TESTNET = exports.Denom = void 0;
const tokens_json_1 = __importDefault(require("./resources/tokens.json"));
const labels = {
    usat: "NBTC",
    uausdc: "axlUSDC",
    uusdc: "axlUSDC",
    uausdt: "axlUSDT",
    uusdt: "axlUSDT",
    atevmos: "EVMOS",
    "wavax-wei": "wAVAX",
    basecro: "CRO",
    "weth-wei": "wETH",
    "dot-planck": "DOT",
    aevmos: "EVMOS",
    "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo": "DEMO",
    "factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local": "LOCAL",
    "factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk": "USK",
    "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk": "USK",
    "factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk": "USK",
    "frax-wei": "FRAX",
    "dai-wei": "DAI",
    "wbtc-satoshi": "wBTC",
    "wbnb-wei": "wBNB",
    "wftm-wei": "wFTM",
    "wmatic-wei": "wMATIC",
    "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup": "LOOP",
    "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz": "FURY",
    "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt": "AQUA",
    "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr": "NETA",
    "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct": "ampLUNA",
    "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus": "whLOCAL",
    "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26": "ASTRO",
    terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a: "bATOM",
    terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun: "bETH",
    terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp: "bLUNA",
    terra1c00vskhyzdv0z63z2tyetzx2qma67n2z3vzyn0: "bSOL",
    terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58: "sAVAX",
};
const terra = {
    uaud: "AUT",
    ucad: "CAT",
    uchf: "CHT",
    ucny: "CNT",
    udkk: "DKT",
    ueur: "EUT",
    ugbp: "GBT",
    uhkd: "HKT",
    uidr: "IDT",
    uinr: "INT",
    ujpy: "JPT",
    umnt: "MNT",
    umyr: "MYT",
    unok: "NOT",
    uphp: "PHT",
    usdr: "SDT",
    usek: "SET",
    usgd: "SGT",
    uthb: "THT",
    utwd: "TWT",
    uusd: "UST",
};
const baseDenomToSymbol = (denom) => {
    var _a;
    const baseDenom = denom.startsWith("ibc/")
        ? (_a = tokens_json_1.default[denom]) === null || _a === void 0 ? void 0 : _a.base_denom
        : denom.startsWith("factory/")
            ? denom.split("/")[2]
            : denom;
    if (!baseDenom)
        return "Unknown";
    const label = labels[baseDenom];
    if (label)
        return label;
    const t = terra[denom];
    if (t)
        return t;
    return baseDenom.startsWith("u")
        ? baseDenom.replace(/^u/, "").toUpperCase()
        : baseDenom;
};
const avalanche = {
    // Mainnet
    "0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be": "sAVAX",
};
const ics20 = {
    "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup": {
        contract: "juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97",
    },
    "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz": {
        contract: "juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97",
    },
    "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt": {
        contract: "juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97",
    },
    // whLOCAL
    "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus": {
        contract: "terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34",
    },
    // ASTRO
    "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26": {
        contract: "terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34",
    },
    // ampLUNA
    "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct": {
        contract: "terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28",
    },
};
class Denom {
    constructor(reference, underlying) {
        var _a, _b;
        this.reference = reference;
        this.underlying = underlying;
        this.decimals = 6;
        this.eq = (other) => this.reference == other.reference;
        if (this.reference.startsWith("ibc/")) {
            this.trace = tokens_json_1.default[this.reference];
        }
        this.symbol = baseDenomToSymbol(this.reference);
        if (this.underlying) {
            this.symbol = `${this.symbol} ${this.underlying
                .map((d) => d.symbol)
                .join("-")}`;
        }
        this.decimals = 6;
        if ((((_a = this.trace) === null || _a === void 0 ? void 0 : _a.base_denom) || this.reference).endsWith("-wei"))
            this.decimals = 18;
        if ((((_b = this.trace) === null || _b === void 0 ? void 0 : _b.base_denom) || this.reference).endsWith("-satoshi"))
            this.decimals = 8;
        if (this.symbol === "EVMOS")
            this.decimals = 18;
        if (this.symbol === "wAVAX")
            this.decimals = 18;
        if (this.symbol === "wETH")
            this.decimals = 18;
        if (this.symbol === "CRO")
            this.decimals = 8;
        if (this.symbol === "EL1")
            this.decimals = 18;
        if (this.symbol === "NBTC")
            this.decimals = 14;
        if (this.symbol === "BOOT")
            this.decimals = 0;
        if (this.symbol === "DOT")
            this.decimals = 10;
        this.ics20 = ics20[this.reference];
    }
    static from(string, underlying) {
        return new Denom(string, underlying);
    }
}
exports.Denom = Denom;
exports.USK_TESTNET = Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk");
exports.USK = Denom.from("factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk");
exports.KUJI = Denom.from("ukuji");
exports.DEMO = Denom.from("factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo");
exports.ATOM = Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2");
exports.USDC = Denom.from("ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F");
exports.USDT = Denom.from("ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045");
const factor = ([base, quote]) => {
    return Math.pow(10, (base.decimals - quote.decimals));
};
exports.factor = factor;