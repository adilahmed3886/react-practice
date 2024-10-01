import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import service from '../../appwrite/configuration'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
          title: post?.title || '',
          content: post?.content || '',
          status: post?.status || 'draft',
          slug: post?.slug || '',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    
  return (
    <div>PostForm</div>
  )
}

export default PostForm