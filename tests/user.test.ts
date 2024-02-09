import { createPinia, setActivePinia } from "pinia"
import { test, describe, expect, beforeAll, beforeEach } from "vitest"
import { useUserStore } from "../stores/user"

beforeAll(() => {
    setActivePinia(createPinia())
})

describe('useUserStore', () => {
    let store: ReturnType<typeof useUserStore>;

    beforeEach(() => {
        store = useUserStore();
    });

    test('setToken', () => {
        store.setToken('token')
        expect(store.token).toBe('token')
    });

    test('fetchUser', async () => {
        await store.fetchUser()
        expect(store.user).toBeUndefined()
    });

    test('setUser', () => {
        store.setUser({
            id: 15,
            firstName: "Jeanne",
            lastName: "Halvorson",
            maidenName: "Cummerata",
            age: 26,
            gender: "female",
            email: "kminchelle@qq.com",
            phone: "+86 581 108 7855",
            username: "kminchelle",
            password: "0lelplR",
            birthDate: new Date("1996-02-02"),
            image: "https://robohash.org/Jeanne.png?set=set4",
            bloodGroup: "A+",
            height: 176,
            weight: 45.7,
            eyeColor: "Amber",
            hair: {
                color: "Blond",
                type: "Straight"
            },
            domain: "google.co.uk",
            ip: "78.43.74.226",
            address: {
                address: "4 Old Colony Way",
                city: "Yarmouth",
                coordinates: {
                    lat: 41.697168,
                    lng: -70.189992
                },
                postalCode: "02664",
                state: "MA"
            },
            macAddress: "D9:DB:D9:5A:01:09",
            university: "Donghua University, Shanghai",
            bank: {
                cardExpire: "10/23",
                cardNumber: "3588859507772914",
                cardType: "jcb",
                currency: "Yuan Renminbi",
                iban: "FO12 1440 0396 8902 56"
            },
            company: {
                address: {
                    address: "22572 Toreador Drive",
                    city: "Salinas",
                    coordinates: {
                        lat: 36.602449,
                        lng: -121.699071
                    },
                    postalCode: "93908",
                    state: "CA"
                },
                department: "Marketing",
                name: "Hahn-MacGyver",
                title: "Software Test Engineer IV"
            },
            ein: "62-0561095",
            ssn: "855-43-8639",
            userAgent: "Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.14 Safari/534.24",
            crypto: {
                coin: "Bitcoin",
                wallet: "0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5",
                network: "Ethereum (ERC20)"
            }
        })
        
        expect(store.user).toBeDefined()
    });

    test('logoutUser', () => {
        store.logoutUser()
        expect(store.user).toBeUndefined()
    })

    test('signIn', async () => {
        store.signIn({
            username: "kminchelle",
            password: "0lelplR"
        })
        
    })
})