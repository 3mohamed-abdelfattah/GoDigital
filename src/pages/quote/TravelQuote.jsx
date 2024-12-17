import { QuoteHeader } from "./../../components/bars/QuoteHeader";
// Icons
import * as Icons from "@/utils/icons.util";

export const TravelQuote = () => {
    return (
        <main>

            <QuoteHeader />
            <section className="border-t-2 mx-20 my-2 flex flex-col justify-center items-center">

                <section className="flex justify-center items-center gap-3 my-10">
                    <Icons.QuotePlaneIcon />
                    <div className="w-[214px] h-[15px] bg-[#D9D9D9] rounded-[5px]"></div>
                    <div className="w-[214px] h-[15px] bg-[#D9D9D9] rounded-[5px]"></div>
                    <div className="w-[214px] h-[15px] bg-[#D9D9D9] rounded-[5px]"></div>
                    <div className="w-[214px] h-[15px] bg-[#D9D9D9] rounded-[5px]"></div>
                </section>

                <section className="my-14">
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <select
                            className="w-[400px] h-[75px] px-4 border border-[#C3C3C3] rounded-[10px] text-[#C3C3C3] font-semibold focus:outline-none"
                        >
                            <option value="" disabled hidden>
                                Where are you travelling from?
                            </option>
                            <option value="1">Greece</option>
                            <option value="2">Egypt</option>
                            <option value="3">France</option>
                        </select>
                        <select
                            className="w-[400px] h-[75px] px-4 border border-[#C3C3C3] rounded-[10px] text-[#C3C3C3] font-semibold focus:outline-none"
                        >
                            <option value="" disabled hidden>
                                Where are you traveling to?
                            </option>
                            <option value="1">Greece</option>
                            <option value="2">Egypt</option>
                            <option value="3">France</option>
                        </select>
                    </div>
                </section>

                <section>

                </section>

            </section>
        </main>
    )
}