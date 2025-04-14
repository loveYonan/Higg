"use client"

import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'


const NotFoundPage = () => {
    return (
        <div className=' h-screen flex gap-y-3 flex-col items-center justify-center '>
            <AlertTriangle className=' size-20 text-red-400' />
            <p className=' text-sm text-muted-foreground text-red-700'>
                Seems you ran into an Error
            </p>
            <Button size="lg" asChild>
                <Link href="/support">
                    Contact the support
                </Link>

            </Button>
        </div>
    )
}

export default NotFoundPage