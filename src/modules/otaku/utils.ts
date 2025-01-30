import * as anchor from "@coral-xyz/anchor";
import { OtakuJournalUser } from "./types";

export const getJouranlIdsAccount = async (
    program: anchor.Program<OtakuJournalUser>,
) => {
    const journalIDSAccountPDA = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from("journal_id")],
        program.programId,
    );
    return journalIDSAccountPDA[0];
};
