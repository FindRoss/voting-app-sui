import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit"




export const OwnedObjects = () => {
    const account = useCurrentAccount();
    const { data, error, isPending } = useSuiClientQuery(
        // type of query, like WP_Query()!!!
        "getOwnedObjects",
        {
            owner: account!.address as string
        },
        {
            enabled: !!account
        }
    );

    if (!account) return "Cannot retrieve account";

    if (error) return <div className="text-red-500"></div>

    return (
        <div className="flex flex-col my-4 space-y-4">

        </div>
    )
}