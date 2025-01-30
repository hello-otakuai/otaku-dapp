import * as anchor from "@coral-xyz/anchor";
import { IDL, OtakuJournalUser } from "./types";

export default async function OtakuJournal(
    conn: anchor.web3.Connection,
    wallet: anchor.Wallet,
): Promise<anchor.Program<OtakuJournalUser>> {
    const provider = new anchor.AnchorProvider(conn, wallet, {
        commitment: "confirmed",
    });
    const program = new anchor.Program<OtakuJournalUser>(
        IDL,
        new anchor.web3.PublicKey(
            "4MXoSnR5qouxDtN7gcBUK8wx94KYCFsdHiJrgsAQpL73",
        ),
        provider,
    );

    return program;
}
