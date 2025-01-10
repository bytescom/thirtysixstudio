import React from 'react'

const openrole = () => {
    return (
        <div class="max-w-3xl mx-auto p-32">
            <div class="flex justify-between items-center">
                <h2 class="text-lg font-medium">ROLES OPEN</h2>
                <button class="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                    <span class="text-sm">-</span>
                </button>
            </div>
            <div class="mt-4 divide-y divide-gray-300">
                <p class="py-3">Project Managers</p>
                <p class="py-3">Digital Producers</p>
                <p class="py-3">Designers</p>
                <p class="py-3">Illustrators</p>
                <p class="py-3">Animators</p>
                <p class="py-3">3D Artists</p>
                <p class="py-3">Motion Designers</p>
                <p class="py-3">Developers and Coders</p>
                <p class="py-3">Creative Technologists</p>
                <p class="py-3">Sound Engineers</p>
            </div>
        </div>
    )
}

export default openrole
