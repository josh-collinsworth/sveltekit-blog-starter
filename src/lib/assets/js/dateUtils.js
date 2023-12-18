// src/lib/dateUtils.js

export function formatDate(dateString) {
    const parts = dateString.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
