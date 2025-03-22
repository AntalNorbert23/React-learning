import Spinner from "../_components/Spinner";

export default function Loading() {
    return (
        <div className="grid items-center justify-center">
            <Spinner />
            <p className="text-xl bg-primary-200">Loading cabin data....</p>
        </div>
    )
}