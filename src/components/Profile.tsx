import '../styles/Profile.css';

import { createClient } from '@supabase/supabase-js'
import { Show, Suspense, createResource } from 'solid-js';
import Dropdown from './Dropdown';

const supabase = createClient('https://gttbecgbgahrgdtcmbyt.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dGJlY2diZ2FocmdkdGNtYnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyNjU4NDMsImV4cCI6MjAwMTg0MTg0M30.FbNUrvSqciFVU7LuW4UWDtkT107mbwjXkiD6AvtZxvM");

const getUser = async () => {
    console.log((await supabase.auth.getUser()).data.user);
    return await supabase.auth.getUser() != null ? (await supabase.auth.getUser()).data.user : null
};

const signInGoogle = () => supabase.auth.signInWithOAuth({
    provider: 'google'
});

export default () => {
    const [user] = createResource(getUser);
    let dropdown: HTMLDivElement | undefined;

    const onClick = () => {
        (dropdown as HTMLDivElement).classList.toggle("hidden");
    }

    return <Suspense fallback={<button class="signin" onClick={signInGoogle}>Sign In</button>}>
        <Show when={user() != null} fallback={<button class="signin" onClick={signInGoogle}>Sign In</button>}>
            <img src={user()?.user_metadata.picture} alt="Profile Picture" onClick={onClick} class="profile" />
        </Show>
        <Dropdown class="profile-dropdown hidden" ref={dropdown} options={[
            {
                title: "Log Out",
                onSelect: () => {
                    supabase.auth.signOut();
                    window.location.reload();
                }
            },
            {
                title: "Close",
                onSelect: () => (dropdown as HTMLDivElement).classList.toggle("hidden")
            }
        ]} />
    </Suspense>
};