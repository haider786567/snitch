import React from 'react'

const Google = () => {
    return (
        <div className="w-full">
        <a
            href="/api/auth/google"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#FFD700]/30 bg-white/5 px-4 py-3 text-sm font-medium text-[#e5e2e1] shadow-sm transition-all duration-300 hover:bg-[#FFD700] hover:text-black hover:shadow-lg hover:shadow-[#FFD700]/20 active:scale-[0.98]"
        >
            <svg
            className="h-5 w-5"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.3 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.967 3.043l5.657-5.657C34.409 6.053 29.458 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z" />
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.818C14.655 16.108 18.961 12 24 12c3.059 0 5.842 1.154 7.967 3.043l5.657-5.657C34.409 6.053 29.458 4 24 4c-7.868 0-14.654 4.435-17.694 10.691z" />
            <path fill="#4CAF50" d="M24 44c5.362 0 10.23-2.05 13.938-5.389l-6.437-5.444C29.414 34.477 26.9 35.5 24 35.5c-5.278 0-9.757-3.317-11.387-7.946l-6.53 5.03C9.05 39.385 16.01 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.237 3.498-3.993 6.166-7.363 7.167l.003-.002 6.437 5.444C34.97 39.266 40 35 40 24c0-1.341-.138-2.651-.389-3.917z" />
            </svg>
            Continue with Google
        </a>
        </div>
    )
}

export default Google