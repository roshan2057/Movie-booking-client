import React from 'react'

const Register = () => {
    return (
        <>
            <div class="h-scree flex justify-center items-center mt-20">
                <div class="lg:w-2/5 md:w-1/2 w-2/3">
                    <form class="bg-white p-10 rounded-lg shadow-lg min-w-full" action='/' method='get'>
                        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Register ..</h1>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="name">Name</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="name" id="name" placeholder="name" />
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Confirm password</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" />
                        </div>
                        <button type="submit" class="w-full mt-6 bg-orange-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register