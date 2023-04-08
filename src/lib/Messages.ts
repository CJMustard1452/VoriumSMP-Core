export const Messages = {
    noName: "§4You must provide an alliance name.",
    invalidName: "§4Invalid alliance name: Must be at least 3 characters long but not more than 15.",
    exists: "§4An alliance with that name already exists.",
    invited: (name: string) => { return  `§2You have been invited to join: §3${name}` },
    allianceWho: (name: string, leader: string, members: string[]) => {
        return `\n§2${name}§b\n§bLeader: §7${leader}\n§bMembers: §7${members.join(", ")}\n\n\n§o`
    },
    notAllowedAlliance: "§4You cannot do that, territory belongs to another alliance.",
    noOwnAlliance: "§4You do not own an alliance.",
    ownAlliance: "§4You already own an alliance.",
    ownAllianceLeave: "§4You cannot leave an alliance you own, use /alliance disband.",
    noInviteAny: "§4You do not have an invite from any alliance.",
    noInviteAlliance: "§4You do not have an invite from this alliance.",
    notPartOfAlliance: "§4You are part of that alliance.",
    inviteSelf: "§4You cannot invite yourself.",
    removeSelf: "§4You cannot remove yourself.",
    memberPartOfAlliance: "§4That user is already a member of this alliance.",
    memberNotPartOfAlliance: "§4That user is not a member of this alliance.",
    memberHasInvite: "§4That user already has an invite from another alliance.",
    invalidAlliance: "§4That alliance does not exist.",
    runCompleteClaim: "§4You already started a claim, run /alliance claim complete to complete it or /alliance claim cancel to cancel it.",
    runCompleteStart: "§4You have not started a claim, run /alliance claim start.",
    storedPos: "§2Stored current position, run /alliance claim complete at another position to complete the claim.",
    hasClaim: "§4You already have a claim.",
    tooLarge: "§4That claim is too large (more than 500x500).",
    insideClaim: "§4You cannot claim here since it is inside another claim.",
    intersectsClaim: "§4You cannot claim here since it intersects another claim.",
    createdClaim: "§2Successfully created a claim!",
    newAlliance: (name: string) => {
        return `§2Alliance §3${name}§2 has been made!`
    },
    deletedAlliance: (name: string) => {
        return `§2Alliance §3${name}§2 has been deleted!`
    },
    newMember: (name: string, member: string) => {
        return `§3${member}§2 has joined §3${name}§2!`
    },
    removedMember: (name: string, member: string) => {
        return `§3${member}§2 has been kicked from §3${name}§2!`
    },
    invitedMember: (name: string, member: string) => {
        return `§3${member}§2 has been invited by §3${name}§2!`
    },
    leftMember: (name: string, member: string) => {
        return `§3${member}§2 has left §3${name}§2!`
    },
    invalidArgument: "§4Invalid argument provided."
}