export const Messages = {
    noName: "§cYou must provide an alliance name.",
    invalidName: "§cInvalid alliance name: Must be at least c characters long but not more than 15.",
    exists: "§cAn alliance with that name already exists.",
    invited: (name: string) => { return  `§aYou have been invited to join: §c${name}` },
    allianceWho: (name: string, leader: string, members: string[]) => {
        return `\n§a${name}§b\n§bLeader: §7${leader}\n§bMembers: §7${members.join(", ")}\n\n\n§o`
    },
    notAllowedAlliance: "§7(§3VoriumSMP§7) §cYou cannot do that, territory belongs to another alliance.",
    noOwnAlliance: "§7(§3VoriumSMP§7) §cYou do not own an alliance.",
    ownAlliance: "§7(§3VoriumSMP§7) §cYou already own an alliance.",
    ownAllianceLeave: "§7(§3VoriumSMP§7) §cYou cannot leave an alliance you own, use /alliance disband.",
    noInviteAny: "§7(§3VoriumSMP§7) §cYou do not have an invite from any alliance.",
    noInviteAlliance: "§7(§3VoriumSMP§7) §cYou do not have an invite from this alliance.",
    notPartOfAlliance: "§7(§3VoriumSMP§7) §cYou are part of that alliance.",
    notInAlliance: "§7(§3VoriumSMP§7) §cYou are not in an alliance.",
    inviteSelf: "§7(§3VoriumSMP§7) §cYou cannot invite yourself.",
    removeSelf: "§7(§3VoriumSMP§7) §cYou cannot remove yourself.",
    memberPartOfAlliance: "§7(§3VoriumSMP§7) §cThat user is already a member of this alliance.",
    memberNotPartOfAlliance: "§7(§3VoriumSMP§7) §cThat user is not a member of this alliance.",
    memberHasInvite: "§7(§3VoriumSMP§7) §cThat user already has an invite from another alliance.",
    invalidAlliance: "§7(§3VoriumSMP§7) §cThat alliance does not exist.",
    runCompleteClaim: "§7(§3VoriumSMP§7) §cYou already started a claim, run /alliance claim complete to complete it or /alliance claim cancel to cancel it.",
    runCompleteStart: "§7(§3VoriumSMP§7) §cYou have not started a claim, run /alliance claim start.",
    storedPos: "§7(§3VoriumSMP§7) §aStored current position, run /alliance claim complete at another position to complete the claim.",
    hasClaim: "§7(§3VoriumSMP§7) §cYou already have a claim.",
    tooLarge: "§7(§3VoriumSMP§7) §cThat claim is too large (more than 500x500).",
    insideClaim: "§7(§3VoriumSMP§7) §cYou cannot claim here since it is inside another claim.",
    intersectsClaim: "§7(§3VoriumSMP§7) §cYou cannot claim here since it intersects another claim.",
    createdClaim: "§7(§3VoriumSMP§7) §aSuccessfully created a claim.",
    newAlliance: (name: string) => {
        return `§7(§3VoriumSMP§7) §aAlliance §c${name}§a has been made.`
    },
    deletedAlliance: (name: string) => {
        return `§7(§3VoriumSMP§7) §aAlliance §c${name}§a has been deleted.`
    },
    newMember: (name: string, member: string) => {
        return `§7(§3VoriumSMP§7) §c${member}§a has joined §c${name}§a.`
    },
    removedMember: (name: string, member: string) => {
        return `§7(§3VoriumSMP§7) §c${member}§a has been kicked from §c${name}§a.`
    },
    invitedMember: (name: string, member: string) => {
        return `§7(§3VoriumSMP§7) §c${member}§a has been invited to §c${name}§a.`
    },
    leftMember: (name: string, member: string) => {
        return `§7(§3VoriumSMP§7) §c${member}§a has left §c${name}§a.`
    },
    invalidArgument: "§7(§3VoriumSMP§7) §cInvalid argument provided."
}