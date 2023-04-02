export const Messages = {
    noName: "§4You must provide an alliance name.",
    invalidName: "§4Invalid alliance name: Must be at least 3 characters long but not more than 15.",
    exists: "§4An alliance with that name already exists.",
    ownAlliance: "§4You already own an alliance.",
    noInviteAny: "§4You do not have an invite from any alliance.",
    noInviteAlliance: "§4You do not have an invite from this alliance.",
    newAlliance: (name: string) => {
        return `§2Alliance §3${name}§2 has been made!`
    },
    newMember: (name: string, member: string) => {
        return `§3${member}§2 has joined §3${name}§2!`
    }
}