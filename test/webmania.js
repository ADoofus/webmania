/*! For license information please see webmania.js.LICENSE.txt */ ! function() {
	var t = {
			742: function(t, e) {
				"use strict";
				e.byteLength = function(t) {
					var e = h(t),
						i = e[0],
						r = e[1];
					return 3 * (i + r) / 4 - r
				}, e.toByteArray = function(t) {
					var e, i, o = h(t),
						s = o[0],
						a = o[1],
						u = new n(function(t, e, i) {
							return 3 * (e + i) / 4 - i
						}(0, s, a)),
						l = 0,
						c = a > 0 ? s - 4 : s;
					for (i = 0; i < c; i += 4) e = r[t.charCodeAt(i)] << 18 | r[t.charCodeAt(i + 1)] << 12 | r[t.charCodeAt(i + 2)] << 6 | r[t.charCodeAt(i + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e;
					return 2 === a && (e = r[t.charCodeAt(i)] << 2 | r[t.charCodeAt(i + 1)] >> 4, u[l++] = 255 & e), 1 === a && (e = r[t.charCodeAt(i)] << 10 | r[t.charCodeAt(i + 1)] << 4 | r[t.charCodeAt(i + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e), u
				}, e.fromByteArray = function(t) {
					for (var e, r = t.length, n = r % 3, o = [], s = 16383, a = 0, h = r - n; a < h; a += s) o.push(u(t, a, a + s > h ? h : a + s));
					return 1 === n ? (e = t[r - 1], o.push(i[e >> 2] + i[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], o.push(i[e >> 10] + i[e >> 4 & 63] + i[e << 2 & 63] + "=")), o.join("")
				};
				for (var i = [], r = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) i[s] = o[s], r[o.charCodeAt(s)] = s;

				function h(t) {
					var e = t.length;
					if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
					var i = t.indexOf("=");
					return -1 === i && (i = e), [i, i === e ? 0 : 4 - i % 4]
				}

				function u(t, e, r) {
					for (var n, o, s = [], a = e; a < r; a += 3) n = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(i[(o = n) >> 18 & 63] + i[o >> 12 & 63] + i[o >> 6 & 63] + i[63 & o]);
					return s.join("")
				}
				r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
			},
			764: function(t, e, i) {
				"use strict";
				const r = i(742),
					n = i(645),
					o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
				e.Buffer = h, e.SlowBuffer = function(t) {
					return +t != t && (t = 0), h.alloc(+t)
				}, e.INSPECT_MAX_BYTES = 50;
				const s = 2147483647;

				function a(t) {
					if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
					const e = new Uint8Array(t);
					return Object.setPrototypeOf(e, h.prototype), e
				}

				function h(t, e, i) {
					if ("number" == typeof t) {
						if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
						return c(t)
					}
					return u(t, e, i)
				}

				function u(t, e, i) {
					if ("string" == typeof t) return function(t, e) {
						if ("string" == typeof e && "" !== e || (e = "utf8"), !h.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
						const i = 0 | _(t, e);
						let r = a(i);
						const n = r.write(t, e);
						return n !== i && (r = r.slice(0, n)), r
					}(t, e);
					if (ArrayBuffer.isView(t)) return function(t) {
						if (K(t, Uint8Array)) {
							const e = new Uint8Array(t);
							return f(e.buffer, e.byteOffset, e.byteLength)
						}
						return d(t)
					}(t);
					if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
					if (K(t, ArrayBuffer) || t && K(t.buffer, ArrayBuffer)) return f(t, e, i);
					if ("undefined" != typeof SharedArrayBuffer && (K(t, SharedArrayBuffer) || t && K(t.buffer, SharedArrayBuffer))) return f(t, e, i);
					if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
					const r = t.valueOf && t.valueOf();
					if (null != r && r !== t) return h.from(r, e, i);
					const n = function(t) {
						if (h.isBuffer(t)) {
							const e = 0 | p(t.length),
								i = a(e);
							return 0 === i.length || t.copy(i, 0, 0, e), i
						}
						return void 0 !== t.length ? "number" != typeof t.length || Z(t.length) ? a(0) : d(t) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0
					}(t);
					if (n) return n;
					if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return h.from(t[Symbol.toPrimitive]("string"), e, i);
					throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
				}

				function l(t) {
					if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
					if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
				}

				function c(t) {
					return l(t), a(t < 0 ? 0 : 0 | p(t))
				}

				function d(t) {
					const e = t.length < 0 ? 0 : 0 | p(t.length),
						i = a(e);
					for (let r = 0; r < e; r += 1) i[r] = 255 & t[r];
					return i
				}

				function f(t, e, i) {
					if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
					if (t.byteLength < e + (i || 0)) throw new RangeError('"length" is outside of buffer bounds');
					let r;
					return r = void 0 === e && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, e) : new Uint8Array(t, e, i), Object.setPrototypeOf(r, h.prototype), r
				}

				function p(t) {
					if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
					return 0 | t
				}

				function _(t, e) {
					if (h.isBuffer(t)) return t.length;
					if (ArrayBuffer.isView(t) || K(t, ArrayBuffer)) return t.byteLength;
					if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
					const i = t.length,
						r = arguments.length > 2 && !0 === arguments[2];
					if (!r && 0 === i) return 0;
					let n = !1;
					for (;;) switch (e) {
						case "ascii":
						case "latin1":
						case "binary":
							return i;
						case "utf8":
						case "utf-8":
							return V(t).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * i;
						case "hex":
							return i >>> 1;
						case "base64":
							return W(t).length;
						default:
							if (n) return r ? -1 : V(t).length;
							e = ("" + e).toLowerCase(), n = !0
					}
				}

				function m(t, e, i) {
					let r = !1;
					if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
					if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
					if ((i >>>= 0) <= (e >>>= 0)) return "";
					for (t || (t = "utf8");;) switch (t) {
						case "hex":
							return P(this, e, i);
						case "utf8":
						case "utf-8":
							return w(this, e, i);
						case "ascii":
							return O(this, e, i);
						case "latin1":
						case "binary":
							return I(this, e, i);
						case "base64":
							return S(this, e, i);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return M(this, e, i);
						default:
							if (r) throw new TypeError("Unknown encoding: " + t);
							t = (t + "").toLowerCase(), r = !0
					}
				}

				function g(t, e, i) {
					const r = t[e];
					t[e] = t[i], t[i] = r
				}

				function y(t, e, i, r, n) {
					if (0 === t.length) return -1;
					if ("string" == typeof i ? (r = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), Z(i = +i) && (i = n ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
						if (n) return -1;
						i = t.length - 1
					} else if (i < 0) {
						if (!n) return -1;
						i = 0
					}
					if ("string" == typeof e && (e = h.from(e, r)), h.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, i, r, n);
					if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : v(t, [e], i, r, n);
					throw new TypeError("val must be string, number or Buffer")
				}

				function v(t, e, i, r, n) {
					let o, s = 1,
						a = t.length,
						h = e.length;
					if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if (t.length < 2 || e.length < 2) return -1;
						s = 2, a /= 2, h /= 2, i /= 2
					}

					function u(t, e) {
						return 1 === s ? t[e] : t.readUInt16BE(e * s)
					}
					if (n) {
						let r = -1;
						for (o = i; o < a; o++)
							if (u(t, o) === u(e, -1 === r ? 0 : o - r)) {
								if (-1 === r && (r = o), o - r + 1 === h) return r * s
							} else -1 !== r && (o -= o - r), r = -1
					} else
						for (i + h > a && (i = a - h), o = i; o >= 0; o--) {
							let i = !0;
							for (let r = 0; r < h; r++)
								if (u(t, o + r) !== u(e, r)) {
									i = !1;
									break
								} if (i) return o
						}
					return -1
				}

				function T(t, e, i, r) {
					i = Number(i) || 0;
					const n = t.length - i;
					r ? (r = Number(r)) > n && (r = n) : r = n;
					const o = e.length;
					let s;
					for (r > o / 2 && (r = o / 2), s = 0; s < r; ++s) {
						const r = parseInt(e.substr(2 * s, 2), 16);
						if (Z(r)) return s;
						t[i + s] = r
					}
					return s
				}

				function b(t, e, i, r) {
					return q(V(e, t.length - i), t, i, r)
				}

				function E(t, e, i, r) {
					return q(function(t) {
						const e = [];
						for (let i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
						return e
					}(e), t, i, r)
				}

				function x(t, e, i, r) {
					return q(W(e), t, i, r)
				}

				function A(t, e, i, r) {
					return q(function(t, e) {
						let i, r, n;
						const o = [];
						for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) i = t.charCodeAt(s), r = i >> 8, n = i % 256, o.push(n), o.push(r);
						return o
					}(e, t.length - i), t, i, r)
				}

				function S(t, e, i) {
					return 0 === e && i === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, i))
				}

				function w(t, e, i) {
					i = Math.min(t.length, i);
					const r = [];
					let n = e;
					for (; n < i;) {
						const e = t[n];
						let o = null,
							s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
						if (n + s <= i) {
							let i, r, a, h;
							switch (s) {
								case 1:
									e < 128 && (o = e);
									break;
								case 2:
									i = t[n + 1], 128 == (192 & i) && (h = (31 & e) << 6 | 63 & i, h > 127 && (o = h));
									break;
								case 3:
									i = t[n + 1], r = t[n + 2], 128 == (192 & i) && 128 == (192 & r) && (h = (15 & e) << 12 | (63 & i) << 6 | 63 & r, h > 2047 && (h < 55296 || h > 57343) && (o = h));
									break;
								case 4:
									i = t[n + 1], r = t[n + 2], a = t[n + 3], 128 == (192 & i) && 128 == (192 & r) && 128 == (192 & a) && (h = (15 & e) << 18 | (63 & i) << 12 | (63 & r) << 6 | 63 & a, h > 65535 && h < 1114112 && (o = h))
							}
						}
						null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), n += s
					}
					return function(t) {
						const e = t.length;
						if (e <= R) return String.fromCharCode.apply(String, t);
						let i = "",
							r = 0;
						for (; r < e;) i += String.fromCharCode.apply(String, t.slice(r, r += R));
						return i
					}(r)
				}
				e.kMaxLength = s, h.TYPED_ARRAY_SUPPORT = function() {
					try {
						const t = new Uint8Array(1),
							e = {
								foo: function() {
									return 42
								}
							};
						return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
					} catch (t) {
						return !1
					}
				}(), h.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(h.prototype, "parent", {
					enumerable: !0,
					get: function() {
						if (h.isBuffer(this)) return this.buffer
					}
				}), Object.defineProperty(h.prototype, "offset", {
					enumerable: !0,
					get: function() {
						if (h.isBuffer(this)) return this.byteOffset
					}
				}), h.poolSize = 8192, h.from = function(t, e, i) {
					return u(t, e, i)
				}, Object.setPrototypeOf(h.prototype, Uint8Array.prototype), Object.setPrototypeOf(h, Uint8Array), h.alloc = function(t, e, i) {
					return function(t, e, i) {
						return l(t), t <= 0 ? a(t) : void 0 !== e ? "string" == typeof i ? a(t).fill(e, i) : a(t).fill(e) : a(t)
					}(t, e, i)
				}, h.allocUnsafe = function(t) {
					return c(t)
				}, h.allocUnsafeSlow = function(t) {
					return c(t)
				}, h.isBuffer = function(t) {
					return null != t && !0 === t._isBuffer && t !== h.prototype
				}, h.compare = function(t, e) {
					if (K(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), K(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(t) || !h.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
					if (t === e) return 0;
					let i = t.length,
						r = e.length;
					for (let n = 0, o = Math.min(i, r); n < o; ++n)
						if (t[n] !== e[n]) {
							i = t[n], r = e[n];
							break
						} return i < r ? -1 : r < i ? 1 : 0
				}, h.isEncoding = function(t) {
					switch (String(t).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, h.concat = function(t, e) {
					if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === t.length) return h.alloc(0);
					let i;
					if (void 0 === e)
						for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
					const r = h.allocUnsafe(e);
					let n = 0;
					for (i = 0; i < t.length; ++i) {
						let e = t[i];
						if (K(e, Uint8Array)) n + e.length > r.length ? (h.isBuffer(e) || (e = h.from(e)), e.copy(r, n)) : Uint8Array.prototype.set.call(r, e, n);
						else {
							if (!h.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
							e.copy(r, n)
						}
						n += e.length
					}
					return r
				}, h.byteLength = _, h.prototype._isBuffer = !0, h.prototype.swap16 = function() {
					const t = this.length;
					if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (let e = 0; e < t; e += 2) g(this, e, e + 1);
					return this
				}, h.prototype.swap32 = function() {
					const t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (let e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
					return this
				}, h.prototype.swap64 = function() {
					const t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (let e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
					return this
				}, h.prototype.toString = function() {
					const t = this.length;
					return 0 === t ? "" : 0 === arguments.length ? w(this, 0, t) : m.apply(this, arguments)
				}, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(t) {
					if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === h.compare(this, t)
				}, h.prototype.inspect = function() {
					let t = "";
					const i = e.INSPECT_MAX_BYTES;
					return t = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (t += " ... "), "<Buffer " + t + ">"
				}, o && (h.prototype[o] = h.prototype.inspect), h.prototype.compare = function(t, e, i, r, n) {
					if (K(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
					if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === r && (r = 0), void 0 === n && (n = this.length), e < 0 || i > t.length || r < 0 || n > this.length) throw new RangeError("out of range index");
					if (r >= n && e >= i) return 0;
					if (r >= n) return -1;
					if (e >= i) return 1;
					if (this === t) return 0;
					let o = (n >>>= 0) - (r >>>= 0),
						s = (i >>>= 0) - (e >>>= 0);
					const a = Math.min(o, s),
						u = this.slice(r, n),
						l = t.slice(e, i);
					for (let t = 0; t < a; ++t)
						if (u[t] !== l[t]) {
							o = u[t], s = l[t];
							break
						} return o < s ? -1 : s < o ? 1 : 0
				}, h.prototype.includes = function(t, e, i) {
					return -1 !== this.indexOf(t, e, i)
				}, h.prototype.indexOf = function(t, e, i) {
					return y(this, t, e, i, !0)
				}, h.prototype.lastIndexOf = function(t, e, i) {
					return y(this, t, e, i, !1)
				}, h.prototype.write = function(t, e, i, r) {
					if (void 0 === e) r = "utf8", i = this.length, e = 0;
					else if (void 0 === i && "string" == typeof e) r = e, i = this.length, e = 0;
					else {
						if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						e >>>= 0, isFinite(i) ? (i >>>= 0, void 0 === r && (r = "utf8")) : (r = i, i = void 0)
					}
					const n = this.length - e;
					if ((void 0 === i || i > n) && (i = n), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					let o = !1;
					for (;;) switch (r) {
						case "hex":
							return T(this, t, e, i);
						case "utf8":
						case "utf-8":
							return b(this, t, e, i);
						case "ascii":
						case "latin1":
						case "binary":
							return E(this, t, e, i);
						case "base64":
							return x(this, t, e, i);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return A(this, t, e, i);
						default:
							if (o) throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(), o = !0
					}
				}, h.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};
				const R = 4096;

				function O(t, e, i) {
					let r = "";
					i = Math.min(t.length, i);
					for (let n = e; n < i; ++n) r += String.fromCharCode(127 & t[n]);
					return r
				}

				function I(t, e, i) {
					let r = "";
					i = Math.min(t.length, i);
					for (let n = e; n < i; ++n) r += String.fromCharCode(t[n]);
					return r
				}

				function P(t, e, i) {
					const r = t.length;
					(!e || e < 0) && (e = 0), (!i || i < 0 || i > r) && (i = r);
					let n = "";
					for (let r = e; r < i; ++r) n += J[t[r]];
					return n
				}

				function M(t, e, i) {
					const r = t.slice(e, i);
					let n = "";
					for (let t = 0; t < r.length - 1; t += 2) n += String.fromCharCode(r[t] + 256 * r[t + 1]);
					return n
				}

				function C(t, e, i) {
					if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
					if (t + e > i) throw new RangeError("Trying to access beyond buffer length")
				}

				function D(t, e, i, r, n, o) {
					if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (e > n || e < o) throw new RangeError('"value" argument is out of bounds');
					if (i + r > t.length) throw new RangeError("Index out of range")
				}

				function N(t, e, i, r, n) {
					H(e, r, n, t, i, 7);
					let o = Number(e & BigInt(4294967295));
					t[i++] = o, o >>= 8, t[i++] = o, o >>= 8, t[i++] = o, o >>= 8, t[i++] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[i++] = s, s >>= 8, t[i++] = s, s >>= 8, t[i++] = s, s >>= 8, t[i++] = s, i
				}

				function L(t, e, i, r, n) {
					H(e, r, n, t, i, 7);
					let o = Number(e & BigInt(4294967295));
					t[i + 7] = o, o >>= 8, t[i + 6] = o, o >>= 8, t[i + 5] = o, o >>= 8, t[i + 4] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[i + 3] = s, s >>= 8, t[i + 2] = s, s >>= 8, t[i + 1] = s, s >>= 8, t[i] = s, i + 8
				}

				function F(t, e, i, r, n, o) {
					if (i + r > t.length) throw new RangeError("Index out of range");
					if (i < 0) throw new RangeError("Index out of range")
				}

				function B(t, e, i, r, o) {
					return e = +e, i >>>= 0, o || F(t, 0, i, 4), n.write(t, e, i, r, 23, 4), i + 4
				}

				function U(t, e, i, r, o) {
					return e = +e, i >>>= 0, o || F(t, 0, i, 8), n.write(t, e, i, r, 52, 8), i + 8
				}
				h.prototype.slice = function(t, e) {
					const i = this.length;
					(t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), (e = void 0 === e ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), e < t && (e = t);
					const r = this.subarray(t, e);
					return Object.setPrototypeOf(r, h.prototype), r
				}, h.prototype.readUintLE = h.prototype.readUIntLE = function(t, e, i) {
					t >>>= 0, e >>>= 0, i || C(t, e, this.length);
					let r = this[t],
						n = 1,
						o = 0;
					for (; ++o < e && (n *= 256);) r += this[t + o] * n;
					return r
				}, h.prototype.readUintBE = h.prototype.readUIntBE = function(t, e, i) {
					t >>>= 0, e >>>= 0, i || C(t, e, this.length);
					let r = this[t + --e],
						n = 1;
					for (; e > 0 && (n *= 256);) r += this[t + --e] * n;
					return r
				}, h.prototype.readUint8 = h.prototype.readUInt8 = function(t, e) {
					return t >>>= 0, e || C(t, 1, this.length), this[t]
				}, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(t, e) {
					return t >>>= 0, e || C(t, 2, this.length), this[t] | this[t + 1] << 8
				}, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(t, e) {
					return t >>>= 0, e || C(t, 2, this.length), this[t] << 8 | this[t + 1]
				}, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(t, e) {
					return t >>>= 0, e || C(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
				}, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(t, e) {
					return t >>>= 0, e || C(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
				}, h.prototype.readBigUInt64LE = $((function(t) {
					j(t >>>= 0, "offset");
					const e = this[t],
						i = this[t + 7];
					void 0 !== e && void 0 !== i || z(t, this.length - 8);
					const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
						n = this[++t] + 256 * this[++t] + 65536 * this[++t] + i * 2 ** 24;
					return BigInt(r) + (BigInt(n) << BigInt(32))
				})), h.prototype.readBigUInt64BE = $((function(t) {
					j(t >>>= 0, "offset");
					const e = this[t],
						i = this[t + 7];
					void 0 !== e && void 0 !== i || z(t, this.length - 8);
					const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
						n = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + i;
					return (BigInt(r) << BigInt(32)) + BigInt(n)
				})), h.prototype.readIntLE = function(t, e, i) {
					t >>>= 0, e >>>= 0, i || C(t, e, this.length);
					let r = this[t],
						n = 1,
						o = 0;
					for (; ++o < e && (n *= 256);) r += this[t + o] * n;
					return n *= 128, r >= n && (r -= Math.pow(2, 8 * e)), r
				}, h.prototype.readIntBE = function(t, e, i) {
					t >>>= 0, e >>>= 0, i || C(t, e, this.length);
					let r = e,
						n = 1,
						o = this[t + --r];
					for (; r > 0 && (n *= 256);) o += this[t + --r] * n;
					return n *= 128, o >= n && (o -= Math.pow(2, 8 * e)), o
				}, h.prototype.readInt8 = function(t, e) {
					return t >>>= 0, e || C(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
				}, h.prototype.readInt16LE = function(t, e) {
					t >>>= 0, e || C(t, 2, this.length);
					const i = this[t] | this[t + 1] << 8;
					return 32768 & i ? 4294901760 | i : i
				}, h.prototype.readInt16BE = function(t, e) {
					t >>>= 0, e || C(t, 2, this.length);
					const i = this[t + 1] | this[t] << 8;
					return 32768 & i ? 4294901760 | i : i
				}, h.prototype.readInt32LE = function(t, e) {
					return t >>>= 0, e || C(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
				}, h.prototype.readInt32BE = function(t, e) {
					return t >>>= 0, e || C(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
				}, h.prototype.readBigInt64LE = $((function(t) {
					j(t >>>= 0, "offset");
					const e = this[t],
						i = this[t + 7];
					void 0 !== e && void 0 !== i || z(t, this.length - 8);
					const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (i << 24);
					return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
				})), h.prototype.readBigInt64BE = $((function(t) {
					j(t >>>= 0, "offset");
					const e = this[t],
						i = this[t + 7];
					void 0 !== e && void 0 !== i || z(t, this.length - 8);
					const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
					return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + i)
				})), h.prototype.readFloatLE = function(t, e) {
					return t >>>= 0, e || C(t, 4, this.length), n.read(this, t, !0, 23, 4)
				}, h.prototype.readFloatBE = function(t, e) {
					return t >>>= 0, e || C(t, 4, this.length), n.read(this, t, !1, 23, 4)
				}, h.prototype.readDoubleLE = function(t, e) {
					return t >>>= 0, e || C(t, 8, this.length), n.read(this, t, !0, 52, 8)
				}, h.prototype.readDoubleBE = function(t, e) {
					return t >>>= 0, e || C(t, 8, this.length), n.read(this, t, !1, 52, 8)
				}, h.prototype.writeUintLE = h.prototype.writeUIntLE = function(t, e, i, r) {
					t = +t, e >>>= 0, i >>>= 0, r || D(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
					let n = 1,
						o = 0;
					for (this[e] = 255 & t; ++o < i && (n *= 256);) this[e + o] = t / n & 255;
					return e + i
				}, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(t, e, i, r) {
					t = +t, e >>>= 0, i >>>= 0, r || D(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
					let n = i - 1,
						o = 1;
					for (this[e + n] = 255 & t; --n >= 0 && (o *= 256);) this[e + n] = t / o & 255;
					return e + i
				}, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
				}, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
				}, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, h.prototype.writeBigUInt64LE = $((function(t, e = 0) {
					return N(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), h.prototype.writeBigUInt64BE = $((function(t, e = 0) {
					return L(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), h.prototype.writeIntLE = function(t, e, i, r) {
					if (t = +t, e >>>= 0, !r) {
						const r = Math.pow(2, 8 * i - 1);
						D(this, t, e, i, r - 1, -r)
					}
					let n = 0,
						o = 1,
						s = 0;
					for (this[e] = 255 & t; ++n < i && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + n - 1] && (s = 1), this[e + n] = (t / o >> 0) - s & 255;
					return e + i
				}, h.prototype.writeIntBE = function(t, e, i, r) {
					if (t = +t, e >>>= 0, !r) {
						const r = Math.pow(2, 8 * i - 1);
						D(this, t, e, i, r - 1, -r)
					}
					let n = i - 1,
						o = 1,
						s = 0;
					for (this[e + n] = 255 & t; --n >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + n + 1] && (s = 1), this[e + n] = (t / o >> 0) - s & 255;
					return e + i
				}, h.prototype.writeInt8 = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
				}, h.prototype.writeInt16LE = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, h.prototype.writeInt16BE = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, h.prototype.writeInt32LE = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
				}, h.prototype.writeInt32BE = function(t, e, i) {
					return t = +t, e >>>= 0, i || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, h.prototype.writeBigInt64LE = $((function(t, e = 0) {
					return N(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), h.prototype.writeBigInt64BE = $((function(t, e = 0) {
					return L(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), h.prototype.writeFloatLE = function(t, e, i) {
					return B(this, t, e, !0, i)
				}, h.prototype.writeFloatBE = function(t, e, i) {
					return B(this, t, e, !1, i)
				}, h.prototype.writeDoubleLE = function(t, e, i) {
					return U(this, t, e, !0, i)
				}, h.prototype.writeDoubleBE = function(t, e, i) {
					return U(this, t, e, !1, i)
				}, h.prototype.copy = function(t, e, i, r) {
					if (!h.isBuffer(t)) throw new TypeError("argument should be a Buffer");
					if (i || (i = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < i && (r = i), r === i) return 0;
					if (0 === t.length || 0 === this.length) return 0;
					if (e < 0) throw new RangeError("targetStart out of bounds");
					if (i < 0 || i >= this.length) throw new RangeError("Index out of range");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), t.length - e < r - i && (r = t.length - e + i);
					const n = r - i;
					return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, i, r) : Uint8Array.prototype.set.call(t, this.subarray(i, r), e), n
				}, h.prototype.fill = function(t, e, i, r) {
					if ("string" == typeof t) {
						if ("string" == typeof e ? (r = e, e = 0, i = this.length) : "string" == typeof i && (r = i, i = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !h.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
						if (1 === t.length) {
							const e = t.charCodeAt(0);
							("utf8" === r && e < 128 || "latin1" === r) && (t = e)
						}
					} else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
					if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
					if (i <= e) return this;
					let n;
					if (e >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0), "number" == typeof t)
						for (n = e; n < i; ++n) this[n] = t;
					else {
						const o = h.isBuffer(t) ? t : h.from(t, r),
							s = o.length;
						if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
						for (n = 0; n < i - e; ++n) this[n + e] = o[n % s]
					}
					return this
				};
				const k = {};

				function G(t, e, i) {
					k[t] = class extends i {
						constructor() {
							super(), Object.defineProperty(this, "message", {
								value: e.apply(this, arguments),
								writable: !0,
								configurable: !0
							}), this.name = `${this.name} [${t}]`, this.stack, delete this.name
						}
						get code() {
							return t
						}
						set code(t) {
							Object.defineProperty(this, "code", {
								configurable: !0,
								enumerable: !0,
								value: t,
								writable: !0
							})
						}
						toString() {
							return `${this.name} [${t}]: ${this.message}`
						}
					}
				}

				function X(t) {
					let e = "",
						i = t.length;
					const r = "-" === t[0] ? 1 : 0;
					for (; i >= r + 4; i -= 3) e = `_${t.slice(i-3,i)}${e}`;
					return `${t.slice(0,i)}${e}`
				}

				function H(t, e, i, r, n, o) {
					if (t > i || t < e) {
						const r = "bigint" == typeof e ? "n" : "";
						let n;
						throw n = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(o+1)}${r}` : `>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}` : `>= ${e}${r} and <= ${i}${r}`, new k.ERR_OUT_OF_RANGE("value", n, t)
					}! function(t, e, i) {
						j(e, "offset"), void 0 !== t[e] && void 0 !== t[e + i] || z(e, t.length - (i + 1))
					}(r, n, o)
				}

				function j(t, e) {
					if ("number" != typeof t) throw new k.ERR_INVALID_ARG_TYPE(e, "number", t)
				}

				function z(t, e, i) {
					if (Math.floor(t) !== t) throw j(t, i), new k.ERR_OUT_OF_RANGE(i || "offset", "an integer", t);
					if (e < 0) throw new k.ERR_BUFFER_OUT_OF_BOUNDS;
					throw new k.ERR_OUT_OF_RANGE(i || "offset", `>= ${i?1:0} and <= ${e}`, t)
				}
				G("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
					return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
				}), RangeError), G("ERR_INVALID_ARG_TYPE", (function(t, e) {
					return `The "${t}" argument must be of type number. Received type ${typeof e}`
				}), TypeError), G("ERR_OUT_OF_RANGE", (function(t, e, i) {
					let r = `The value of "${t}" is out of range.`,
						n = i;
					return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? n = X(String(i)) : "bigint" == typeof i && (n = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (n = X(n)), n += "n"), r += ` It must be ${e}. Received ${n}`, r
				}), RangeError);
				const Y = /[^+/0-9A-Za-z-_]/g;

				function V(t, e) {
					let i;
					e = e || 1 / 0;
					const r = t.length;
					let n = null;
					const o = [];
					for (let s = 0; s < r; ++s) {
						if (i = t.charCodeAt(s), i > 55295 && i < 57344) {
							if (!n) {
								if (i > 56319) {
									(e -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								if (s + 1 === r) {
									(e -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								n = i;
								continue
							}
							if (i < 56320) {
								(e -= 3) > -1 && o.push(239, 191, 189), n = i;
								continue
							}
							i = 65536 + (n - 55296 << 10 | i - 56320)
						} else n && (e -= 3) > -1 && o.push(239, 191, 189);
						if (n = null, i < 128) {
							if ((e -= 1) < 0) break;
							o.push(i)
						} else if (i < 2048) {
							if ((e -= 2) < 0) break;
							o.push(i >> 6 | 192, 63 & i | 128)
						} else if (i < 65536) {
							if ((e -= 3) < 0) break;
							o.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
						} else {
							if (!(i < 1114112)) throw new Error("Invalid code point");
							if ((e -= 4) < 0) break;
							o.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
						}
					}
					return o
				}

				function W(t) {
					return r.toByteArray(function(t) {
						if ((t = (t = t.split("=")[0]).trim().replace(Y, "")).length < 2) return "";
						for (; t.length % 4 != 0;) t += "=";
						return t
					}(t))
				}

				function q(t, e, i, r) {
					let n;
					for (n = 0; n < r && !(n + i >= e.length || n >= t.length); ++n) e[n + i] = t[n];
					return n
				}

				function K(t, e) {
					return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
				}

				function Z(t) {
					return t != t
				}
				const J = function() {
					const t = "0123456789abcdef",
						e = new Array(256);
					for (let i = 0; i < 16; ++i) {
						const r = 16 * i;
						for (let n = 0; n < 16; ++n) e[r + n] = t[i] + t[n]
					}
					return e
				}();

				function $(t) {
					return "undefined" == typeof BigInt ? Q : t
				}

				function Q() {
					throw new Error("BigInt not supported")
				}
			},
			1: function(t) {
				"use strict";

				function e(t, e) {
					e = e || {}, this._head = 0, this._tail = 0, this._capacity = e.capacity, this._capacityMask = 3, this._list = new Array(4), Array.isArray(t) && this._fromArray(t)
				}
				e.prototype.peekAt = function(t) {
					var e = t;
					if (e === (0 | e)) {
						var i = this.size();
						if (!(e >= i || e < -i)) return e < 0 && (e += i), e = this._head + e & this._capacityMask, this._list[e]
					}
				}, e.prototype.get = function(t) {
					return this.peekAt(t)
				}, e.prototype.peek = function() {
					if (this._head !== this._tail) return this._list[this._head]
				}, e.prototype.peekFront = function() {
					return this.peek()
				}, e.prototype.peekBack = function() {
					return this.peekAt(-1)
				}, Object.defineProperty(e.prototype, "length", {
					get: function() {
						return this.size()
					}
				}), e.prototype.size = function() {
					return this._head === this._tail ? 0 : this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail)
				}, e.prototype.unshift = function(t) {
					if (0 === arguments.length) return this.size();
					var e = this._list.length;
					return this._head = this._head - 1 + e & this._capacityMask, this._list[this._head] = t, this._tail === this._head && this._growArray(), this._capacity && this.size() > this._capacity && this.pop(), this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail)
				}, e.prototype.shift = function() {
					var t = this._head;
					if (t !== this._tail) {
						var e = this._list[t];
						return this._list[t] = void 0, this._head = t + 1 & this._capacityMask, t < 2 && this._tail > 1e4 && this._tail <= this._list.length >>> 2 && this._shrinkArray(), e
					}
				}, e.prototype.push = function(t) {
					if (0 === arguments.length) return this.size();
					var e = this._tail;
					return this._list[e] = t, this._tail = e + 1 & this._capacityMask, this._tail === this._head && this._growArray(), this._capacity && this.size() > this._capacity && this.shift(), this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail)
				}, e.prototype.pop = function() {
					var t = this._tail;
					if (t !== this._head) {
						var e = this._list.length;
						this._tail = t - 1 + e & this._capacityMask;
						var i = this._list[this._tail];
						return this._list[this._tail] = void 0, this._head < 2 && t > 1e4 && t <= e >>> 2 && this._shrinkArray(), i
					}
				}, e.prototype.removeOne = function(t) {
					var e = t;
					if (e === (0 | e) && this._head !== this._tail) {
						var i = this.size(),
							r = this._list.length;
						if (!(e >= i || e < -i)) {
							e < 0 && (e += i), e = this._head + e & this._capacityMask;
							var n, o = this._list[e];
							if (t < i / 2) {
								for (n = t; n > 0; n--) this._list[e] = this._list[e = e - 1 + r & this._capacityMask];
								this._list[e] = void 0, this._head = this._head + 1 + r & this._capacityMask
							} else {
								for (n = i - 1 - t; n > 0; n--) this._list[e] = this._list[e = e + 1 + r & this._capacityMask];
								this._list[e] = void 0, this._tail = this._tail - 1 + r & this._capacityMask
							}
							return o
						}
					}
				}, e.prototype.remove = function(t, e) {
					var i, r = t,
						n = e;
					if (r === (0 | r) && this._head !== this._tail) {
						var o = this.size(),
							s = this._list.length;
						if (!(r >= o || r < -o || e < 1)) {
							if (r < 0 && (r += o), 1 === e || !e) return (i = new Array(1))[0] = this.removeOne(r), i;
							if (0 === r && r + e >= o) return i = this.toArray(), this.clear(), i;
							var a;
							for (r + e > o && (e = o - r), i = new Array(e), a = 0; a < e; a++) i[a] = this._list[this._head + r + a & this._capacityMask];
							if (r = this._head + r & this._capacityMask, t + e === o) {
								for (this._tail = this._tail - e + s & this._capacityMask, a = e; a > 0; a--) this._list[r = r + 1 + s & this._capacityMask] = void 0;
								return i
							}
							if (0 === t) {
								for (this._head = this._head + e + s & this._capacityMask, a = e - 1; a > 0; a--) this._list[r = r + 1 + s & this._capacityMask] = void 0;
								return i
							}
							if (r < o / 2) {
								for (this._head = this._head + t + e + s & this._capacityMask, a = t; a > 0; a--) this.unshift(this._list[r = r - 1 + s & this._capacityMask]);
								for (r = this._head - 1 + s & this._capacityMask; n > 0;) this._list[r = r - 1 + s & this._capacityMask] = void 0, n--;
								t < 0 && (this._tail = r)
							} else {
								for (this._tail = r, r = r + e + s & this._capacityMask, a = o - (e + t); a > 0; a--) this.push(this._list[r++]);
								for (r = this._tail; n > 0;) this._list[r = r + 1 + s & this._capacityMask] = void 0, n--
							}
							return this._head < 2 && this._tail > 1e4 && this._tail <= s >>> 2 && this._shrinkArray(), i
						}
					}
				}, e.prototype.splice = function(t, e) {
					var i = t;
					if (i === (0 | i)) {
						var r = this.size();
						if (i < 0 && (i += r), !(i > r)) {
							if (arguments.length > 2) {
								var n, o, s, a = arguments.length,
									h = this._list.length,
									u = 2;
								if (!r || i < r / 2) {
									for (o = new Array(i), n = 0; n < i; n++) o[n] = this._list[this._head + n & this._capacityMask];
									for (0 === e ? (s = [], i > 0 && (this._head = this._head + i + h & this._capacityMask)) : (s = this.remove(i, e), this._head = this._head + i + h & this._capacityMask); a > u;) this.unshift(arguments[--a]);
									for (n = i; n > 0; n--) this.unshift(o[n - 1])
								} else {
									var l = (o = new Array(r - (i + e))).length;
									for (n = 0; n < l; n++) o[n] = this._list[this._head + i + e + n & this._capacityMask];
									for (0 === e ? (s = [], i != r && (this._tail = this._head + i + h & this._capacityMask)) : (s = this.remove(i, e), this._tail = this._tail - l + h & this._capacityMask); u < a;) this.push(arguments[u++]);
									for (n = 0; n < l; n++) this.push(o[n])
								}
								return s
							}
							return this.remove(i, e)
						}
					}
				}, e.prototype.clear = function() {
					this._head = 0, this._tail = 0
				}, e.prototype.isEmpty = function() {
					return this._head === this._tail
				}, e.prototype.toArray = function() {
					return this._copyArray(!1)
				}, e.prototype._fromArray = function(t) {
					for (var e = 0; e < t.length; e++) this.push(t[e])
				}, e.prototype._copyArray = function(t) {
					var e, i = [],
						r = this._list,
						n = r.length;
					if (t || this._head > this._tail) {
						for (e = this._head; e < n; e++) i.push(r[e]);
						for (e = 0; e < this._tail; e++) i.push(r[e])
					} else
						for (e = this._head; e < this._tail; e++) i.push(r[e]);
					return i
				}, e.prototype._growArray = function() {
					this._head && (this._list = this._copyArray(!0), this._head = 0), this._tail = this._list.length, this._list.length <<= 1, this._capacityMask = this._capacityMask << 1 | 1
				}, e.prototype._shrinkArray = function() {
					this._list.length >>>= 1, this._capacityMask >>>= 1
				}, t.exports = e
			},
			187: function(t) {
				"use strict";

				function e(t, e, o) {
					o = o || 2;
					var s, a, h, c, d, p, _, m = e && e.length,
						g = m ? e[0] * o : t.length,
						y = i(t, 0, g, o, !0),
						v = [];
					if (!y || y.next === y.prev) return v;
					if (m && (y = function(t, e, n, o) {
							var s, a, h, c = [];
							for (s = 0, a = e.length; s < a; s++)(h = i(t, e[s] * o, s < a - 1 ? e[s + 1] * o : t.length, o, !1)) === h.next && (h.steiner = !0), c.push(f(h));
							for (c.sort(u), s = 0; s < c.length; s++) n = r(n = l(c[s], n), n.next);
							return n
						}(t, e, y, o)), t.length > 80 * o) {
						s = h = t[0], a = c = t[1];
						for (var T = o; T < g; T += o)(d = t[T]) < s && (s = d), (p = t[T + 1]) < a && (a = p), d > h && (h = d), p > c && (c = p);
						_ = 0 !== (_ = Math.max(h - s, c - a)) ? 1 / _ : 0
					}
					return n(y, v, o, s, a, _), v
				}

				function i(t, e, i, r, n) {
					var o, s;
					if (n === w(t, e, i, r) > 0)
						for (o = e; o < i; o += r) s = x(o, t[o], t[o + 1], s);
					else
						for (o = i - r; o >= e; o -= r) s = x(o, t[o], t[o + 1], s);
					return s && g(s, s.next) && (A(s), s = s.next), s
				}

				function r(t, e) {
					if (!t) return t;
					e || (e = t);
					var i, r = t;
					do {
						if (i = !1, r.steiner || !g(r, r.next) && 0 !== m(r.prev, r, r.next)) r = r.next;
						else {
							if (A(r), (r = e = r.prev) === r.next) break;
							i = !0
						}
					} while (i || r !== e);
					return e
				}

				function n(t, e, i, u, l, c, f) {
					if (t) {
						!f && c && function(t, e, i, r) {
							var n = t;
							do {
								null === n.z && (n.z = d(n.x, n.y, e, i, r)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next
							} while (n !== t);
							n.prevZ.nextZ = null, n.prevZ = null,
								function(t) {
									var e, i, r, n, o, s, a, h, u = 1;
									do {
										for (i = t, t = null, o = null, s = 0; i;) {
											for (s++, r = i, a = 0, e = 0; e < u && (a++, r = r.nextZ); e++);
											for (h = u; a > 0 || h > 0 && r;) 0 !== a && (0 === h || !r || i.z <= r.z) ? (n = i, i = i.nextZ, a--) : (n = r, r = r.nextZ, h--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
											i = r
										}
										o.nextZ = null, u *= 2
									} while (s > 1)
								}(n)
						}(t, u, l, c);
						for (var p, _, m = t; t.prev !== t.next;)
							if (p = t.prev, _ = t.next, c ? s(t, u, l, c) : o(t)) e.push(p.i / i), e.push(t.i / i), e.push(_.i / i), A(t), t = _.next, m = _.next;
							else if ((t = _) === m) {
							f ? 1 === f ? n(t = a(r(t), e, i), e, i, u, l, c, 2) : 2 === f && h(t, e, i, u, l, c) : n(r(t), e, i, u, l, c, 1);
							break
						}
					}
				}

				function o(t) {
					var e = t.prev,
						i = t,
						r = t.next;
					if (m(e, i, r) >= 0) return !1;
					for (var n = t.next.next; n !== t.prev;) {
						if (p(e.x, e.y, i.x, i.y, r.x, r.y, n.x, n.y) && m(n.prev, n, n.next) >= 0) return !1;
						n = n.next
					}
					return !0
				}

				function s(t, e, i, r) {
					var n = t.prev,
						o = t,
						s = t.next;
					if (m(n, o, s) >= 0) return !1;
					for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, h = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, u = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = d(a, h, e, i, r), f = d(u, l, e, i, r), _ = t.prevZ, g = t.nextZ; _ && _.z >= c && g && g.z <= f;) {
						if (_ !== t.prev && _ !== t.next && p(n.x, n.y, o.x, o.y, s.x, s.y, _.x, _.y) && m(_.prev, _, _.next) >= 0) return !1;
						if (_ = _.prevZ, g !== t.prev && g !== t.next && p(n.x, n.y, o.x, o.y, s.x, s.y, g.x, g.y) && m(g.prev, g, g.next) >= 0) return !1;
						g = g.nextZ
					}
					for (; _ && _.z >= c;) {
						if (_ !== t.prev && _ !== t.next && p(n.x, n.y, o.x, o.y, s.x, s.y, _.x, _.y) && m(_.prev, _, _.next) >= 0) return !1;
						_ = _.prevZ
					}
					for (; g && g.z <= f;) {
						if (g !== t.prev && g !== t.next && p(n.x, n.y, o.x, o.y, s.x, s.y, g.x, g.y) && m(g.prev, g, g.next) >= 0) return !1;
						g = g.nextZ
					}
					return !0
				}

				function a(t, e, i) {
					var n = t;
					do {
						var o = n.prev,
							s = n.next.next;
						!g(o, s) && y(o, n, n.next, s) && b(o, s) && b(s, o) && (e.push(o.i / i), e.push(n.i / i), e.push(s.i / i), A(n), A(n.next), n = t = s), n = n.next
					} while (n !== t);
					return r(n)
				}

				function h(t, e, i, o, s, a) {
					var h = t;
					do {
						for (var u = h.next.next; u !== h.prev;) {
							if (h.i !== u.i && _(h, u)) {
								var l = E(h, u);
								return h = r(h, h.next), l = r(l, l.next), n(h, e, i, o, s, a), void n(l, e, i, o, s, a)
							}
							u = u.next
						}
						h = h.next
					} while (h !== t)
				}

				function u(t, e) {
					return t.x - e.x
				}

				function l(t, e) {
					var i = function(t, e) {
						var i, r = e,
							n = t.x,
							o = t.y,
							s = -1 / 0;
						do {
							if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
								var a = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
								if (a <= n && a > s) {
									if (s = a, a === n) {
										if (o === r.y) return r;
										if (o === r.next.y) return r.next
									}
									i = r.x < r.next.x ? r : r.next
								}
							}
							r = r.next
						} while (r !== e);
						if (!i) return null;
						if (n === s) return i;
						var h, u = i,
							l = i.x,
							d = i.y,
							f = 1 / 0;
						r = i;
						do {
							n >= r.x && r.x >= l && n !== r.x && p(o < d ? n : s, o, l, d, o < d ? s : n, o, r.x, r.y) && (h = Math.abs(o - r.y) / (n - r.x), b(r, t) && (h < f || h === f && (r.x > i.x || r.x === i.x && c(i, r))) && (i = r, f = h)), r = r.next
						} while (r !== u);
						return i
					}(t, e);
					if (!i) return e;
					var n = E(i, t),
						o = r(i, i.next);
					return r(n, n.next), e === i ? o : e
				}

				function c(t, e) {
					return m(t.prev, t, e.prev) < 0 && m(e.next, t, t.next) < 0
				}

				function d(t, e, i, r, n) {
					return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
				}

				function f(t) {
					var e = t,
						i = t;
					do {
						(e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
					} while (e !== t);
					return i
				}

				function p(t, e, i, r, n, o, s, a) {
					return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (r - a) - (i - s) * (e - a) >= 0 && (i - s) * (o - a) - (n - s) * (r - a) >= 0
				}

				function _(t, e) {
					return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
						var i = t;
						do {
							if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && y(i, i.next, t, e)) return !0;
							i = i.next
						} while (i !== t);
						return !1
					}(t, e) && (b(t, e) && b(e, t) && function(t, e) {
						var i = t,
							r = !1,
							n = (t.x + e.x) / 2,
							o = (t.y + e.y) / 2;
						do {
							i.y > o != i.next.y > o && i.next.y !== i.y && n < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next
						} while (i !== t);
						return r
					}(t, e) && (m(t.prev, t, e.prev) || m(t, e.prev, e)) || g(t, e) && m(t.prev, t, t.next) > 0 && m(e.prev, e, e.next) > 0)
				}

				function m(t, e, i) {
					return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
				}

				function g(t, e) {
					return t.x === e.x && t.y === e.y
				}

				function y(t, e, i, r) {
					var n = T(m(t, e, i)),
						o = T(m(t, e, r)),
						s = T(m(i, r, t)),
						a = T(m(i, r, e));
					return n !== o && s !== a || !(0 !== n || !v(t, i, e)) || !(0 !== o || !v(t, r, e)) || !(0 !== s || !v(i, t, r)) || !(0 !== a || !v(i, e, r))
				}

				function v(t, e, i) {
					return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y)
				}

				function T(t) {
					return t > 0 ? 1 : t < 0 ? -1 : 0
				}

				function b(t, e) {
					return m(t.prev, t, t.next) < 0 ? m(t, e, t.next) >= 0 && m(t, t.prev, e) >= 0 : m(t, e, t.prev) < 0 || m(t, t.next, e) < 0
				}

				function E(t, e) {
					var i = new S(t.i, t.x, t.y),
						r = new S(e.i, e.x, e.y),
						n = t.next,
						o = e.prev;
					return t.next = e, e.prev = t, i.next = n, n.prev = i, r.next = i, i.prev = r, o.next = r, r.prev = o, r
				}

				function x(t, e, i, r) {
					var n = new S(t, e, i);
					return r ? (n.next = r.next, n.prev = r, r.next.prev = n, r.next = n) : (n.prev = n, n.next = n), n
				}

				function A(t) {
					t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
				}

				function S(t, e, i) {
					this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
				}

				function w(t, e, i, r) {
					for (var n = 0, o = e, s = i - r; o < i; o += r) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
					return n
				}
				t.exports = e, t.exports.default = e, e.deviation = function(t, e, i, r) {
					var n = e && e.length,
						o = n ? e[0] * i : t.length,
						s = Math.abs(w(t, 0, o, i));
					if (n)
						for (var a = 0, h = e.length; a < h; a++) {
							var u = e[a] * i,
								l = a < h - 1 ? e[a + 1] * i : t.length;
							s -= Math.abs(w(t, u, l, i))
						}
					var c = 0;
					for (a = 0; a < r.length; a += 3) {
						var d = r[a] * i,
							f = r[a + 1] * i,
							p = r[a + 2] * i;
						c += Math.abs((t[d] - t[p]) * (t[f + 1] - t[d + 1]) - (t[d] - t[f]) * (t[p + 1] - t[d + 1]))
					}
					return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
				}, e.flatten = function(t) {
					for (var e = t[0][0].length, i = {
							vertices: [],
							holes: [],
							dimensions: e
						}, r = 0, n = 0; n < t.length; n++) {
						for (var o = 0; o < t[n].length; o++)
							for (var s = 0; s < e; s++) i.vertices.push(t[n][o][s]);
						n > 0 && (r += t[n - 1].length, i.holes.push(r))
					}
					return i
				}
			},
			729: function(t) {
				"use strict";
				var e = Object.prototype.hasOwnProperty,
					i = "~";

				function r() {}

				function n(t, e, i) {
					this.fn = t, this.context = e, this.once = i || !1
				}

				function o(t, e, r, o, s) {
					if ("function" != typeof r) throw new TypeError("The listener must be a function");
					var a = new n(r, o || t, s),
						h = i ? i + e : e;
					return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], a] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t
				}

				function s(t, e) {
					0 == --t._eventsCount ? t._events = new r : delete t._events[e]
				}

				function a() {
					this._events = new r, this._eventsCount = 0
				}
				Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (i = !1)), a.prototype.eventNames = function() {
					var t, r, n = [];
					if (0 === this._eventsCount) return n;
					for (r in t = this._events) e.call(t, r) && n.push(i ? r.slice(1) : r);
					return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
				}, a.prototype.listeners = function(t) {
					var e = i ? i + t : t,
						r = this._events[e];
					if (!r) return [];
					if (r.fn) return [r.fn];
					for (var n = 0, o = r.length, s = new Array(o); n < o; n++) s[n] = r[n].fn;
					return s
				}, a.prototype.listenerCount = function(t) {
					var e = i ? i + t : t,
						r = this._events[e];
					return r ? r.fn ? 1 : r.length : 0
				}, a.prototype.emit = function(t, e, r, n, o, s) {
					var a = i ? i + t : t;
					if (!this._events[a]) return !1;
					var h, u, l = this._events[a],
						c = arguments.length;
					if (l.fn) {
						switch (l.once && this.removeListener(t, l.fn, void 0, !0), c) {
							case 1:
								return l.fn.call(l.context), !0;
							case 2:
								return l.fn.call(l.context, e), !0;
							case 3:
								return l.fn.call(l.context, e, r), !0;
							case 4:
								return l.fn.call(l.context, e, r, n), !0;
							case 5:
								return l.fn.call(l.context, e, r, n, o), !0;
							case 6:
								return l.fn.call(l.context, e, r, n, o, s), !0
						}
						for (u = 1, h = new Array(c - 1); u < c; u++) h[u - 1] = arguments[u];
						l.fn.apply(l.context, h)
					} else {
						var d, f = l.length;
						for (u = 0; u < f; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), c) {
							case 1:
								l[u].fn.call(l[u].context);
								break;
							case 2:
								l[u].fn.call(l[u].context, e);
								break;
							case 3:
								l[u].fn.call(l[u].context, e, r);
								break;
							case 4:
								l[u].fn.call(l[u].context, e, r, n);
								break;
							default:
								if (!h)
									for (d = 1, h = new Array(c - 1); d < c; d++) h[d - 1] = arguments[d];
								l[u].fn.apply(l[u].context, h)
						}
					}
					return !0
				}, a.prototype.on = function(t, e, i) {
					return o(this, t, e, i, !1)
				}, a.prototype.once = function(t, e, i) {
					return o(this, t, e, i, !0)
				}, a.prototype.removeListener = function(t, e, r, n) {
					var o = i ? i + t : t;
					if (!this._events[o]) return this;
					if (!e) return s(this, o), this;
					var a = this._events[o];
					if (a.fn) a.fn !== e || n && !a.once || r && a.context !== r || s(this, o);
					else {
						for (var h = 0, u = [], l = a.length; h < l; h++)(a[h].fn !== e || n && !a[h].once || r && a[h].context !== r) && u.push(a[h]);
						u.length ? this._events[o] = 1 === u.length ? u[0] : u : s(this, o)
					}
					return this
				}, a.prototype.removeAllListeners = function(t) {
					var e;
					return t ? (e = i ? i + t : t, this._events[e] && s(this, e)) : (this._events = new r, this._eventsCount = 0), this
				}, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, t.exports = a
			},
			766: function(t, e, i) {
				var r;
				! function() {
					"use strict";
					var n = function() {
						this.init()
					};
					n.prototype = {
						init: function() {
							var t = this || o;
							return t._counter = 1e3, t._html5AudioPool = [], t.html5PoolSize = 10, t._codecs = {}, t._howls = [], t._muted = !1, t._volume = 1, t._canPlayEvent = "canplaythrough", t._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, t.masterGain = null, t.noAudio = !1, t.usingWebAudio = !0, t.autoSuspend = !0, t.ctx = null, t.autoUnlock = !0, t._setup(), t
						},
						volume: function(t) {
							var e = this || o;
							if (t = parseFloat(t), e.ctx || f(), void 0 !== t && t >= 0 && t <= 1) {
								if (e._volume = t, e._muted) return e;
								e.usingWebAudio && e.masterGain.gain.setValueAtTime(t, o.ctx.currentTime);
								for (var i = 0; i < e._howls.length; i++)
									if (!e._howls[i]._webAudio)
										for (var r = e._howls[i]._getSoundIds(), n = 0; n < r.length; n++) {
											var s = e._howls[i]._soundById(r[n]);
											s && s._node && (s._node.volume = s._volume * t)
										}
								return e
							}
							return e._volume
						},
						mute: function(t) {
							var e = this || o;
							e.ctx || f(), e._muted = t, e.usingWebAudio && e.masterGain.gain.setValueAtTime(t ? 0 : e._volume, o.ctx.currentTime);
							for (var i = 0; i < e._howls.length; i++)
								if (!e._howls[i]._webAudio)
									for (var r = e._howls[i]._getSoundIds(), n = 0; n < r.length; n++) {
										var s = e._howls[i]._soundById(r[n]);
										s && s._node && (s._node.muted = !!t || s._muted)
									}
							return e
						},
						stop: function() {
							for (var t = this || o, e = 0; e < t._howls.length; e++) t._howls[e].stop();
							return t
						},
						unload: function() {
							for (var t = this || o, e = t._howls.length - 1; e >= 0; e--) t._howls[e].unload();
							return t.usingWebAudio && t.ctx && void 0 !== t.ctx.close && (t.ctx.close(), t.ctx = null, f()), t
						},
						codecs: function(t) {
							return (this || o)._codecs[t.replace(/^x-/, "")]
						},
						_setup: function() {
							var t = this || o;
							if (t.state = t.ctx && t.ctx.state || "suspended", t._autoSuspend(), !t.usingWebAudio)
								if ("undefined" != typeof Audio) try {
									void 0 === (new Audio).oncanplaythrough && (t._canPlayEvent = "canplay")
								} catch (e) {
									t.noAudio = !0
								} else t.noAudio = !0;
							try {
								(new Audio).muted && (t.noAudio = !0)
							} catch (t) {}
							return t.noAudio || t._setupCodecs(), t
						},
						_setupCodecs: function() {
							var t = this || o,
								e = null;
							try {
								e = "undefined" != typeof Audio ? new Audio : null
							} catch (e) {
								return t
							}
							if (!e || "function" != typeof e.canPlayType) return t;
							var i = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
								r = t._navigator ? t._navigator.userAgent : "",
								n = r.match(/OPR\/([0-6].)/g),
								s = n && parseInt(n[0].split("/")[1], 10) < 33,
								a = -1 !== r.indexOf("Safari") && -1 === r.indexOf("Chrome"),
								h = r.match(/Version\/(.*?) /),
								u = a && h && parseInt(h[1], 10) < 15;
							return t._codecs = {
								mp3: !(s || !i && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
								mpeg: !!i,
								opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
								ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
								oga: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
								wav: !!(e.canPlayType('audio/wav; codecs="1"') || e.canPlayType("audio/wav")).replace(/^no$/, ""),
								aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
								caf: !!e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
								m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
								m4b: !!(e.canPlayType("audio/x-m4b;") || e.canPlayType("audio/m4b;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
								mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
								weba: !(u || !e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
								webm: !(u || !e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
								dolby: !!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
								flac: !!(e.canPlayType("audio/x-flac;") || e.canPlayType("audio/flac;")).replace(/^no$/, "")
							}, t
						},
						_unlockAudio: function() {
							var t = this || o;
							if (!t._audioUnlocked && t.ctx) {
								t._audioUnlocked = !1, t.autoUnlock = !1, t._mobileUnloaded || 44100 === t.ctx.sampleRate || (t._mobileUnloaded = !0, t.unload()), t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050);
								var e = function(i) {
									for (; t._html5AudioPool.length < t.html5PoolSize;) try {
										var r = new Audio;
										r._unlocked = !0, t._releaseHtml5Audio(r)
									} catch (i) {
										t.noAudio = !0;
										break
									}
									for (var n = 0; n < t._howls.length; n++)
										if (!t._howls[n]._webAudio)
											for (var o = t._howls[n]._getSoundIds(), s = 0; s < o.length; s++) {
												var a = t._howls[n]._soundById(o[s]);
												a && a._node && !a._node._unlocked && (a._node._unlocked = !0, a._node.load())
											}
									t._autoResume();
									var h = t.ctx.createBufferSource();
									h.buffer = t._scratchBuffer, h.connect(t.ctx.destination), void 0 === h.start ? h.noteOn(0) : h.start(0), "function" == typeof t.ctx.resume && t.ctx.resume(), h.onended = function() {
										h.disconnect(0), t._audioUnlocked = !0, document.removeEventListener("touchstart", e, !0), document.removeEventListener("touchend", e, !0), document.removeEventListener("click", e, !0), document.removeEventListener("keydown", e, !0);
										for (var i = 0; i < t._howls.length; i++) t._howls[i]._emit("unlock")
									}
								};
								return document.addEventListener("touchstart", e, !0), document.addEventListener("touchend", e, !0), document.addEventListener("click", e, !0), document.addEventListener("keydown", e, !0), t
							}
						},
						_obtainHtml5Audio: function() {
							var t = this || o;
							if (t._html5AudioPool.length) return t._html5AudioPool.pop();
							var e = (new Audio).play();
							return e && "undefined" != typeof Promise && (e instanceof Promise || "function" == typeof e.then) && e.catch((function() {
								console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
							})), new Audio
						},
						_releaseHtml5Audio: function(t) {
							var e = this || o;
							return t._unlocked && e._html5AudioPool.push(t), e
						},
						_autoSuspend: function() {
							var t = this;
							if (t.autoSuspend && t.ctx && void 0 !== t.ctx.suspend && o.usingWebAudio) {
								for (var e = 0; e < t._howls.length; e++)
									if (t._howls[e]._webAudio)
										for (var i = 0; i < t._howls[e]._sounds.length; i++)
											if (!t._howls[e]._sounds[i]._paused) return t;
								return t._suspendTimer && clearTimeout(t._suspendTimer), t._suspendTimer = setTimeout((function() {
									if (t.autoSuspend) {
										t._suspendTimer = null, t.state = "suspending";
										var e = function() {
											t.state = "suspended", t._resumeAfterSuspend && (delete t._resumeAfterSuspend, t._autoResume())
										};
										t.ctx.suspend().then(e, e)
									}
								}), 3e4), t
							}
						},
						_autoResume: function() {
							var t = this;
							if (t.ctx && void 0 !== t.ctx.resume && o.usingWebAudio) return "running" === t.state && "interrupted" !== t.ctx.state && t._suspendTimer ? (clearTimeout(t._suspendTimer), t._suspendTimer = null) : "suspended" === t.state || "running" === t.state && "interrupted" === t.ctx.state ? (t.ctx.resume().then((function() {
								t.state = "running";
								for (var e = 0; e < t._howls.length; e++) t._howls[e]._emit("resume")
							})), t._suspendTimer && (clearTimeout(t._suspendTimer), t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0), t
						}
					};
					var o = new n,
						s = function(t) {
							t.src && 0 !== t.src.length ? this.init(t) : console.error("An array of source files must be passed with any new Howl.")
						};
					s.prototype = {
						init: function(t) {
							var e = this;
							return o.ctx || f(), e._autoplay = t.autoplay || !1, e._format = "string" != typeof t.format ? t.format : [t.format], e._html5 = t.html5 || !1, e._muted = t.mute || !1, e._loop = t.loop || !1, e._pool = t.pool || 5, e._preload = "boolean" != typeof t.preload && "metadata" !== t.preload || t.preload, e._rate = t.rate || 1, e._sprite = t.sprite || {}, e._src = "string" != typeof t.src ? t.src : [t.src], e._volume = void 0 !== t.volume ? t.volume : 1, e._xhr = {
								method: t.xhr && t.xhr.method ? t.xhr.method : "GET",
								headers: t.xhr && t.xhr.headers ? t.xhr.headers : null,
								withCredentials: !(!t.xhr || !t.xhr.withCredentials) && t.xhr.withCredentials
							}, e._duration = 0, e._state = "unloaded", e._sounds = [], e._endTimers = {}, e._queue = [], e._playLock = !1, e._onend = t.onend ? [{
								fn: t.onend
							}] : [], e._onfade = t.onfade ? [{
								fn: t.onfade
							}] : [], e._onload = t.onload ? [{
								fn: t.onload
							}] : [], e._onloaderror = t.onloaderror ? [{
								fn: t.onloaderror
							}] : [], e._onplayerror = t.onplayerror ? [{
								fn: t.onplayerror
							}] : [], e._onpause = t.onpause ? [{
								fn: t.onpause
							}] : [], e._onplay = t.onplay ? [{
								fn: t.onplay
							}] : [], e._onstop = t.onstop ? [{
								fn: t.onstop
							}] : [], e._onmute = t.onmute ? [{
								fn: t.onmute
							}] : [], e._onvolume = t.onvolume ? [{
								fn: t.onvolume
							}] : [], e._onrate = t.onrate ? [{
								fn: t.onrate
							}] : [], e._onseek = t.onseek ? [{
								fn: t.onseek
							}] : [], e._onunlock = t.onunlock ? [{
								fn: t.onunlock
							}] : [], e._onresume = [], e._webAudio = o.usingWebAudio && !e._html5, void 0 !== o.ctx && o.ctx && o.autoUnlock && o._unlockAudio(), o._howls.push(e), e._autoplay && e._queue.push({
								event: "play",
								action: function() {
									e.play()
								}
							}), e._preload && "none" !== e._preload && e.load(), e
						},
						load: function() {
							var t = this,
								e = null;
							if (o.noAudio) t._emit("loaderror", null, "No audio support.");
							else {
								"string" == typeof t._src && (t._src = [t._src]);
								for (var i = 0; i < t._src.length; i++) {
									var r, n;
									if (t._format && t._format[i]) r = t._format[i];
									else {
										if ("string" != typeof(n = t._src[i])) {
											t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
											continue
										}(r = /^data:audio\/([^;,]+);/i.exec(n)) || (r = /\.([^.]+)$/.exec(n.split("?", 1)[0])), r && (r = r[1].toLowerCase())
									}
									if (r || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), r && o.codecs(r)) {
										e = t._src[i];
										break
									}
								}
								if (e) return t._src = e, t._state = "loading", "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (t._html5 = !0, t._webAudio = !1), new a(t), t._webAudio && u(t), t;
								t._emit("loaderror", null, "No codec support for selected audio sources.")
							}
						},
						play: function(t, e) {
							var i = this,
								r = null;
							if ("number" == typeof t) r = t, t = null;
							else {
								if ("string" == typeof t && "loaded" === i._state && !i._sprite[t]) return null;
								if (void 0 === t && (t = "__default", !i._playLock)) {
									for (var n = 0, s = 0; s < i._sounds.length; s++) i._sounds[s]._paused && !i._sounds[s]._ended && (n++, r = i._sounds[s]._id);
									1 === n ? t = null : r = null
								}
							}
							var a = r ? i._soundById(r) : i._inactiveSound();
							if (!a) return null;
							if (r && !t && (t = a._sprite || "__default"), "loaded" !== i._state) {
								a._sprite = t, a._ended = !1;
								var h = a._id;
								return i._queue.push({
									event: "play",
									action: function() {
										i.play(h)
									}
								}), h
							}
							if (r && !a._paused) return e || i._loadQueue("play"), a._id;
							i._webAudio && o._autoResume();
							var u = Math.max(0, a._seek > 0 ? a._seek : i._sprite[t][0] / 1e3),
								l = Math.max(0, (i._sprite[t][0] + i._sprite[t][1]) / 1e3 - u),
								c = 1e3 * l / Math.abs(a._rate),
								d = i._sprite[t][0] / 1e3,
								f = (i._sprite[t][0] + i._sprite[t][1]) / 1e3;
							a._sprite = t, a._ended = !1;
							var p = function() {
								a._paused = !1, a._seek = u, a._start = d, a._stop = f, a._loop = !(!a._loop && !i._sprite[t][2])
							};
							if (!(u >= f)) {
								var _ = a._node;
								if (i._webAudio) {
									var m = function() {
										i._playLock = !1, p(), i._refreshBuffer(a);
										var t = a._muted || i._muted ? 0 : a._volume;
										_.gain.setValueAtTime(t, o.ctx.currentTime), a._playStart = o.ctx.currentTime, void 0 === _.bufferSource.start ? a._loop ? _.bufferSource.noteGrainOn(0, u, 86400) : _.bufferSource.noteGrainOn(0, u, l) : a._loop ? _.bufferSource.start(0, u, 86400) : _.bufferSource.start(0, u, l), c !== 1 / 0 && (i._endTimers[a._id] = setTimeout(i._ended.bind(i, a), c)), e || setTimeout((function() {
											i._emit("play", a._id), i._loadQueue()
										}), 0)
									};
									"running" === o.state && "interrupted" !== o.ctx.state ? m() : (i._playLock = !0, i.once("resume", m), i._clearTimer(a._id))
								} else {
									var g = function() {
										_.currentTime = u, _.muted = a._muted || i._muted || o._muted || _.muted, _.volume = a._volume * o.volume(), _.playbackRate = a._rate;
										try {
											var r = _.play();
											if (r && "undefined" != typeof Promise && (r instanceof Promise || "function" == typeof r.then) ? (i._playLock = !0, p(), r.then((function() {
													i._playLock = !1, _._unlocked = !0, e ? i._loadQueue() : i._emit("play", a._id)
												})).catch((function() {
													i._playLock = !1, i._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), a._ended = !0, a._paused = !0
												}))) : e || (i._playLock = !1, p(), i._emit("play", a._id)), _.playbackRate = a._rate, _.paused) return void i._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
											"__default" !== t || a._loop ? i._endTimers[a._id] = setTimeout(i._ended.bind(i, a), c) : (i._endTimers[a._id] = function() {
												i._ended(a), _.removeEventListener("ended", i._endTimers[a._id], !1)
											}, _.addEventListener("ended", i._endTimers[a._id], !1))
										} catch (t) {
											i._emit("playerror", a._id, t)
										}
									};
									"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === _.src && (_.src = i._src, _.load());
									var y = window && window.ejecta || !_.readyState && o._navigator.isCocoonJS;
									if (_.readyState >= 3 || y) g();
									else {
										i._playLock = !0, i._state = "loading";
										var v = function() {
											i._state = "loaded", g(), _.removeEventListener(o._canPlayEvent, v, !1)
										};
										_.addEventListener(o._canPlayEvent, v, !1), i._clearTimer(a._id)
									}
								}
								return a._id
							}
							i._ended(a)
						},
						pause: function(t) {
							var e = this;
							if ("loaded" !== e._state || e._playLock) return e._queue.push({
								event: "pause",
								action: function() {
									e.pause(t)
								}
							}), e;
							for (var i = e._getSoundIds(t), r = 0; r < i.length; r++) {
								e._clearTimer(i[r]);
								var n = e._soundById(i[r]);
								if (n && !n._paused && (n._seek = e.seek(i[r]), n._rateSeek = 0, n._paused = !0, e._stopFade(i[r]), n._node))
									if (e._webAudio) {
										if (!n._node.bufferSource) continue;
										void 0 === n._node.bufferSource.stop ? n._node.bufferSource.noteOff(0) : n._node.bufferSource.stop(0), e._cleanBuffer(n._node)
									} else isNaN(n._node.duration) && n._node.duration !== 1 / 0 || n._node.pause();
								arguments[1] || e._emit("pause", n ? n._id : null)
							}
							return e
						},
						stop: function(t, e) {
							var i = this;
							if ("loaded" !== i._state || i._playLock) return i._queue.push({
								event: "stop",
								action: function() {
									i.stop(t)
								}
							}), i;
							for (var r = i._getSoundIds(t), n = 0; n < r.length; n++) {
								i._clearTimer(r[n]);
								var o = i._soundById(r[n]);
								o && (o._seek = o._start || 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, i._stopFade(r[n]), o._node && (i._webAudio ? o._node.bufferSource && (void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), i._cleanBuffer(o._node)) : isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0, o._node.pause(), o._node.duration === 1 / 0 && i._clearSound(o._node))), e || i._emit("stop", o._id))
							}
							return i
						},
						mute: function(t, e) {
							var i = this;
							if ("loaded" !== i._state || i._playLock) return i._queue.push({
								event: "mute",
								action: function() {
									i.mute(t, e)
								}
							}), i;
							if (void 0 === e) {
								if ("boolean" != typeof t) return i._muted;
								i._muted = t
							}
							for (var r = i._getSoundIds(e), n = 0; n < r.length; n++) {
								var s = i._soundById(r[n]);
								s && (s._muted = t, s._interval && i._stopFade(s._id), i._webAudio && s._node ? s._node.gain.setValueAtTime(t ? 0 : s._volume, o.ctx.currentTime) : s._node && (s._node.muted = !!o._muted || t), i._emit("mute", s._id))
							}
							return i
						},
						volume: function() {
							var t, e, i, r = this,
								n = arguments;
							if (0 === n.length) return r._volume;
							if (1 === n.length || 2 === n.length && void 0 === n[1]) {
								var s = r._getSoundIds(),
									a = s.indexOf(n[0]);
								a >= 0 ? e = parseInt(n[0], 10) : t = parseFloat(n[0])
							} else n.length >= 2 && (t = parseFloat(n[0]), e = parseInt(n[1], 10));
							if (!(void 0 !== t && t >= 0 && t <= 1)) return (i = e ? r._soundById(e) : r._sounds[0]) ? i._volume : 0;
							if ("loaded" !== r._state || r._playLock) return r._queue.push({
								event: "volume",
								action: function() {
									r.volume.apply(r, n)
								}
							}), r;
							void 0 === e && (r._volume = t), e = r._getSoundIds(e);
							for (var h = 0; h < e.length; h++)(i = r._soundById(e[h])) && (i._volume = t, n[2] || r._stopFade(e[h]), r._webAudio && i._node && !i._muted ? i._node.gain.setValueAtTime(t, o.ctx.currentTime) : i._node && !i._muted && (i._node.volume = t * o.volume()), r._emit("volume", i._id));
							return r
						},
						fade: function(t, e, i, r) {
							var n = this;
							if ("loaded" !== n._state || n._playLock) return n._queue.push({
								event: "fade",
								action: function() {
									n.fade(t, e, i, r)
								}
							}), n;
							t = Math.min(Math.max(0, parseFloat(t)), 1), e = Math.min(Math.max(0, parseFloat(e)), 1), i = parseFloat(i), n.volume(t, r);
							for (var s = n._getSoundIds(r), a = 0; a < s.length; a++) {
								var h = n._soundById(s[a]);
								if (h) {
									if (r || n._stopFade(s[a]), n._webAudio && !h._muted) {
										var u = o.ctx.currentTime,
											l = u + i / 1e3;
										h._volume = t, h._node.gain.setValueAtTime(t, u), h._node.gain.linearRampToValueAtTime(e, l)
									}
									n._startFadeInterval(h, t, e, i, s[a], void 0 === r)
								}
							}
							return n
						},
						_startFadeInterval: function(t, e, i, r, n, o) {
							var s = this,
								a = e,
								h = i - e,
								u = Math.abs(h / .01),
								l = Math.max(4, u > 0 ? r / u : r),
								c = Date.now();
							t._fadeTo = i, t._interval = setInterval((function() {
								var n = (Date.now() - c) / r;
								c = Date.now(), a += h * n, a = Math.round(100 * a) / 100, a = h < 0 ? Math.max(i, a) : Math.min(i, a), s._webAudio ? t._volume = a : s.volume(a, t._id, !0), o && (s._volume = a), (i < e && a <= i || i > e && a >= i) && (clearInterval(t._interval), t._interval = null, t._fadeTo = null, s.volume(i, t._id), s._emit("fade", t._id))
							}), l)
						},
						_stopFade: function(t) {
							var e = this,
								i = e._soundById(t);
							return i && i._interval && (e._webAudio && i._node.gain.cancelScheduledValues(o.ctx.currentTime), clearInterval(i._interval), i._interval = null, e.volume(i._fadeTo, t), i._fadeTo = null, e._emit("fade", t)), e
						},
						loop: function() {
							var t, e, i, r = this,
								n = arguments;
							if (0 === n.length) return r._loop;
							if (1 === n.length) {
								if ("boolean" != typeof n[0]) return !!(i = r._soundById(parseInt(n[0], 10))) && i._loop;
								t = n[0], r._loop = t
							} else 2 === n.length && (t = n[0], e = parseInt(n[1], 10));
							for (var o = r._getSoundIds(e), s = 0; s < o.length; s++)(i = r._soundById(o[s])) && (i._loop = t, r._webAudio && i._node && i._node.bufferSource && (i._node.bufferSource.loop = t, t && (i._node.bufferSource.loopStart = i._start || 0, i._node.bufferSource.loopEnd = i._stop, r.playing(o[s]) && (r.pause(o[s], !0), r.play(o[s], !0)))));
							return r
						},
						rate: function() {
							var t, e, i, r = this,
								n = arguments;
							if (0 === n.length) e = r._sounds[0]._id;
							else if (1 === n.length) {
								var s = r._getSoundIds(),
									a = s.indexOf(n[0]);
								a >= 0 ? e = parseInt(n[0], 10) : t = parseFloat(n[0])
							} else 2 === n.length && (t = parseFloat(n[0]), e = parseInt(n[1], 10));
							if ("number" != typeof t) return (i = r._soundById(e)) ? i._rate : r._rate;
							if ("loaded" !== r._state || r._playLock) return r._queue.push({
								event: "rate",
								action: function() {
									r.rate.apply(r, n)
								}
							}), r;
							void 0 === e && (r._rate = t), e = r._getSoundIds(e);
							for (var h = 0; h < e.length; h++)
								if (i = r._soundById(e[h])) {
									r.playing(e[h]) && (i._rateSeek = r.seek(e[h]), i._playStart = r._webAudio ? o.ctx.currentTime : i._playStart), i._rate = t, r._webAudio && i._node && i._node.bufferSource ? i._node.bufferSource.playbackRate.setValueAtTime(t, o.ctx.currentTime) : i._node && (i._node.playbackRate = t);
									var u = r.seek(e[h]),
										l = (r._sprite[i._sprite][0] + r._sprite[i._sprite][1]) / 1e3 - u,
										c = 1e3 * l / Math.abs(i._rate);
									!r._endTimers[e[h]] && i._paused || (r._clearTimer(e[h]), r._endTimers[e[h]] = setTimeout(r._ended.bind(r, i), c)), r._emit("rate", i._id)
								} return r
						},
						seek: function() {
							var t, e, i = this,
								r = arguments;
							if (0 === r.length) i._sounds.length && (e = i._sounds[0]._id);
							else if (1 === r.length) {
								var n = i._getSoundIds(),
									s = n.indexOf(r[0]);
								s >= 0 ? e = parseInt(r[0], 10) : i._sounds.length && (e = i._sounds[0]._id, t = parseFloat(r[0]))
							} else 2 === r.length && (t = parseFloat(r[0]), e = parseInt(r[1], 10));
							if (void 0 === e) return 0;
							if ("number" == typeof t && ("loaded" !== i._state || i._playLock)) return i._queue.push({
								event: "seek",
								action: function() {
									i.seek.apply(i, r)
								}
							}), i;
							var a = i._soundById(e);
							if (a) {
								if (!("number" == typeof t && t >= 0)) {
									if (i._webAudio) {
										var h = i.playing(e) ? o.ctx.currentTime - a._playStart : 0,
											u = a._rateSeek ? a._rateSeek - a._seek : 0;
										return a._seek + (u + h * Math.abs(a._rate))
									}
									return a._node.currentTime
								}
								var l = i.playing(e);
								l && i.pause(e, !0), a._seek = t, a._ended = !1, i._clearTimer(e), i._webAudio || !a._node || isNaN(a._node.duration) || (a._node.currentTime = t);
								var c = function() {
									l && i.play(e, !0), i._emit("seek", e)
								};
								if (l && !i._webAudio) {
									var d = function() {
										i._playLock ? setTimeout(d, 0) : c()
									};
									setTimeout(d, 0)
								} else c()
							}
							return i
						},
						playing: function(t) {
							var e = this;
							if ("number" == typeof t) {
								var i = e._soundById(t);
								return !!i && !i._paused
							}
							for (var r = 0; r < e._sounds.length; r++)
								if (!e._sounds[r]._paused) return !0;
							return !1
						},
						duration: function(t) {
							var e = this,
								i = e._duration,
								r = e._soundById(t);
							return r && (i = e._sprite[r._sprite][1] / 1e3), i
						},
						state: function() {
							return this._state
						},
						unload: function() {
							for (var t = this, e = t._sounds, i = 0; i < e.length; i++) e[i]._paused || t.stop(e[i]._id), t._webAudio || (t._clearSound(e[i]._node), e[i]._node.removeEventListener("error", e[i]._errorFn, !1), e[i]._node.removeEventListener(o._canPlayEvent, e[i]._loadFn, !1), e[i]._node.removeEventListener("ended", e[i]._endFn, !1), o._releaseHtml5Audio(e[i]._node)), delete e[i]._node, t._clearTimer(e[i]._id);
							var r = o._howls.indexOf(t);
							r >= 0 && o._howls.splice(r, 1);
							var n = !0;
							for (i = 0; i < o._howls.length; i++)
								if (o._howls[i]._src === t._src || t._src.indexOf(o._howls[i]._src) >= 0) {
									n = !1;
									break
								} return h && n && delete h[t._src], o.noAudio = !1, t._state = "unloaded", t._sounds = [], t = null, null
						},
						on: function(t, e, i, r) {
							var n = this["_on" + t];
							return "function" == typeof e && n.push(r ? {
								id: i,
								fn: e,
								once: r
							} : {
								id: i,
								fn: e
							}), this
						},
						off: function(t, e, i) {
							var r = this,
								n = r["_on" + t],
								o = 0;
							if ("number" == typeof e && (i = e, e = null), e || i)
								for (o = 0; o < n.length; o++) {
									var s = i === n[o].id;
									if (e === n[o].fn && s || !e && s) {
										n.splice(o, 1);
										break
									}
								} else if (t) r["_on" + t] = [];
								else {
									var a = Object.keys(r);
									for (o = 0; o < a.length; o++) 0 === a[o].indexOf("_on") && Array.isArray(r[a[o]]) && (r[a[o]] = [])
								} return r
						},
						once: function(t, e, i) {
							return this.on(t, e, i, 1), this
						},
						_emit: function(t, e, i) {
							for (var r = this, n = r["_on" + t], o = n.length - 1; o >= 0; o--) n[o].id && n[o].id !== e && "load" !== t || (setTimeout(function(t) {
								t.call(this, e, i)
							}.bind(r, n[o].fn), 0), n[o].once && r.off(t, n[o].fn, n[o].id));
							return r._loadQueue(t), r
						},
						_loadQueue: function(t) {
							var e = this;
							if (e._queue.length > 0) {
								var i = e._queue[0];
								i.event === t && (e._queue.shift(), e._loadQueue()), t || i.action()
							}
							return e
						},
						_ended: function(t) {
							var e = this,
								i = t._sprite;
							if (!e._webAudio && t._node && !t._node.paused && !t._node.ended && t._node.currentTime < t._stop) return setTimeout(e._ended.bind(e, t), 100), e;
							var r = !(!t._loop && !e._sprite[i][2]);
							if (e._emit("end", t._id), !e._webAudio && r && e.stop(t._id, !0).play(t._id), e._webAudio && r) {
								e._emit("play", t._id), t._seek = t._start || 0, t._rateSeek = 0, t._playStart = o.ctx.currentTime;
								var n = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
								e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), n)
							}
							return e._webAudio && !r && (t._paused = !0, t._ended = !0, t._seek = t._start || 0, t._rateSeek = 0, e._clearTimer(t._id), e._cleanBuffer(t._node), o._autoSuspend()), e._webAudio || r || e.stop(t._id, !0), e
						},
						_clearTimer: function(t) {
							var e = this;
							if (e._endTimers[t]) {
								if ("function" != typeof e._endTimers[t]) clearTimeout(e._endTimers[t]);
								else {
									var i = e._soundById(t);
									i && i._node && i._node.removeEventListener("ended", e._endTimers[t], !1)
								}
								delete e._endTimers[t]
							}
							return e
						},
						_soundById: function(t) {
							for (var e = this, i = 0; i < e._sounds.length; i++)
								if (t === e._sounds[i]._id) return e._sounds[i];
							return null
						},
						_inactiveSound: function() {
							var t = this;
							t._drain();
							for (var e = 0; e < t._sounds.length; e++)
								if (t._sounds[e]._ended) return t._sounds[e].reset();
							return new a(t)
						},
						_drain: function() {
							var t = this,
								e = t._pool,
								i = 0,
								r = 0;
							if (!(t._sounds.length < e)) {
								for (r = 0; r < t._sounds.length; r++) t._sounds[r]._ended && i++;
								for (r = t._sounds.length - 1; r >= 0; r--) {
									if (i <= e) return;
									t._sounds[r]._ended && (t._webAudio && t._sounds[r]._node && t._sounds[r]._node.disconnect(0), t._sounds.splice(r, 1), i--)
								}
							}
						},
						_getSoundIds: function(t) {
							if (void 0 === t) {
								for (var e = [], i = 0; i < this._sounds.length; i++) e.push(this._sounds[i]._id);
								return e
							}
							return [t]
						},
						_refreshBuffer: function(t) {
							return t._node.bufferSource = o.ctx.createBufferSource(), t._node.bufferSource.buffer = h[this._src], t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node), t._node.bufferSource.loop = t._loop, t._loop && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop || 0), t._node.bufferSource.playbackRate.setValueAtTime(t._rate, o.ctx.currentTime), this
						},
						_cleanBuffer: function(t) {
							var e = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0;
							if (o._scratchBuffer && t.bufferSource && (t.bufferSource.onended = null, t.bufferSource.disconnect(0), e)) try {
								t.bufferSource.buffer = o._scratchBuffer
							} catch (t) {}
							return t.bufferSource = null, this
						},
						_clearSound: function(t) {
							/MSIE |Trident\//.test(o._navigator && o._navigator.userAgent) || (t.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
						}
					};
					var a = function(t) {
						this._parent = t, this.init()
					};
					a.prototype = {
						init: function() {
							var t = this,
								e = t._parent;
							return t._muted = e._muted, t._loop = e._loop, t._volume = e._volume, t._rate = e._rate, t._seek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = ++o._counter, e._sounds.push(t), t.create(), t
						},
						create: function() {
							var t = this,
								e = t._parent,
								i = o._muted || t._muted || t._parent._muted ? 0 : t._volume;
							return e._webAudio ? (t._node = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(), t._node.gain.setValueAtTime(i, o.ctx.currentTime), t._node.paused = !0, t._node.connect(o.masterGain)) : o.noAudio || (t._node = o._obtainHtml5Audio(), t._errorFn = t._errorListener.bind(t), t._node.addEventListener("error", t._errorFn, !1), t._loadFn = t._loadListener.bind(t), t._node.addEventListener(o._canPlayEvent, t._loadFn, !1), t._endFn = t._endListener.bind(t), t._node.addEventListener("ended", t._endFn, !1), t._node.src = e._src, t._node.preload = !0 === e._preload ? "auto" : e._preload, t._node.volume = i * o.volume(), t._node.load()), t
						},
						reset: function() {
							var t = this,
								e = t._parent;
							return t._muted = e._muted, t._loop = e._loop, t._volume = e._volume, t._rate = e._rate, t._seek = 0, t._rateSeek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = ++o._counter, t
						},
						_errorListener: function() {
							var t = this;
							t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0), t._node.removeEventListener("error", t._errorFn, !1)
						},
						_loadListener: function() {
							var t = this,
								e = t._parent;
							e._duration = Math.ceil(10 * t._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
								__default: [0, 1e3 * e._duration]
							}), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), t._node.removeEventListener(o._canPlayEvent, t._loadFn, !1)
						},
						_endListener: function() {
							var t = this,
								e = t._parent;
							e._duration === 1 / 0 && (e._duration = Math.ceil(10 * t._node.duration) / 10, e._sprite.__default[1] === 1 / 0 && (e._sprite.__default[1] = 1e3 * e._duration), e._ended(t)), t._node.removeEventListener("ended", t._endFn, !1)
						}
					};
					var h = {},
						u = function(t) {
							var e = t._src;
							if (h[e]) return t._duration = h[e].duration, void d(t);
							if (/^data:[^;]+;base64,/.test(e)) {
								for (var i = atob(e.split(",")[1]), r = new Uint8Array(i.length), n = 0; n < i.length; ++n) r[n] = i.charCodeAt(n);
								c(r.buffer, t)
							} else {
								var o = new XMLHttpRequest;
								o.open(t._xhr.method, e, !0), o.withCredentials = t._xhr.withCredentials, o.responseType = "arraybuffer", t._xhr.headers && Object.keys(t._xhr.headers).forEach((function(e) {
									o.setRequestHeader(e, t._xhr.headers[e])
								})), o.onload = function() {
									var e = (o.status + "")[0];
									"0" === e || "2" === e || "3" === e ? c(o.response, t) : t._emit("loaderror", null, "Failed loading audio file with status: " + o.status + ".")
								}, o.onerror = function() {
									t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete h[e], t.load())
								}, l(o)
							}
						},
						l = function(t) {
							try {
								t.send()
							} catch (e) {
								t.onerror()
							}
						},
						c = function(t, e) {
							var i = function() {
									e._emit("loaderror", null, "Decoding audio data failed.")
								},
								r = function(t) {
									t && e._sounds.length > 0 ? (h[e._src] = t, d(e, t)) : i()
								};
							"undefined" != typeof Promise && 1 === o.ctx.decodeAudioData.length ? o.ctx.decodeAudioData(t).then(r).catch(i) : o.ctx.decodeAudioData(t, r, i)
						},
						d = function(t, e) {
							e && !t._duration && (t._duration = e.duration), 0 === Object.keys(t._sprite).length && (t._sprite = {
								__default: [0, 1e3 * t._duration]
							}), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue())
						},
						f = function() {
							if (o.usingWebAudio) {
								try {
									"undefined" != typeof AudioContext ? o.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? o.ctx = new webkitAudioContext : o.usingWebAudio = !1
								} catch (t) {
									o.usingWebAudio = !1
								}
								o.ctx || (o.usingWebAudio = !1);
								var t = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform),
									e = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
									i = e ? parseInt(e[1], 10) : null;
								if (t && i && i < 9) {
									var r = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase());
									o._navigator && !r && (o.usingWebAudio = !1)
								}
								o.usingWebAudio && (o.masterGain = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(), o.masterGain.gain.setValueAtTime(o._muted ? 0 : o._volume, o.ctx.currentTime), o.masterGain.connect(o.ctx.destination)), o._setup()
							}
						};
					void 0 === (r = function() {
						return {
							Howler: o,
							Howl: s
						}
					}.apply(e, [])) || (t.exports = r), e.Howler = o, e.Howl = s, void 0 !== i.g ? (i.g.HowlerGlobal = n, i.g.Howler = o, i.g.Howl = s, i.g.Sound = a) : "undefined" != typeof window && (window.HowlerGlobal = n, window.Howler = o, window.Howl = s, window.Sound = a)
				}(),
				function() {
					"use strict";
					var t;
					HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(t) {
						var e = this;
						if (!e.ctx || !e.ctx.listener) return e;
						for (var i = e._howls.length - 1; i >= 0; i--) e._howls[i].stereo(t);
						return e
					}, HowlerGlobal.prototype.pos = function(t, e, i) {
						var r = this;
						return r.ctx && r.ctx.listener ? (e = "number" != typeof e ? r._pos[1] : e, i = "number" != typeof i ? r._pos[2] : i, "number" != typeof t ? r._pos : (r._pos = [t, e, i], void 0 !== r.ctx.listener.positionX ? (r.ctx.listener.positionX.setTargetAtTime(r._pos[0], Howler.ctx.currentTime, .1), r.ctx.listener.positionY.setTargetAtTime(r._pos[1], Howler.ctx.currentTime, .1), r.ctx.listener.positionZ.setTargetAtTime(r._pos[2], Howler.ctx.currentTime, .1)) : r.ctx.listener.setPosition(r._pos[0], r._pos[1], r._pos[2]), r)) : r
					}, HowlerGlobal.prototype.orientation = function(t, e, i, r, n, o) {
						var s = this;
						if (!s.ctx || !s.ctx.listener) return s;
						var a = s._orientation;
						return e = "number" != typeof e ? a[1] : e, i = "number" != typeof i ? a[2] : i, r = "number" != typeof r ? a[3] : r, n = "number" != typeof n ? a[4] : n, o = "number" != typeof o ? a[5] : o, "number" != typeof t ? a : (s._orientation = [t, e, i, r, n, o], void 0 !== s.ctx.listener.forwardX ? (s.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1), s.ctx.listener.forwardY.setTargetAtTime(e, Howler.ctx.currentTime, .1), s.ctx.listener.forwardZ.setTargetAtTime(i, Howler.ctx.currentTime, .1), s.ctx.listener.upX.setTargetAtTime(r, Howler.ctx.currentTime, .1), s.ctx.listener.upY.setTargetAtTime(n, Howler.ctx.currentTime, .1), s.ctx.listener.upZ.setTargetAtTime(o, Howler.ctx.currentTime, .1)) : s.ctx.listener.setOrientation(t, e, i, r, n, o), s)
					}, Howl.prototype.init = (t = Howl.prototype.init, function(e) {
						var i = this;
						return i._orientation = e.orientation || [1, 0, 0], i._stereo = e.stereo || null, i._pos = e.pos || null, i._pannerAttr = {
							coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
							coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
							coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
							distanceModel: void 0 !== e.distanceModel ? e.distanceModel : "inverse",
							maxDistance: void 0 !== e.maxDistance ? e.maxDistance : 1e4,
							panningModel: void 0 !== e.panningModel ? e.panningModel : "HRTF",
							refDistance: void 0 !== e.refDistance ? e.refDistance : 1,
							rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : 1
						}, i._onstereo = e.onstereo ? [{
							fn: e.onstereo
						}] : [], i._onpos = e.onpos ? [{
							fn: e.onpos
						}] : [], i._onorientation = e.onorientation ? [{
							fn: e.onorientation
						}] : [], t.call(this, e)
					}), Howl.prototype.stereo = function(t, i) {
						var r = this;
						if (!r._webAudio) return r;
						if ("loaded" !== r._state) return r._queue.push({
							event: "stereo",
							action: function() {
								r.stereo(t, i)
							}
						}), r;
						var n = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
						if (void 0 === i) {
							if ("number" != typeof t) return r._stereo;
							r._stereo = t, r._pos = [t, 0, 0]
						}
						for (var o = r._getSoundIds(i), s = 0; s < o.length; s++) {
							var a = r._soundById(o[s]);
							if (a) {
								if ("number" != typeof t) return a._stereo;
								a._stereo = t, a._pos = [t, 0, 0], a._node && (a._pannerAttr.panningModel = "equalpower", a._panner && a._panner.pan || e(a, n), "spatial" === n ? void 0 !== a._panner.positionX ? (a._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), a._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), a._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : a._panner.setPosition(t, 0, 0) : a._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)), r._emit("stereo", a._id)
							}
						}
						return r
					}, Howl.prototype.pos = function(t, i, r, n) {
						var o = this;
						if (!o._webAudio) return o;
						if ("loaded" !== o._state) return o._queue.push({
							event: "pos",
							action: function() {
								o.pos(t, i, r, n)
							}
						}), o;
						if (i = "number" != typeof i ? 0 : i, r = "number" != typeof r ? -.5 : r, void 0 === n) {
							if ("number" != typeof t) return o._pos;
							o._pos = [t, i, r]
						}
						for (var s = o._getSoundIds(n), a = 0; a < s.length; a++) {
							var h = o._soundById(s[a]);
							if (h) {
								if ("number" != typeof t) return h._pos;
								h._pos = [t, i, r], h._node && (h._panner && !h._panner.pan || e(h, "spatial"), void 0 !== h._panner.positionX ? (h._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), h._panner.positionY.setValueAtTime(i, Howler.ctx.currentTime), h._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : h._panner.setPosition(t, i, r)), o._emit("pos", h._id)
							}
						}
						return o
					}, Howl.prototype.orientation = function(t, i, r, n) {
						var o = this;
						if (!o._webAudio) return o;
						if ("loaded" !== o._state) return o._queue.push({
							event: "orientation",
							action: function() {
								o.orientation(t, i, r, n)
							}
						}), o;
						if (i = "number" != typeof i ? o._orientation[1] : i, r = "number" != typeof r ? o._orientation[2] : r, void 0 === n) {
							if ("number" != typeof t) return o._orientation;
							o._orientation = [t, i, r]
						}
						for (var s = o._getSoundIds(n), a = 0; a < s.length; a++) {
							var h = o._soundById(s[a]);
							if (h) {
								if ("number" != typeof t) return h._orientation;
								h._orientation = [t, i, r], h._node && (h._panner || (h._pos || (h._pos = o._pos || [0, 0, -.5]), e(h, "spatial")), void 0 !== h._panner.orientationX ? (h._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime), h._panner.orientationY.setValueAtTime(i, Howler.ctx.currentTime), h._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)) : h._panner.setOrientation(t, i, r)), o._emit("orientation", h._id)
							}
						}
						return o
					}, Howl.prototype.pannerAttr = function() {
						var t, i, r, n = this,
							o = arguments;
						if (!n._webAudio) return n;
						if (0 === o.length) return n._pannerAttr;
						if (1 === o.length) {
							if ("object" != typeof o[0]) return (r = n._soundById(parseInt(o[0], 10))) ? r._pannerAttr : n._pannerAttr;
							t = o[0], void 0 === i && (t.pannerAttr || (t.pannerAttr = {
								coneInnerAngle: t.coneInnerAngle,
								coneOuterAngle: t.coneOuterAngle,
								coneOuterGain: t.coneOuterGain,
								distanceModel: t.distanceModel,
								maxDistance: t.maxDistance,
								refDistance: t.refDistance,
								rolloffFactor: t.rolloffFactor,
								panningModel: t.panningModel
							}), n._pannerAttr = {
								coneInnerAngle: void 0 !== t.pannerAttr.coneInnerAngle ? t.pannerAttr.coneInnerAngle : n._coneInnerAngle,
								coneOuterAngle: void 0 !== t.pannerAttr.coneOuterAngle ? t.pannerAttr.coneOuterAngle : n._coneOuterAngle,
								coneOuterGain: void 0 !== t.pannerAttr.coneOuterGain ? t.pannerAttr.coneOuterGain : n._coneOuterGain,
								distanceModel: void 0 !== t.pannerAttr.distanceModel ? t.pannerAttr.distanceModel : n._distanceModel,
								maxDistance: void 0 !== t.pannerAttr.maxDistance ? t.pannerAttr.maxDistance : n._maxDistance,
								refDistance: void 0 !== t.pannerAttr.refDistance ? t.pannerAttr.refDistance : n._refDistance,
								rolloffFactor: void 0 !== t.pannerAttr.rolloffFactor ? t.pannerAttr.rolloffFactor : n._rolloffFactor,
								panningModel: void 0 !== t.pannerAttr.panningModel ? t.pannerAttr.panningModel : n._panningModel
							})
						} else 2 === o.length && (t = o[0], i = parseInt(o[1], 10));
						for (var s = n._getSoundIds(i), a = 0; a < s.length; a++)
							if (r = n._soundById(s[a])) {
								var h = r._pannerAttr;
								h = {
									coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : h.coneInnerAngle,
									coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : h.coneOuterAngle,
									coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : h.coneOuterGain,
									distanceModel: void 0 !== t.distanceModel ? t.distanceModel : h.distanceModel,
									maxDistance: void 0 !== t.maxDistance ? t.maxDistance : h.maxDistance,
									refDistance: void 0 !== t.refDistance ? t.refDistance : h.refDistance,
									rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : h.rolloffFactor,
									panningModel: void 0 !== t.panningModel ? t.panningModel : h.panningModel
								};
								var u = r._panner;
								u ? (u.coneInnerAngle = h.coneInnerAngle, u.coneOuterAngle = h.coneOuterAngle, u.coneOuterGain = h.coneOuterGain, u.distanceModel = h.distanceModel, u.maxDistance = h.maxDistance, u.refDistance = h.refDistance, u.rolloffFactor = h.rolloffFactor, u.panningModel = h.panningModel) : (r._pos || (r._pos = n._pos || [0, 0, -.5]), e(r, "spatial"))
							} return n
					}, Sound.prototype.init = function(t) {
						return function() {
							var e = this,
								i = e._parent;
							e._orientation = i._orientation, e._stereo = i._stereo, e._pos = i._pos, e._pannerAttr = i._pannerAttr, t.call(this), e._stereo ? i.stereo(e._stereo) : e._pos && i.pos(e._pos[0], e._pos[1], e._pos[2], e._id)
						}
					}(Sound.prototype.init), Sound.prototype.reset = function(t) {
						return function() {
							var e = this,
								i = e._parent;
							return e._orientation = i._orientation, e._stereo = i._stereo, e._pos = i._pos, e._pannerAttr = i._pannerAttr, e._stereo ? i.stereo(e._stereo) : e._pos ? i.pos(e._pos[0], e._pos[1], e._pos[2], e._id) : e._panner && (e._panner.disconnect(0), e._panner = void 0, i._refreshBuffer(e)), t.call(this)
						}
					}(Sound.prototype.reset);
					var e = function(t, e) {
						"spatial" === (e = e || "spatial") ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.panningModel = t._pannerAttr.panningModel, void 0 !== t._panner.positionX ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime), t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime), t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), void 0 !== t._panner.orientationX ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime), t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime), t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id, !0)
					}
				}()
			},
			645: function(t, e) {
				e.read = function(t, e, i, r, n) {
					var o, s, a = 8 * n - r - 1,
						h = (1 << a) - 1,
						u = h >> 1,
						l = -7,
						c = i ? n - 1 : 0,
						d = i ? -1 : 1,
						f = t[e + c];
					for (c += d, o = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; o = 256 * o + t[e + c], c += d, l -= 8);
					for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + t[e + c], c += d, l -= 8);
					if (0 === o) o = 1 - u;
					else {
						if (o === h) return s ? NaN : 1 / 0 * (f ? -1 : 1);
						s += Math.pow(2, r), o -= u
					}
					return (f ? -1 : 1) * s * Math.pow(2, o - r)
				}, e.write = function(t, e, i, r, n, o) {
					var s, a, h, u = 8 * o - n - 1,
						l = (1 << u) - 1,
						c = l >> 1,
						d = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						f = r ? 0 : o - 1,
						p = r ? 1 : -1,
						_ = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
					for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -s)) < 1 && (s--, h *= 2), (e += s + c >= 1 ? d / h : d * Math.pow(2, 1 - c)) * h >= 2 && (s++, h /= 2), s + c >= l ? (a = 0, s = l) : s + c >= 1 ? (a = (e * h - 1) * Math.pow(2, n), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, n), s = 0)); n >= 8; t[i + f] = 255 & a, f += p, a /= 256, n -= 8);
					for (s = s << n | a, u += n; u > 0; t[i + f] = 255 & s, f += p, s /= 256, u -= 8);
					t[i + f - p] |= 128 * _
				}
			},
			418: function(t) {
				"use strict";
				var e = Object.getOwnPropertySymbols,
					i = Object.prototype.hasOwnProperty,
					r = Object.prototype.propertyIsEnumerable;

				function n(t) {
					if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
					return Object(t)
				}
				t.exports = function() {
					try {
						if (!Object.assign) return !1;
						var t = new String("abc");
						if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
						for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
						if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
								return e[t]
							})).join("")) return !1;
						var r = {};
						return "abcdefghijklmnopqrst".split("").forEach((function(t) {
							r[t] = t
						})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
					} catch (t) {
						return !1
					}
				}() ? Object.assign : function(t, o) {
					for (var s, a, h = n(t), u = 1; u < arguments.length; u++) {
						for (var l in s = Object(arguments[u])) i.call(s, l) && (h[l] = s[l]);
						if (e) {
							a = e(s);
							for (var c = 0; c < a.length; c++) r.call(s, a[c]) && (h[a[c]] = s[a[c]])
						}
					}
					return h
				}
			},
			587: function(t) {
				"use strict";

				function e(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				}
				t.exports = function(t, i, r, n) {
					i = i || "&", r = r || "=";
					var o = {};
					if ("string" != typeof t || 0 === t.length) return o;
					var s = /\+/g;
					t = t.split(i);
					var a = 1e3;
					n && "number" == typeof n.maxKeys && (a = n.maxKeys);
					var h = t.length;
					a > 0 && h > a && (h = a);
					for (var u = 0; u < h; ++u) {
						var l, c, d, f, p = t[u].replace(s, "%20"),
							_ = p.indexOf(r);
						_ >= 0 ? (l = p.substr(0, _), c = p.substr(_ + 1)) : (l = p, c = ""), d = decodeURIComponent(l), f = decodeURIComponent(c), e(o, d) ? Array.isArray(o[d]) ? o[d].push(f) : o[d] = [o[d], f] : o[d] = f
					}
					return o
				}
			},
			361: function(t) {
				"use strict";
				var e = function(t) {
					switch (typeof t) {
						case "string":
							return t;
						case "boolean":
							return t ? "true" : "false";
						case "number":
							return isFinite(t) ? t : "";
						default:
							return ""
					}
				};
				t.exports = function(t, i, r, n) {
					return i = i || "&", r = r || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map((function(n) {
						var o = encodeURIComponent(e(n)) + r;
						return Array.isArray(t[n]) ? t[n].map((function(t) {
							return o + encodeURIComponent(e(t))
						})).join(i) : o + encodeURIComponent(e(t[n]))
					})).join(i) : n ? encodeURIComponent(e(n)) + r + encodeURIComponent(e(t)) : ""
				}
			},
			673: function(t, e, i) {
				"use strict";
				e.decode = e.parse = i(587), e.encode = e.stringify = i(361)
			},
			511: function(t, e, i) {
				var r;
				t = i.nmd(t),
					function(n) {
						e && e.nodeType, t && t.nodeType;
						var o = "object" == typeof i.g && i.g;
						o.global !== o && o.window !== o && o.self;
						var s, a = 2147483647,
							h = 36,
							u = /^xn--/,
							l = /[^\x20-\x7E]/,
							c = /[\x2E\u3002\uFF0E\uFF61]/g,
							d = {
								overflow: "Overflow: input needs wider integers to process",
								"not-basic": "Illegal input >= 0x80 (not a basic code point)",
								"invalid-input": "Invalid input"
							},
							f = Math.floor,
							p = String.fromCharCode;

						function _(t) {
							throw RangeError(d[t])
						}

						function m(t, e) {
							for (var i = t.length, r = []; i--;) r[i] = e(t[i]);
							return r
						}

						function g(t, e) {
							var i = t.split("@"),
								r = "";
							return i.length > 1 && (r = i[0] + "@", t = i[1]), r + m((t = t.replace(c, ".")).split("."), e).join(".")
						}

						function y(t) {
							for (var e, i, r = [], n = 0, o = t.length; n < o;)(e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (i = t.charCodeAt(n++))) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e), n--) : r.push(e);
							return r
						}

						function v(t) {
							return m(t, (function(t) {
								var e = "";
								return t > 65535 && (e += p((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + p(t)
							})).join("")
						}

						function T(t, e) {
							return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
						}

						function b(t, e, i) {
							var r = 0;
							for (t = i ? f(t / 700) : t >> 1, t += f(t / e); t > 455; r += h) t = f(t / 35);
							return f(r + 36 * t / (t + 38))
						}

						function E(t) {
							var e, i, r, n, o, s, u, l, c, d, p, m = [],
								g = t.length,
								y = 0,
								T = 128,
								E = 72;
							for ((i = t.lastIndexOf("-")) < 0 && (i = 0), r = 0; r < i; ++r) t.charCodeAt(r) >= 128 && _("not-basic"), m.push(t.charCodeAt(r));
							for (n = i > 0 ? i + 1 : 0; n < g;) {
								for (o = y, s = 1, u = h; n >= g && _("invalid-input"), ((l = (p = t.charCodeAt(n++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : h) >= h || l > f((a - y) / s)) && _("overflow"), y += l * s, !(l < (c = u <= E ? 1 : u >= E + 26 ? 26 : u - E)); u += h) s > f(a / (d = h - c)) && _("overflow"), s *= d;
								E = b(y - o, e = m.length + 1, 0 == o), f(y / e) > a - T && _("overflow"), T += f(y / e), y %= e, m.splice(y++, 0, T)
							}
							return v(m)
						}

						function x(t) {
							var e, i, r, n, o, s, u, l, c, d, m, g, v, E, x, A = [];
							for (g = (t = y(t)).length, e = 128, i = 0, o = 72, s = 0; s < g; ++s)(m = t[s]) < 128 && A.push(p(m));
							for (r = n = A.length, n && A.push("-"); r < g;) {
								for (u = a, s = 0; s < g; ++s)(m = t[s]) >= e && m < u && (u = m);
								for (u - e > f((a - i) / (v = r + 1)) && _("overflow"), i += (u - e) * v, e = u, s = 0; s < g; ++s)
									if ((m = t[s]) < e && ++i > a && _("overflow"), m == e) {
										for (l = i, c = h; !(l < (d = c <= o ? 1 : c >= o + 26 ? 26 : c - o)); c += h) x = l - d, E = h - d, A.push(p(T(d + x % E, 0))), l = f(x / E);
										A.push(p(T(l, 0))), o = b(i, v, r == n), i = 0, ++r
									}++ i, ++e
							}
							return A.join("")
						}
						s = {
							version: "1.3.2",
							ucs2: {
								decode: y,
								encode: v
							},
							decode: E,
							encode: x,
							toASCII: function(t) {
								return g(t, (function(t) {
									return l.test(t) ? "xn--" + x(t) : t
								}))
							},
							toUnicode: function(t) {
								return g(t, (function(t) {
									return u.test(t) ? E(t.slice(4).toLowerCase()) : t
								}))
							}
						}, void 0 === (r = function() {
							return s
						}.call(e, i, e, t)) || (t.exports = r)
					}()
			},
			575: function(t, e, i) {
				"use strict";
				var r = i(511),
					n = i(502);

				function o() {
					this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
				}
				e.Qc = v, e.DB = function(t, e) {
					return v(t, !1, !0).resolve(e)
				}, e.WU = function(t) {
					return n.isString(t) && (t = v(t)), t instanceof o ? t.format() : o.prototype.format.call(t)
				};
				var s = /^([a-z0-9.+-]+:)/i,
					a = /:[0-9]*$/,
					h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
					u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
					l = ["'"].concat(u),
					c = ["%", "/", "?", ";", "#"].concat(l),
					d = ["/", "?", "#"],
					f = /^[+a-z0-9A-Z_-]{0,63}$/,
					p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
					_ = {
						javascript: !0,
						"javascript:": !0
					},
					m = {
						javascript: !0,
						"javascript:": !0
					},
					g = {
						http: !0,
						https: !0,
						ftp: !0,
						gopher: !0,
						file: !0,
						"http:": !0,
						"https:": !0,
						"ftp:": !0,
						"gopher:": !0,
						"file:": !0
					},
					y = i(673);

				function v(t, e, i) {
					if (t && n.isObject(t) && t instanceof o) return t;
					var r = new o;
					return r.parse(t, e, i), r
				}
				o.prototype.parse = function(t, e, i) {
					if (!n.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
					var o = t.indexOf("?"),
						a = -1 !== o && o < t.indexOf("#") ? "?" : "#",
						u = t.split(a);
					u[0] = u[0].replace(/\\/g, "/");
					var v = t = u.join(a);
					if (v = v.trim(), !i && 1 === t.split("#").length) {
						var T = h.exec(v);
						if (T) return this.path = v, this.href = v, this.pathname = T[1], T[2] ? (this.search = T[2], this.query = e ? y.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
					}
					var b = s.exec(v);
					if (b) {
						var E = (b = b[0]).toLowerCase();
						this.protocol = E, v = v.substr(b.length)
					}
					if (i || b || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
						var x = "//" === v.substr(0, 2);
						!x || b && m[b] || (v = v.substr(2), this.slashes = !0)
					}
					if (!m[b] && (x || b && !g[b])) {
						for (var A, S, w = -1, R = 0; R < d.length; R++) - 1 !== (O = v.indexOf(d[R])) && (-1 === w || O < w) && (w = O);
						for (-1 !== (S = -1 === w ? v.lastIndexOf("@") : v.lastIndexOf("@", w)) && (A = v.slice(0, S), v = v.slice(S + 1), this.auth = decodeURIComponent(A)), w = -1, R = 0; R < c.length; R++) {
							var O; - 1 !== (O = v.indexOf(c[R])) && (-1 === w || O < w) && (w = O)
						} - 1 === w && (w = v.length), this.host = v.slice(0, w), v = v.slice(w), this.parseHost(), this.hostname = this.hostname || "";
						var I = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
						if (!I)
							for (var P = this.hostname.split(/\./), M = (R = 0, P.length); R < M; R++) {
								var C = P[R];
								if (C && !C.match(f)) {
									for (var D = "", N = 0, L = C.length; N < L; N++) C.charCodeAt(N) > 127 ? D += "x" : D += C[N];
									if (!D.match(f)) {
										var F = P.slice(0, R),
											B = P.slice(R + 1),
											U = C.match(p);
										U && (F.push(U[1]), B.unshift(U[2])), B.length && (v = "/" + B.join(".") + v), this.hostname = F.join(".");
										break
									}
								}
							}
						this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), I || (this.hostname = r.toASCII(this.hostname));
						var k = this.port ? ":" + this.port : "",
							G = this.hostname || "";
						this.host = G + k, this.href += this.host, I && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== v[0] && (v = "/" + v))
					}
					if (!_[E])
						for (R = 0, M = l.length; R < M; R++) {
							var X = l[R];
							if (-1 !== v.indexOf(X)) {
								var H = encodeURIComponent(X);
								H === X && (H = escape(X)), v = v.split(X).join(H)
							}
						}
					var j = v.indexOf("#"); - 1 !== j && (this.hash = v.substr(j), v = v.slice(0, j));
					var z = v.indexOf("?");
					if (-1 !== z ? (this.search = v.substr(z), this.query = v.substr(z + 1), e && (this.query = y.parse(this.query)), v = v.slice(0, z)) : e && (this.search = "", this.query = {}), v && (this.pathname = v), g[E] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
						k = this.pathname || "";
						var Y = this.search || "";
						this.path = k + Y
					}
					return this.href = this.format(), this
				}, o.prototype.format = function() {
					var t = this.auth || "";
					t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
					var e = this.protocol || "",
						i = this.pathname || "",
						r = this.hash || "",
						o = !1,
						s = "";
					this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && n.isObject(this.query) && Object.keys(this.query).length && (s = y.stringify(this.query));
					var a = this.search || s && "?" + s || "";
					return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || g[e]) && !1 !== o ? (o = "//" + (o || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), e + o + (i = i.replace(/[?#]/g, (function(t) {
						return encodeURIComponent(t)
					}))) + (a = a.replace("#", "%23")) + r
				}, o.prototype.resolve = function(t) {
					return this.resolveObject(v(t, !1, !0)).format()
				}, o.prototype.resolveObject = function(t) {
					if (n.isString(t)) {
						var e = new o;
						e.parse(t, !1, !0), t = e
					}
					for (var i = new o, r = Object.keys(this), s = 0; s < r.length; s++) {
						var a = r[s];
						i[a] = this[a]
					}
					if (i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
					if (t.slashes && !t.protocol) {
						for (var h = Object.keys(t), u = 0; u < h.length; u++) {
							var l = h[u];
							"protocol" !== l && (i[l] = t[l])
						}
						return g[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
					}
					if (t.protocol && t.protocol !== i.protocol) {
						if (!g[t.protocol]) {
							for (var c = Object.keys(t), d = 0; d < c.length; d++) {
								var f = c[d];
								i[f] = t[f]
							}
							return i.href = i.format(), i
						}
						if (i.protocol = t.protocol, t.host || m[t.protocol]) i.pathname = t.pathname;
						else {
							for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()););
							t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), i.pathname = p.join("/")
						}
						if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
							var _ = i.pathname || "",
								y = i.search || "";
							i.path = _ + y
						}
						return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
					}
					var v = i.pathname && "/" === i.pathname.charAt(0),
						T = t.host || t.pathname && "/" === t.pathname.charAt(0),
						b = T || v || i.host && t.pathname,
						E = b,
						x = i.pathname && i.pathname.split("/") || [],
						A = (p = t.pathname && t.pathname.split("/") || [], i.protocol && !g[i.protocol]);
					if (A && (i.hostname = "", i.port = null, i.host && ("" === x[0] ? x[0] = i.host : x.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), b = b && ("" === p[0] || "" === x[0])), T) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, x = p;
					else if (p.length) x || (x = []), x.pop(), x = x.concat(p), i.search = t.search, i.query = t.query;
					else if (!n.isNullOrUndefined(t.search)) return A && (i.hostname = i.host = x.shift(), (I = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = I.shift(), i.host = i.hostname = I.shift())), i.search = t.search, i.query = t.query, n.isNull(i.pathname) && n.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i;
					if (!x.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
					for (var S = x.slice(-1)[0], w = (i.host || t.host || x.length > 1) && ("." === S || ".." === S) || "" === S, R = 0, O = x.length; O >= 0; O--) "." === (S = x[O]) ? x.splice(O, 1) : ".." === S ? (x.splice(O, 1), R++) : R && (x.splice(O, 1), R--);
					if (!b && !E)
						for (; R--; R) x.unshift("..");
					!b || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), w && "/" !== x.join("/").substr(-1) && x.push("");
					var I, P = "" === x[0] || x[0] && "/" === x[0].charAt(0);
					return A && (i.hostname = i.host = P ? "" : x.length ? x.shift() : "", (I = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = I.shift(), i.host = i.hostname = I.shift())), (b = b || i.host && x.length) && !P && x.unshift(""), x.length ? i.pathname = x.join("/") : (i.pathname = null, i.path = null), n.isNull(i.pathname) && n.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
				}, o.prototype.parseHost = function() {
					var t = this.host,
						e = a.exec(t);
					e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
				}
			},
			502: function(t) {
				"use strict";
				t.exports = {
					isString: function(t) {
						return "string" == typeof t
					},
					isObject: function(t) {
						return "object" == typeof t && null !== t
					},
					isNull: function(t) {
						return null === t
					},
					isNullOrUndefined: function(t) {
						return null == t
					}
				}
			}
		},
		e = {};

	function i(r) {
		var n = e[r];
		if (void 0 !== n) return n.exports;
		var o = e[r] = {
			id: r,
			loaded: !1,
			exports: {}
		};
		return t[r].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports
	}
	i.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return i.d(e, {
				a: e
			}), e
		}, i.d = function(t, e) {
			for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {
				enumerable: !0,
				get: e[r]
			})
		}, i.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (t) {
				if ("object" == typeof window) return window
			}
		}(), i.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, i.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, i.nmd = function(t) {
			return t.paths = [], t.children || (t.children = []), t
		},
		function() {
			"use strict";
			var t = {};
			i.r(t), i.d(t, {
				BaseTextureCache: function() {
					return er
				},
				CanvasRenderTarget: function() {
					return nr
				},
				DATA_URI: function() {
					return ar
				},
				EventEmitter: function() {
					return Ti()
				},
				ProgramCache: function() {
					return Qi
				},
				TextureCache: function() {
					return tr
				},
				clearTextureCache: function() {
					return rr
				},
				correctBlendMode: function() {
					return Fi
				},
				createIndicesForQuads: function() {
					return Gi
				},
				decomposeDataUri: function() {
					return hr
				},
				deprecation: function() {
					return $i
				},
				destroyTextureCache: function() {
					return ir
				},
				determineCrossOrigin: function() {
					return ur
				},
				earcut: function() {
					return Ei()
				},
				getBufferType: function() {
					return Xi
				},
				getResolutionOfUrl: function() {
					return lr
				},
				hex2rgb: function() {
					return Mi
				},
				hex2string: function() {
					return Ci
				},
				interleaveTypedArrays: function() {
					return ji
				},
				isMobile: function() {
					return $e
				},
				isPow2: function() {
					return Yi
				},
				isWebGLSupported: function() {
					return Ii
				},
				log2: function() {
					return Vi
				},
				nextPow2: function() {
					return zi
				},
				premultiplyBlendMode: function() {
					return Li
				},
				premultiplyRgba: function() {
					return Bi
				},
				premultiplyTint: function() {
					return Ui
				},
				premultiplyTintToRgba: function() {
					return ki
				},
				removeItems: function() {
					return Wi
				},
				rgb2hex: function() {
					return Ni
				},
				sayHello: function() {
					return Oi
				},
				sign: function() {
					return qi
				},
				skipHello: function() {
					return Ri
				},
				string2hex: function() {
					return Di
				},
				trimCanvas: function() {
					return or
				},
				uid: function() {
					return Zi
				},
				url: function() {
					return Ai
				}
			});
			var e = {};
			i.r(e), i.d(e, {
				ALPHA_MODES: function() {
					return ci
				},
				AbstractBatchRenderer: function() {
					return _s
				},
				AbstractMultiResource: function() {
					return ln
				},
				AbstractRenderer: function() {
					return ns
				},
				AccessibilityManager: function() {
					return Xr
				},
				AnimatedSprite: function() {
					return El
				},
				AppLoaderPlugin: function() {
					return Ks
				},
				Application: function() {
					return Rs
				},
				ArrayResource: function() {
					return cn
				},
				Attribute: function() {
					return In
				},
				BLEND_MODES: function() {
					return ii
				},
				BUFFER_BITS: function() {
					return ei
				},
				BUFFER_TYPE: function() {
					return gi
				},
				BaseImageResource: function() {
					return dn
				},
				BasePrepare: function() {
					return Ih
				},
				BaseRenderTexture: function() {
					return En
				},
				BaseTexture: function() {
					return un
				},
				BatchDrawCall: function() {
					return ds
				},
				BatchGeometry: function() {
					return gs
				},
				BatchPluginFactory: function() {
					return Ts
				},
				BatchRenderer: function() {
					return bs
				},
				BatchShaderGenerator: function() {
					return ms
				},
				BatchSystem: function() {
					return Vn
				},
				BatchTextureArray: function() {
					return fs
				},
				BitmapFont: function() {
					return su
				},
				BitmapFontData: function() {
					return Qh
				},
				BitmapFontLoader: function() {
					return lu
				},
				BitmapText: function() {
					return uu
				},
				BlobResource: function() {
					return ra
				},
				Bounds: function() {
					return Cr
				},
				Buffer: function() {
					return Mn
				},
				BufferResource: function() {
					return an
				},
				CLEAR_MODES: function() {
					return di
				},
				CanvasResource: function() {
					return fn
				},
				Circle: function() {
					return mr
				},
				CompressedTextureLoader: function() {
					return oa
				},
				CompressedTextureResource: function() {
					return na
				},
				Container: function() {
					return Ur
				},
				ContextSystem: function() {
					return qn
				},
				CountLimiter: function() {
					return bh
				},
				CubeResource: function() {
					return pn
				},
				DDSLoader: function() {
					return pa
				},
				DEG_TO_RAD: function() {
					return pr
				},
				DRAW_MODES: function() {
					return ri
				},
				DisplayObject: function() {
					return Lr
				},
				ENV: function() {
					return Qe
				},
				Ellipse: function() {
					return gr
				},
				Extract: function() {
					return Ps
				},
				FORMATS: function() {
					return ni
				},
				FORMATS_TO_COMPONENTS: function() {
					return ga
				},
				FillStyle: function() {
					return Oa
				},
				Filter: function() {
					return Oo
				},
				FilterState: function() {
					return Xn
				},
				FilterSystem: function() {
					return zn
				},
				Framebuffer: function() {
					return bn
				},
				FramebufferSystem: function() {
					return Jn
				},
				GC_MODES: function() {
					return fi
				},
				GLFramebuffer: function() {
					return Kn
				},
				GLProgram: function() {
					return Wo
				},
				GLTexture: function() {
					return ts
				},
				GRAPHICS_CURVES: function() {
					return Ra
				},
				Geometry: function() {
					return Fn
				},
				GeometrySystem: function() {
					return Qn
				},
				Graphics: function() {
					return rh
				},
				GraphicsData: function() {
					return Za
				},
				GraphicsGeometry: function() {
					return Qa
				},
				IGLUniformData: function() {
					return Vo
				},
				INSTALLED: function() {
					return tn
				},
				INTERNAL_FORMATS: function() {
					return qs
				},
				INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: function() {
					return $s
				},
				ImageBitmapResource: function() {
					return yn
				},
				ImageResource: function() {
					return _n
				},
				InteractionData: function() {
					return Yr
				},
				InteractionEvent: function() {
					return Wr
				},
				InteractionManager: function() {
					return $r
				},
				InteractionTrackingData: function() {
					return qr
				},
				KTXLoader: function() {
					return va
				},
				LINE_CAP: function() {
					return xa
				},
				LINE_JOIN: function() {
					return Ea
				},
				LineStyle: function() {
					return th
				},
				Loader: function() {
					return Vs
				},
				LoaderResource: function() {
					return Gs
				},
				MASK_TYPES: function() {
					return _i
				},
				MIPMAP_MODES: function() {
					return li
				},
				MSAA_QUALITY: function() {
					return mi
				},
				MaskData: function() {
					return to
				},
				MaskSystem: function() {
					return Co
				},
				Matrix: function() {
					return Er
				},
				Mesh: function() {
					return Kh
				},
				MeshBatchUvs: function() {
					return Vh
				},
				MeshGeometry: function() {
					return Jh
				},
				MeshMaterial: function() {
					return Zh
				},
				NineSlicePlane: function() {
					return Tl
				},
				ObjectRenderer: function() {
					return Yn
				},
				ObservablePoint: function() {
					return br
				},
				PI_2: function() {
					return dr
				},
				PRECISION: function() {
					return pi
				},
				ParticleContainer: function() {
					return Aa
				},
				ParticleRenderer: function() {
					return wa
				},
				PlaneGeometry: function() {
					return _l
				},
				Point: function() {
					return Tr
				},
				Polygon: function() {
					return yr
				},
				Prepare: function() {
					return Dh
				},
				Program: function() {
					return So
				},
				ProjectionSystem: function() {
					return Fo
				},
				Quad: function() {
					return Bn
				},
				QuadUv: function() {
					return Un
				},
				RAD_TO_DEG: function() {
					return fr
				},
				RENDERER_TYPE: function() {
					return ti
				},
				Rectangle: function() {
					return _r
				},
				RenderTexture: function() {
					return Rn
				},
				RenderTexturePool: function() {
					return On
				},
				RenderTextureSystem: function() {
					return ko
				},
				Renderer: function() {
					return as
				},
				Resource: function() {
					return sn
				},
				RopeGeometry: function() {
					return ml
				},
				RoundedRectangle: function() {
					return vr
				},
				Runner: function() {
					return Qr
				},
				SAMPLER_TYPES: function() {
					return ai
				},
				SCALE_MODES: function() {
					return hi
				},
				SHAPES: function() {
					return cr
				},
				SVGResource: function() {
					return mn
				},
				ScissorSystem: function() {
					return No
				},
				Shader: function() {
					return wo
				},
				ShaderSystem: function() {
					return Jo
				},
				SimpleMesh: function() {
					return vl
				},
				SimplePlane: function() {
					return yl
				},
				SimpleRope: function() {
					return gl
				},
				Sprite: function() {
					return hh
				},
				SpriteMaskFilter: function() {
					return Mo
				},
				Spritesheet: function() {
					return Lh
				},
				SpritesheetLoader: function() {
					return Fh
				},
				State: function() {
					return Ro
				},
				StateSystem: function() {
					return $o
				},
				StencilSystem: function() {
					return Lo
				},
				System: function() {
					return cs
				},
				TARGETS: function() {
					return oi
				},
				TEXT_GRADIENT: function() {
					return Ka
				},
				TYPES: function() {
					return si
				},
				TYPES_TO_BYTES_PER_COMPONENT: function() {
					return ma
				},
				TYPES_TO_BYTES_PER_PIXEL: function() {
					return ya
				},
				TemporaryDisplayObject: function() {
					return Fr
				},
				Text: function() {
					return vh
				},
				TextMetrics: function() {
					return mh
				},
				TextStyle: function() {
					return dh
				},
				Texture: function() {
					return Sn
				},
				TextureGCSystem: function() {
					return Qo
				},
				TextureLoader: function() {
					return Zs
				},
				TextureMatrix: function() {
					return Po
				},
				TextureSystem: function() {
					return es
				},
				TextureUvs: function() {
					return xn
				},
				Ticker: function() {
					return jr
				},
				TickerPlugin: function() {
					return zr
				},
				TilingSprite: function() {
					return Gh
				},
				TilingSpriteRenderer: function() {
					return jh
				},
				TimeLimiter: function() {
					return Nh
				},
				Transform: function() {
					return Mr
				},
				UPDATE_PRIORITY: function() {
					return Gr
				},
				UniformGroup: function() {
					return Gn
				},
				VERSION: function() {
					return xl
				},
				VideoResource: function() {
					return gn
				},
				ViewableBuffer: function() {
					return ps
				},
				WRAP_MODES: function() {
					return ui
				},
				accessibleTarget: function() {
					return kr
				},
				autoDetectRenderer: function() {
					return hs
				},
				autoDetectResource: function() {
					return en
				},
				checkMaxIfStatementsInShader: function() {
					return Eo
				},
				createUBOElements: function() {
					return jo
				},
				defaultFilterVertex: function() {
					return ls
				},
				defaultVertex: function() {
					return us
				},
				filters: function() {
					return Al
				},
				generateProgram: function() {
					return qo
				},
				generateUniformBufferSync: function() {
					return Yo
				},
				getTestContext: function() {
					return ho
				},
				getUBOData: function() {
					return zo
				},
				graphicsUtils: function() {
					return nh
				},
				groupD8: function() {
					return Pr
				},
				interactiveTarget: function() {
					return Zr
				},
				isMobile: function() {
					return $e
				},
				resources: function() {
					return Es
				},
				settings: function() {
					return yi
				},
				systems: function() {
					return Ss
				},
				uniformParsers: function() {
					return go
				},
				utils: function() {
					return t
				}
			});
			class r {
				artist;
				title;
				length;
				difficultyName;
				bpm;
				timingWindow;
				keys;
				numberNotes;
				numberLongnotes;
				backgroundFilename;
				notes;
				hitSoundsFilenames;
				timeSounds;
				offset;
				constructor(t, e, i, r, n, o, s, a, h, u, l, c, d, f) {
					this.artist = t, this.title = e, this.length = i, this.difficultyName = r, this.bpm = n, this.timingWindow = o, this.keys = s, this.numberNotes = a, this.numberLongnotes = h, this.backgroundFilename = u, this.notes = l, this.hitSoundsFilenames = c, this.timeSounds = d, this.offset = f
				}
			}
			class n {
				startTime;
				endTime;
				key;
				timing;
				hitSound;
				objectName;
				individualStrain;
				overallStrain;
				missed = !1;
				pressed = !1;
				sprite;
				constructor(t, e, i, r, n, o) {
					this.startTime = t, this.endTime = e, this.key = i, this.timing = r, this.hitSound = o, this.objectName = n, this.individualStrain = [], this.overallStrain = 0
				}
			}
			class o {
				startTime;
				name;
				start = !1;
				id = 0;
				constructor(t, e) {
					this.startTime = t, this.name = e
				}
			}
			const s = /^\[([a-zA-Z0-9]+)\]$/,
				a = /^([a-zA-Z0-9]+)[ ]*:[ ]*(.+)$/,
				h = /^0,(.+),"(.+)".*$/,
				u = /^Sample,(.+),(.+),"(.+)",(.+)$/,
				l = /^5,(.+),(.+),"(.+)",(.+)$/;
			class c {
				nbNotes = 0;
				nbLns = 0;
				hitSounds = new Set;
				timingPoints = [];
				timeSounds = [];
				notes = [];
				keyValsMap = new Map;
				bpmMin;
				bpmMax;
				result;
				bgFilename = "";
				fileFormat;
				osuSection;
				timingLines = [];
				objectLines = [];
				eventsLines = [];
				constructor(t) {
					const e = t.split(/[\n\r]+/);
					for (const t of e) this.readLine(t);
					this.buildBeatmap()
				}
				getTimingPoint(t) {
					for (let e = this.timingPoints.length - 1; e >= 0; e--)
						if (this.timingPoints[e].offset <= t) return this.timingPoints[e];
					return this.timingPoints[0]
				}
				parsehitSound(t) {
					return t ? t.split(":")[4] : ""
				}
				parseTimingPoint(t) {
					const e = t.split(","),
						i = {
							offset: Number(e[0]),
							beatLength: Number(e[1]),
							velocity: 1,
							timingSignature: Number(e[2]),
							sampleSetId: Number(e[3]),
							customSampleIndex: Number(e[4]),
							sampleVolume: Number(e[5]),
							timingChange: 1 === Number(e[6]),
							kiaiTimeActive: 1 === Number(e[7]),
							bpm: 0
						};
					if (!isNaN(i.beatLength) && 0 !== i.beatLength)
						if (i.beatLength > 0) {
							const t = Math.round(6e4 / i.beatLength);
							this.bpmMin = this.bpmMin ? Math.min(this.bpmMin, t) : t, this.bpmMax = this.bpmMax ? Math.max(this.bpmMax, t) : t, i.bpm = t
						} else i.velocity = Math.abs(100 / i.beatLength);
					this.timingPoints.push(i)
				}
				parseNote(t) {
					const e = t.split(","),
						i = Number(e[3]),
						r = Number(e[2]),
						o = this.getTimingPoint(r);
					let s = 1;
					o && (s = this.findTimingOfNote(o.beatLength, o.beatLength - (r - o.offset) % o.beatLength));
					const a = Number(this.keyValsMap.get("CircleSize")),
						h = Math.floor(Number(e[0]) * a / 512);
					let u;
					if (1 == (1 & i)) this.nbNotes++, u = this.parsehitSound(e[5]), "" !== u ? this.hitSounds.add(u) : u = void 0, this.notes.push(new n(r, r, h, s, "note", u));
					else if (128 == (128 & i)) {
						this.nbLns++, u = this.parsehitSound(e[6]);
						const t = Number(e[5]);
						"" !== u ? this.hitSounds.add(u) : u = void 0, this.notes.push(new n(r, t, h, s, "note", u))
					}
				}
				findTimingOfNote(t, e) {
					const i = {
						1: [0, t],
						2: [t / 2],
						3: [t / 3, 2 * t / 3],
						4: [t / 4, 3 * t / 4],
						6: [t / 6, 5 * t / 6],
						8: [t / 8, 3 * t / 8, 5 * t / 8, 7 * t / 8],
						12: [t / 12, 5 * t / 12, 7 * t / 12, 11 * t / 12],
						16: [t / 16, 3 * t / 16, 5 * t / 16, 7 * t / 16, 9 * t / 16, 11 * t / 16, 13 * t / 16, 15 * t / 16]
					};
					let r = Number.POSITIVE_INFINITY,
						n = 16;
					for (const t in i) {
						const o = Number(t);
						for (let t = 0; t < i[o].length; t++) Math.abs(e - i[o][t]) < r && (r = Math.abs(e - i[o][t]), n = o)
					}
					return n
				}
				parseEvent(t) {
					let e;
					e = h.exec(t), e ? this.bgFilename = e[2] : (e = u.exec(t), e ? this.timeSounds.push(new o(Number(e[1]), e[3])) : (e = l.exec(t), e && this.timeSounds.push(new o(Number(e[1]), e[3]))))
				}
				readLine(t) {
					if (!(t = t.toString().trim())) return;
					let e = s.exec(t);
					if (e) this.osuSection = e[1].toLowerCase();
					else switch (this.osuSection) {
						case "timingpoints":
							this.timingLines.push(t);
							break;
						case "hitobjects":
							this.objectLines.push(t);
							break;
						case "events":
							this.eventsLines.push(t);
							break;
						default:
							if (!this.osuSection && (e = /^osu file format (v[0-9]+)$/.exec(t), e)) return void(this.fileFormat = e[1]);
							e = a.exec(t), e && this.keyValsMap.set(e[1], e[2])
					}
				}
				buildBeatmap() {
					if (3 !== Number(this.keyValsMap.get("Mode"))) return;
					if (Number(this.keyValsMap.get("CircleSize")) < 1 || Number(this.keyValsMap.get("CircleSize")) > 10) return;
					for (const t of this.eventsLines) this.parseEvent(t);
					for (const t of this.timingLines) this.parseTimingPoint(t);
					this.timingPoints.sort((function(t, e) {
						return t.offset > e.offset ? 1 : -1
					}));
					for (let t = 1, e = this.timingPoints.length; t < e; t++) this.timingPoints[t].bpm || (this.timingPoints[t].beatLength = this.timingPoints[t - 1].beatLength, this.timingPoints[t].bpm = this.timingPoints[t - 1].bpm);
					for (const t of this.objectLines) this.parseNote(t);
					this.notes.sort((function(t, e) {
						return t.startTime > e.startTime ? 1 : -1
					}));
					const t = this.keyValsMap.get("AudioFilename");
					void 0 !== t && "virtual" !== t && (this.timeSounds.push(new o(Number(this.keyValsMap.get("AudioLeadIn")), t)), this.hitSounds.add(t)), this.timeSounds.sort((function(t, e) {
						return t.startTime > e.startTime ? 1 : -1
					})), 0 !== this.notes.length && (this.result = new r(this.keyValsMap.get("Artist") ? this.keyValsMap.get("Artist") : "unknown", this.keyValsMap.get("Title") ? this.keyValsMap.get("Title") : "unknown", this.notes[this.notes.length - 1].endTime / 1e3, this.keyValsMap.get("Version") ? this.keyValsMap.get("Version") : "unknown", Number(this.bpmMax), Number(this.keyValsMap.get("OverallDifficulty")), Number(this.keyValsMap.get("CircleSize")), this.nbNotes, this.nbLns, this.bgFilename, this.notes, Array.from(this.hitSounds), this.timeSounds, 70))
				}
			}
			class d {
				beatmap;
				image;
				hitSounds;
				starRating;
				constructor(t, e, i) {
					this.beatmap = t, this.image = e, this.hitSounds = i, this.starRating = 0
				}
			}
			var f = i(764).Buffer;
			const p = ["Ballad", "Rock", "Dance", "Techno", "Hip-hop", "Soul/R&B", "Jazz", "Funk", "Classical", "Traditional", "Etc"];
			class _ {
				hitSounds;
				header = {
					songId: 0,
					signature: 0,
					encodeVersion: 0,
					genre: 0,
					genreString: "",
					bpm: 0,
					coverOffset: 0,
					oldEncodeVersion: 0,
					oldSongId: 0,
					oldGenre: "",
					bmpSize: 0,
					oldFileVersion: 0,
					title: "",
					artist: "",
					noter: "",
					ojmFile: "",
					coverSize: 0
				};
				Easy = {
					level: 0,
					eventCount: 0,
					noteCount: 0,
					measureCount: 0,
					packageCount: 0,
					duration: 0,
					noteOffset: 0,
					nbNotes: 0,
					nbLns: 0,
					timingLines: [],
					timingPoints: [],
					noteLines: [],
					notes: [],
					timeSoundLines: [],
					timeSounds: []
				};
				Normal = {
					level: 0,
					eventCount: 0,
					noteCount: 0,
					measureCount: 0,
					packageCount: 0,
					duration: 0,
					noteOffset: 0,
					nbNotes: 0,
					nbLns: 0,
					timingLines: [],
					timingPoints: [],
					noteLines: [],
					notes: [],
					timeSoundLines: [],
					timeSounds: []
				};
				Hard = {
					level: 0,
					eventCount: 0,
					noteCount: 0,
					measureCount: 0,
					packageCount: 0,
					duration: 0,
					noteOffset: 0,
					nbNotes: 0,
					nbLns: 0,
					timingLines: [],
					timingPoints: [],
					noteLines: [],
					notes: [],
					timeSoundLines: [],
					timeSounds: []
				};
				currentDiff;
				image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=";
				result = [];
				constructor(t, e) {
					this.hitSounds = e, this.parseOJN(t), this.buildDifficulties()
				}
				parseTimingPoint(t, e) {
					0 !== e && this.currentDiff && this.currentDiff.timingLines.push({
						beat: t,
						bpm: e,
						time: null
					})
				}
				parseTimeSignature(t, e) {
					0 !== e && this.currentDiff && this.currentDiff.timingLines.push({
						beat: t,
						bpm: null,
						time: e
					})
				}
				parseTimeSound(t, e) {
					if (0 === e.hitSound || !this.currentDiff) return;
					let i = (e.volumePan >> 4 & 15) / 16;
					0 === i && (i = 1);
					let r = 15 & e.volumePan;
					0 === r && (r = 8), r -= 8, r /= 7, e.hitSound--, e.type % 8 > 3 && (e.hitSound += 1e3), this.currentDiff.timeSoundLines.push({
						beat: t,
						name: e.hitSound.toString()
					})
				}
				parseNote(t, e, i, r) {
					if (0 === r.hitSound || !this.currentDiff) return;
					let n = (r.volumePan >> 4 & 15) / 16;
					0 === n && (n = 1);
					let o = 15 & r.volumePan;
					switch (0 === o && (o = 8), o -= 8, o /= 7, r.hitSound--, r.type % 8 > 3 && (r.hitSound += 1e3), r.type %= 4, r.type) {
						case 0:
							this.currentDiff.noteLines.push({
								beat: t,
								key: e,
								timing: i,
								hitSound: r.hitSound.toString(),
								objectName: "note",
								start: !0
							});
							break;
						case 2:
							this.currentDiff.noteLines.push({
								beat: t,
								key: e,
								timing: i,
								hitSound: r.hitSound.toString(),
								objectName: "longnote",
								start: !0
							});
							break;
						case 3:
							this.currentDiff.noteLines.push({
								beat: t,
								key: e,
								timing: i,
								hitSound: r.hitSound.toString(),
								objectName: "longnote",
								start: !1
							})
					}
				}
				processTimingPoints() {
					if (!this.currentDiff) return;
					this.currentDiff.timingLines.sort(((t, e) => t.beat === e.beat ? t.time ? 1 : -1 : t.beat - e.beat));
					for (let t = 1; t < this.currentDiff.timingLines.length; t++) this.currentDiff.timingLines[t].beat === this.currentDiff.timingLines[t - 1].beat && this.currentDiff.timingLines[t].bpm === this.currentDiff.timingLines[t - 1].bpm && this.currentDiff.timingLines[t].time === this.currentDiff.timingLines[t - 1].time && (this.currentDiff.timingLines.splice(t, 1), t--);
					let t = this.header.bpm,
						e = 0,
						i = 0;
					this.currentDiff.timingPoints.push({
						t: i,
						x: e,
						dx: t / 6e4,
						bpm: t,
						inclusive: !0
					});
					for (const r of this.currentDiff.timingLines) {
						const n = r.beat,
							o = i + 6e4 * (n - e) / t;
						r.bpm && (t = r.bpm, this.currentDiff.timingPoints.push({
							t: o,
							x: n,
							dx: t / 6e4,
							bpm: t,
							inclusive: !0
						})), e = n, i = o
					}
				}
				getTimingPoint(t) {
					if (this.currentDiff) {
						for (let e = 0; e < this.currentDiff.timingPoints.length; e++)
							if (this.currentDiff.timingPoints[e + 1]) {
								if (this.currentDiff.timingPoints[e + 1].inclusive && t <= this.currentDiff.timingPoints[e + 1].x) return this.currentDiff.timingPoints[e];
								if (!this.currentDiff.timingPoints[e + 1].inclusive && t < this.currentDiff.timingPoints[e + 1].x) return this.currentDiff.timingPoints[e]
							} return this.currentDiff.timingPoints[this.currentDiff.timingPoints.length - 1]
					}
				}
				getTime(t) {
					const e = this.getTimingPoint(t);
					return e ? (t - e.x) / (e.dx || 1) + e.t : 0
				}
				getTiming(t, e) {
					const i = 384 * t / e;
					return i % 96 == 0 ? 1 : i % 48 == 0 ? 2 : i % 32 == 0 ? 3 : i % 24 == 0 ? 4 : i % 16 == 0 ? 6 : i % 12 == 0 ? 8 : i % 8 == 0 ? 12 : 16
				}
				processNotes() {
					if (!this.currentDiff) return;
					this.currentDiff.noteLines.sort(((t, e) => t.beat - e.beat));
					for (let t = 1; t < this.currentDiff.noteLines.length; t++) this.currentDiff.noteLines[t].beat === this.currentDiff.noteLines[t - 1].beat && this.currentDiff.noteLines[t].key === this.currentDiff.noteLines[t - 1].key && (this.currentDiff.noteLines.splice(t, 1), t--);
					let t = [];
					for (const e of this.currentDiff.noteLines)
						if ("note" !== e.objectName || t.find((t => t.key === e.key)))
							if ("longnote" === e.objectName && e.start && !t.find((t => t.key === e.key))) {
								const i = this.getTime(e.beat),
									r = new n(i, i, e.key, e.timing, e.objectName, e.hitSound);
								this.currentDiff.notes.push(r), this.currentDiff.nbLns++, t.push(r)
							} else {
								const i = t.find((t => t.key === e.key));
								if (!i) continue;
								t = t.filter((t => t.key !== e.key)), i.endTime = this.getTime(e.beat)
							}
					else {
						const t = this.getTime(e.beat),
							i = new n(t, t, e.key, e.timing, e.objectName, e.hitSound);
						this.currentDiff.notes.push(i), this.currentDiff.nbNotes++
					}
				}
				processTimeSounds() {
					if (this.currentDiff) {
						this.currentDiff.timeSoundLines.sort(((t, e) => t.beat - e.beat));
						for (let t = 1; t < this.currentDiff.timeSoundLines.length; t++) this.currentDiff.timeSoundLines[t].beat === this.currentDiff.timeSoundLines[t - 1].beat && this.currentDiff.timeSoundLines[t].name === this.currentDiff.timeSoundLines[t - 1].name && (this.currentDiff.timeSoundLines.splice(t, 1), t--);
						for (const t of this.currentDiff.timeSoundLines) {
							const e = this.getTime(t.beat);
							this.currentDiff.timeSounds.push(new o(e, t.name))
						}
					}
				}
				parseOJN(t) {
					const e = new TextDecoder("utf-8"),
						i = new DataView(t);
					let r = 0;
					if (this.header.songId = i.getInt32(r, !0), r += 4, this.header.signature = i.getInt32(r, !0), r += 4, 7236207 === this.header.signature) {
						this.header.encodeVersion = i.getFloat32(r, !0), r += 4, this.header.genre = i.getInt32(r, !0), this.header.genreString = p[this.header.genre < 0 || this.header.genre > 10 ? 10 : this.header.genre], r += 4, this.header.bpm = i.getFloat32(r, !0), r += 4, this.Easy.level = i.getInt16(r, !0), r += 2, this.Normal.level = i.getInt16(r, !0), r += 2, this.Hard.level = i.getInt16(r, !0), r += 2, r += 2, this.Easy.eventCount = i.getInt32(r, !0), r += 4, this.Normal.eventCount = i.getInt32(r, !0), r += 4, this.Hard.eventCount = i.getInt32(r, !0), r += 4, this.Easy.noteCount = i.getInt32(r, !0), r += 4, this.Normal.noteCount = i.getInt32(r, !0), r += 4, this.Hard.noteCount = i.getInt32(r, !0), r += 4, this.Easy.measureCount = i.getInt32(r, !0), r += 4, this.Normal.measureCount = i.getInt32(r, !0), r += 4, this.Hard.measureCount = i.getInt32(r, !0), r += 4, this.Easy.packageCount = i.getInt32(r, !0), r += 4, this.Normal.packageCount = i.getInt32(r, !0), r += 4, this.Hard.packageCount = i.getInt32(r, !0), r += 4, this.header.oldEncodeVersion = i.getInt16(r, !0), r += 2, this.header.oldSongId = i.getInt16(r, !0), r += 2, this.header.oldGenre = e.decode(t.slice(r, r + 20)), r += 20, this.header.bmpSize = i.getInt32(r, !0), r += 4, this.header.oldFileVersion = i.getInt32(r, !0), r += 4, this.header.title = e.decode(t.slice(r, r + 64)), r += 64, this.header.artist = e.decode(t.slice(r, r + 32)), r += 32, this.header.noter = e.decode(t.slice(r, r + 32)), r += 32, this.header.ojmFile = e.decode(t.slice(r, r + 32)), r += 32, this.header.coverSize = i.getInt32(r, !0), r += 4, this.Easy.duration = i.getInt32(r, !0), r += 4, this.Normal.duration = i.getInt32(r, !0), r += 4, this.Hard.duration = i.getInt32(r, !0), r += 4, this.Easy.noteOffset = i.getInt32(r, !0), r += 4, this.Normal.noteOffset = i.getInt32(r, !0), r += 4, this.Hard.noteOffset = i.getInt32(r, !0), r += 4, this.header.coverOffset = i.getInt32(r, !0), r += 4, r = this.header.coverOffset, this.image = "data:image/png;base64," + f.from(t.slice(r, r + this.header.coverSize)).toString("base64");
						for (const t of ["Easy", "Normal", "Hard"]) {
							this.currentDiff = this[t], r = this.currentDiff.noteOffset;
							for (let t = 0; t < this.currentDiff.packageCount; t++) {
								const t = i.getInt32(r, !0);
								r += 4;
								const e = i.getInt16(r, !0);
								r += 2;
								const n = i.getInt16(r, !0);
								r += 2;
								for (let o = 0; o < n; o++) {
									const s = 4 * (t + o / n);
									if (0 === e) {
										const t = i.getFloat32(r, !0);
										r += 4, this.parseTimeSignature(s, t)
									} else if (1 === e) {
										const t = i.getFloat32(r, !0);
										r += 4, this.parseTimingPoint(s, t)
									} else if (e > 8) {
										const t = i.getInt16(r, !0);
										r += 2;
										const e = i.getInt8(r);
										r += 1;
										const n = i.getInt8(r);
										r += 1, this.parseTimeSound(s, {
											hitSound: t,
											volumePan: e,
											type: n
										})
									} else {
										const t = i.getInt16(r, !0);
										r += 2;
										const a = i.getInt8(r);
										r += 1;
										const h = i.getInt8(r);
										r += 1, this.parseNote(s, e - 2, this.getTiming(o, n), {
											hitSound: t,
											volumePan: a,
											type: h
										})
									}
								}
							}
						}
					}
				}
				buildDifficulties() {
					for (const t of ["Easy", "Normal", "Hard"]) this.currentDiff = this[t], this.processTimingPoints(), this.processNotes(), this.processTimeSounds(), 0 !== this.currentDiff.notes.length && this.result.push(new d(new r(this.header.artist, this.header.title, this.currentDiff.notes[this.currentDiff.notes.length - 1].endTime / 1e3, t + " - lvl " + this.currentDiff.level, this.header.bpm, 5, 7, this.currentDiff.nbNotes, this.currentDiff.nbLns, "", this.currentDiff.notes, [], this.currentDiff.timeSounds, 0), this.image, this.hitSounds))
				}
			}
			var m = i(764).Buffer;
			const g = Int8Array.from([110, 97, 109, 105]),
				y = Int8Array.from([48, 52, 49, 50]),
				v = [16, 14, 2, 9, 4, 0, 7, 1, 6, 8, 15, 10, 5, 12, 3, 13, 11, 7, 2, 10, 11, 3, 5, 13, 8, 4, 0, 12, 6, 15, 14, 16, 1, 9, 12, 13, 3, 0, 6, 9, 10, 1, 7, 8, 16, 2, 11, 14, 4, 15, 5, 8, 3, 4, 13, 6, 5, 11, 16, 2, 12, 7, 9, 10, 15, 14, 0, 1, 15, 2, 12, 13, 0, 4, 1, 5, 7, 3, 9, 16, 6, 11, 10, 8, 14, 0, 4, 11, 16, 15, 13, 12, 6, 5, 7, 1, 2, 3, 8, 9, 10, 14, 3, 16, 8, 7, 6, 9, 14, 13, 0, 10, 11, 4, 5, 12, 2, 1, 15, 4, 14, 16, 15, 5, 8, 7, 11, 0, 1, 6, 2, 12, 9, 3, 10, 13, 6, 13, 14, 7, 16, 10, 11, 0, 1, 12, 15, 2, 3, 8, 9, 4, 5, 10, 12, 0, 8, 9, 13, 3, 4, 5, 16, 14, 15, 1, 2, 11, 6, 7, 5, 6, 12, 4, 13, 15, 7, 14, 8, 1, 9, 2, 16, 10, 11, 0, 3, 11, 15, 4, 14, 3, 1, 0, 2, 13, 12, 6, 7, 5, 16, 9, 8, 10, 3, 2, 1, 0, 4, 12, 13, 11, 16, 5, 6, 15, 14, 7, 9, 10, 8, 9, 10, 0, 7, 8, 6, 16, 3, 4, 1, 2, 5, 11, 14, 15, 13, 12, 10, 6, 9, 12, 11, 16, 7, 8, 0, 15, 3, 1, 2, 5, 13, 14, 4, 13, 0, 1, 14, 2, 3, 8, 11, 7, 12, 9, 5, 10, 15, 4, 6, 16, 1, 14, 2, 3, 13, 11, 7, 0, 8, 12, 9, 6, 15, 16, 5, 10, 4, 0];
			class T {
				accKeyByte = 255;
				accCounter = 0;
				result = new Map;
				constructor(t) {
					this.parseOJM(t)
				}
				parseM30(t, e) {
					let i = 4;
					i += 4;
					const r = e.getInt32(i, !0);
					i += 4;
					const n = e.getInt32(i, !0);
					i += 4;
					const o = e.getInt32(i, !0);
					i += 4;
					const s = e.getInt32(i, !0);
					i += 4, i += 4, i = o;
					for (let o = 0; o < n && !(s - i < 52); o++) {
						const n = "ogg";
						i += 32;
						const o = e.getInt32(i, !0);
						i += 4;
						const s = e.getInt16(i, !0);
						i += 2, i += 2, i += 4;
						const a = e.getInt16(i, !0);
						i += 2, i += 2, i += 4;
						const h = new Int8Array(t.slice(i, i + o));
						switch (i += o, r) {
							case 16:
								this.NamiXOR(h);
								break;
							case 32:
								this.F412XOR(h)
						}
						let u = a;
						if (0 === s) u += 1e3;
						else if (5 !== s) continue;
						this.result.set(u.toString(), "data:audio/" + n + ";base64," + m.from(h).toString("base64"))
					}
				}
				NamiXOR(t) {
					for (let e = 0; e + 3 < t.length; e += 4) t[e + 0] ^= g[0], t[e + 1] ^= g[1], t[e + 2] ^= g[2], t[e + 3] ^= g[3]
				}
				F412XOR(t) {
					for (let e = 0; e + 3 < t.length; e += 4) t[e + 0] ^= y[0], t[e + 1] ^= y[1], t[e + 2] ^= y[2], t[e + 3] ^= y[3]
				}
				parseOCM(t, e, i) {
					const r = new TextEncoder;
					let n = 4;
					n += 4;
					const o = e.getInt32(n, !0);
					n += 4;
					const s = e.getInt32(n, !0);
					n += 4;
					const a = e.getInt32(n, !0);
					n += 4;
					let h = 0;
					for (n = o; n < s && !(a - n < 56);) {
						const o = "wav";
						n += 32;
						const s = e.getInt16(n, !0);
						n += 2;
						const a = e.getInt16(n, !0);
						n += 2;
						const u = e.getInt32(n, !0);
						n += 4;
						const l = e.getInt32(n, !0);
						n += 4;
						const c = e.getInt16(n, !0);
						n += 2;
						const d = e.getInt16(n, !0);
						n += 2, n += 4;
						const f = e.getInt32(n, !0);
						n += 4;
						let p = new Int8Array(t.slice(n, n + f));
						n += f, i && (p = this.rearrange(p), p = this.accXOR(p));
						const _ = new Int8Array(44 + f),
							g = new ArrayBuffer(2),
							y = new DataView(g),
							v = new ArrayBuffer(4),
							T = new DataView(v);
						_.set(r.encode("RIFF"), 0), T.setInt32(0, f + 36, !0), _.set(new Int8Array(v), 4), _.set(r.encode("WAVE"), 8), _.set(r.encode("fmt "), 12), T.setInt32(0, 16, !0), _.set(new Int8Array(v), 16), y.setInt16(0, s, !0), _.set(new Int8Array(g), 20), y.setInt16(0, a, !0), _.set(new Int8Array(g), 22), T.setInt32(0, u, !0), _.set(new Int8Array(v), 24), T.setInt32(0, l, !0), _.set(new Int8Array(v), 28), y.setInt16(0, c, !0), _.set(new Int8Array(g), 32), y.setInt16(0, d, !0), _.set(new Int8Array(g), 34), _.set(r.encode("data"), 36), T.setInt32(0, f, !0), _.set(new Int8Array(v), 40), _.set(p, 44), this.result.set(h.toString(), "data:audio/" + o + ";base64," + m.from(_).toString("base64")), h++
					}
					for (h = 1e3, n = s; n < a && !(a - n < 36);) {
						const i = "ogg";
						n += 32;
						const r = e.getInt32(n, !0);
						n += 4;
						const o = t.slice(n, n + r);
						n += r, this.result.set(h.toString(), "data:audio/" + i + ";base64," + m.from(o).toString("base64")), h++
					}
				}
				rearrange(t) {
					const e = t.length;
					let i = (e % 17 << 4) + e % 17;
					const r = Math.floor(e / 17),
						n = Int8Array.from(t);
					for (let e = 0; e < 17; e++) {
						const o = r * e,
							s = r * v[i];
						for (let e = 0; e < r; e++) n[s + e] = t[o + e];
						i++
					}
					return n
				}
				accXOR(t) {
					let e = 0,
						i = 0;
					for (let r = 0; r < t.length; r++) e = i = t[r], 0 != (this.accKeyByte << this.accCounter & 128) && (i = ~i), t[r] = i, this.accCounter++, this.accCounter > 7 && (this.accCounter = 0, this.accKeyByte = e);
					return t
				}
				parseOJM(t) {
					const e = new DataView(t);
					switch (e.getInt32(0, !0)) {
						case 3158861:
							this.parseM30(t, e);
							break;
						case 4410703:
							this.parseOCM(t, e, !0);
							break;
						case 5065295:
							this.parseOCM(t, e, !1)
					}
				}
			}
			class b {
				beat;
				key;
				timing;
				hitSound;
				objectName;
				start;
				constructor(t, e, i, r, n, o) {
					this.beat = t, this.key = e, this.timing = i, this.hitSound = r, this.objectName = n, this.start = o
				}
			}
			class E {
				beat;
				name;
				constructor(t, e) {
					this.beat = t, this.name = e
				}
			}
			const x = /^#([a-zA-Z0-9]+)[ ]*(.+)$/i,
				A = /^#BMP([a-zA-Z0-9]+)[ ]*(.+)$/i,
				S = /^#BPM([a-zA-Z0-9]+)[ ]*(.+)$/i,
				w = /^#STOP([a-zA-Z0-9]+)[ ]*(.+)$/i,
				R = /^#(?:WAV|OGG)([a-zA-Z0-9]+)[ ]*(.+)$/i,
				O = /^#([0-9][0-9][0-9])([a-zA-Z0-9][a-zA-Z0-9]):([a-zA-Z0-9]+)/i;
			class I {
				extension;
				nbNotes = 0;
				nbLns = 0;
				hitSounds = new Set;
				timingLines = [];
				timingPoints = [];
				timeSoundLines = [];
				timeSounds = [];
				noteLines = [];
				notes = [];
				backgroundMap = new Map;
				hitSoundsMap = new Map;
				extendedBPMMap = new Map;
				stopsMap = new Map;
				keyValsMap = new Map;
				result;
				constructor(t, e) {
					this.extension = e;
					const i = t.toString().split(/[\n\r]+/);
					for (const t of i) this.readLine(t);
					this.buildBeatmap()
				}
				parseTimeSound(t, e) {
					const i = e.length / 2;
					for (let r = 0; r < i; r++) {
						const n = e.substring(2 * r, 2 * r + 2);
						if ("00" === n) continue;
						const o = 4 * (t + r / i),
							s = this.hitSoundsMap.get(n);
						s && (this.timeSoundLines.push(new E(o, s)), this.hitSounds.add(s))
					}
				}
				parseTimingPoint(t, e) {
					const i = e.length / 2;
					for (let r = 0; r < i; r++) {
						const n = e.substring(2 * r, 2 * r + 2);
						if ("00" === n) continue;
						const o = 4 * (t + r / i),
							s = parseInt(n, 16);
						this.timingLines.push({
							beat: o,
							bpm: s,
							time: null
						})
					}
				}
				parseExtendedTimingPoint(t, e) {
					const i = e.length / 2;
					for (let r = 0; r < i; r++) {
						const n = e.substring(2 * r, 2 * r + 2);
						if ("00" === n) continue;
						const o = 4 * (t + r / i),
							s = this.extendedBPMMap.get(n);
						s && this.timingLines.push({
							beat: o,
							bpm: s,
							time: null
						})
					}
				}
				parseStops(t, e) {
					const i = e.length / 2;
					for (let r = 0; r < i; r++) {
						const n = e.substring(2 * r, 2 * r + 2);
						if ("00" === n) continue;
						const o = 4 * (t + r / i),
							s = this.stopsMap.get(n);
						if (!s) continue;
						const a = s / 192;
						this.timingLines.push({
							beat: o,
							bpm: null,
							time: a
						})
					}
				}
				parseNote(t, e, i) {
					const r = i.length / 2;
					for (let n = 0; n < r; n++) {
						const o = i.substring(2 * n, 2 * n + 2);
						if ("00" === o) continue;
						const s = 4 * (t + n / r),
							a = this.getTiming(n, r),
							h = this.hitSoundsMap.get(o);
						this.noteLines.push(new b(s, e, a, h, "note", !1)), h && this.hitSounds.add(h)
					}
				}
				getTiming(t, e) {
					const i = 384 * t / e;
					return i % 96 == 0 ? 1 : i % 48 == 0 ? 2 : i % 32 == 0 ? 3 : i % 24 == 0 ? 4 : i % 16 == 0 ? 6 : i % 12 == 0 ? 8 : i % 8 == 0 ? 12 : 16
				}
				parseData(t, e, i) {
					switch (e) {
						case 1:
							this.parseTimeSound(t, i);
							break;
						case 3:
							this.parseTimingPoint(t, i);
							break;
						case 8:
							this.parseExtendedTimingPoint(t, i);
							break;
						case 9:
							this.parseStops(t, i);
							break;
						case 11:
							this.parseNote(t, 1, i);
							break;
						case 12:
							this.parseNote(t, 2, i);
							break;
						case 13:
							this.parseNote(t, 3, i);
							break;
						case 14:
							this.parseNote(t, 4, i);
							break;
						case 15:
							this.parseNote(t, 5, i);
							break;
						case 16:
							this.parseNote(t, 0, i);
							break;
						case 18:
						case 22:
							this.parseNote(t, 6, i);
							break;
						case 19:
						case 23:
							this.parseNote(t, 7, i);
							break;
						case 24:
							this.parseNote(t, 8, i);
							break;
						case 25:
							this.parseNote(t, 9, i)
					}
				}
				readLine(t) {
					if (!(t = t.toString().trim())) return;
					let e = w.exec(t);
					e ? this.stopsMap.set(e[1], Number(e[2])) : (e = A.exec(t), e ? this.backgroundMap.set(e[1], e[2]) : (e = S.exec(t), e ? this.extendedBPMMap.set(e[1], Number(e[2])) : (e = R.exec(t), e ? this.hitSoundsMap.set(e[1], e[2]) : (e = O.exec(t), e ? this.parseData(Number(e[1]), Number(e[2]), e[3]) : (e = x.exec(t), e && this.keyValsMap.set(e[1].toLowerCase(), e[2]))))))
				}
				processTimingPoints() {
					this.timingLines.sort(((t, e) => t.beat === e.beat ? t.time ? 1 : -1 : t.beat - e.beat));
					let t = this.keyValsMap.get("bpm") ? Number(this.keyValsMap.get("bpm")) : 130,
						e = 0,
						i = 0;
					this.timingPoints.push({
						t: i,
						x: e,
						dx: t / 6e4,
						bpm: t,
						inclusive: !0
					});
					for (const r of this.timingLines) {
						const n = r.beat;
						let o = i + 6e4 * (n - e) / t;
						r.bpm ? (t = r.bpm, this.timingPoints.push({
							t: o,
							x: n,
							dx: t / 6e4,
							bpm: t,
							inclusive: !0
						})) : r.time && (this.timingPoints.push({
							t: o,
							x: n,
							dx: 0,
							bpm: t,
							inclusive: !0
						}), o += 6e4 * r.time / t, this.timingPoints.push({
							t: o,
							x: n,
							dx: t / 6e4,
							bpm: t,
							inclusive: !1
						})), e = n, i = o
					}
				}
				getTimingPoint(t) {
					for (let e = 0; e < this.timingPoints.length; e++)
						if (this.timingPoints[e + 1]) {
							if (this.timingPoints[e + 1].inclusive && t <= this.timingPoints[e + 1].x) return this.timingPoints[e];
							if (!this.timingPoints[e + 1].inclusive && t < this.timingPoints[e + 1].x) return this.timingPoints[e]
						} return this.timingPoints[this.timingPoints.length - 1]
				}
				getTime(t) {
					const e = this.getTimingPoint(t);
					return (t - e.x) / (e.dx || 1) + e.t
				}
				processNotes() {
					this.noteLines.sort(((t, e) => t.beat - e.beat));
					for (const t of this.noteLines) {
						const e = this.getTime(t.beat);
						this.notes.push(new n(e, e, t.key, t.timing, t.objectName, t.hitSound)), this.nbNotes++
					}
				}
				processTimeSounds() {
					this.timeSoundLines.sort(((t, e) => t.beat - e.beat));
					for (const t of this.timeSoundLines) {
						const e = this.getTime(t.beat);
						this.timeSounds.push(new o(e, t.name))
					}
				}
				buildBeatmap() {
					if ("2" === this.keyValsMap.get("player")) return;
					let t;
					t = "pms" === this.extension ? 9 : 8, this.processTimingPoints(), this.processNotes(), this.processTimeSounds(), 0 !== this.notes.length && (this.result = new r(this.keyValsMap.get("artist") ?? "unknown", this.keyValsMap.get("title") ?? "unknown", this.notes[this.notes.length - 1].endTime / 1e3, this.keyValsMap.get("difficulty") ?? "unknown", Number(this.keyValsMap.get("bpm") ?? 130), 7, t, this.nbNotes, this.nbLns, "", this.notes, Array.from(this.hitSounds), this.timeSounds, 0))
				}
			}
			class P {
				beat;
				bpm;
				time;
				constructor(t, e, i) {
					this.beat = t, this.bpm = e, this.time = i
				}
			}
			const M = {
					chart: {
						sm: ["STEPSTYPE", "DESCRIPTION", "DIFFICULTY", "METER", "RADARVALUES", "NOTES"],
						ssc: ["CHARTNAME", "CHARTSTYLE", "CREDIT", "DESCRIPTION", "DIFFICULTY", "DISPLAYBPM", "METER", "NOTEDATA", "NOTES", "RADARVALUES", "STEPSTYPE"]
					},
					list: ["ATTACKS", "BGCHANGES", "BPMS", "COMBOS", "DELAYS", "FAKES", "FGCHANGES", "KEYSOUNDS", "LABELS", "SCROLLS", "SPEEDS", "STOPS", "TICKCOUNTS", "TIMESIGNATURES", "WARPS"]
				},
				C = {
					"dance-threepanel": 3,
					"dance-single": 4,
					"dance-solo": 6,
					"dance-double": 8,
					"dance-couple": 8,
					"pump-single": 5,
					"pump-halfdouble": 6,
					"pump-double": 10,
					"pump-couple": 10,
					"ez2-single": 5,
					"ez2-double": 10,
					"ez2-real": 7,
					"para-single": 5,
					"ds3ddx-single": 8,
					"maniax-single": 4,
					"maniax-double": 8,
					"techno-single4": 4,
					"techno-single5": 5,
					"techno-single8": 8,
					"techno-double4": 8,
					"techno-double5": 10,
					"pnm-five": 5,
					"pnm-nine": 9
				};
			class D {
				hitSounds = new Set;
				timingLines = [];
				timingPoints = [];
				timeSounds = [];
				keyValsMap = new Map;
				result = [];
				beatmap = {};
				constructor(t) {
					this.buildBeatmaps(t)
				}
				getTiming(t, e) {
					const i = 384 * t / e;
					return i % 96 == 0 ? 1 : i % 48 == 0 ? 2 : i % 32 == 0 ? 3 : i % 24 == 0 ? 4 : i % 16 == 0 ? 6 : i % 12 == 0 ? 8 : i % 8 == 0 ? 12 : 16
				}
				processTimingPoints() {
					let t = this.timingLines[0].bpm ?? 120,
						e = 0,
						i = 1e3 * -Number(this.beatmap.OFFSET);
					for (const r of this.timingLines) {
						const n = r.beat;
						let o = i + 6e4 * (n - e) / t;
						r.bpm ? (t = r.bpm, this.timingPoints.push({
							t: o,
							x: n,
							dx: t / 6e4,
							bpm: t,
							inclusive: !0
						})) : r.time && (this.timingPoints.push({
							t: o,
							x: n,
							dx: 0,
							bpm: t,
							inclusive: !0
						}), o += r.time, this.timingPoints.push({
							t: o,
							x: n,
							dx: t / 6e4,
							bpm: t,
							inclusive: !1
						})), e = n, i = o
					}
				}
				getTimingPoint(t) {
					for (let e = 0; e < this.timingPoints.length; e++)
						if (this.timingPoints[e + 1]) {
							if (this.timingPoints[e + 1].inclusive && t <= this.timingPoints[e + 1].x) return this.timingPoints[e];
							if (!this.timingPoints[e + 1].inclusive && t < this.timingPoints[e + 1].x) return this.timingPoints[e]
						} return this.timingPoints[this.timingPoints.length - 1]
				}
				getTime(t) {
					const e = this.getTimingPoint(t);
					return (t - e.x) / (e.dx || 1) + e.t
				}
				buildBeatmaps(t) {
					const e = t.replace(/\/\/.*$/gm, "").replace(/;/gm, "").split("#");
					for (const t in e) {
						let i = e[t].trim().split(":");
						if (!i || 0 === i.length) continue;
						i = [i.shift() ?? "", i.join(":")];
						const r = i.splice(0, 1)[0].replace(/;$/, "");
						if (!r || 0 === i.length) continue;
						const n = 1 === i.length ? i[0] : i;
						if ("NOTES" === r && n.indexOf(":") > -1) {
							const t = n.split(":");
							for (const t in M.chart.ssc) {
								const e = M.chart.ssc[t];
								this.beatmap[e] || (this.beatmap[e] = [])
							}
							for (const e in M.chart.sm) this.beatmap[M.chart.sm[e]].push(t[e].trim())
						} else if (M.chart.ssc.indexOf(r) > -1) this.beatmap[r] || (this.beatmap[r] = []), this.beatmap[r].push(n);
						else if (M.list.indexOf(r) > -1) {
							const t = n.replace(/\s+/gm, "").split(",").filter((function(t) {
									return !!t
								})),
								e = [];
							for (const i in t) {
								const r = t[i].split("=");
								e.push(r)
							}
							this.beatmap[r] = e
						} else this.beatmap[r] = n
					}
					for (const t of this.beatmap.BPMS) this.timingLines.push(new P(Number(t[0]), Number(t[1]), null));
					for (const t of this.beatmap.STOPS) this.timingLines.push(new P(Number(t[0]), null, 1e3 * Number(t[1])));
					this.timingLines.sort(((t, e) => t.beat === e.beat ? t.time ? 1 : -1 : t.beat - e.beat)), this.processTimingPoints(), this.beatmap.NUMBERLONGNOTES = [], this.beatmap.NUMBERNOTES = [], this.beatmap.TOTALTIME = [], this.beatmap.ACTUALNOTES = [];
					for (const t in this.beatmap.NOTES) {
						this.beatmap.NUMBERLONGNOTES[t] = 0, this.beatmap.NUMBERNOTES[t] = 0, this.beatmap.ACTUALNOTES[t] = [], this.beatmap.RADARVALUES[t] = this.beatmap.RADARVALUES[t].split(",");
						const e = this.beatmap.NOTES[t].trim().split(/,\s*/),
							i = [];
						let r = [];
						for (const o in e) {
							const s = e[o].trim().replace(/\s+/gm, " ").split(/\s+/);
							for (const e in s) {
								s[e] = s[e].split("");
								const i = Number(o),
									a = Number(e),
									h = s.length,
									u = 4 * (i + a / h),
									l = this.getTime(u),
									c = this.getTiming(a, h);
								for (let i = 0; i < s[e].length; i++) {
									const e = i,
										o = s[a][e];
									if ("1" === o) {
										const i = new n(l, l, e, c, "note");
										this.beatmap.ACTUALNOTES[t].push(i), this.beatmap.NUMBERNOTES[t]++
									} else if ("2" === o || "4" === o) {
										const i = new n(l, l, e, c, "longnote");
										this.beatmap.ACTUALNOTES[t].push(i), this.beatmap.NUMBERLONGNOTES[t]++, r.push(i)
									} else if ("3" === o) {
										const t = r.find((t => t.key === e));
										t && (r = r.filter((t => t.key !== e)), t.endTime = l)
									}
								}
							}
							i.push([parseInt(o), s])
						}
						this.beatmap.NOTES[t] = i, this.beatmap.TOTALTIME[t] = this.beatmap.ACTUALNOTES[t][this.beatmap.ACTUALNOTES[t].length - 1].endTime ? this.beatmap.ACTUALNOTES[t][this.beatmap.ACTUALNOTES[t].length - 1].endTime : this.beatmap.ACTUALNOTES[t][this.beatmap.ACTUALNOTES[t].length - 1].startTime
					}
					const i = [];
					for (const t in this.beatmap.NOTES) i.push(new r(this.beatmap.ARTIST, this.beatmap.TITLE, this.beatmap.TOTALTIME[t] / 1e3, this.beatmap.CHARTNAME[t] && "" !== this.beatmap.CHARTNAME[t].length ? this.beatmap.CHARTNAME[t] : this.beatmap.METER[t], this.beatmap.BPMS[0][1], 8, C[this.beatmap.STEPSTYPE[t]], this.beatmap.NUMBERNOTES[t], this.beatmap.NUMBERLONGNOTES[t], "" === this.beatmap.BACKGROUND ? "BG.png" : this.beatmap.BACKGROUND, this.beatmap.ACTUALNOTES[t], [this.beatmap.MUSIC], [new o(0, this.beatmap.MUSIC)], 0));
					this.result = i
				}
			}
			var N = {},
				L = Uint8Array,
				F = Uint16Array,
				B = Uint32Array,
				U = new L([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
				k = new L([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
				G = new L([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
				X = function(t, e) {
					for (var i = new F(31), r = 0; r < 31; ++r) i[r] = e += 1 << t[r - 1];
					var n = new B(i[30]);
					for (r = 1; r < 30; ++r)
						for (var o = i[r]; o < i[r + 1]; ++o) n[o] = o - i[r] << 5 | r;
					return [i, n]
				},
				H = X(U, 2),
				j = H[0],
				z = H[1];
			j[28] = 258, z[258] = 28;
			for (var Y = X(k, 0), V = Y[0], W = (Y[1], new F(32768)), q = 0; q < 32768; ++q) {
				var K = (43690 & q) >>> 1 | (21845 & q) << 1;
				K = (61680 & (K = (52428 & K) >>> 2 | (13107 & K) << 2)) >>> 4 | (3855 & K) << 4, W[q] = ((65280 & K) >>> 8 | (255 & K) << 8) >>> 1
			}
			var Z = function(t, e, i) {
					for (var r = t.length, n = 0, o = new F(e); n < r; ++n) ++o[t[n] - 1];
					var s, a = new F(e);
					for (n = 0; n < e; ++n) a[n] = a[n - 1] + o[n - 1] << 1;
					if (i) {
						s = new F(1 << e);
						var h = 15 - e;
						for (n = 0; n < r; ++n)
							if (t[n])
								for (var u = n << 4 | t[n], l = e - t[n], c = a[t[n] - 1]++ << l, d = c | (1 << l) - 1; c <= d; ++c) s[W[c] >>> h] = u
					} else
						for (s = new F(r), n = 0; n < r; ++n) t[n] && (s[n] = W[a[t[n] - 1]++] >>> 15 - t[n]);
					return s
				},
				J = new L(288);
			for (q = 0; q < 144; ++q) J[q] = 8;
			for (q = 144; q < 256; ++q) J[q] = 9;
			for (q = 256; q < 280; ++q) J[q] = 7;
			for (q = 280; q < 288; ++q) J[q] = 8;
			var $ = new L(32);
			for (q = 0; q < 32; ++q) $[q] = 5;
			var Q = Z(J, 9, 1),
				tt = Z($, 5, 1),
				et = function(t) {
					for (var e = t[0], i = 1; i < t.length; ++i) t[i] > e && (e = t[i]);
					return e
				},
				it = function(t, e, i) {
					var r = e / 8 | 0;
					return (t[r] | t[r + 1] << 8) >> (7 & e) & i
				},
				rt = function(t, e) {
					var i = e / 8 | 0;
					return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) >> (7 & e)
				},
				nt = function(t) {
					return (t + 7) / 8 | 0
				},
				ot = function(t, e, i) {
					(null == e || e < 0) && (e = 0), (null == i || i > t.length) && (i = t.length);
					var r = new(t instanceof F ? F : t instanceof B ? B : L)(i - e);
					return r.set(t.subarray(e, i)), r
				},
				st = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
				at = function(t, e, i) {
					var r = new Error(e || st[t]);
					if (r.code = t, Error.captureStackTrace && Error.captureStackTrace(r, at), !i) throw r;
					return r
				},
				ht = function(t, e, i) {
					var r = t.length;
					if (!r || i && i.f && !i.l) return e || new L(0);
					var n = !e || i,
						o = !i || i.i;
					i || (i = {}), e || (e = new L(3 * r));
					var s = function(t) {
							var i = e.length;
							if (t > i) {
								var r = new L(Math.max(2 * i, t));
								r.set(e), e = r
							}
						},
						a = i.f || 0,
						h = i.p || 0,
						u = i.b || 0,
						l = i.l,
						c = i.d,
						d = i.m,
						f = i.n,
						p = 8 * r;
					do {
						if (!l) {
							a = it(t, h, 1);
							var _ = it(t, h + 1, 3);
							if (h += 3, !_) {
								var m = t[(R = nt(h) + 4) - 4] | t[R - 3] << 8,
									g = R + m;
								if (g > r) {
									o && at(0);
									break
								}
								n && s(u + m), e.set(t.subarray(R, g), u), i.b = u += m, i.p = h = 8 * g, i.f = a;
								continue
							}
							if (1 == _) l = Q, c = tt, d = 9, f = 5;
							else if (2 == _) {
								var y = it(t, h, 31) + 257,
									v = it(t, h + 10, 15) + 4,
									T = y + it(t, h + 5, 31) + 1;
								h += 14;
								for (var b = new L(T), E = new L(19), x = 0; x < v; ++x) E[G[x]] = it(t, h + 3 * x, 7);
								h += 3 * v;
								var A = et(E),
									S = (1 << A) - 1,
									w = Z(E, A, 1);
								for (x = 0; x < T;) {
									var R, O = w[it(t, h, S)];
									if (h += 15 & O, (R = O >>> 4) < 16) b[x++] = R;
									else {
										var I = 0,
											P = 0;
										for (16 == R ? (P = 3 + it(t, h, 3), h += 2, I = b[x - 1]) : 17 == R ? (P = 3 + it(t, h, 7), h += 3) : 18 == R && (P = 11 + it(t, h, 127), h += 7); P--;) b[x++] = I
									}
								}
								var M = b.subarray(0, y),
									C = b.subarray(y);
								d = et(M), f = et(C), l = Z(M, d, 1), c = Z(C, f, 1)
							} else at(1);
							if (h > p) {
								o && at(0);
								break
							}
						}
						n && s(u + 131072);
						for (var D = (1 << d) - 1, N = (1 << f) - 1, F = h;; F = h) {
							var B = (I = l[rt(t, h) & D]) >>> 4;
							if ((h += 15 & I) > p) {
								o && at(0);
								break
							}
							if (I || at(2), B < 256) e[u++] = B;
							else {
								if (256 == B) {
									F = h, l = null;
									break
								}
								var X = B - 254;
								if (B > 264) {
									var H = U[x = B - 257];
									X = it(t, h, (1 << H) - 1) + j[x], h += H
								}
								var z = c[rt(t, h) & N],
									Y = z >>> 4;
								if (z || at(3), h += 15 & z, C = V[Y], Y > 3 && (H = k[Y], C += rt(t, h) & (1 << H) - 1, h += H), h > p) {
									o && at(0);
									break
								}
								n && s(u + 131072);
								for (var W = u + X; u < W; u += 4) e[u] = e[u - C], e[u + 1] = e[u + 1 - C], e[u + 2] = e[u + 2 - C], e[u + 3] = e[u + 3 - C];
								u = W
							}
						}
						i.l = l, i.p = F, i.b = u, i.f = a, l && (a = 1, i.m = d, i.d = c, i.n = f)
					} while (!a);
					return u == e.length ? e : ot(e, 0, u)
				},
				ut = new L(0),
				lt = function(t, e, i) {
					for (var r = t(), n = t.toString(), o = n.slice(n.indexOf("[") + 1, n.lastIndexOf("]")).replace(/ /g, "").split(","), s = 0; s < r.length; ++s) {
						var a = r[s],
							h = o[s];
						if ("function" == typeof a) {
							e += ";" + h + "=";
							var u = a.toString();
							if (a.prototype)
								if (-1 != u.indexOf("[native code]")) {
									var l = u.indexOf(" ", 8) + 1;
									e += u.slice(l, u.indexOf("(", l))
								} else
									for (var c in e += u, a.prototype) e += ";" + h + ".prototype." + c + "=" + a.prototype[c].toString();
							else e += u
						} else i[h] = a
					}
					return [e, i]
				},
				ct = [],
				dt = function() {
					return [L, F, B, U, k, G, j, V, Q, tt, W, st, Z, et, it, rt, nt, ot, at, ht, vt, ft, pt]
				},
				ft = function(t) {
					return postMessage(t, [t.buffer])
				},
				pt = function(t) {
					return t && t.size && new L(t.size)
				},
				_t = function(t, e, i, r, n, o) {
					var s = function(t, e, i, r) {
						var n;
						if (!ct[i]) {
							for (var o = "", s = {}, a = t.length - 1, h = 0; h < a; ++h) o = (n = lt(t[h], o, s))[0], s = n[1];
							ct[i] = lt(t[a], o, s)
						}
						var u = function(t, e) {
							var i = {};
							for (var r in t) i[r] = t[r];
							for (var r in e) i[r] = e[r];
							return i
						}({}, ct[i][1]);
						return function(t, e, i, r, n) {
							var o = new Worker(N[e] || (N[e] = URL.createObjectURL(new Blob([t + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
								type: "text/javascript"
							}))));
							return o.onmessage = function(t) {
								var e = t.data,
									i = e.$e$;
								if (i) {
									var r = new Error(i[0]);
									r.code = i[1], r.stack = i[2], n(r, null)
								} else n(null, e)
							}, o.postMessage(i, r), o
						}(ct[i][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", i, u, function(t) {
							var e = [];
							for (var i in t)(t[i] instanceof L || t[i] instanceof F || t[i] instanceof B) && e.push((t[i] = new t[i].constructor(t[i])).buffer);
							return e
						}(u), r)
					}(i, r, n, (function(t, e) {
						s.terminate(), o(t, e)
					}));
					return s.postMessage([t, e], e.consume ? [t.buffer] : []),
						function() {
							s.terminate()
						}
				},
				mt = function(t, e) {
					return t[e] | t[e + 1] << 8
				},
				gt = function(t, e) {
					return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
				},
				yt = function(t, e) {
					return gt(t, e) + 4294967296 * gt(t, e + 4)
				};

			function vt(t, e) {
				return ht(t, e)
			}
			var Tt = "undefined" != typeof TextDecoder && new TextDecoder;
			try {
				Tt.decode(ut, {
					stream: !0
				})
			} catch (t) {}

			function bt(t, e) {
				if (e) {
					for (var i = "", r = 0; r < t.length; r += 16384) i += String.fromCharCode.apply(null, t.subarray(r, r + 16384));
					return i
				}
				if (Tt) return Tt.decode(t);
				var n = function(t) {
						for (var e = "", i = 0;;) {
							var r = t[i++],
								n = (r > 127) + (r > 223) + (r > 239);
							if (i + n > t.length) return [e, ot(t, i - 1)];
							n ? 3 == n ? (r = ((15 & r) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) - 65536, e += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)) : e += 1 & n ? String.fromCharCode((31 & r) << 6 | 63 & t[i++]) : String.fromCharCode((15 & r) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) : e += String.fromCharCode(r)
						}
					}(t),
					o = n[0];
				return n[1].length && at(8), o
			}
			var Et = function(t, e) {
					for (; 1 != mt(t, e); e += 4 + mt(t, e + 2));
					return [yt(t, e + 12), yt(t, e + 4), yt(t, e + 20)]
				},
				xt = "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout ? setTimeout : function(t) {
					t()
				};
			class At extends Error {
				code = "corruptosz"
			}
			class St extends Error {
				code = "invalidformat"
			}
			class wt {
				files = [];
				folders = new Map
			}
			class Rt extends Error {
				code = "filenotfound"
			}
			class Ot extends Error {
				code = "fileread"
			}
			var It = i(764).Buffer;
			class Pt {
				findFile(t, e) {
					const i = t.replace("\\", "/").split("/"),
						r = i.pop();
					if (void 0 === r) return;
					let n = e;
					for (const t of i) {
						const e = n.folders.get(t);
						if (!e) return;
						n = e
					}
					return n.files.find((t => t.name.toLowerCase() === r.toLowerCase())) || n.files.find((t => {
						const e = t.name.match(/\.[a-zA-Z0-9]+/),
							i = r.match(/\.[a-zA-Z0-9]+/);
						if (e && i) return t.name.substring(0, t.name.length - e[0].length).toLowerCase() === r.substring(0, r.length - i[0].length).toLowerCase()
					}))
				}
				async getFileEntriesFromDirectory(t) {
					const e = t.createReader();
					let i = [],
						r = -1;
					for (; r !== i.length;) r = i.length, i = i.concat(await this.readDirectory(e));
					return i
				}
				async readDirectory(t) {
					return new Promise(((e, i) => {
						t.readEntries((t => e(t)), (t => i(t)))
					}))
				}
				async readAllFileEntries(t) {
					const e = new wt;
					for (const i of t)
						if (i.isFile) e.files.push(await this.readFileEntry(i));
						else if (i.isDirectory) {
						const t = await this.getFileEntriesFromDirectory(i);
						e.folders.set(i.name, await this.readAllFileEntries(t))
					}
					return e
				}
				async readFileEntry(t) {
					return new Promise(((e, i) => {
						t.file((t => e(t)), (t => i(t)))
					}))
				}
				async readFileAsArrayBuffer(t) {
					return new Promise(((e, i) => {
						const r = new FileReader;
						r.onload = t => {
							null != t && null != t.target ? e(t.target.result) : i(new Ot)
						}, r.onerror = () => {
							i(new Ot)
						}, r.readAsArrayBuffer(t)
					}))
				}
				async unzipFile(t) {
					return new Promise(((e, i) => {
						! function(t, e, i) {
							i || (i = e, e = {}), "function" != typeof i && at(7);
							var r = [],
								n = function() {
									for (var t = 0; t < r.length; ++t) r[t]()
								},
								o = {},
								s = function(t, e) {
									xt((function() {
										i(t, e)
									}))
								};
							xt((function() {
								s = i
							}));
							for (var a = t.length - 22; 101010256 != gt(t, a); --a)
								if (!a || t.length - a > 65558) return s(at(13, 0, 1), null), n;
							var h = mt(t, a + 8);
							if (h) {
								var u = h,
									l = gt(t, a + 16),
									c = 4294967295 == l;
								if (c) {
									if (a = gt(t, a - 12), 101075792 != gt(t, a)) return s(at(13, 0, 1), null), n;
									u = h = gt(t, a + 32), l = gt(t, a + 48)
								}
								for (var d = e && e.filter, f = function(e) {
										var i = function(t, e, i) {
												var r = mt(t, e + 28),
													n = bt(t.subarray(e + 46, e + 46 + r), !(2048 & mt(t, e + 8))),
													o = e + 46 + r,
													s = gt(t, e + 20),
													a = i && 4294967295 == s ? Et(t, o) : [s, gt(t, e + 24), gt(t, e + 42)],
													h = a[0],
													u = a[1],
													l = a[2];
												return [mt(t, e + 10), h, u, n, o + mt(t, e + 30) + mt(t, e + 32), l]
											}(t, l, c),
											a = i[0],
											u = i[1],
											f = i[2],
											p = i[3],
											_ = i[4],
											m = i[5],
											g = function(t, e) {
												return e + 30 + mt(t, e + 26) + mt(t, e + 28)
											}(t, m);
										l = _;
										var y = function(t, e) {
											t ? (n(), s(t, null)) : (e && (o[p] = e), --h || s(null, o))
										};
										if (!d || d({
												name: p,
												size: u,
												originalSize: f,
												compression: a
											}))
											if (a)
												if (8 == a) {
													var v = t.subarray(g, g + u);
													if (u < 32e4) try {
														y(null, vt(v, new L(f)))
													} catch (t) {
														y(t, null)
													} else r.push(function(t, e, i) {
														return i || (i = e, e = {}), "function" != typeof i && at(7), _t(t, e, [dt], (function(t) {
															return ft(vt(t.data[0], pt(t.data[1])))
														}), 1, i)
													}(v, {
														size: f
													}, y))
												} else y(at(14, "unknown compression type " + a, 1), null);
										else y(null, ot(t, g, g + u));
										else y(null, null)
									}, p = 0; p < u; ++p) f()
							} else s(null, {})
						}(new Uint8Array(t), ((t, r) => t ? i(t) : e(r)))
					}))
				}
				async processBeatmaniaFolder(t) {
					const e = [];
					for (const i of t.files) null == i.name.match(/\.bms$/i) && null == i.name.match(/\.bme$/i) && null == i.name.match(/\.bml$/i) && null == i.name.match(/\.pms$/i) || e.push(i);
					const i = [],
						r = new Map,
						n = new TextDecoder("utf-8");
					for (const o of e) {
						const e = o.name.match(/\.([a-zA-Z0-9]+)$/i),
							s = new I(n.decode(await this.readFileAsArrayBuffer(o)), e ? e[1] : "bms").result;
						if (!s) continue;
						const a = await this.processDifficulty(t, s, r);
						a && i.push(a)
					}
					return i
				}
				async processStepmaniaFolder(t) {
					const e = [];
					for (const i of t.files) null == i.name.match(/\.sm$/i) && null == i.name.match(/\.ssc$/i) || e.push(i);
					const i = [],
						r = new Map,
						n = new TextDecoder("utf-8");
					for (const o of e) {
						let e;
						try {
							e = new D(n.decode(await this.readFileAsArrayBuffer(o))).result
						} catch (t) {
							console.log(t);
							continue
						}
						for (const n of e) {
							const e = await this.processDifficulty(t, n, r);
							e && i.push(e)
						}
					}
					return i
				}
				async processOsuFolder(t) {
					const e = [];
					for (const i of t.files) null != i.name.match(/\.osu$/i) && e.push(i);
					const i = [],
						r = new Map,
						n = new TextDecoder("utf-8");
					for (const o of e) {
						const e = new c(n.decode(await this.readFileAsArrayBuffer(o))).result;
						if (!e) continue;
						const s = await this.processDifficulty(t, e, r);
						s && i.push(s)
					}
					return i
				}
				async processDifficulty(t, e, i) {
					try {
						let r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=";
						const n = [];
						for (const r of e.hitSoundsFilenames) i.get(r) || n.push(new Promise(((e, n) => {
							const o = this.findFile(r, t);
							null != o ? this.readFileAsArrayBuffer(o).then((t => {
								const n = o.name.match(/\.([a-zA-Z0-9]+)$/i);
								i.set(r, "data:audio/" + (n ? n[1] : "wav") + ";base64," + It.from(t).toString("base64")), e(!0)
							})) : n(new Rt)
						})));
						try {
							await Promise.all(n)
						} catch (t) {
							console.log(t)
						}
						const o = await this.findFile(e.backgroundFilename, t);
						return null != o && (r = "data:image/png;base64," + It.from(await this.readFileAsArrayBuffer(o)).toString("base64")), new d(e, r, i)
					} catch (t) {
						return console.log(t), null
					}
				}
				async processO2jamFolder(t) {
					let e, i;
					for (const r of t.files) null != r.name.match(/\.ojn$/i) && (e = r), null != r.name.match(/\.ojm$/i) && (i = r);
					if (!e || !i) return [];
					const r = new T(await this.readFileAsArrayBuffer(i)).result;
					return new _(await this.readFileAsArrayBuffer(e), r).result
				}
				async processOsz(t) {
					let e, i;
					try {
						e = await this.readFileAsArrayBuffer(t), i = await this.unzipFile(e)
					} catch (t) {
						throw new At
					}
					const r = [];
					for (const t of Object.keys(i)) null != t.match(/\.osu$/i) && r.push(i[t]);
					const n = [],
						o = new Map,
						s = new TextDecoder("utf-8");
					for (const t of r) {
						let e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=";
						const r = new c(s.decode(t)).result;
						if (r) {
							try {
								const t = [];
								for (const e of r.hitSoundsFilenames) o.get(e) || t.push(new Promise((t => {
									const r = i[e.replace("\\", "/")];
									if (null != r) {
										const t = e.match(/\.([a-zA-Z0-9]+)$/i);
										t && o.set(e, "data:audio/" + t[1] + ";base64," + It.from(r).toString("base64"))
									}
									t(!0)
								})));
								await Promise.all(t);
								const n = i[r.backgroundFilename.replace("\\", "/")];
								null != n && (e = "data:image/png;base64," + It.from(n).toString("base64"))
							} catch (t) {
								console.log(t);
								continue
							}
							n.push(new d(r, e, o))
						}
					}
					return n
				}
				async parseFiles(t) {
					let e;
					if (0 === t.length) return [];
					if (1 === t.length && null != t[0] && t[0].isDirectory) {
						const i = await this.getFileEntriesFromDirectory(t[0]);
						e = await this.readAllFileEntries(i)
					} else e = await this.readAllFileEntries(t);
					for (const t of e.files) {
						const i = t.name.match(/\.([a-zA-Z0-9]+)$/i);
						if (i) switch (i[1]) {
							case "osz":
								return this.processOsz(t);
							case "osu":
								return this.processOsuFolder(e);
							case "ojn":
								return this.processO2jamFolder(e);
							case "bms":
							case "bme":
							case "bml":
							case "pms":
								return this.processBeatmaniaFolder(e);
							case "sm":
							case "ssc":
								return this.processStepmaniaFolder(e)
						}
					}
					throw new St
				}
			}
			class Mt {
				name = "Jadong";
				audioOffset = 0;
				visualOffset = 0;
				scrollSpeed = 9999;
				volume = .3;
				fullscreen = !0
			}
			class Ct {
				accuracySize = .05;
				backgroundOpacity = .4;
				bmsStyle = "bmsnone";
				columnSize = .05;
				comboPosition = .75;
				comboSize = .05;
				effectSize = .15;
				fpsSize = .05;
				hitPosition = 0;
				infoSize = .025;
				judgementBounce = .5;
				judgementPosition = .4;
				judgementSize = .07;
				judgementsSize = .05;
				laneCoverBottomFade = .1;
				laneCoverBottomPosition = .1;
				laneCoverTopFade = .1;
				laneCoverTopPosition = .1;
				offsetSizeX = .25;
				offsetSizeY = .05;
				showAccuracy = !0;
				showBackground = !0;
				showCombo = !0;
				showEffects = !0;
				showFps = !0;
				showHint = !0;
				showInfo = !0;
				showJudgement = !0;
				showJudgements = !0;
				showLaneCoverBottom = !1;
				showLaneCoverTop = !1;
				showLighting = !0;
				showOffset = !0;
				showReceptors = !0;
				showSongMeter = !0;
				skin = "barsColor";
				songMeterSize = .05;
				upScroll = !1
			}
			class Dt {
				code;
				key;
				constructor(t, e) {
					this.code = t, this.key = e
				}
			}
			class Nt {
				fullScreen = new Dt("Tab", "Tab");
				incrementAudioOffset = new Dt("Equal", "=");
				decrementAudioOffset = new Dt("Minus", "-");
				pause = new Dt("Backquote", "`");
				restart = new Dt("KeyR", "R");
				1 = [new Dt("Space", "SPACE")];
				2 = [new Dt("KeyF", "F"), new Dt("KeyJ", "J")];
				3 = [new Dt("KeyF", "F"), new Dt("Space", "SPACE"), new Dt("KeyJ", "J")];
				4 = [new Dt("KeyD", "D"), new Dt("KeyF", "F"), new Dt("KeyJ", "J"), new Dt("KeyK", "K")];
				5 = [new Dt("KeyD", "D"), new Dt("KeyF", "F"), new Dt("Space", "SPACE"), new Dt("KeyJ", "J"), new Dt("KeyK", "K")];
				6 = [new Dt("KeyS", "S"), new Dt("KeyD", "D"), new Dt("KeyF", "F"), new Dt("KeyJ", "J"), new Dt("KeyK", "K"), new Dt("KeyL", "L")];
				7 = [new Dt("KeyS", "S"), new Dt("KeyD", "D"), new Dt("KeyF", "F"), new Dt("Space", "SPACE"), new Dt("KeyJ", "J"), new Dt("KeyK", "K"), new Dt("KeyL", "L")];
				8 = [new Dt("KeyA", "A"), new Dt("KeyS", "S"), new Dt("KeyD", "D"), new Dt("KeyF", "F"), new Dt("KeyJ", "J"), new Dt("KeyK", "K"), new Dt("KeyL", "L"), new Dt("Semicolon", ";")];
				9 = [new Dt("KeyA", "A"), new Dt("KeyS", "S"), new Dt("KeyD", "D"), new Dt("KeyF", "F"), new Dt("Space", "SPACE"), new Dt("KeyJ", "J"), new Dt("KeyK", "K"), new Dt("KeyL", "L"), new Dt("Semicolon", ";")];
				10 = [new Dt("KeyA", "A"), new Dt("KeyS", "S"), new Dt("KeyD", "D"), new Dt("KeyF", "F"), new Dt("Space", "SPACE"), new Dt("ArrowRight", "ARROWRIGHT"), new Dt("Numpad4", "4"), new Dt("Numpad5", "5"), new Dt("Numpad6", "6"), new Dt("NumpadAdd", "+")]
			}
			class Lt {}
			class Ft {
				foolmoonnight = new Lt;
				etc = new Lt;
				etc2 = new Lt
			}
			class Bt {}
			class Ut {
				foolmoonnight = new Bt;
				etc = new Bt;
				etc2 = new Bt
			}
			class kt {
				general = new Mt;
				skin = new Ct;
				version = .4;
				patterns = [];
				keyBindings = new Nt;
				challenges = new Ft;
				achievements = new Ut
			}
			class Gt extends class {} {
				name;
				rotations = [
					[0],
					[0, 0],
					[0, 0, 0],
					[0, 0, 0, 0],
					[0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
				];
				judgements = ["./img/skins/judgements/stepmania/judgement-rainbow.png", "./img/skins/judgements/stepmania/judgement-300.png", "./img/skins/judgements/stepmania/judgement-200.png", "./img/skins/judgements/stepmania/judgement-100.png", "./img/skins/judgements/stepmania/judgement-50.png", "./img/skins/judgements/stepmania/judgement-miss.png"];
				constructor(t, e) {
					super(), this.name = t, e && (this.rotations = e)
				}
				getHint() {
					return "./img/skins/blank.png"
				}
				getLighting() {
					return "./img/skins/blank.png"
				}
				getEffects() {
					return ["./img/skins/blank.png"]
				}
				getJudgement(t) {
					return this.judgements[t]
				}
				getReceptor() {
					return "./img/skins/" + this.name + "/receptor.png"
				}
				getPressedReceptor() {
					return "./img/skins/" + this.name + "/receptor-down.png"
				}
				getNote(t) {
					return "./img/skins/" + this.name + "/note-" + t + ".png"
				}
				getLongNoteBody() {
					return "./img/skins/" + this.name + "/body.png"
				}
				getLongNoteCap() {
					return "./img/skins/" + this.name + "/cap.png"
				}
				getRotation(t) {
					return this.rotations[Pm.keyMode][t]
				}
			}
			var Xt = 2e3,
				Ht = .02,
				jt = {
					getAccuracy(t) {
						switch (t) {
							case 0:
							case 1:
								return 300;
							case 2:
								return 200;
							case 3:
								return 100;
							case 4:
								return 50;
							default:
								return 0
						}
					},
					getTimingWindow(t) {
						switch (t) {
							case 0:
								return 17;
							case 1:
								return 65 - 3 * Pm.timingWindows;
							case 2:
								return 98 - 3 * Pm.timingWindows;
							case 3:
								return 128 - 3 * Pm.timingWindows;
							case 4:
								return 152 - 3 * Pm.timingWindows;
							case 5:
								return 189 - 3 * Pm.timingWindows;
							default:
								return 0
						}
					},
					getJudgement(t) {
						if (t <= -this.getTimingWindow(4)) return 5;
						const e = Math.abs(t);
						for (let t = 0; t < 6; t++)
							if (e <= this.getTimingWindow(t)) return t;
						return 5
					}
				},
				zt = i(1),
				Yt = i.n(zt),
				Vt = {
					shuffle(t) {
						for (let e = t.length - 1; e > 0; e--) {
							const i = Math.floor(Math.random() * (e + 1));
							[t[e], t[i]] = [t[i], t[e]]
						}
					}
				};
			class Wt {
				difficulty;
				mods;
				keyMode;
				bmsStyle;
				length;
				notes;
				timingWindows;
				songRate;
				hitSounds;
				timeSounds;
				backgroundImage;
				constructor(t, e, i, r, n, o, s, a, h, u, l) {
					this.difficulty = t, this.mods = e, this.keyMode = i, this.bmsStyle = r, this.length = n, this.notes = o, this.timingWindows = s, this.songRate = a, this.hitSounds = h, this.timeSounds = u, this.backgroundImage = l
				}
				destroyHitSounds() {
					for (const t of this.hitSounds) t && t[1].unload()
				}
				resetTimeSounds() {
					for (const t of this.timeSounds)
						if (t.start) {
							t.start = !1;
							const e = this.hitSounds.get(t.name);
							if (!e) continue;
							e.stop(t.id)
						}
				}
				restart() {
					this.notes = [];
					for (let t = 0; t < this.difficulty.beatmap.keys; t++) this.notes.push(new(Yt()));
					for (const t of this.difficulty.beatmap.notes) this.notes[t.key].push(new n((t.startTime + this.difficulty.beatmap.offset) / this.songRate, (t.endTime + this.difficulty.beatmap.offset) / this.songRate, t.key, t.timing, t.objectName, t.hitSound));
					if (8 === this.keyMode && this.mods.noscratch) this.keyMode = 7, this.notes[0] = this.notes[1], this.notes[1] = this.notes[2], this.notes[2] = this.notes[3], this.notes[3] = this.notes[4], this.notes[4] = this.notes[5], this.notes[5] = this.notes[6], this.notes[6] = this.notes[7], this.notes.pop();
					else if (8 === this.keyMode && "bmsright" === this.bmsStyle) {
						const t = this.notes[0];
						this.notes[0] = this.notes[7], this.notes[7] = t
					}
					this.mods.mirror && this.notes.reverse(), this.mods.random && Vt.shuffle(this.notes);
					for (const t of this.hitSounds) t && t[1].stop();
					for (const t of this.timeSounds) t.start && (t.start = !1)
				}
			}
			var qt = i(766);

			function Kt(t, e, i) {
				return new Promise((r => {
					const n = new qt.Howl({
						src: [e],
						rate: i
					});
					n.once("load", (() => {
						r([t, n])
					})), n.once("loaderror", (() => r(void 0)))
				}))
			}
			var Zt = {
					async load(t, e) {
						const i = [];
						for (const r of t) i.push(Kt(r[0], r[1], e));
						const r = await Promise.all(i),
							n = new Map;
						for (const t of r) t && n.set(t[0], t[1]);
						return n
					}
				},
				Jt = {
					async load(t, e, i, r) {
						let s = t.beatmap.keys;
						const a = Pm.bmsStyle,
							h = 1e3 * t.beatmap.length / e,
							u = [];
						for (let t = 0; t < s; t++) u.push(new(Yt()));
						for (const i of t.beatmap.notes) u[i.key].push(new n((i.startTime + t.beatmap.offset) / e, (i.endTime + t.beatmap.offset) / e, 8 === s && r.noscratch ? i.key - 1 : i.key, i.timing, i.objectName, i.hitSound));
						let l = new(Yt());
						if (8 === s && r.noscratch) s = 7, l = u[0], u[0] = u[1], u[1] = u[2], u[2] = u[3], u[3] = u[4], u[4] = u[5], u[5] = u[6], u[6] = u[7], u.pop();
						else if (8 === s && "bmsright" === a) {
							const t = u[0];
							u[0] = u[7], u[7] = t
						}
						r.mirror && u.reverse(), r.random && Vt.shuffle(u);
						const c = [];
						for (const e of t.beatmap.timeSounds) c.push(new o(e.startTime, e.name));
						for (let t = 0; t < l.length; t++) {
							const e = l.peekAt(t);
							e && e.hitSound && c.push(new o(e.startTime, e.hitSound))
						}
						c.sort(((t, e) => t.startTime - e.startTime));
						const d = await Zt.load(t.hitSounds, e);
						let f;
						return f = t.image ? t.image : "./img/app/background.jpg", new Wt(t, r, s, a, h, u, i, e, d, c, f)
					}
				};
			class $t {
				difficulty = null;
				countdownStartTime = 0;
				lastOffsetChangeTime = 0;
				loading = !1;
				loadingImages = !0;
				loadingPercentage = 0;
				pauseStartTime = 0;
				pauseStopTime = 0;
				paused = !1;
				playStartTime = 0;
				playing = !1;
				combo = 0;
				accuracy = 0;
				totalAccuracy = 0;
				judgements = [0, 0, 0, 0, 0, 0, 0];
				timings = [];
				currentTimeSound = 0;
				addJudgement(t) {
					5 === t ? this.combo = 0 : this.combo++, this.judgements[t] += 1, this.accuracy += jt.getAccuracy(t), this.totalAccuracy += jt.getAccuracy(0)
				}
				newDifficulty(t) {
					this.difficulty = t, this.combo = 0, this.accuracy = 0, this.totalAccuracy = 0, this.judgements = [0, 0, 0, 0, 0, 0, 0], this.timings = [], this.currentTimeSound = 0
				}
				pick() {
					Pm.gameController.gameScene.containers.status.pick()
				}
				pauseUnpause() {
					!this.loading && this.playing && this.difficulty && (this.paused ? (Pm.status.playStartTime = Pm.status.playStartTime + Date.now() - Pm.status.pauseStartTime + Xt, Pm.status.pauseStopTime = Date.now(), Pm.status.countdownStartTime = Date.now(), this.paused = !1, Pm.gameController.gameScene.containers.status.empty(), Pm.gameController.gameScene.containers.notes.resume()) : (Pm.status.pauseStartTime = Date.now() - Pm.status.pauseStopTime < Xt ? Date.now() + Xt - (Date.now() - Pm.status.pauseStopTime) : Date.now(), Pm.status.countdownStartTime = 0, Pm.status.paused = !0, Pm.gameController.gameScene.containers.status.pause(), Pm.gameController.gameScene.containers.notes.pause(), this.difficulty.resetTimeSounds(), this.currentTimeSound = 0, this.paused = !0))
				}
				restart() {
					!this.loading && this.playing && this.difficulty && (this.combo = 0, this.accuracy = 0, this.totalAccuracy = 0, this.judgements = [0, 0, 0, 0, 0, 0, 0], this.currentTimeSound = 0, this.timings = [], this.paused = !1, this.playing = !0, Pm.gameController.gameScene.containers.judgements.restart(), Pm.gameController.gameScene.containers.accuracy.restart(), Pm.gameController.gameScene.containers.status.empty(), this.difficulty.restart(), Pm.gameController.gameScene.containers.notes.restart(), this.playStartTime = Date.now() + Xt, this.pauseStartTime = 0, this.countdownStartTime = Date.now(), Pm.gameController.gameScene.containers.status.startCountdown())
				}
				async load(t) {
					Pm.gameController.gameScene.containers.notes.end(), this.difficulty = null, this.loading = !0, Pm.gameController.gameScene.containers.status.load(t.difficulty.image), Pm.difficulty && Pm.difficulty.destroyHitSounds(), this.newDifficulty(await Jt.load(t.difficulty, t.songRate, t.timingWindows, t.mods)), this.loading = !1, this.playing = !0, this.playStartTime = Date.now() + Xt, this.pauseStartTime = 0, this.countdownStartTime = Date.now(), Pm.gameController.gameScene.containers.status.startCountdown(), Pm.gameController.gameScene.containers.notes.start()
				}
			}
			var Qt = setTimeout;

			function te(t) {
				return Boolean(t && void 0 !== t.length)
			}

			function ee() {}

			function ie(t) {
				if (!(this instanceof ie)) throw new TypeError("Promises must be constructed via new");
				if ("function" != typeof t) throw new TypeError("not a function");
				this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], he(t, this)
			}

			function re(t, e) {
				for (; 3 === t._state;) t = t._value;
				0 !== t._state ? (t._handled = !0, ie._immediateFn((function() {
					var i = 1 === t._state ? e.onFulfilled : e.onRejected;
					if (null !== i) {
						var r;
						try {
							r = i(t._value)
						} catch (t) {
							return void oe(e.promise, t)
						}
						ne(e.promise, r)
					} else(1 === t._state ? ne : oe)(e.promise, t._value)
				}))) : t._deferreds.push(e)
			}

			function ne(t, e) {
				try {
					if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
					if (e && ("object" == typeof e || "function" == typeof e)) {
						var i = e.then;
						if (e instanceof ie) return t._state = 3, t._value = e, void se(t);
						if ("function" == typeof i) return void he((r = i, n = e, function() {
							r.apply(n, arguments)
						}), t)
					}
					t._state = 1, t._value = e, se(t)
				} catch (e) {
					oe(t, e)
				}
				var r, n
			}

			function oe(t, e) {
				t._state = 2, t._value = e, se(t)
			}

			function se(t) {
				2 === t._state && 0 === t._deferreds.length && ie._immediateFn((function() {
					t._handled || ie._unhandledRejectionFn(t._value)
				}));
				for (var e = 0, i = t._deferreds.length; e < i; e++) re(t, t._deferreds[e]);
				t._deferreds = null
			}

			function ae(t, e, i) {
				this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
			}

			function he(t, e) {
				var i = !1;
				try {
					t((function(t) {
						i || (i = !0, ne(e, t))
					}), (function(t) {
						i || (i = !0, oe(e, t))
					}))
				} catch (t) {
					if (i) return;
					i = !0, oe(e, t)
				}
			}
			ie.prototype.catch = function(t) {
				return this.then(null, t)
			}, ie.prototype.then = function(t, e) {
				var i = new this.constructor(ee);
				return re(this, new ae(t, e, i)), i
			}, ie.prototype.finally = function(t) {
				var e = this.constructor;
				return this.then((function(i) {
					return e.resolve(t()).then((function() {
						return i
					}))
				}), (function(i) {
					return e.resolve(t()).then((function() {
						return e.reject(i)
					}))
				}))
			}, ie.all = function(t) {
				return new ie((function(e, i) {
					if (!te(t)) return i(new TypeError("Promise.all accepts an array"));
					var r = Array.prototype.slice.call(t);
					if (0 === r.length) return e([]);
					var n = r.length;

					function o(t, s) {
						try {
							if (s && ("object" == typeof s || "function" == typeof s)) {
								var a = s.then;
								if ("function" == typeof a) return void a.call(s, (function(e) {
									o(t, e)
								}), i)
							}
							r[t] = s, 0 == --n && e(r)
						} catch (t) {
							i(t)
						}
					}
					for (var s = 0; s < r.length; s++) o(s, r[s])
				}))
			}, ie.allSettled = function(t) {
				return new this((function(e, i) {
					if (!t || void 0 === t.length) return i(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
					var r = Array.prototype.slice.call(t);
					if (0 === r.length) return e([]);
					var n = r.length;

					function o(t, i) {
						if (i && ("object" == typeof i || "function" == typeof i)) {
							var s = i.then;
							if ("function" == typeof s) return void s.call(i, (function(e) {
								o(t, e)
							}), (function(i) {
								r[t] = {
									status: "rejected",
									reason: i
								}, 0 == --n && e(r)
							}))
						}
						r[t] = {
							status: "fulfilled",
							value: i
						}, 0 == --n && e(r)
					}
					for (var s = 0; s < r.length; s++) o(s, r[s])
				}))
			}, ie.resolve = function(t) {
				return t && "object" == typeof t && t.constructor === ie ? t : new ie((function(e) {
					e(t)
				}))
			}, ie.reject = function(t) {
				return new ie((function(e, i) {
					i(t)
				}))
			}, ie.race = function(t) {
				return new ie((function(e, i) {
					if (!te(t)) return i(new TypeError("Promise.race accepts an array"));
					for (var r = 0, n = t.length; r < n; r++) ie.resolve(t[r]).then(e, i)
				}))
			}, ie._immediateFn = "function" == typeof setImmediate && function(t) {
				setImmediate(t)
			} || function(t) {
				Qt(t, 0)
			}, ie._unhandledRejectionFn = function(t) {
				"undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
			};
			var ue = ie,
				le = i(418),
				ce = i.n(le);
			if (self.Promise || (self.Promise = ue), Object.assign || (Object.assign = ce()), Date.now && Date.prototype.getTime || (Date.now = function() {
					return (new Date).getTime()
				}), !self.performance || !self.performance.now) {
				var de = Date.now();
				self.performance || (self.performance = {}), self.performance.now = function() {
					return Date.now() - de
				}
			}
			for (var fe = Date.now(), pe = ["ms", "moz", "webkit", "o"], _e = 0; _e < pe.length && !self.requestAnimationFrame; ++_e) {
				var me = pe[_e];
				self.requestAnimationFrame = self[me + "RequestAnimationFrame"], self.cancelAnimationFrame = self[me + "CancelAnimationFrame"] || self[me + "CancelRequestAnimationFrame"]
			}
			self.requestAnimationFrame || (self.requestAnimationFrame = function(t) {
				if ("function" != typeof t) throw new TypeError(t + "is not a function");
				var e = Date.now(),
					i = 16 + fe - e;
				return i < 0 && (i = 0), fe = e, self.setTimeout((function() {
					fe = Date.now(), t(performance.now())
				}), i)
			}), self.cancelAnimationFrame || (self.cancelAnimationFrame = function(t) {
				return clearTimeout(t)
			}), Math.sign || (Math.sign = function(t) {
				return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
			}), Number.isInteger || (Number.isInteger = function(t) {
				return "number" == typeof t && isFinite(t) && Math.floor(t) === t
			}), self.ArrayBuffer || (self.ArrayBuffer = Array), self.Float32Array || (self.Float32Array = Array), self.Uint32Array || (self.Uint32Array = Array), self.Uint16Array || (self.Uint16Array = Array), self.Uint8Array || (self.Uint8Array = Array), self.Int32Array || (self.Int32Array = Array);
			var ge, ye, ve, Te, be, Ee, xe, Ae, Se, we, Re, Oe, Ie, Pe, Me, Ce, De, Ne, Le, Fe = /iPhone/i,
				Be = /iPod/i,
				Ue = /iPad/i,
				ke = /\biOS-universal(?:.+)Mac\b/i,
				Ge = /\bAndroid(?:.+)Mobile\b/i,
				Xe = /Android/i,
				He = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
				je = /Silk/i,
				ze = /Windows Phone/i,
				Ye = /\bWindows(?:.+)ARM\b/i,
				Ve = /BlackBerry/i,
				We = /BB10/i,
				qe = /Opera Mini/i,
				Ke = /\b(CriOS|Chrome)(?:.+)Mobile/i,
				Ze = /Mobile(?:.+)Firefox\b/i,
				Je = function(t) {
					return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
				},
				$e = function(t) {
					var e = {
						userAgent: "",
						platform: "",
						maxTouchPoints: 0
					};
					t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
						userAgent: t.userAgent,
						platform: t.platform,
						maxTouchPoints: t.maxTouchPoints || 0
					}) : e = {
						userAgent: navigator.userAgent,
						platform: navigator.platform,
						maxTouchPoints: navigator.maxTouchPoints || 0
					};
					var i = e.userAgent,
						r = i.split("[FBAN");
					void 0 !== r[1] && (i = r[0]), void 0 !== (r = i.split("Twitter"))[1] && (i = r[0]);
					var n = function(t) {
							return function(e) {
								return e.test(t)
							}
						}(i),
						o = {
							apple: {
								phone: n(Fe) && !n(ze),
								ipod: n(Be),
								tablet: !n(Fe) && (n(Ue) || Je(e)) && !n(ze),
								universal: n(ke),
								device: (n(Fe) || n(Be) || n(Ue) || n(ke) || Je(e)) && !n(ze)
							},
							amazon: {
								phone: n(He),
								tablet: !n(He) && n(je),
								device: n(He) || n(je)
							},
							android: {
								phone: !n(ze) && n(He) || !n(ze) && n(Ge),
								tablet: !n(ze) && !n(He) && !n(Ge) && (n(je) || n(Xe)),
								device: !n(ze) && (n(He) || n(je) || n(Ge) || n(Xe)) || n(/\bokhttp\b/i)
							},
							windows: {
								phone: n(ze),
								tablet: n(Ye),
								device: n(ze) || n(Ye)
							},
							other: {
								blackberry: n(Ve),
								blackberry10: n(We),
								opera: n(qe),
								firefox: n(Ze),
								chrome: n(Ke),
								device: n(Ve) || n(We) || n(qe) || n(Ze) || n(Ke)
							},
							any: !1,
							phone: !1,
							tablet: !1
						};
					return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device, o.phone = o.apple.phone || o.android.phone || o.windows.phone, o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet, o
				}(self.navigator);
			! function(t) {
				t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
			}(ge || (ge = {})),
			function(t) {
				t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
			}(ye || (ye = {})),
			function(t) {
				t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
			}(ve || (ve = {})),
			function(t) {
				t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
			}(Te || (Te = {})),
			function(t) {
				t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
			}(be || (be = {})),
			function(t) {
				t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
			}(Ee || (Ee = {})),
			function(t) {
				t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
			}(xe || (xe = {})),
			function(t) {
				t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
			}(Ae || (Ae = {})),
			function(t) {
				t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
			}(Se || (Se = {})),
			function(t) {
				t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
			}(we || (we = {})),
			function(t) {
				t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
			}(Re || (Re = {})),
			function(t) {
				t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
			}(Oe || (Oe = {})),
			function(t) {
				t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
			}(Ie || (Ie = {})),
			function(t) {
				t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
			}(Pe || (Pe = {})),
			function(t) {
				t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
			}(Me || (Me = {})),
			function(t) {
				t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
			}(Ce || (Ce = {})),
			function(t) {
				t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
			}(De || (De = {})),
			function(t) {
				t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
			}(Ne || (Ne = {})),
			function(t) {
				t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
			}(Le || (Le = {}));
			var Qe, ti, ei, ii, ri, ni, oi, si, ai, hi, ui, li, ci, di, fi, pi, _i, mi, gi, yi = {
					MIPMAP_TEXTURES: Oe.POW2,
					ANISOTROPIC_LEVEL: 0,
					RESOLUTION: 1,
					FILTER_RESOLUTION: 1,
					FILTER_MULTISAMPLE: Ne.NONE,
					SPRITE_MAX_TEXTURES: function(t) {
						var e, i = !0;
						($e.tablet || $e.phone) && ($e.apple.device && (e = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) && parseInt(e[1], 10) < 11 && (i = !1), $e.android.device && (e = navigator.userAgent.match(/Android\s([0-9.]*)/)) && parseInt(e[1], 10) < 7 && (i = !1));
						return i ? 32 : 4
					}(),
					SPRITE_BATCH_SIZE: 4096,
					RENDER_OPTIONS: {
						view: null,
						antialias: !1,
						autoDensity: !1,
						backgroundColor: 0,
						backgroundAlpha: 1,
						useContextAlpha: !0,
						clearBeforeRender: !0,
						preserveDrawingBuffer: !1,
						width: 800,
						height: 600,
						legacy: !1
					},
					GC_MODE: Me.AUTO,
					GC_MAX_IDLE: 3600,
					GC_MAX_CHECK_COUNT: 600,
					WRAP_MODE: Re.CLAMP,
					SCALE_MODE: we.LINEAR,
					PRECISION_VERTEX: Ce.HIGH,
					PRECISION_FRAGMENT: $e.apple.device ? Ce.HIGH : Ce.MEDIUM,
					CAN_UPLOAD_SAME_BUFFER: !$e.apple.device,
					CREATE_IMAGE_BITMAP: !1,
					ROUND_PIXELS: !1
				},
				vi = i(729),
				Ti = i.n(vi),
				bi = i(187),
				Ei = i.n(bi),
				xi = i(575);
			! function(t) {
				t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
			}(Qe || (Qe = {})),
			function(t) {
				t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
			}(ti || (ti = {})),
			function(t) {
				t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
			}(ei || (ei = {})),
			function(t) {
				t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
			}(ii || (ii = {})),
			function(t) {
				t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
			}(ri || (ri = {})),
			function(t) {
				t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
			}(ni || (ni = {})),
			function(t) {
				t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
			}(oi || (oi = {})),
			function(t) {
				t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
			}(si || (si = {})),
			function(t) {
				t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
			}(ai || (ai = {})),
			function(t) {
				t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
			}(hi || (hi = {})),
			function(t) {
				t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
			}(ui || (ui = {})),
			function(t) {
				t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
			}(li || (li = {})),
			function(t) {
				t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
			}(ci || (ci = {})),
			function(t) {
				t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
			}(di || (di = {})),
			function(t) {
				t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
			}(fi || (fi = {})),
			function(t) {
				t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
			}(pi || (pi = {})),
			function(t) {
				t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
			}(_i || (_i = {})),
			function(t) {
				t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
			}(mi || (mi = {})),
			function(t) {
				t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
			}(gi || (gi = {}));
			var Ai = {
				parse: xi.Qc,
				format: xi.WU,
				resolve: xi.DB
			};
			yi.RETINA_PREFIX = /@([0-9\.]+)x/, yi.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
			var Si, wi = !1;

			function Ri() {
				wi = !0
			}

			function Oi(t) {
				var e;
				if (!wi) {
					if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
						var i = ["\n %c %c %c PixiJS 6.1.3 - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
						(e = self.console).log.apply(e, i)
					} else self.console && self.console.log("PixiJS 6.1.3 - " + t + " - http://www.pixijs.com/");
					wi = !0
				}
			}

			function Ii() {
				return void 0 === Si && (Si = function() {
					var t = {
						stencil: !0,
						failIfMajorPerformanceCaveat: yi.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
					};
					try {
						if (!self.WebGLRenderingContext) return !1;
						var e = document.createElement("canvas"),
							i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
							r = !(!i || !i.getContextAttributes().stencil);
						if (i) {
							var n = i.getExtension("WEBGL_lose_context");
							n && n.loseContext()
						}
						return i = null, r
					} catch (t) {
						return !1
					}
				}()), Si
			}
			var Pi = {
				aliceblue: "#f0f8ff",
				antiquewhite: "#faebd7",
				aqua: "#00ffff",
				aquamarine: "#7fffd4",
				azure: "#f0ffff",
				beige: "#f5f5dc",
				bisque: "#ffe4c4",
				black: "#000000",
				blanchedalmond: "#ffebcd",
				blue: "#0000ff",
				blueviolet: "#8a2be2",
				brown: "#a52a2a",
				burlywood: "#deb887",
				cadetblue: "#5f9ea0",
				chartreuse: "#7fff00",
				chocolate: "#d2691e",
				coral: "#ff7f50",
				cornflowerblue: "#6495ed",
				cornsilk: "#fff8dc",
				crimson: "#dc143c",
				cyan: "#00ffff",
				darkblue: "#00008b",
				darkcyan: "#008b8b",
				darkgoldenrod: "#b8860b",
				darkgray: "#a9a9a9",
				darkgreen: "#006400",
				darkgrey: "#a9a9a9",
				darkkhaki: "#bdb76b",
				darkmagenta: "#8b008b",
				darkolivegreen: "#556b2f",
				darkorange: "#ff8c00",
				darkorchid: "#9932cc",
				darkred: "#8b0000",
				darksalmon: "#e9967a",
				darkseagreen: "#8fbc8f",
				darkslateblue: "#483d8b",
				darkslategray: "#2f4f4f",
				darkslategrey: "#2f4f4f",
				darkturquoise: "#00ced1",
				darkviolet: "#9400d3",
				deeppink: "#ff1493",
				deepskyblue: "#00bfff",
				dimgray: "#696969",
				dimgrey: "#696969",
				dodgerblue: "#1e90ff",
				firebrick: "#b22222",
				floralwhite: "#fffaf0",
				forestgreen: "#228b22",
				fuchsia: "#ff00ff",
				gainsboro: "#dcdcdc",
				ghostwhite: "#f8f8ff",
				goldenrod: "#daa520",
				gold: "#ffd700",
				gray: "#808080",
				green: "#008000",
				greenyellow: "#adff2f",
				grey: "#808080",
				honeydew: "#f0fff0",
				hotpink: "#ff69b4",
				indianred: "#cd5c5c",
				indigo: "#4b0082",
				ivory: "#fffff0",
				khaki: "#f0e68c",
				lavenderblush: "#fff0f5",
				lavender: "#e6e6fa",
				lawngreen: "#7cfc00",
				lemonchiffon: "#fffacd",
				lightblue: "#add8e6",
				lightcoral: "#f08080",
				lightcyan: "#e0ffff",
				lightgoldenrodyellow: "#fafad2",
				lightgray: "#d3d3d3",
				lightgreen: "#90ee90",
				lightgrey: "#d3d3d3",
				lightpink: "#ffb6c1",
				lightsalmon: "#ffa07a",
				lightseagreen: "#20b2aa",
				lightskyblue: "#87cefa",
				lightslategray: "#778899",
				lightslategrey: "#778899",
				lightsteelblue: "#b0c4de",
				lightyellow: "#ffffe0",
				lime: "#00ff00",
				limegreen: "#32cd32",
				linen: "#faf0e6",
				magenta: "#ff00ff",
				maroon: "#800000",
				mediumaquamarine: "#66cdaa",
				mediumblue: "#0000cd",
				mediumorchid: "#ba55d3",
				mediumpurple: "#9370db",
				mediumseagreen: "#3cb371",
				mediumslateblue: "#7b68ee",
				mediumspringgreen: "#00fa9a",
				mediumturquoise: "#48d1cc",
				mediumvioletred: "#c71585",
				midnightblue: "#191970",
				mintcream: "#f5fffa",
				mistyrose: "#ffe4e1",
				moccasin: "#ffe4b5",
				navajowhite: "#ffdead",
				navy: "#000080",
				oldlace: "#fdf5e6",
				olive: "#808000",
				olivedrab: "#6b8e23",
				orange: "#ffa500",
				orangered: "#ff4500",
				orchid: "#da70d6",
				palegoldenrod: "#eee8aa",
				palegreen: "#98fb98",
				paleturquoise: "#afeeee",
				palevioletred: "#db7093",
				papayawhip: "#ffefd5",
				peachpuff: "#ffdab9",
				peru: "#cd853f",
				pink: "#ffc0cb",
				plum: "#dda0dd",
				powderblue: "#b0e0e6",
				purple: "#800080",
				rebeccapurple: "#663399",
				red: "#ff0000",
				rosybrown: "#bc8f8f",
				royalblue: "#4169e1",
				saddlebrown: "#8b4513",
				salmon: "#fa8072",
				sandybrown: "#f4a460",
				seagreen: "#2e8b57",
				seashell: "#fff5ee",
				sienna: "#a0522d",
				silver: "#c0c0c0",
				skyblue: "#87ceeb",
				slateblue: "#6a5acd",
				slategray: "#708090",
				slategrey: "#708090",
				snow: "#fffafa",
				springgreen: "#00ff7f",
				steelblue: "#4682b4",
				tan: "#d2b48c",
				teal: "#008080",
				thistle: "#d8bfd8",
				tomato: "#ff6347",
				turquoise: "#40e0d0",
				violet: "#ee82ee",
				wheat: "#f5deb3",
				white: "#ffffff",
				whitesmoke: "#f5f5f5",
				yellow: "#ffff00",
				yellowgreen: "#9acd32"
			};

			function Mi(t, e) {
				return void 0 === e && (e = []), e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
			}

			function Ci(t) {
				var e = t.toString(16);
				return "#" + ("000000".substr(0, 6 - e.length) + e)
			}

			function Di(t) {
				return "string" == typeof t && "#" === (t = Pi[t.toLowerCase()] || t)[0] && (t = t.substr(1)), parseInt(t, 16)
			}

			function Ni(t) {
				return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
			}
			var Li = function() {
				for (var t = [], e = [], i = 0; i < 32; i++) t[i] = i, e[i] = i;
				t[ii.NORMAL_NPM] = ii.NORMAL, t[ii.ADD_NPM] = ii.ADD, t[ii.SCREEN_NPM] = ii.SCREEN, e[ii.NORMAL] = ii.NORMAL_NPM, e[ii.ADD] = ii.ADD_NPM, e[ii.SCREEN] = ii.SCREEN_NPM;
				var r = [];
				return r.push(e), r.push(t), r
			}();

			function Fi(t, e) {
				return Li[e ? 1 : 0][t]
			}

			function Bi(t, e, i, r) {
				return i = i || new Float32Array(4), r || void 0 === r ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e) : (i[0] = t[0], i[1] = t[1], i[2] = t[2]), i[3] = e, i
			}

			function Ui(t, e) {
				if (1 === e) return (255 * e << 24) + t;
				if (0 === e) return 0;
				var i = t >> 16 & 255,
					r = t >> 8 & 255,
					n = 255 & t;
				return (255 * e << 24) + ((i = i * e + .5 | 0) << 16) + ((r = r * e + .5 | 0) << 8) + (n * e + .5 | 0)
			}

			function ki(t, e, i, r) {
				return (i = i || new Float32Array(4))[0] = (t >> 16 & 255) / 255, i[1] = (t >> 8 & 255) / 255, i[2] = (255 & t) / 255, (r || void 0 === r) && (i[0] *= e, i[1] *= e, i[2] *= e), i[3] = e, i
			}

			function Gi(t, e) {
				void 0 === e && (e = null);
				var i = 6 * t;
				if ((e = e || new Uint16Array(i)).length !== i) throw new Error("Out buffer length is incorrect, got " + e.length + " and expected " + i);
				for (var r = 0, n = 0; r < i; r += 6, n += 4) e[r + 0] = n + 0, e[r + 1] = n + 1, e[r + 2] = n + 2, e[r + 3] = n + 0, e[r + 4] = n + 2, e[r + 5] = n + 3;
				return e
			}

			function Xi(t) {
				if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
				if (2 === t.BYTES_PER_ELEMENT) {
					if (t instanceof Uint16Array) return "Uint16Array"
				} else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
				return null
			}
			var Hi = {
				Float32Array: Float32Array,
				Uint32Array: Uint32Array,
				Int32Array: Int32Array,
				Uint8Array: Uint8Array
			};

			function ji(t, e) {
				for (var i = 0, r = 0, n = {}, o = 0; o < t.length; o++) r += e[o], i += t[o].length;
				var s = new ArrayBuffer(4 * i),
					a = null,
					h = 0;
				for (o = 0; o < t.length; o++) {
					var u = e[o],
						l = t[o],
						c = Xi(l);
					n[c] || (n[c] = new Hi[c](s)), a = n[c];
					for (var d = 0; d < l.length; d++) a[(d / u | 0) * r + h + d % u] = l[d];
					h += u
				}
				return new Float32Array(s)
			}

			function zi(t) {
				return t += 0 === t ? 1 : 0, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 1 + (t |= t >>> 16)
			}

			function Yi(t) {
				return !(t & t - 1 || !t)
			}

			function Vi(t) {
				var e = (t > 65535 ? 1 : 0) << 4,
					i = ((t >>>= e) > 255 ? 1 : 0) << 3;
				return e |= i, e |= i = ((t >>>= i) > 15 ? 1 : 0) << 2, (e |= i = ((t >>>= i) > 3 ? 1 : 0) << 1) | (t >>>= i) >> 1
			}

			function Wi(t, e, i) {
				var r, n = t.length;
				if (!(e >= n || 0 === i)) {
					var o = n - (i = e + i > n ? n - e : i);
					for (r = e; r < o; ++r) t[r] = t[r + i];
					t.length = o
				}
			}

			function qi(t) {
				return 0 === t ? 0 : t < 0 ? -1 : 1
			}
			var Ki = 0;

			function Zi() {
				return ++Ki
			}
			var Ji = {};

			function $i(t, e, i) {
				if (void 0 === i && (i = 3), !Ji[e]) {
					var r = (new Error).stack;
					void 0 === r ? console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t) : (r = r.split("\n").splice(i).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e + "\nDeprecated since v" + t), console.warn(r), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t), console.warn(r))), Ji[e] = !0
				}
			}
			var Qi = {},
				tr = Object.create(null),
				er = Object.create(null);

			function ir() {
				var t;
				for (t in tr) tr[t].destroy();
				for (t in er) er[t].destroy()
			}

			function rr() {
				var t;
				for (t in tr) delete tr[t];
				for (t in er) delete er[t]
			}
			var nr = function() {
				function t(t, e, i) {
					this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || yi.RESOLUTION, this.resize(t, e)
				}
				return t.prototype.clear = function() {
					this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
				}, t.prototype.resize = function(t, e) {
					this.canvas.width = Math.round(t * this.resolution), this.canvas.height = Math.round(e * this.resolution)
				}, t.prototype.destroy = function() {
					this.context = null, this.canvas = null
				}, Object.defineProperty(t.prototype, "width", {
					get: function() {
						return this.canvas.width
					},
					set: function(t) {
						this.canvas.width = Math.round(t)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "height", {
					get: function() {
						return this.canvas.height
					},
					set: function(t) {
						this.canvas.height = Math.round(t)
					},
					enumerable: !1,
					configurable: !0
				}), t
			}();

			function or(t) {
				var e, i, r, n = t.width,
					o = t.height,
					s = t.getContext("2d"),
					a = s.getImageData(0, 0, n, o).data,
					h = a.length,
					u = {
						top: null,
						left: null,
						right: null,
						bottom: null
					},
					l = null;
				for (e = 0; e < h; e += 4) 0 !== a[e + 3] && (i = e / 4 % n, r = ~~(e / 4 / n), null === u.top && (u.top = r), (null === u.left || i < u.left) && (u.left = i), (null === u.right || u.right < i) && (u.right = i + 1), (null === u.bottom || u.bottom < r) && (u.bottom = r));
				return null !== u.top && (n = u.right - u.left, o = u.bottom - u.top + 1, l = s.getImageData(u.left, u.top, n, o)), {
					height: o,
					width: n,
					data: l
				}
			}
			var sr, ar = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

			function hr(t) {
				var e = ar.exec(t);
				if (e) return {
					mediaType: e[1] ? e[1].toLowerCase() : void 0,
					subType: e[2] ? e[2].toLowerCase() : void 0,
					charset: e[3] ? e[3].toLowerCase() : void 0,
					encoding: e[4] ? e[4].toLowerCase() : void 0,
					data: e[5]
				}
			}

			function ur(t, e) {
				if (void 0 === e && (e = self.location), 0 === t.indexOf("data:")) return "";
				e = e || self.location, sr || (sr = document.createElement("a")), sr.href = t;
				var i = Ai.parse(sr.href),
					r = !i.port && "" === e.port || i.port === e.port;
				return i.hostname === e.hostname && r && i.protocol === e.protocol ? "" : "anonymous"
			}

			function lr(t, e) {
				var i = yi.RETINA_PREFIX.exec(t);
				return i ? parseFloat(i[1]) : void 0 !== e ? e : 1
			}
			var cr, dr = 2 * Math.PI,
				fr = 180 / Math.PI,
				pr = Math.PI / 180;
			! function(t) {
				t[t.POLY = 0] = "POLY", t[t.RECT = 1] = "RECT", t[t.CIRC = 2] = "CIRC", t[t.ELIP = 3] = "ELIP", t[t.RREC = 4] = "RREC"
			}(cr || (cr = {}));
			var _r = function() {
					function t(t, e, i, r) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(r), this.type = cr.RECT
					}
					return Object.defineProperty(t.prototype, "left", {
						get: function() {
							return this.x
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "right", {
						get: function() {
							return this.x + this.width
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "top", {
						get: function() {
							return this.y
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "bottom", {
						get: function() {
							return this.y + this.height
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t, "EMPTY", {
						get: function() {
							return new t(0, 0, 0, 0)
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.clone = function() {
						return new t(this.x, this.y, this.width, this.height)
					}, t.prototype.copyFrom = function(t) {
						return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
					}, t.prototype.copyTo = function(t) {
						return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
					}, t.prototype.contains = function(t, e) {
						return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
					}, t.prototype.pad = function(t, e) {
						return void 0 === t && (t = 0), void 0 === e && (e = t), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this
					}, t.prototype.fit = function(t) {
						var e = Math.max(this.x, t.x),
							i = Math.min(this.x + this.width, t.x + t.width),
							r = Math.max(this.y, t.y),
							n = Math.min(this.y + this.height, t.y + t.height);
						return this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(n - r, 0), this
					}, t.prototype.ceil = function(t, e) {
						void 0 === t && (t = 1), void 0 === e && (e = .001);
						var i = Math.ceil((this.x + this.width - e) * t) / t,
							r = Math.ceil((this.y + this.height - e) * t) / t;
						return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = r - this.y, this
					}, t.prototype.enlarge = function(t) {
						var e = Math.min(this.x, t.x),
							i = Math.max(this.x + this.width, t.x + t.width),
							r = Math.min(this.y, t.y),
							n = Math.max(this.y + this.height, t.y + t.height);
						return this.x = e, this.width = i - e, this.y = r, this.height = n - r, this
					}, t.prototype.toString = function() {
						return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
					}, t
				}(),
				mr = function() {
					function t(t, e, i) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.x = t, this.y = e, this.radius = i, this.type = cr.CIRC
					}
					return t.prototype.clone = function() {
						return new t(this.x, this.y, this.radius)
					}, t.prototype.contains = function(t, e) {
						if (this.radius <= 0) return !1;
						var i = this.radius * this.radius,
							r = this.x - t,
							n = this.y - e;
						return (r *= r) + (n *= n) <= i
					}, t.prototype.getBounds = function() {
						return new _r(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
					}, t.prototype.toString = function() {
						return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]"
					}, t
				}(),
				gr = function() {
					function t(t, e, i, r) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.x = t, this.y = e, this.width = i, this.height = r, this.type = cr.ELIP
					}
					return t.prototype.clone = function() {
						return new t(this.x, this.y, this.width, this.height)
					}, t.prototype.contains = function(t, e) {
						if (this.width <= 0 || this.height <= 0) return !1;
						var i = (t - this.x) / this.width,
							r = (e - this.y) / this.height;
						return (i *= i) + (r *= r) <= 1
					}, t.prototype.getBounds = function() {
						return new _r(this.x - this.width, this.y - this.height, this.width, this.height)
					}, t.prototype.toString = function() {
						return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
					}, t
				}(),
				yr = function() {
					function t() {
						for (var t = arguments, e = [], i = 0; i < arguments.length; i++) e[i] = t[i];
						var r = Array.isArray(e[0]) ? e[0] : e;
						if ("number" != typeof r[0]) {
							for (var n = [], o = 0, s = r.length; o < s; o++) n.push(r[o].x, r[o].y);
							r = n
						}
						this.points = r, this.type = cr.POLY, this.closeStroke = !0
					}
					return t.prototype.clone = function() {
						var e = new t(this.points.slice());
						return e.closeStroke = this.closeStroke, e
					}, t.prototype.contains = function(t, e) {
						for (var i = !1, r = this.points.length / 2, n = 0, o = r - 1; n < r; o = n++) {
							var s = this.points[2 * n],
								a = this.points[2 * n + 1],
								h = this.points[2 * o],
								u = this.points[2 * o + 1];
							a > e != u > e && t < (e - a) / (u - a) * (h - s) + s && (i = !i)
						}
						return i
					}, t.prototype.toString = function() {
						return "[@pixi/math:PolygoncloseStroke=" + this.closeStroke + "points=" + this.points.reduce((function(t, e) {
							return t + ", " + e
						}), "") + "]"
					}, t
				}(),
				vr = function() {
					function t(t, e, i, r, n) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === n && (n = 20), this.x = t, this.y = e, this.width = i, this.height = r, this.radius = n, this.type = cr.RREC
					}
					return t.prototype.clone = function() {
						return new t(this.x, this.y, this.width, this.height, this.radius)
					}, t.prototype.contains = function(t, e) {
						if (this.width <= 0 || this.height <= 0) return !1;
						if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
							if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
							var i = t - (this.x + this.radius),
								r = e - (this.y + this.radius),
								n = this.radius * this.radius;
							if (i * i + r * r <= n) return !0;
							if ((i = t - (this.x + this.width - this.radius)) * i + r * r <= n) return !0;
							if (i * i + (r = e - (this.y + this.height - this.radius)) * r <= n) return !0;
							if ((i = t - (this.x + this.radius)) * i + r * r <= n) return !0
						}
						return !1
					}, t.prototype.toString = function() {
						return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + "width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]"
					}, t
				}(),
				Tr = function() {
					function t(t, e) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = 0, this.y = 0, this.x = t, this.y = e
					}
					return t.prototype.clone = function() {
						return new t(this.x, this.y)
					}, t.prototype.copyFrom = function(t) {
						return this.set(t.x, t.y), this
					}, t.prototype.copyTo = function(t) {
						return t.set(this.x, this.y), t
					}, t.prototype.equals = function(t) {
						return t.x === this.x && t.y === this.y
					}, t.prototype.set = function(t, e) {
						return void 0 === t && (t = 0), void 0 === e && (e = t), this.x = t, this.y = e, this
					}, t.prototype.toString = function() {
						return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]"
					}, t
				}(),
				br = function() {
					function t(t, e, i, r) {
						void 0 === i && (i = 0), void 0 === r && (r = 0), this._x = i, this._y = r, this.cb = t, this.scope = e
					}
					return t.prototype.clone = function(e, i) {
						return void 0 === e && (e = this.cb), void 0 === i && (i = this.scope), new t(e, i, this._x, this._y)
					}, t.prototype.set = function(t, e) {
						return void 0 === t && (t = 0), void 0 === e && (e = t), this._x === t && this._y === e || (this._x = t, this._y = e, this.cb.call(this.scope)), this
					}, t.prototype.copyFrom = function(t) {
						return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
					}, t.prototype.copyTo = function(t) {
						return t.set(this._x, this._y), t
					}, t.prototype.equals = function(t) {
						return t.x === this._x && t.y === this._y
					}, t.prototype.toString = function() {
						return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]"
					}, Object.defineProperty(t.prototype, "x", {
						get: function() {
							return this._x
						},
						set: function(t) {
							this._x !== t && (this._x = t, this.cb.call(this.scope))
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "y", {
						get: function() {
							return this._y
						},
						set: function(t) {
							this._y !== t && (this._y = t, this.cb.call(this.scope))
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(),
				Er = function() {
					function t(t, e, i, r, n, o) {
						void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), this.array = null, this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o
					}
					return t.prototype.fromArray = function(t) {
						this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
					}, t.prototype.set = function(t, e, i, r, n, o) {
						return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o, this
					}, t.prototype.toArray = function(t, e) {
						this.array || (this.array = new Float32Array(9));
						var i = e || this.array;
						return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
					}, t.prototype.apply = function(t, e) {
						e = e || new Tr;
						var i = t.x,
							r = t.y;
						return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e
					}, t.prototype.applyInverse = function(t, e) {
						e = e || new Tr;
						var i = 1 / (this.a * this.d + this.c * -this.b),
							r = t.x,
							n = t.y;
						return e.x = this.d * i * r + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * n + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, e
					}, t.prototype.translate = function(t, e) {
						return this.tx += t, this.ty += e, this
					}, t.prototype.scale = function(t, e) {
						return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
					}, t.prototype.rotate = function(t) {
						var e = Math.cos(t),
							i = Math.sin(t),
							r = this.a,
							n = this.c,
							o = this.tx;
						return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this
					}, t.prototype.append = function(t) {
						var e = this.a,
							i = this.b,
							r = this.c,
							n = this.d;
						return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this
					}, t.prototype.setTransform = function(t, e, i, r, n, o, s, a, h) {
						return this.a = Math.cos(s + h) * n, this.b = Math.sin(s + h) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), this
					}, t.prototype.prepend = function(t) {
						var e = this.tx;
						if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
							var i = this.a,
								r = this.c;
							this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
						}
						return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
					}, t.prototype.decompose = function(t) {
						var e = this.a,
							i = this.b,
							r = this.c,
							n = this.d,
							o = t.pivot,
							s = -Math.atan2(-r, n),
							a = Math.atan2(i, e),
							h = Math.abs(s + a);
						return h < 1e-5 || Math.abs(dr - h) < 1e-5 ? (t.rotation = a, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = s, t.skew.y = a), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (o.x * e + o.y * r), t.position.y = this.ty + (o.x * i + o.y * n), t
					}, t.prototype.invert = function() {
						var t = this.a,
							e = this.b,
							i = this.c,
							r = this.d,
							n = this.tx,
							o = t * r - e * i;
						return this.a = r / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - r * n) / o, this.ty = -(t * this.ty - e * n) / o, this
					}, t.prototype.identity = function() {
						return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
					}, t.prototype.clone = function() {
						var e = new t;
						return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
					}, t.prototype.copyTo = function(t) {
						return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
					}, t.prototype.copyFrom = function(t) {
						return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
					}, t.prototype.toString = function() {
						return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]"
					}, Object.defineProperty(t, "IDENTITY", {
						get: function() {
							return new t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t, "TEMP_MATRIX", {
						get: function() {
							return new t
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(),
				xr = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
				Ar = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
				Sr = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
				wr = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
				Rr = [],
				Or = [],
				Ir = Math.sign;
			! function() {
				for (var t = 0; t < 16; t++) {
					var e = [];
					Rr.push(e);
					for (var i = 0; i < 16; i++)
						for (var r = Ir(xr[t] * xr[i] + Sr[t] * Ar[i]), n = Ir(Ar[t] * xr[i] + wr[t] * Ar[i]), o = Ir(xr[t] * Sr[i] + Sr[t] * wr[i]), s = Ir(Ar[t] * Sr[i] + wr[t] * wr[i]), a = 0; a < 16; a++)
							if (xr[a] === r && Ar[a] === n && Sr[a] === o && wr[a] === s) {
								e.push(a);
								break
							}
				}
				for (t = 0; t < 16; t++) {
					var h = new Er;
					h.set(xr[t], Ar[t], Sr[t], wr[t], 0, 0), Or.push(h)
				}
			}();
			var Pr = {
					E: 0,
					SE: 1,
					S: 2,
					SW: 3,
					W: 4,
					NW: 5,
					N: 6,
					NE: 7,
					MIRROR_VERTICAL: 8,
					MAIN_DIAGONAL: 10,
					MIRROR_HORIZONTAL: 12,
					REVERSE_DIAGONAL: 14,
					uX: function(t) {
						return xr[t]
					},
					uY: function(t) {
						return Ar[t]
					},
					vX: function(t) {
						return Sr[t]
					},
					vY: function(t) {
						return wr[t]
					},
					inv: function(t) {
						return 8 & t ? 15 & t : 7 & -t
					},
					add: function(t, e) {
						return Rr[t][e]
					},
					sub: function(t, e) {
						return Rr[t][Pr.inv(e)]
					},
					rotate180: function(t) {
						return 4 ^ t
					},
					isVertical: function(t) {
						return 2 == (3 & t)
					},
					byDirection: function(t, e) {
						return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? Pr.S : Pr.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? Pr.E : Pr.W : e > 0 ? t > 0 ? Pr.SE : Pr.SW : t > 0 ? Pr.NE : Pr.NW
					},
					matrixAppendRotationInv: function(t, e, i, r) {
						void 0 === i && (i = 0), void 0 === r && (r = 0);
						var n = Or[Pr.inv(e)];
						n.tx = i, n.ty = r, t.append(n)
					}
				},
				Mr = function() {
					function t() {
						this.worldTransform = new Er, this.localTransform = new Er, this.position = new br(this.onChange, this, 0, 0), this.scale = new br(this.onChange, this, 1, 1), this.pivot = new br(this.onChange, this, 0, 0), this.skew = new br(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
					}
					return t.prototype.onChange = function() {
						this._localID++
					}, t.prototype.updateSkew = function() {
						this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
					}, t.prototype.toString = function() {
						return "[@pixi/math:Transform position=(" + this.position.x + ", " + this.position.y + ") rotation=" + this.rotation + " scale=(" + this.scale.x + ", " + this.scale.y + ") skew=(" + this.skew.x + ", " + this.skew.y + ") ]"
					}, t.prototype.updateLocalTransform = function() {
						var t = this.localTransform;
						this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
					}, t.prototype.updateTransform = function(t) {
						var e = this.localTransform;
						if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
							var i = t.worldTransform,
								r = this.worldTransform;
							r.a = e.a * i.a + e.b * i.c, r.b = e.a * i.b + e.b * i.d, r.c = e.c * i.a + e.d * i.c, r.d = e.c * i.b + e.d * i.d, r.tx = e.tx * i.a + e.ty * i.c + i.tx, r.ty = e.tx * i.b + e.ty * i.d + i.ty, this._parentID = t._worldID, this._worldID++
						}
					}, t.prototype.setFromMatrix = function(t) {
						t.decompose(this), this._localID++
					}, Object.defineProperty(t.prototype, "rotation", {
						get: function() {
							return this._rotation
						},
						set: function(t) {
							this._rotation !== t && (this._rotation = t, this.updateSkew())
						},
						enumerable: !1,
						configurable: !0
					}), t.IDENTITY = new t, t
				}();
			yi.SORTABLE_CHILDREN = !1;
			var Cr = function() {
					function t() {
						this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1
					}
					return t.prototype.isEmpty = function() {
						return this.minX > this.maxX || this.minY > this.maxY
					}, t.prototype.clear = function() {
						this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
					}, t.prototype.getRectangle = function(t) {
						return this.minX > this.maxX || this.minY > this.maxY ? _r.EMPTY : ((t = t || new _r(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
					}, t.prototype.addPoint = function(t) {
						this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
					}, t.prototype.addPointMatrix = function(t, e) {
						var i = t.a,
							r = t.b,
							n = t.c,
							o = t.d,
							s = t.tx,
							a = t.ty,
							h = i * e.x + n * e.y + s,
							u = r * e.x + o * e.y + a;
						this.minX = Math.min(this.minX, h), this.maxX = Math.max(this.maxX, h), this.minY = Math.min(this.minY, u), this.maxY = Math.max(this.maxY, u)
					}, t.prototype.addQuad = function(t) {
						var e = this.minX,
							i = this.minY,
							r = this.maxX,
							n = this.maxY,
							o = t[0],
							s = t[1];
						e = o < e ? o : e, i = s < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[2]) < e ? o : e, i = (s = t[3]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[4]) < e ? o : e, i = (s = t[5]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[6]) < e ? o : e, i = (s = t[7]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, this.minX = e, this.minY = i, this.maxX = r, this.maxY = n
					}, t.prototype.addFrame = function(t, e, i, r, n) {
						this.addFrameMatrix(t.worldTransform, e, i, r, n)
					}, t.prototype.addFrameMatrix = function(t, e, i, r, n) {
						var o = t.a,
							s = t.b,
							a = t.c,
							h = t.d,
							u = t.tx,
							l = t.ty,
							c = this.minX,
							d = this.minY,
							f = this.maxX,
							p = this.maxY,
							_ = o * e + a * i + u,
							m = s * e + h * i + l;
						c = _ < c ? _ : c, d = m < d ? m : d, f = _ > f ? _ : f, p = m > p ? m : p, c = (_ = o * r + a * i + u) < c ? _ : c, d = (m = s * r + h * i + l) < d ? m : d, f = _ > f ? _ : f, p = m > p ? m : p, c = (_ = o * e + a * n + u) < c ? _ : c, d = (m = s * e + h * n + l) < d ? m : d, f = _ > f ? _ : f, p = m > p ? m : p, c = (_ = o * r + a * n + u) < c ? _ : c, d = (m = s * r + h * n + l) < d ? m : d, f = _ > f ? _ : f, p = m > p ? m : p, this.minX = c, this.minY = d, this.maxX = f, this.maxY = p
					}, t.prototype.addVertexData = function(t, e, i) {
						for (var r = this.minX, n = this.minY, o = this.maxX, s = this.maxY, a = e; a < i; a += 2) {
							var h = t[a],
								u = t[a + 1];
							r = h < r ? h : r, n = u < n ? u : n, o = h > o ? h : o, s = u > s ? u : s
						}
						this.minX = r, this.minY = n, this.maxX = o, this.maxY = s
					}, t.prototype.addVertices = function(t, e, i, r) {
						this.addVerticesMatrix(t.worldTransform, e, i, r)
					}, t.prototype.addVerticesMatrix = function(t, e, i, r, n, o) {
						void 0 === n && (n = 0), void 0 === o && (o = n);
						for (var s = t.a, a = t.b, h = t.c, u = t.d, l = t.tx, c = t.ty, d = this.minX, f = this.minY, p = this.maxX, _ = this.maxY, m = i; m < r; m += 2) {
							var g = e[m],
								y = e[m + 1],
								v = s * g + h * y + l,
								T = u * y + a * g + c;
							d = Math.min(d, v - n), p = Math.max(p, v + n), f = Math.min(f, T - o), _ = Math.max(_, T + o)
						}
						this.minX = d, this.minY = f, this.maxX = p, this.maxY = _
					}, t.prototype.addBounds = function(t) {
						var e = this.minX,
							i = this.minY,
							r = this.maxX,
							n = this.maxY;
						this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n
					}, t.prototype.addBoundsMask = function(t, e) {
						var i = t.minX > e.minX ? t.minX : e.minX,
							r = t.minY > e.minY ? t.minY : e.minY,
							n = t.maxX < e.maxX ? t.maxX : e.maxX,
							o = t.maxY < e.maxY ? t.maxY : e.maxY;
						if (i <= n && r <= o) {
							var s = this.minX,
								a = this.minY,
								h = this.maxX,
								u = this.maxY;
							this.minX = i < s ? i : s, this.minY = r < a ? r : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
						}
					}, t.prototype.addBoundsMatrix = function(t, e) {
						this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
					}, t.prototype.addBoundsArea = function(t, e) {
						var i = t.minX > e.x ? t.minX : e.x,
							r = t.minY > e.y ? t.minY : e.y,
							n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
							o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
						if (i <= n && r <= o) {
							var s = this.minX,
								a = this.minY,
								h = this.maxX,
								u = this.maxY;
							this.minX = i < s ? i : s, this.minY = r < a ? r : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
						}
					}, t.prototype.pad = function(t, e) {
						void 0 === t && (t = 0), void 0 === e && (e = t), this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e)
					}, t.prototype.addFramePad = function(t, e, i, r, n, o) {
						t -= n, e -= o, i += n, r += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > i ? this.maxX : i, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > r ? this.maxY : r
					}, t
				}(),
				Dr = function(t, e) {
					return Dr = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, Dr(t, e)
				};

			function Nr(t, e) {
				function i() {
					this.constructor = t
				}
				Dr(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var Lr = function(t) {
					function e() {
						var e = t.call(this) || this;
						return e.tempDisplayObjectParent = null, e.transform = new Mr, e.alpha = 1, e.visible = !0, e.renderable = !0, e.parent = null, e.worldAlpha = 1, e._lastSortedIndex = 0, e._zIndex = 0, e.filterArea = null, e.filters = null, e._enabledFilters = null, e._bounds = new Cr, e._localBounds = null, e._boundsID = 0, e._boundsRect = null, e._localBoundsRect = null, e._mask = null, e._destroyed = !1, e.isSprite = !1, e.isMask = !1, e
					}
					return Nr(e, t), e.mixin = function(t) {
						for (var i = Object.keys(t), r = 0; r < i.length; ++r) {
							var n = i[r];
							Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(t, n))
						}
					}, Object.defineProperty(e.prototype, "destroyed", {
						get: function() {
							return this._destroyed
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._recursivePostUpdateTransform = function() {
						this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
					}, e.prototype.updateTransform = function() {
						this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha
					}, e.prototype.getBounds = function(t, e) {
						return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new _r), e = this._boundsRect), this._bounds.getRectangle(e)
					}, e.prototype.getLocalBounds = function(t) {
						t || (this._localBoundsRect || (this._localBoundsRect = new _r), t = this._localBoundsRect), this._localBounds || (this._localBounds = new Cr);
						var e = this.transform,
							i = this.parent;
						this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
						var r = this._bounds,
							n = this._boundsID;
						this._bounds = this._localBounds;
						var o = this.getBounds(!1, t);
						return this.parent = i, this.transform = e, this._bounds = r, this._bounds.updateID += this._boundsID - n, o
					}, e.prototype.toGlobal = function(t, e, i) {
						return void 0 === i && (i = !1), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
					}, e.prototype.toLocal = function(t, e, i, r) {
						return e && (t = e.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i)
					}, e.prototype.setParent = function(t) {
						if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
						return t.addChild(this), t
					}, e.prototype.setTransform = function(t, e, i, r, n, o, s, a, h) {
						return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === r && (r = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), this.position.x = t, this.position.y = e, this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = h, this
					}, e.prototype.destroy = function(t) {
						this.parent && this.parent.removeChild(this), this.emit("destroyed"), this.removeAllListeners(), this.transform = null, this.parent = null, this._bounds = null, this._mask = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
					}, Object.defineProperty(e.prototype, "_tempDisplayObjectParent", {
						get: function() {
							return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new Fr), this.tempDisplayObjectParent
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.enableTempParent = function() {
						var t = this.parent;
						return this.parent = this._tempDisplayObjectParent, t
					}, e.prototype.disableTempParent = function(t) {
						this.parent = t
					}, Object.defineProperty(e.prototype, "x", {
						get: function() {
							return this.position.x
						},
						set: function(t) {
							this.transform.position.x = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "y", {
						get: function() {
							return this.position.y
						},
						set: function(t) {
							this.transform.position.y = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "worldTransform", {
						get: function() {
							return this.transform.worldTransform
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "localTransform", {
						get: function() {
							return this.transform.localTransform
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "position", {
						get: function() {
							return this.transform.position
						},
						set: function(t) {
							this.transform.position.copyFrom(t)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "scale", {
						get: function() {
							return this.transform.scale
						},
						set: function(t) {
							this.transform.scale.copyFrom(t)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "pivot", {
						get: function() {
							return this.transform.pivot
						},
						set: function(t) {
							this.transform.pivot.copyFrom(t)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "skew", {
						get: function() {
							return this.transform.skew
						},
						set: function(t) {
							this.transform.skew.copyFrom(t)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "rotation", {
						get: function() {
							return this.transform.rotation
						},
						set: function(t) {
							this.transform.rotation = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "angle", {
						get: function() {
							return this.transform.rotation * fr
						},
						set: function(t) {
							this.transform.rotation = t * pr
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "zIndex", {
						get: function() {
							return this._zIndex
						},
						set: function(t) {
							this._zIndex = t, this.parent && (this.parent.sortDirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "worldVisible", {
						get: function() {
							var t = this;
							do {
								if (!t.visible) return !1;
								t = t.parent
							} while (t);
							return !0
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "mask", {
						get: function() {
							return this._mask
						},
						set: function(t) {
							var e;
							this._mask && ((e = this._mask.maskObject || this._mask).renderable = !0, e.isMask = !1), this._mask = t, this._mask && ((e = this._mask.maskObject || this._mask).renderable = !1, e.isMask = !0)
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Ti()),
				Fr = function(t) {
					function e() {
						var e = null !== t && t.apply(this, arguments) || this;
						return e.sortDirty = null, e
					}
					return Nr(e, t), e
				}(Lr);

			function Br(t, e) {
				return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex
			}
			Lr.prototype.displayObjectUpdateTransform = Lr.prototype.updateTransform;
			var Ur = function(t) {
				function e() {
					var e = t.call(this) || this;
					return e.children = [], e.sortableChildren = yi.SORTABLE_CHILDREN, e.sortDirty = !1, e
				}
				return Nr(e, t), e.prototype.onChildrenChange = function(t) {}, e.prototype.addChild = function() {
					for (var t = arguments, e = [], i = 0; i < arguments.length; i++) e[i] = t[i];
					if (e.length > 1)
						for (var r = 0; r < e.length; r++) this.addChild(e[r]);
					else {
						var n = e[0];
						n.parent && n.parent.removeChild(n), n.parent = this, this.sortDirty = !0, n.transform._parentID = -1, this.children.push(n), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", n, this, this.children.length - 1), n.emit("added", this)
					}
					return e[0]
				}, e.prototype.addChildAt = function(t, e) {
					if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
					return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t
				}, e.prototype.swapChildren = function(t, e) {
					if (t !== e) {
						var i = this.getChildIndex(t),
							r = this.getChildIndex(e);
						this.children[i] = e, this.children[r] = t, this.onChildrenChange(i < r ? i : r)
					}
				}, e.prototype.getChildIndex = function(t) {
					var e = this.children.indexOf(t);
					if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
					return e
				}, e.prototype.setChildIndex = function(t, e) {
					if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
					var i = this.getChildIndex(t);
					Wi(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
				}, e.prototype.getChildAt = function(t) {
					if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
					return this.children[t]
				}, e.prototype.removeChild = function() {
					for (var t = arguments, e = [], i = 0; i < arguments.length; i++) e[i] = t[i];
					if (e.length > 1)
						for (var r = 0; r < e.length; r++) this.removeChild(e[r]);
					else {
						var n = e[0],
							o = this.children.indexOf(n);
						if (-1 === o) return null;
						n.parent = null, n.transform._parentID = -1, Wi(this.children, o, 1), this._boundsID++, this.onChildrenChange(o), n.emit("removed", this), this.emit("childRemoved", n, this, o)
					}
					return e[0]
				}, e.prototype.removeChildAt = function(t) {
					var e = this.getChildAt(t);
					return e.parent = null, e.transform._parentID = -1, Wi(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e
				}, e.prototype.removeChildren = function(t, e) {
					void 0 === t && (t = 0), void 0 === e && (e = this.children.length);
					var i, r = t,
						n = e - r;
					if (n > 0 && n <= e) {
						i = this.children.splice(r, n);
						for (var o = 0; o < i.length; ++o) i[o].parent = null, i[o].transform && (i[o].transform._parentID = -1);
						for (this._boundsID++, this.onChildrenChange(t), o = 0; o < i.length; ++o) i[o].emit("removed", this), this.emit("childRemoved", i[o], this, o);
						return i
					}
					if (0 === n && 0 === this.children.length) return [];
					throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
				}, e.prototype.sortChildren = function() {
					for (var t = !1, e = 0, i = this.children.length; e < i; ++e) {
						var r = this.children[e];
						r._lastSortedIndex = e, t || 0 === r.zIndex || (t = !0)
					}
					t && this.children.length > 1 && this.children.sort(Br), this.sortDirty = !1
				}, e.prototype.updateTransform = function() {
					this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
					for (var t = 0, e = this.children.length; t < e; ++t) {
						var i = this.children[t];
						i.visible && i.updateTransform()
					}
				}, e.prototype.calculateBounds = function() {
					this._bounds.clear(), this._calculateBounds();
					for (var t = 0; t < this.children.length; t++) {
						var e = this.children[t];
						if (e.visible && e.renderable)
							if (e.calculateBounds(), e._mask) {
								var i = e._mask.maskObject || e._mask;
								i.calculateBounds(), this._bounds.addBoundsMask(e._bounds, i._bounds)
							} else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
					}
					this._bounds.updateID = this._boundsID
				}, e.prototype.getLocalBounds = function(e, i) {
					void 0 === i && (i = !1);
					var r = t.prototype.getLocalBounds.call(this, e);
					if (!i)
						for (var n = 0, o = this.children.length; n < o; ++n) {
							var s = this.children[n];
							s.visible && s.updateTransform()
						}
					return r
				}, e.prototype._calculateBounds = function() {}, e.prototype.render = function(t) {
					if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
						if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t);
						else {
							this._render(t);
							for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].render(t)
						}
				}, e.prototype.renderAdvanced = function(t) {
					t.batch.flush();
					var e = this.filters,
						i = this._mask;
					if (e) {
						this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
						for (var r = 0; r < e.length; r++) e[r].enabled && this._enabledFilters.push(e[r]);
						this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
					}
					i && t.mask.push(this, this._mask), this._render(t), r = 0;
					for (var n = this.children.length; r < n; r++) this.children[r].render(t);
					t.batch.flush(), i && t.mask.pop(this), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
				}, e.prototype._render = function(t) {}, e.prototype.destroy = function(e) {
					t.prototype.destroy.call(this), this.sortDirty = !1;
					var i = "boolean" == typeof e ? e : e && e.children,
						r = this.removeChildren(0, this.children.length);
					if (i)
						for (var n = 0; n < r.length; ++n) r[n].destroy(e)
				}, Object.defineProperty(e.prototype, "width", {
					get: function() {
						return this.scale.x * this.getLocalBounds().width
					},
					set: function(t) {
						var e = this.getLocalBounds().width;
						this.scale.x = 0 !== e ? t / e : 1, this._width = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "height", {
					get: function() {
						return this.scale.y * this.getLocalBounds().height
					},
					set: function(t) {
						var e = this.getLocalBounds().height;
						this.scale.y = 0 !== e ? t / e : 1, this._height = t
					},
					enumerable: !1,
					configurable: !0
				}), e
			}(Lr);
			Ur.prototype.containerUpdateTransform = Ur.prototype.updateTransform;
			var kr = {
				accessible: !1,
				accessibleTitle: null,
				accessibleHint: null,
				tabIndex: 0,
				_accessibleActive: !1,
				_accessibleDiv: null,
				accessibleType: "button",
				accessiblePointerEvents: "auto",
				accessibleChildren: !0,
				renderId: -1
			};
			Lr.mixin(kr);
			var Gr, Xr = function() {
				function t(t) {
					this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, ($e.tablet || $e.phone) && this.createTouchHook();
					var e = document.createElement("div");
					e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2..toString(), this.div = e, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), self.addEventListener("keydown", this._onKeyDown, !1)
				}
				return Object.defineProperty(t.prototype, "isActive", {
					get: function() {
						return this._isActive
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "isMobileAccessibility", {
					get: function() {
						return this._isMobileAccessibility
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.createTouchHook = function() {
					var t = this,
						e = document.createElement("button");
					e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2..toString(), e.style.backgroundColor = "#FF0000", e.title = "select to enable accessibility for this content", e.addEventListener("focus", (function() {
						t._isMobileAccessibility = !0, t.activate(), t.destroyTouchHook()
					})), document.body.appendChild(e), this._hookDiv = e
				}, t.prototype.destroyTouchHook = function() {
					this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null)
				}, t.prototype.activate = function() {
					var t;
					this._isActive || (this._isActive = !0, self.document.addEventListener("mousemove", this._onMouseMove, !0), self.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), null === (t = this.renderer.view.parentNode) || void 0 === t || t.appendChild(this.div))
				}, t.prototype.deactivate = function() {
					var t;
					this._isActive && !this._isMobileAccessibility && (this._isActive = !1, self.document.removeEventListener("mousemove", this._onMouseMove, !0), self.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), null === (t = this.div.parentNode) || void 0 === t || t.removeChild(this.div))
				}, t.prototype.updateAccessibleObjects = function(t) {
					if (t.visible && t.accessibleChildren) {
						t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
						for (var e = t.children, i = 0; i < e.length; i++) this.updateAccessibleObjects(e[i])
					}
				}, t.prototype.update = function() {
					var t = performance.now();
					if (!($e.android.device && t < this.androidUpdateCount) && (this.androidUpdateCount = t + this.androidUpdateFrequency, this.renderer.renderingToScreen)) {
						this.renderer._lastObjectRendered && this.updateAccessibleObjects(this.renderer._lastObjectRendered);
						var e = this.renderer.view.getBoundingClientRect(),
							i = e.left,
							r = e.top,
							n = e.width,
							o = e.height,
							s = this.renderer,
							a = s.width,
							h = s.height,
							u = s.resolution,
							l = n / a * u,
							c = o / h * u,
							d = this.div;
						d.style.left = i + "px", d.style.top = r + "px", d.style.width = a + "px", d.style.height = h + "px";
						for (var f = 0; f < this.children.length; f++) {
							var p = this.children[f];
							if (p.renderId !== this.renderId) p._accessibleActive = !1, Wi(this.children, f, 1), this.div.removeChild(p._accessibleDiv), this.pool.push(p._accessibleDiv), p._accessibleDiv = null, f--;
							else {
								d = p._accessibleDiv;
								var _ = p.hitArea,
									m = p.worldTransform;
								p.hitArea ? (d.style.left = (m.tx + _.x * m.a) * l + "px", d.style.top = (m.ty + _.y * m.d) * c + "px", d.style.width = _.width * m.a * l + "px", d.style.height = _.height * m.d * c + "px") : (_ = p.getBounds(), this.capHitArea(_), d.style.left = _.x * l + "px", d.style.top = _.y * c + "px", d.style.width = _.width * l + "px", d.style.height = _.height * c + "px", d.title !== p.accessibleTitle && null !== p.accessibleTitle && (d.title = p.accessibleTitle), d.getAttribute("aria-label") !== p.accessibleHint && null !== p.accessibleHint && d.setAttribute("aria-label", p.accessibleHint)), p.accessibleTitle === d.title && p.tabIndex === d.tabIndex || (d.title = p.accessibleTitle, d.tabIndex = p.tabIndex, this.debug && this.updateDebugHTML(d))
							}
						}
						this.renderId++
					}
				}, t.prototype.updateDebugHTML = function(t) {
					t.innerHTML = "type: " + t.type + "</br> title : " + t.title + "</br> tabIndex: " + t.tabIndex
				}, t.prototype.capHitArea = function(t) {
					t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
					var e = this.renderer,
						i = e.width,
						r = e.height;
					t.x + t.width > i && (t.width = i - t.x), t.y + t.height > r && (t.height = r - t.y)
				}, t.prototype.addChild = function(t) {
					var e = this.pool.pop();
					e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2..toString(), e.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
				}, t.prototype._onClick = function(t) {
					var e = this.renderer.plugins.interaction,
						i = t.target.displayObject,
						r = e.eventData;
					e.dispatchEvent(i, "click", r), e.dispatchEvent(i, "pointertap", r), e.dispatchEvent(i, "tap", r)
				}, t.prototype._onFocus = function(t) {
					t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive");
					var e = this.renderer.plugins.interaction,
						i = t.target.displayObject,
						r = e.eventData;
					e.dispatchEvent(i, "mouseover", r)
				}, t.prototype._onFocusOut = function(t) {
					t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite");
					var e = this.renderer.plugins.interaction,
						i = t.target.displayObject,
						r = e.eventData;
					e.dispatchEvent(i, "mouseout", r)
				}, t.prototype._onKeyDown = function(t) {
					9 === t.keyCode && this.activate()
				}, t.prototype._onMouseMove = function(t) {
					0 === t.movementX && 0 === t.movementY || this.deactivate()
				}, t.prototype.destroy = function() {
					this.destroyTouchHook(), this.div = null, self.document.removeEventListener("mousemove", this._onMouseMove, !0), self.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
				}, t
			}();
			yi.TARGET_FPMS = .06,
				function(t) {
					t[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY"
				}(Gr || (Gr = {}));
			var Hr = function() {
					function t(t, e, i, r) {
						void 0 === e && (e = null), void 0 === i && (i = 0), void 0 === r && (r = !1), this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = e, this.priority = i, this.once = r
					}
					return t.prototype.match = function(t, e) {
						return void 0 === e && (e = null), this.fn === t && this.context === e
					}, t.prototype.emit = function(t) {
						this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
						var e = this.next;
						return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
					}, t.prototype.connect = function(t) {
						this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
					}, t.prototype.destroy = function(t) {
						void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
						var e = this.next;
						return this.next = t ? null : e, this.previous = null, e
					}, t
				}(),
				jr = function() {
					function t() {
						var t = this;
						this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new Hr(null, null, 1 / 0), this.deltaMS = 1 / yi.TARGET_FPMS, this.elapsedMS = 1 / yi.TARGET_FPMS, this._tick = function(e) {
							t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
						}
					}
					return t.prototype._requestIfNeeded = function() {
						null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
					}, t.prototype._cancelIfNeeded = function() {
						null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
					}, t.prototype._startIfPossible = function() {
						this.started ? this._requestIfNeeded() : this.autoStart && this.start()
					}, t.prototype.add = function(t, e, i) {
						return void 0 === i && (i = Gr.NORMAL), this._addListener(new Hr(t, e, i))
					}, t.prototype.addOnce = function(t, e, i) {
						return void 0 === i && (i = Gr.NORMAL), this._addListener(new Hr(t, e, i, !0))
					}, t.prototype._addListener = function(t) {
						var e = this._head.next,
							i = this._head;
						if (e) {
							for (; e;) {
								if (t.priority > e.priority) {
									t.connect(i);
									break
								}
								i = e, e = e.next
							}
							t.previous || t.connect(i)
						} else t.connect(i);
						return this._startIfPossible(), this
					}, t.prototype.remove = function(t, e) {
						for (var i = this._head.next; i;) i = i.match(t, e) ? i.destroy() : i.next;
						return this._head.next || this._cancelIfNeeded(), this
					}, Object.defineProperty(t.prototype, "count", {
						get: function() {
							if (!this._head) return 0;
							for (var t = 0, e = this._head; e = e.next;) t++;
							return t
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.start = function() {
						this.started || (this.started = !0, this._requestIfNeeded())
					}, t.prototype.stop = function() {
						this.started && (this.started = !1, this._cancelIfNeeded())
					}, t.prototype.destroy = function() {
						if (!this._protected) {
							this.stop();
							for (var t = this._head.next; t;) t = t.destroy(!0);
							this._head.destroy(), this._head = null
						}
					}, t.prototype.update = function(t) {
						var e;
						if (void 0 === t && (t = performance.now()), t > this.lastTime) {
							if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
								var i = t - this._lastFrame | 0;
								if (i < this._minElapsedMS) return;
								this._lastFrame = t - i % this._minElapsedMS
							}
							this.deltaMS = e, this.deltaTime = this.deltaMS * yi.TARGET_FPMS;
							for (var r = this._head, n = r.next; n;) n = n.emit(this.deltaTime);
							r.next || this._cancelIfNeeded()
						} else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
						this.lastTime = t
					}, Object.defineProperty(t.prototype, "FPS", {
						get: function() {
							return 1e3 / this.elapsedMS
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "minFPS", {
						get: function() {
							return 1e3 / this._maxElapsedMS
						},
						set: function(t) {
							var e = Math.min(this.maxFPS, t),
								i = Math.min(Math.max(0, e) / 1e3, yi.TARGET_FPMS);
							this._maxElapsedMS = 1 / i
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "maxFPS", {
						get: function() {
							return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
						},
						set: function(t) {
							if (0 === t) this._minElapsedMS = 0;
							else {
								var e = Math.max(this.minFPS, t);
								this._minElapsedMS = 1 / (e / 1e3)
							}
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t, "shared", {
						get: function() {
							if (!t._shared) {
								var e = t._shared = new t;
								e.autoStart = !0, e._protected = !0
							}
							return t._shared
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t, "system", {
						get: function() {
							if (!t._system) {
								var e = t._system = new t;
								e.autoStart = !0, e._protected = !0
							}
							return t._system
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(),
				zr = function() {
					function t() {}
					return t.init = function(t) {
						var e = this;
						t = Object.assign({
							autoStart: !0,
							sharedTicker: !1
						}, t), Object.defineProperty(this, "ticker", {
							set: function(t) {
								this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, Gr.LOW)
							},
							get: function() {
								return this._ticker
							}
						}), this.stop = function() {
							e._ticker.stop()
						}, this.start = function() {
							e._ticker.start()
						}, this._ticker = null, this.ticker = t.sharedTicker ? jr.shared : new jr, t.autoStart && this.start()
					}, t.destroy = function() {
						if (this._ticker) {
							var t = this._ticker;
							this.ticker = null, t.destroy()
						}
					}, t
				}(),
				Yr = function() {
					function t() {
						this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0, this.global = new Tr, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
					}
					return Object.defineProperty(t.prototype, "pointerId", {
						get: function() {
							return this.identifier
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.getLocalPosition = function(t, e, i) {
						return t.worldTransform.applyInverse(i || this.global, e)
					}, t.prototype.copyEvent = function(t) {
						"isPrimary" in t && t.isPrimary && (this.isPrimary = !0), this.button = "button" in t && t.button;
						var e = "buttons" in t && t.buttons;
						this.buttons = Number.isInteger(e) ? e : "which" in t && t.which, this.width = "width" in t && t.width, this.height = "height" in t && t.height, this.tiltX = "tiltX" in t && t.tiltX, this.tiltY = "tiltY" in t && t.tiltY, this.pointerType = "pointerType" in t && t.pointerType, this.pressure = "pressure" in t && t.pressure, this.rotationAngle = "rotationAngle" in t && t.rotationAngle, this.twist = "twist" in t && t.twist || 0, this.tangentialPressure = "tangentialPressure" in t && t.tangentialPressure || 0
					}, t.prototype.reset = function() {
						this.isPrimary = !1
					}, t
				}(),
				Vr = function(t, e) {
					return Vr = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, Vr(t, e)
				},
				Wr = function() {
					function t() {
						this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
					}
					return t.prototype.stopPropagation = function() {
						this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget
					}, t.prototype.reset = function() {
						this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.currentTarget = null, this.target = null
					}, t
				}(),
				qr = function() {
					function t(e) {
						this._pointerId = e, this._flags = t.FLAGS.NONE
					}
					return t.prototype._doSet = function(t, e) {
						this._flags = e ? this._flags | t : this._flags & ~t
					}, Object.defineProperty(t.prototype, "pointerId", {
						get: function() {
							return this._pointerId
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "flags", {
						get: function() {
							return this._flags
						},
						set: function(t) {
							this._flags = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "none", {
						get: function() {
							return this._flags === t.FLAGS.NONE
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "over", {
						get: function() {
							return 0 != (this._flags & t.FLAGS.OVER)
						},
						set: function(e) {
							this._doSet(t.FLAGS.OVER, e)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "rightDown", {
						get: function() {
							return 0 != (this._flags & t.FLAGS.RIGHT_DOWN)
						},
						set: function(e) {
							this._doSet(t.FLAGS.RIGHT_DOWN, e)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "leftDown", {
						get: function() {
							return 0 != (this._flags & t.FLAGS.LEFT_DOWN)
						},
						set: function(e) {
							this._doSet(t.FLAGS.LEFT_DOWN, e)
						},
						enumerable: !1,
						configurable: !0
					}), t.FLAGS = Object.freeze({
						NONE: 0,
						OVER: 1,
						LEFT_DOWN: 2,
						RIGHT_DOWN: 4
					}), t
				}(),
				Kr = function() {
					function t() {
						this._tempPoint = new Tr
					}
					return t.prototype.recursiveFindHit = function(t, e, i, r, n) {
						if (!e || !e.visible) return !1;
						var o = t.data.global,
							s = !1,
							a = n = e.interactive || n,
							h = !0;
						if (e.hitArea ? (r && (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (r = !1, h = !1)), a = !1) : e._mask && r && (e._mask.containsPoint && e._mask.containsPoint(o) || (r = !1)), h && e.interactiveChildren && e.children)
							for (var u = e.children, l = u.length - 1; l >= 0; l--) {
								var c = u[l],
									d = this.recursiveFindHit(t, c, i, r, a);
								if (d) {
									if (!c.parent) continue;
									a = !1, d && (t.target && (r = !1), s = !0)
								}
							}
						return n && (r && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0), e.interactive && (s && !t.target && (t.target = e), i && i(t, e, !!s))), s
					}, t.prototype.findHit = function(t, e, i, r) {
						this.recursiveFindHit(t, e, i, r, !1)
					}, t
				}(),
				Zr = {
					interactive: !1,
					interactiveChildren: !0,
					hitArea: null,
					get buttonMode() {
						return "pointer" === this.cursor
					},
					set buttonMode(t) {
						t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
					},
					cursor: null,
					get trackedPointers() {
						return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
					},
					_trackedPointers: void 0
				};
			Lr.mixin(Zr);
			var Jr = {
					target: null,
					data: {
						global: null
					}
				},
				$r = function(t) {
					function e(e, i) {
						var r = t.call(this) || this;
						return i = i || {}, r.renderer = e, r.autoPreventDefault = void 0 === i.autoPreventDefault || i.autoPreventDefault, r.interactionFrequency = i.interactionFrequency || 10, r.mouse = new Yr, r.mouse.identifier = 1, r.mouse.global.set(-999999), r.activeInteractionData = {}, r.activeInteractionData[1] = r.mouse, r.interactionDataPool = [], r.eventData = new Wr, r.interactionDOMElement = null, r.moveWhenInside = !1, r.eventsAdded = !1, r.tickerAdded = !1, r.mouseOverRenderer = !("PointerEvent" in self), r.supportsTouchEvents = "ontouchstart" in self, r.supportsPointerEvents = !!self.PointerEvent, r.onPointerUp = r.onPointerUp.bind(r), r.processPointerUp = r.processPointerUp.bind(r), r.onPointerCancel = r.onPointerCancel.bind(r), r.processPointerCancel = r.processPointerCancel.bind(r), r.onPointerDown = r.onPointerDown.bind(r), r.processPointerDown = r.processPointerDown.bind(r), r.onPointerMove = r.onPointerMove.bind(r), r.processPointerMove = r.processPointerMove.bind(r), r.onPointerOut = r.onPointerOut.bind(r), r.processPointerOverOut = r.processPointerOverOut.bind(r), r.onPointerOver = r.onPointerOver.bind(r), r.cursorStyles = {
							default: "inherit",
							pointer: "pointer"
						}, r.currentCursorMode = null, r.cursor = null, r.resolution = 1, r.delayedEvents = [], r.search = new Kr, r._tempDisplayObject = new Fr, r._eventListenerOptions = {
							capture: !0,
							passive: !1
						}, r._useSystemTicker = void 0 === i.useSystemTicker || i.useSystemTicker, r.setTargetElement(r.renderer.view, r.renderer.resolution), r
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						Vr(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), Object.defineProperty(e.prototype, "useSystemTicker", {
						get: function() {
							return this._useSystemTicker
						},
						set: function(t) {
							this._useSystemTicker = t, t ? this.addTickerListener() : this.removeTickerListener()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "lastObjectRendered", {
						get: function() {
							return this.renderer._lastObjectRendered || this._tempDisplayObject
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.hitTest = function(t, e) {
						return Jr.target = null, Jr.data.global = t, e || (e = this.lastObjectRendered), this.processInteractive(Jr, e, null, !0), Jr.target
					}, e.prototype.setTargetElement = function(t, e) {
						void 0 === e && (e = 1), this.removeTickerListener(), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents(), this.addTickerListener()
					}, e.prototype.addTickerListener = function() {
						!this.tickerAdded && this.interactionDOMElement && this._useSystemTicker && (jr.system.add(this.tickerUpdate, this, Gr.INTERACTION), this.tickerAdded = !0)
					}, e.prototype.removeTickerListener = function() {
						this.tickerAdded && (jr.system.remove(this.tickerUpdate, this), this.tickerAdded = !1)
					}, e.prototype.addEvents = function() {
						if (!this.eventsAdded && this.interactionDOMElement) {
							var t = this.interactionDOMElement.style;
							self.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none"), this.supportsPointerEvents ? (self.document.addEventListener("pointermove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, this._eventListenerOptions), self.addEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions), self.addEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (self.document.addEventListener("mousemove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, this._eventListenerOptions), self.addEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)), this.eventsAdded = !0
						}
					}, e.prototype.removeEvents = function() {
						if (this.eventsAdded && this.interactionDOMElement) {
							var t = this.interactionDOMElement.style;
							self.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""), this.supportsPointerEvents ? (self.document.removeEventListener("pointermove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, this._eventListenerOptions), self.removeEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions), self.removeEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (self.document.removeEventListener("mousemove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, this._eventListenerOptions), self.removeEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)), this.interactionDOMElement = null, this.eventsAdded = !1
						}
					}, e.prototype.tickerUpdate = function(t) {
						this._deltaTime += t, this._deltaTime < this.interactionFrequency || (this._deltaTime = 0, this.update())
					}, e.prototype.update = function() {
						if (this.interactionDOMElement)
							if (this._didMove) this._didMove = !1;
							else {
								for (var t in this.cursor = null, this.activeInteractionData)
									if (this.activeInteractionData.hasOwnProperty(t)) {
										var e = this.activeInteractionData[t];
										if (e.originalEvent && "touch" !== e.pointerType) {
											var i = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e);
											this.processInteractive(i, this.lastObjectRendered, this.processPointerOverOut, !0)
										}
									} this.setCursorMode(this.cursor)
							}
					}, e.prototype.setCursorMode = function(t) {
						t = t || "default";
						var e = !0;
						if (self.OffscreenCanvas && this.interactionDOMElement instanceof OffscreenCanvas && (e = !1), this.currentCursorMode !== t) {
							this.currentCursorMode = t;
							var i = this.cursorStyles[t];
							if (i) switch (typeof i) {
								case "string":
									e && (this.interactionDOMElement.style.cursor = i);
									break;
								case "function":
									i(t);
									break;
								case "object":
									e && Object.assign(this.interactionDOMElement.style, i)
							} else e && "string" == typeof t && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.interactionDOMElement.style.cursor = t)
						}
					}, e.prototype.dispatchEvent = function(t, e, i) {
						i.stopPropagationHint && t !== i.stopsPropagatingAt || (i.currentTarget = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
					}, e.prototype.delayDispatchEvent = function(t, e, i) {
						this.delayedEvents.push({
							displayObject: t,
							eventString: e,
							eventData: i
						})
					}, e.prototype.mapPositionToPoint = function(t, e, i) {
						var r;
						r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
							x: 0,
							y: 0,
							width: this.interactionDOMElement.width,
							height: this.interactionDOMElement.height,
							left: 0,
							top: 0
						};
						var n = 1 / this.resolution;
						t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) * n, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) * n
					}, e.prototype.processInteractive = function(t, e, i, r) {
						var n = this.search.findHit(t, e, i, r),
							o = this.delayedEvents;
						if (!o.length) return n;
						t.stopPropagationHint = !1;
						var s = o.length;
						this.delayedEvents = [];
						for (var a = 0; a < s; a++) {
							var h = o[a],
								u = h.displayObject,
								l = h.eventString,
								c = h.eventData;
							c.stopsPropagatingAt === u && (c.stopPropagationHint = !0), this.dispatchEvent(u, l, c)
						}
						return n
					}, e.prototype.onPointerDown = function(t) {
						if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
							var e = this.normalizeToPointerData(t);
							this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable" in t)) && t.preventDefault();
							for (var i = e.length, r = 0; r < i; r++) {
								var n = e[r],
									o = this.getInteractionDataForPointerId(n),
									s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
								if (s.data.originalEvent = t, this.processInteractive(s, this.lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s);
								else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
									var a = 2 === n.button;
									this.emit(a ? "rightdown" : "mousedown", this.eventData)
								}
							}
						}
					}, e.prototype.processPointerDown = function(t, e, i) {
						var r = t.data,
							n = t.data.identifier;
						if (i)
							if (e.trackedPointers[n] || (e.trackedPointers[n] = new qr(n)), this.dispatchEvent(e, "pointerdown", t), "touch" === r.pointerType) this.dispatchEvent(e, "touchstart", t);
							else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
							var o = 2 === r.button;
							o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
						}
					}, e.prototype.onPointerComplete = function(t, e, i) {
						for (var r = this.normalizeToPointerData(t), n = r.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
							var a = r[s],
								h = this.getInteractionDataForPointerId(a),
								u = this.configureInteractionEventForDOMEvent(this.eventData, a, h);
							if (u.data.originalEvent = t, this.processInteractive(u, this.lastObjectRendered, i, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, u), "mouse" === a.pointerType || "pen" === a.pointerType) {
								var l = 2 === a.button;
								this.emit(l ? "rightup" + o : "mouseup" + o, u)
							} else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, u), this.releaseInteractionDataForPointerId(a.pointerId))
						}
					}, e.prototype.onPointerCancel = function(t) {
						this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
					}, e.prototype.processPointerCancel = function(t, e) {
						var i = t.data,
							r = t.data.identifier;
						void 0 !== e.trackedPointers[r] && (delete e.trackedPointers[r], this.dispatchEvent(e, "pointercancel", t), "touch" === i.pointerType && this.dispatchEvent(e, "touchcancel", t))
					}, e.prototype.onPointerUp = function(t) {
						this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
					}, e.prototype.processPointerUp = function(t, e, i) {
						var r = t.data,
							n = t.data.identifier,
							o = e.trackedPointers[n],
							s = "touch" === r.pointerType,
							a = "mouse" === r.pointerType || "pen" === r.pointerType,
							h = !1;
						if (a) {
							var u = 2 === r.button,
								l = qr.FLAGS,
								c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
								d = void 0 !== o && o.flags & c;
							i ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t), d && (this.dispatchEvent(e, u ? "rightclick" : "click", t), h = !0)) : d && this.dispatchEvent(e, u ? "rightupoutside" : "mouseupoutside", t), o && (u ? o.rightDown = !1 : o.leftDown = !1)
						}
						i ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !h || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[n]
					}, e.prototype.onPointerMove = function(t) {
						if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
							var e = this.normalizeToPointerData(t);
							"mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this._didMove = !0, this.cursor = null);
							for (var i = e.length, r = 0; r < i; r++) {
								var n = e[r],
									o = this.getInteractionDataForPointerId(n),
									s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
								s.data.originalEvent = t, this.processInteractive(s, this.lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s)
							}
							"mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
						}
					}, e.prototype.processPointerMove = function(t, e, i) {
						var r = t.data,
							n = "touch" === r.pointerType,
							o = "mouse" === r.pointerType || "pen" === r.pointerType;
						o && this.processPointerOverOut(t, e, i), this.moveWhenInside && !i || (this.dispatchEvent(e, "pointermove", t), n && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t))
					}, e.prototype.onPointerOut = function(t) {
						if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
							var e = this.normalizeToPointerData(t)[0];
							"mouse" === e.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
							var i = this.getInteractionDataForPointerId(e),
								r = this.configureInteractionEventForDOMEvent(this.eventData, e, i);
							r.data.originalEvent = e, this.processInteractive(r, this.lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", r), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", r) : this.releaseInteractionDataForPointerId(i.identifier)
						}
					}, e.prototype.processPointerOverOut = function(t, e, i) {
						var r = t.data,
							n = t.data.identifier,
							o = "mouse" === r.pointerType || "pen" === r.pointerType,
							s = e.trackedPointers[n];
						i && !s && (s = e.trackedPointers[n] = new qr(n)), void 0 !== s && (i && this.mouseOverRenderer ? (s.over || (s.over = !0, this.delayDispatchEvent(e, "pointerover", t), o && this.delayDispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[n]))
					}, e.prototype.onPointerOver = function(t) {
						var e = this.normalizeToPointerData(t)[0],
							i = this.getInteractionDataForPointerId(e),
							r = this.configureInteractionEventForDOMEvent(this.eventData, e, i);
						r.data.originalEvent = e, "mouse" === e.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", r), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", r)
					}, e.prototype.getInteractionDataForPointerId = function(t) {
						var e, i = t.pointerId;
						return 1 === i || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[i] ? e = this.activeInteractionData[i] : ((e = this.interactionDataPool.pop() || new Yr).identifier = i, this.activeInteractionData[i] = e), e.copyEvent(t), e
					}, e.prototype.releaseInteractionDataForPointerId = function(t) {
						var e = this.activeInteractionData[t];
						e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e))
					}, e.prototype.configureInteractionEventForDOMEvent = function(t, e, i) {
						return t.data = i, this.mapPositionToPoint(i.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = i.global.x, e.globalY = i.global.y), i.originalEvent = e, t.reset(), t
					}, e.prototype.normalizeToPointerData = function(t) {
						var e = [];
						if (this.supportsTouchEvents && t instanceof TouchEvent)
							for (var i = 0, r = t.changedTouches.length; i < r; i++) {
								var n = t.changedTouches[i];
								void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), void 0 === n.twist && (n.twist = 0), void 0 === n.tangentialPressure && (n.tangentialPressure = 0), void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, e.push(n)
							} else if (!self.MouseEvent || t instanceof MouseEvent && !(this.supportsPointerEvents && t instanceof self.PointerEvent)) {
								var o = t;
								void 0 === o.isPrimary && (o.isPrimary = !0), void 0 === o.width && (o.width = 1), void 0 === o.height && (o.height = 1), void 0 === o.tiltX && (o.tiltX = 0), void 0 === o.tiltY && (o.tiltY = 0), void 0 === o.pointerType && (o.pointerType = "mouse"), void 0 === o.pointerId && (o.pointerId = 1), void 0 === o.pressure && (o.pressure = .5), void 0 === o.twist && (o.twist = 0), void 0 === o.tangentialPressure && (o.tangentialPressure = 0), o.isNormalized = !0, e.push(o)
							} else e.push(t);
						return e
					}, e.prototype.destroy = function() {
						this.removeEvents(), this.removeTickerListener(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this.search = null
					}, e
				}(Ti()),
				Qr = function() {
					function t(t) {
						this.items = [], this._name = t, this._aliasCount = 0
					}
					return t.prototype.emit = function(t, e, i, r, n, o, s, a) {
						if (arguments.length > 8) throw new Error("max arguments reached");
						var h = this,
							u = h.name,
							l = h.items;
						this._aliasCount++;
						for (var c = 0, d = l.length; c < d; c++) l[c][u](t, e, i, r, n, o, s, a);
						return l === this.items && this._aliasCount--, this
					}, t.prototype.ensureNonAliasedItems = function() {
						this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
					}, t.prototype.add = function(t) {
						return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
					}, t.prototype.remove = function(t) {
						var e = this.items.indexOf(t);
						return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
					}, t.prototype.contains = function(t) {
						return -1 !== this.items.indexOf(t)
					}, t.prototype.removeAll = function() {
						return this.ensureNonAliasedItems(), this.items.length = 0, this
					}, t.prototype.destroy = function() {
						this.removeAll(), this.items = null, this._name = null
					}, Object.defineProperty(t.prototype, "empty", {
						get: function() {
							return 0 === this.items.length
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "name", {
						get: function() {
							return this._name
						},
						enumerable: !1,
						configurable: !0
					}), t
				}();
			Object.defineProperties(Qr.prototype, {
				dispatch: {
					value: Qr.prototype.emit
				},
				run: {
					value: Qr.prototype.emit
				}
			}), yi.PREFER_ENV = $e.any ? Qe.WEBGL : Qe.WEBGL2, yi.STRICT_TEXTURE_CACHE = !1;
			var tn = [];

			function en(t, e) {
				if (!t) return null;
				var i = "";
				if ("string" == typeof t) {
					var r = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
					r && (i = r[1].toLowerCase())
				}
				for (var n = tn.length - 1; n >= 0; --n) {
					var o = tn[n];
					if (o.test && o.test(t, i)) return new o(t, e)
				}
				throw new Error("Unrecognized source type to auto-detect Resource")
			}
			var rn = function(t, e) {
				return rn = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, e) {
					t.__proto__ = e
				} || function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
				}, rn(t, e)
			};

			function nn(t, e) {
				function i() {
					this.constructor = t
				}
				rn(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var on = function() {
					return on = Object.assign || function(t) {
						for (var e, i = arguments, r = 1, n = arguments.length; r < n; r++)
							for (var o in e = i[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}, on.apply(this, arguments)
				},
				sn = function() {
					function t(t, e) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new Qr("setRealSize"), this.onUpdate = new Qr("update"), this.onError = new Qr("onError")
					}
					return t.prototype.bind = function(t) {
						this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height)
					}, t.prototype.unbind = function(t) {
						this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
					}, t.prototype.resize = function(t, e) {
						t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.emit(t, e))
					}, Object.defineProperty(t.prototype, "valid", {
						get: function() {
							return !!this._width && !!this._height
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.update = function() {
						this.destroyed || this.onUpdate.emit()
					}, t.prototype.load = function() {
						return Promise.resolve(this)
					}, Object.defineProperty(t.prototype, "width", {
						get: function() {
							return this._width
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "height", {
						get: function() {
							return this._height
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.style = function(t, e, i) {
						return !1
					}, t.prototype.dispose = function() {}, t.prototype.destroy = function() {
						this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
					}, t.test = function(t, e) {
						return !1
					}, t
				}(),
				an = function(t) {
					function e(e, i) {
						var r = this,
							n = i || {},
							o = n.width,
							s = n.height;
						if (!o || !s) throw new Error("BufferResource width or height invalid");
						return (r = t.call(this, o, s) || this).data = e, r
					}
					return nn(e, t), e.prototype.upload = function(t, e, i) {
						var r = t.gl;
						r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ci.UNPACK);
						var n = e.realWidth,
							o = e.realHeight;
						return i.width === n && i.height === o ? r.texSubImage2D(e.target, 0, 0, 0, n, o, e.format, i.type, this.data) : (i.width = n, i.height = o, r.texImage2D(e.target, 0, i.internalFormat, n, o, 0, e.format, i.type, this.data)), !0
					}, e.prototype.dispose = function() {
						this.data = null
					}, e.test = function(t) {
						return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
					}, e
				}(sn),
				hn = {
					scaleMode: hi.NEAREST,
					format: ni.RGBA,
					alphaMode: ci.NPM
				},
				un = function(t) {
					function e(e, i) {
						void 0 === e && (e = null), void 0 === i && (i = null);
						var r = t.call(this) || this,
							n = (i = i || {}).alphaMode,
							o = i.mipmap,
							s = i.anisotropicLevel,
							a = i.scaleMode,
							h = i.width,
							u = i.height,
							l = i.wrapMode,
							c = i.format,
							d = i.type,
							f = i.target,
							p = i.resolution,
							_ = i.resourceOptions;
						return !e || e instanceof sn || ((e = en(e, _)).internal = !0), r.resolution = p || yi.RESOLUTION, r.width = Math.round((h || 0) * r.resolution) / r.resolution, r.height = Math.round((u || 0) * r.resolution) / r.resolution, r._mipmap = void 0 !== o ? o : yi.MIPMAP_TEXTURES, r.anisotropicLevel = void 0 !== s ? s : yi.ANISOTROPIC_LEVEL, r._wrapMode = l || yi.WRAP_MODE, r._scaleMode = void 0 !== a ? a : yi.SCALE_MODE, r.format = c || ni.RGBA, r.type = d || si.UNSIGNED_BYTE, r.target = f || oi.TEXTURE_2D, r.alphaMode = void 0 !== n ? n : ci.UNPACK, r.uid = Zi(), r.touched = 0, r.isPowerOfTwo = !1, r._refreshPOT(), r._glTextures = {}, r.dirtyId = 0, r.dirtyStyleId = 0, r.cacheId = null, r.valid = h > 0 && u > 0, r.textureCacheIds = [], r.destroyed = !1, r.resource = null, r._batchEnabled = 0, r._batchLocation = 0, r.parentTextureArray = null, r.setResource(e), r
					}
					return nn(e, t), Object.defineProperty(e.prototype, "realWidth", {
						get: function() {
							return Math.round(this.width * this.resolution)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "realHeight", {
						get: function() {
							return Math.round(this.height * this.resolution)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "mipmap", {
						get: function() {
							return this._mipmap
						},
						set: function(t) {
							this._mipmap !== t && (this._mipmap = t, this.dirtyStyleId++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "scaleMode", {
						get: function() {
							return this._scaleMode
						},
						set: function(t) {
							this._scaleMode !== t && (this._scaleMode = t, this.dirtyStyleId++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "wrapMode", {
						get: function() {
							return this._wrapMode
						},
						set: function(t) {
							this._wrapMode !== t && (this._wrapMode = t, this.dirtyStyleId++)
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.setStyle = function(t, e) {
						var i;
						return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, i = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, i = !0), i && this.dirtyStyleId++, this
					}, e.prototype.setSize = function(t, e, i) {
						return i = i || this.resolution, this.setRealSize(t * i, e * i, i)
					}, e.prototype.setRealSize = function(t, e, i) {
						return this.resolution = i || this.resolution, this.width = Math.round(t) / this.resolution, this.height = Math.round(e) / this.resolution, this._refreshPOT(), this.update(), this
					}, e.prototype._refreshPOT = function() {
						this.isPowerOfTwo = Yi(this.realWidth) && Yi(this.realHeight)
					}, e.prototype.setResolution = function(t) {
						var e = this.resolution;
						return e === t || (this.resolution = t, this.valid && (this.width = Math.round(this.width * e) / t, this.height = Math.round(this.height * e) / t, this.emit("update", this)), this._refreshPOT()), this
					}, e.prototype.setResource = function(t) {
						if (this.resource === t) return this;
						if (this.resource) throw new Error("Resource can be set only once");
						return t.bind(this), this.resource = t, this
					}, e.prototype.update = function() {
						this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
					}, e.prototype.onError = function(t) {
						this.emit("error", this, t)
					}, e.prototype.destroy = function() {
						this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete er[this.cacheId], delete tr[this.cacheId], this.cacheId = null), this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
					}, e.prototype.dispose = function() {
						this.emit("dispose", this)
					}, e.prototype.castToBaseTexture = function() {
						return this
					}, e.from = function(t, i, r) {
						void 0 === r && (r = yi.STRICT_TEXTURE_CACHE);
						var n = "string" == typeof t,
							o = null;
						if (n) o = t;
						else {
							if (!t._pixiId) {
								var s = i && i.pixiIdPrefix || "pixiid";
								t._pixiId = s + "_" + Zi()
							}
							o = t._pixiId
						}
						var a = er[o];
						if (n && r && !a) throw new Error('The cacheId "' + o + '" does not exist in BaseTextureCache.');
						return a || ((a = new e(t, i)).cacheId = o, e.addToCache(a, o)), a
					}, e.fromBuffer = function(t, i, r, n) {
						t = t || new Float32Array(i * r * 4);
						var o = new an(t, {
								width: i,
								height: r
							}),
							s = t instanceof Float32Array ? si.FLOAT : si.UNSIGNED_BYTE;
						return new e(o, Object.assign(hn, n || {
							width: i,
							height: r,
							type: s
						}))
					}, e.addToCache = function(t, e) {
						e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), er[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), er[e] = t)
					}, e.removeFromCache = function(t) {
						if ("string" == typeof t) {
							var e = er[t];
							if (e) {
								var i = e.textureCacheIds.indexOf(t);
								return i > -1 && e.textureCacheIds.splice(i, 1), delete er[t], e
							}
						} else if (t && t.textureCacheIds) {
							for (var r = 0; r < t.textureCacheIds.length; ++r) delete er[t.textureCacheIds[r]];
							return t.textureCacheIds.length = 0, t
						}
						return null
					}, e._globalBatch = 0, e
				}(Ti()),
				ln = function(t) {
					function e(e, i) {
						var r = this,
							n = i || {},
							o = n.width,
							s = n.height;
						(r = t.call(this, o, s) || this).items = [], r.itemDirtyIds = [];
						for (var a = 0; a < e; a++) {
							var h = new un;
							r.items.push(h), r.itemDirtyIds.push(-2)
						}
						return r.length = e, r._load = null, r.baseTexture = null, r
					}
					return nn(e, t), e.prototype.initFromArray = function(t, e) {
						for (var i = 0; i < this.length; i++) t[i] && (t[i].castToBaseTexture ? this.addBaseTextureAt(t[i].castToBaseTexture(), i) : t[i] instanceof sn ? this.addResourceAt(t[i], i) : this.addResourceAt(en(t[i], e), i))
					}, e.prototype.dispose = function() {
						for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();
						this.items = null, this.itemDirtyIds = null, this._load = null
					}, e.prototype.addResourceAt = function(t, e) {
						if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
						return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
					}, e.prototype.bind = function(e) {
						if (null !== this.baseTexture) throw new Error("Only one base texture per TextureArray is allowed");
						t.prototype.bind.call(this, e);
						for (var i = 0; i < this.length; i++) this.items[i].parentTextureArray = e, this.items[i].on("update", e.update, e)
					}, e.prototype.unbind = function(e) {
						t.prototype.unbind.call(this, e);
						for (var i = 0; i < this.length; i++) this.items[i].parentTextureArray = null, this.items[i].off("update", e.update, e)
					}, e.prototype.load = function() {
						var t = this;
						if (this._load) return this._load;
						var e = this.items.map((function(t) {
							return t.resource
						})).filter((function(t) {
							return t
						})).map((function(t) {
							return t.load()
						}));
						return this._load = Promise.all(e).then((function() {
							var e = t.items[0],
								i = e.realWidth,
								r = e.realHeight;
							return t.resize(i, r), Promise.resolve(t)
						})), this._load
					}, e
				}(sn),
				cn = function(t) {
					function e(e, i) {
						var r, n, o = this,
							s = i || {},
							a = s.width,
							h = s.height;
						return Array.isArray(e) ? (r = e, n = e.length) : n = e, o = t.call(this, n, {
							width: a,
							height: h
						}) || this, r && o.initFromArray(r, i), o
					}
					return nn(e, t), e.prototype.addBaseTextureAt = function(t, e) {
						if (!t.resource) throw new Error("ArrayResource does not support RenderTexture");
						return this.addResourceAt(t.resource, e), this
					}, e.prototype.bind = function(e) {
						t.prototype.bind.call(this, e), e.target = oi.TEXTURE_2D_ARRAY
					}, e.prototype.upload = function(t, e, i) {
						var r = this,
							n = r.length,
							o = r.itemDirtyIds,
							s = r.items,
							a = t.gl;
						i.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, i.internalFormat, this._width, this._height, n, 0, e.format, i.type, null);
						for (var h = 0; h < n; h++) {
							var u = s[h];
							o[h] < u.dirtyId && (o[h] = u.dirtyId, u.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, h, u.resource.width, u.resource.height, 1, e.format, i.type, u.resource.source))
						}
						return !0
					}, e
				}(ln),
				dn = function(t) {
					function e(e) {
						var i = this,
							r = e,
							n = r.naturalWidth || r.videoWidth || r.width,
							o = r.naturalHeight || r.videoHeight || r.height;
						return (i = t.call(this, n, o) || this).source = e, i.noSubImage = !1, i
					}
					return nn(e, t), e.crossOrigin = function(t, e, i) {
						void 0 === i && 0 !== e.indexOf("data:") ? t.crossOrigin = ur(e) : !1 !== i && (t.crossOrigin = "string" == typeof i ? i : "anonymous")
					}, e.prototype.upload = function(t, e, i, r) {
						var n = t.gl,
							o = e.realWidth,
							s = e.realHeight;
						return r = r || this.source, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ci.UNPACK), this.noSubImage || e.target !== n.TEXTURE_2D || i.width !== o || i.height !== s ? (i.width = o, i.height = s, n.texImage2D(e.target, 0, i.internalFormat, e.format, i.type, r)) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, i.type, r), !0
					}, e.prototype.update = function() {
						if (!this.destroyed) {
							var e = this.source,
								i = e.naturalWidth || e.videoWidth || e.width,
								r = e.naturalHeight || e.videoHeight || e.height;
							this.resize(i, r), t.prototype.update.call(this)
						}
					}, e.prototype.dispose = function() {
						this.source = null
					}, e
				}(sn),
				fn = function(t) {
					function e(e) {
						return t.call(this, e) || this
					}
					return nn(e, t), e.test = function(t) {
						var e = self.OffscreenCanvas;
						return !!(e && t instanceof e) || self.HTMLCanvasElement && t instanceof HTMLCanvasElement
					}, e
				}(dn),
				pn = function(t) {
					function e(i, r) {
						var n = this,
							o = r || {},
							s = o.width,
							a = o.height,
							h = o.autoLoad,
							u = o.linkBaseTexture;
						if (i && i.length !== e.SIDES) throw new Error("Invalid length. Got " + i.length + ", expected 6");
						n = t.call(this, 6, {
							width: s,
							height: a
						}) || this;
						for (var l = 0; l < e.SIDES; l++) n.items[l].target = oi.TEXTURE_CUBE_MAP_POSITIVE_X + l;
						return n.linkBaseTexture = !1 !== u, i && n.initFromArray(i, r), !1 !== h && n.load(), n
					}
					return nn(e, t), e.prototype.bind = function(e) {
						t.prototype.bind.call(this, e), e.target = oi.TEXTURE_CUBE_MAP
					}, e.prototype.addBaseTextureAt = function(t, e, i) {
						if (void 0 === i && (i = this.linkBaseTexture), !this.items[e]) throw new Error("Index " + e + " is out of bounds");
						if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0) {
							if (!t.resource) throw new Error("CubeResource does not support copying of renderTexture.");
							this.addResourceAt(t.resource, e)
						} else t.target = oi.TEXTURE_CUBE_MAP_POSITIVE_X + e, t.parentTextureArray = this.baseTexture, this.items[e] = t;
						return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight), this.items[e] = t, this
					}, e.prototype.upload = function(t, i, r) {
						for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
							var s = this.items[o];
							n[o] < s.dirtyId && (s.valid && s.resource ? (s.resource.upload(t, s, r), n[o] = s.dirtyId) : n[o] < -1 && (t.gl.texImage2D(s.target, 0, r.internalFormat, i.realWidth, i.realHeight, 0, i.format, r.type, null), n[o] = -1))
						}
						return !0
					}, e.test = function(t) {
						return Array.isArray(t) && t.length === e.SIDES
					}, e.SIDES = 6, e
				}(ln),
				_n = function(t) {
					function e(e, i) {
						var r = this;
						if (i = i || {}, !(e instanceof HTMLImageElement)) {
							var n = new Image;
							dn.crossOrigin(n, e, i.crossorigin), n.src = e, e = n
						}
						return r = t.call(this, e) || this, !e.complete && r._width && r._height && (r._width = 0, r._height = 0), r.url = e.src, r._process = null, r.preserveBitmap = !1, r.createBitmap = (void 0 !== i.createBitmap ? i.createBitmap : yi.CREATE_IMAGE_BITMAP) && !!self.createImageBitmap, r.alphaMode = "number" == typeof i.alphaMode ? i.alphaMode : null, r.bitmap = null, r._load = null, !1 !== i.autoLoad && r.load(), r
					}
					return nn(e, t), e.prototype.load = function(t) {
						var e = this;
						return this._load || (void 0 !== t && (this.createBitmap = t), this._load = new Promise((function(t, i) {
							var r = e.source;
							e.url = r.src;
							var n = function() {
								e.destroyed || (r.onload = null, r.onerror = null, e.resize(r.width, r.height), e._load = null, e.createBitmap ? t(e.process()) : t(e))
							};
							r.complete && r.src ? n() : (r.onload = n, r.onerror = function(t) {
								i(t), e.onError.emit(t)
							})
						}))), this._load
					}, e.prototype.process = function() {
						var t = this,
							e = this.source;
						if (null !== this._process) return this._process;
						if (null !== this.bitmap || !self.createImageBitmap) return Promise.resolve(this);
						var i = self.createImageBitmap,
							r = !e.crossOrigin || "anonymous" === e.crossOrigin;
						return this._process = fetch(e.src, {
							mode: r ? "cors" : "no-cors"
						}).then((function(t) {
							return t.blob()
						})).then((function(r) {
							return i(r, 0, 0, e.width, e.height, {
								premultiplyAlpha: t.alphaMode === ci.UNPACK ? "premultiply" : "none"
							})
						})).then((function(e) {
							return t.destroyed ? Promise.reject() : (t.bitmap = e, t.update(), t._process = null, Promise.resolve(t))
						})), this._process
					}, e.prototype.upload = function(e, i, r) {
						if ("number" == typeof this.alphaMode && (i.alphaMode = this.alphaMode), !this.createBitmap) return t.prototype.upload.call(this, e, i, r);
						if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
						if (t.prototype.upload.call(this, e, i, r, this.bitmap), !this.preserveBitmap) {
							var n = !0,
								o = i._glTextures;
							for (var s in o) {
								var a = o[s];
								if (a !== r && a.dirtyId !== i.dirtyId) {
									n = !1;
									break
								}
							}
							n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
						}
						return !0
					}, e.prototype.dispose = function() {
						this.source.onload = null, this.source.onerror = null, t.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
					}, e.test = function(t) {
						return "string" == typeof t || t instanceof HTMLImageElement
					}, e
				}(dn),
				mn = function(t) {
					function e(e, i) {
						var r = this;
						return i = i || {}, (r = t.call(this, document.createElement("canvas")) || this)._width = 0, r._height = 0, r.svg = e, r.scale = i.scale || 1, r._overrideWidth = i.width, r._overrideHeight = i.height, r._resolve = null, r._crossorigin = i.crossorigin, r._load = null, !1 !== i.autoLoad && r.load(), r
					}
					return nn(e, t), e.prototype.load = function() {
						var t = this;
						return this._load || (this._load = new Promise((function(e) {
							if (t._resolve = function() {
									t.resize(t.source.width, t.source.height), e(t)
								}, /^\<svg/.test(t.svg.trim())) {
								if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
								t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)))
							}
							t._loadSvg()
						}))), this._load
					}, e.prototype._loadSvg = function() {
						var t = this,
							e = new Image;
						dn.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = function(i) {
							t._resolve && (e.onerror = null, t.onError.emit(i))
						}, e.onload = function() {
							if (t._resolve) {
								var i = e.width,
									r = e.height;
								if (!i || !r) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
								var n = i * t.scale,
									o = r * t.scale;
								(t._overrideWidth || t._overrideHeight) && (n = t._overrideWidth || t._overrideHeight / r * i, o = t._overrideHeight || t._overrideWidth / i * r), n = Math.round(n), o = Math.round(o);
								var s = t.source;
								s.width = n, s.height = o, s._pixiId = "canvas_" + Zi(), s.getContext("2d").drawImage(e, 0, 0, i, r, 0, 0, n, o), t._resolve(), t._resolve = null
							}
						}
					}, e.getSize = function(t) {
						var i = e.SVG_SIZE.exec(t),
							r = {};
						return i && (r[i[1]] = Math.round(parseFloat(i[3])), r[i[5]] = Math.round(parseFloat(i[7]))), r
					}, e.prototype.dispose = function() {
						t.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null
					}, e.test = function(t, i) {
						return "svg" === i || "string" == typeof t && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t) || "string" == typeof t && e.SVG_XML.test(t)
					}, e.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, e
				}(dn),
				gn = function(t) {
					function e(i, r) {
						var n = this;
						if (r = r || {}, !(i instanceof HTMLVideoElement)) {
							var o = document.createElement("video");
							o.setAttribute("preload", "auto"), o.setAttribute("webkit-playsinline", ""), o.setAttribute("playsinline", ""), "string" == typeof i && (i = [i]);
							var s = i[0].src || i[0];
							dn.crossOrigin(o, s, r.crossorigin);
							for (var a = 0; a < i.length; ++a) {
								var h = document.createElement("source"),
									u = i[a],
									l = u.src,
									c = u.mime,
									d = (l = l || i[a]).split("?").shift().toLowerCase(),
									f = d.substr(d.lastIndexOf(".") + 1);
								c = c || e.MIME_TYPES[f] || "video/" + f, h.src = l, h.type = c, o.appendChild(h)
							}
							i = o
						}
						return (n = t.call(this, i) || this).noSubImage = !0, n._autoUpdate = !0, n._isConnectedToTicker = !1, n._updateFPS = r.updateFPS || 0, n._msToNextUpdate = 0, n.autoPlay = !1 !== r.autoPlay, n._load = null, n._resolve = null, n._onCanPlay = n._onCanPlay.bind(n), n._onError = n._onError.bind(n), !1 !== r.autoLoad && n.load(), n
					}
					return nn(e, t), e.prototype.update = function(e) {
						if (!this.destroyed) {
							var i = jr.shared.elapsedMS * this.source.playbackRate;
							this._msToNextUpdate = Math.floor(this._msToNextUpdate - i), (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
						}
					}, e.prototype.load = function() {
						var t = this;
						if (this._load) return this._load;
						var e = this.source;
						return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise((function(i) {
							t.valid ? i(t) : (t._resolve = i, e.load())
						})), this._load
					}, e.prototype._onError = function(t) {
						this.source.removeEventListener("error", this._onError, !0), this.onError.emit(t)
					}, e.prototype._isSourcePlaying = function() {
						var t = this.source;
						return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
					}, e.prototype._isSourceReady = function() {
						var t = this.source;
						return 3 === t.readyState || 4 === t.readyState
					}, e.prototype._onPlayStart = function() {
						this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (jr.shared.add(this.update, this), this._isConnectedToTicker = !0)
					}, e.prototype._onPlayStop = function() {
						this._isConnectedToTicker && (jr.shared.remove(this.update, this), this._isConnectedToTicker = !1)
					}, e.prototype._onCanPlay = function() {
						var t = this.source;
						t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
						var e = this.valid;
						this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
					}, e.prototype.dispose = function() {
						this._isConnectedToTicker && (jr.shared.remove(this.update, this), this._isConnectedToTicker = !1);
						var e = this.source;
						e && (e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), t.prototype.dispose.call(this)
					}, Object.defineProperty(e.prototype, "autoUpdate", {
						get: function() {
							return this._autoUpdate
						},
						set: function(t) {
							t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (jr.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (jr.shared.add(this.update, this), this._isConnectedToTicker = !0))
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "updateFPS", {
						get: function() {
							return this._updateFPS
						},
						set: function(t) {
							t !== this._updateFPS && (this._updateFPS = t)
						},
						enumerable: !1,
						configurable: !0
					}), e.test = function(t, i) {
						return self.HTMLVideoElement && t instanceof HTMLVideoElement || e.TYPES.indexOf(i) > -1
					}, e.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], e.MIME_TYPES = {
						ogv: "video/ogg",
						mov: "video/quicktime",
						m4v: "video/mp4"
					}, e
				}(dn),
				yn = function(t) {
					function e(e) {
						return t.call(this, e) || this
					}
					return nn(e, t), e.test = function(t) {
						return !!self.createImageBitmap && t instanceof ImageBitmap
					}, e
				}(dn);
			tn.push(_n, yn, fn, gn, mn, an, pn, cn);
			var vn = {
					__proto__: null,
					Resource: sn,
					BaseImageResource: dn,
					INSTALLED: tn,
					autoDetectResource: en,
					AbstractMultiResource: ln,
					ArrayResource: cn,
					BufferResource: an,
					CanvasResource: fn,
					CubeResource: pn,
					ImageResource: _n,
					SVGResource: mn,
					VideoResource: gn,
					ImageBitmapResource: yn
				},
				Tn = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return nn(e, t), e.prototype.upload = function(t, e, i) {
						var r = t.gl;
						r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ci.UNPACK);
						var n = e.realWidth,
							o = e.realHeight;
						return i.width === n && i.height === o ? r.texSubImage2D(e.target, 0, 0, 0, n, o, e.format, i.type, this.data) : (i.width = n, i.height = o, r.texImage2D(e.target, 0, i.internalFormat, n, o, 0, e.format, i.type, this.data)), !0
					}, e
				}(an),
				bn = function() {
					function t(t, e) {
						this.width = Math.round(t || 100), this.height = Math.round(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new Qr("disposeFramebuffer"), this.multisample = mi.NONE
					}
					return Object.defineProperty(t.prototype, "colorTexture", {
						get: function() {
							return this.colorTextures[0]
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.addColorTexture = function(t, e) {
						return void 0 === t && (t = 0), this.colorTextures[t] = e || new un(null, {
							scaleMode: hi.NEAREST,
							resolution: 1,
							mipmap: li.OFF,
							width: this.width,
							height: this.height
						}), this.dirtyId++, this.dirtyFormat++, this
					}, t.prototype.addDepthTexture = function(t) {
						return this.depthTexture = t || new un(new Tn(null, {
							width: this.width,
							height: this.height
						}), {
							scaleMode: hi.NEAREST,
							resolution: 1,
							width: this.width,
							height: this.height,
							mipmap: li.OFF,
							format: ni.DEPTH_COMPONENT,
							type: si.UNSIGNED_SHORT
						}), this.dirtyId++, this.dirtyFormat++, this
					}, t.prototype.enableDepth = function() {
						return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
					}, t.prototype.enableStencil = function() {
						return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
					}, t.prototype.resize = function(t, e) {
						if (t = Math.round(t), e = Math.round(e), t !== this.width || e !== this.height) {
							this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
							for (var i = 0; i < this.colorTextures.length; i++) {
								var r = this.colorTextures[i],
									n = r.resolution;
								r.setSize(t / n, e / n)
							}
							this.depthTexture && (n = this.depthTexture.resolution, this.depthTexture.setSize(t / n, e / n))
						}
					}, t.prototype.dispose = function() {
						this.disposeRunner.emit(this, !1)
					}, t.prototype.destroyDepthTexture = function() {
						this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
					}, t
				}(),
				En = function(t) {
					function e(e) {
						var i = this;
						if ("number" == typeof e) {
							var r = arguments[0],
								n = arguments[1],
								o = arguments[2],
								s = arguments[3];
							e = {
								width: r,
								height: n,
								scaleMode: o,
								resolution: s
							}
						}
						return e.width = e.width || 100, e.height = e.height || 100, e.multisample = void 0 !== e.multisample ? e.multisample : mi.NONE, (i = t.call(this, null, e) || this).mipmap = li.OFF, i.valid = !0, i.clearColor = [0, 0, 0, 0], i.framebuffer = new bn(i.realWidth, i.realHeight).addColorTexture(0, i), i.framebuffer.multisample = e.multisample, i.maskStack = [], i.filterStack = [{}], i
					}
					return nn(e, t), e.prototype.resize = function(t, e) {
						this.framebuffer.resize(t * this.resolution, e * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height)
					}, e.prototype.dispose = function() {
						this.framebuffer.dispose(), t.prototype.dispose.call(this)
					}, e.prototype.destroy = function() {
						t.prototype.destroy.call(this), this.framebuffer.destroyDepthTexture(), this.framebuffer = null
					}, e
				}(un),
				xn = function() {
					function t() {
						this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
					}
					return t.prototype.set = function(t, e, i) {
						var r = e.width,
							n = e.height;
						if (i) {
							var o = t.width / 2 / r,
								s = t.height / 2 / n,
								a = t.x / r + o,
								h = t.y / n + s;
							i = Pr.add(i, Pr.NW), this.x0 = a + o * Pr.uX(i), this.y0 = h + s * Pr.uY(i), i = Pr.add(i, 2), this.x1 = a + o * Pr.uX(i), this.y1 = h + s * Pr.uY(i), i = Pr.add(i, 2), this.x2 = a + o * Pr.uX(i), this.y2 = h + s * Pr.uY(i), i = Pr.add(i, 2), this.x3 = a + o * Pr.uX(i), this.y3 = h + s * Pr.uY(i)
						} else this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
						this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
					}, t.prototype.toString = function() {
						return "[@pixi/core:TextureUvs x0=" + this.x0 + " y0=" + this.y0 + " x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3 + "]"
					}, t
				}(),
				An = new xn,
				Sn = function(t) {
					function e(i, r, n, o, s, a) {
						var h = t.call(this) || this;
						if (h.noFrame = !1, r || (h.noFrame = !0, r = new _r(0, 0, 1, 1)), i instanceof e && (i = i.baseTexture), h.baseTexture = i, h._frame = r, h.trim = o, h.valid = !1, h._uvs = An, h.uvMatrix = null, h.orig = n || r, h._rotate = Number(s || 0), !0 === s) h._rotate = 2;
						else if (h._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
						return h.defaultAnchor = a ? new Tr(a.x, a.y) : new Tr(0, 0), h._updateID = 0, h.textureCacheIds = [], i.valid ? h.noFrame ? i.valid && h.onBaseTextureUpdated(i) : h.frame = r : i.once("loaded", h.onBaseTextureUpdated, h), h.noFrame && i.on("update", h.onBaseTextureUpdated, h), h
					}
					return nn(e, t), e.prototype.update = function() {
						this.baseTexture.resource && this.baseTexture.resource.update()
					}, e.prototype.onBaseTextureUpdated = function(t) {
						if (this.noFrame) {
							if (!this.baseTexture.valid) return;
							this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
						} else this.frame = this._frame;
						this.emit("update", this)
					}, e.prototype.destroy = function(t) {
						if (this.baseTexture) {
							if (t) {
								var i = this.baseTexture.resource;
								i && i.url && tr[i.url] && e.removeFromCache(i.url), this.baseTexture.destroy()
							}
							this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
						}
						this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null
					}, e.prototype.clone = function() {
						var t = this._frame.clone(),
							i = this._frame === this.orig ? t : this.orig.clone(),
							r = new e(this.baseTexture, !this.noFrame && t, i, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);
						return this.noFrame && (r._frame = t), r
					}, e.prototype.updateUvs = function() {
						this._uvs === An && (this._uvs = new xn), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
					}, e.from = function(t, i, r) {
						void 0 === i && (i = {}), void 0 === r && (r = yi.STRICT_TEXTURE_CACHE);
						var n = "string" == typeof t,
							o = null;
						if (n) o = t;
						else {
							if (!t._pixiId) {
								var s = i && i.pixiIdPrefix || "pixiid";
								t._pixiId = s + "_" + Zi()
							}
							o = t._pixiId
						}
						var a = tr[o];
						if (n && r && !a) throw new Error('The cacheId "' + o + '" does not exist in TextureCache.');
						return a || (i.resolution || (i.resolution = lr(t)), (a = new e(new un(t, i))).baseTexture.cacheId = o, un.addToCache(a.baseTexture, o), e.addToCache(a, o)), a
					}, e.fromURL = function(t, i) {
						var r = Object.assign({
								autoLoad: !1
							}, null == i ? void 0 : i.resourceOptions),
							n = e.from(t, Object.assign({
								resourceOptions: r
							}, i), !1),
							o = n.baseTexture.resource;
						return n.baseTexture.valid ? Promise.resolve(n) : o.load().then((function() {
							return Promise.resolve(n)
						}))
					}, e.fromBuffer = function(t, i, r, n) {
						return new e(un.fromBuffer(t, i, r, n))
					}, e.fromLoader = function(t, i, r, n) {
						var o = new un(t, Object.assign({
								scaleMode: yi.SCALE_MODE,
								resolution: lr(i)
							}, n)),
							s = o.resource;
						s instanceof _n && (s.url = i);
						var a = new e(o);
						return r || (r = i), un.addToCache(a.baseTexture, r), e.addToCache(a, r), r !== i && (un.addToCache(a.baseTexture, i), e.addToCache(a, i)), a.baseTexture.valid ? Promise.resolve(a) : new Promise((function(t) {
							a.baseTexture.once("loaded", (function() {
								return t(a)
							}))
						}))
					}, e.addToCache = function(t, e) {
						e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), tr[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), tr[e] = t)
					}, e.removeFromCache = function(t) {
						if ("string" == typeof t) {
							var e = tr[t];
							if (e) {
								var i = e.textureCacheIds.indexOf(t);
								return i > -1 && e.textureCacheIds.splice(i, 1), delete tr[t], e
							}
						} else if (t && t.textureCacheIds) {
							for (var r = 0; r < t.textureCacheIds.length; ++r) tr[t.textureCacheIds[r]] === t && delete tr[t.textureCacheIds[r]];
							return t.textureCacheIds.length = 0, t
						}
						return null
					}, Object.defineProperty(e.prototype, "resolution", {
						get: function() {
							return this.baseTexture.resolution
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "frame", {
						get: function() {
							return this._frame
						},
						set: function(t) {
							this._frame = t, this.noFrame = !1;
							var e = t.x,
								i = t.y,
								r = t.width,
								n = t.height,
								o = e + r > this.baseTexture.width,
								s = i + n > this.baseTexture.height;
							if (o || s) {
								var a = o && s ? "and" : "or",
									h = "X: " + e + " + " + r + " = " + (e + r) + " > " + this.baseTexture.width,
									u = "Y: " + i + " + " + n + " = " + (i + n) + " > " + this.baseTexture.height;
								throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + a + " " + u)
							}
							this.valid = r && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "rotate", {
						get: function() {
							return this._rotate
						},
						set: function(t) {
							this._rotate = t, this.valid && this.updateUvs()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "width", {
						get: function() {
							return this.orig.width
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "height", {
						get: function() {
							return this.orig.height
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.castToBaseTexture = function() {
						return this.baseTexture
					}, e
				}(Ti());

			function wn(t) {
				t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {}
			}
			Sn.EMPTY = new Sn(new un), wn(Sn.EMPTY), wn(Sn.EMPTY.baseTexture), Sn.WHITE = function() {
				var t = document.createElement("canvas");
				t.width = 16, t.height = 16;
				var e = t.getContext("2d");
				return e.fillStyle = "white", e.fillRect(0, 0, 16, 16), new Sn(new un(new fn(t)))
			}(), wn(Sn.WHITE), wn(Sn.WHITE.baseTexture);
			var Rn = function(t) {
					function e(e, i) {
						var r = t.call(this, e, i) || this;
						return r.valid = !0, r.filterFrame = null, r.filterPoolKey = null, r.updateUvs(), r
					}
					return nn(e, t), Object.defineProperty(e.prototype, "framebuffer", {
						get: function() {
							return this.baseTexture.framebuffer
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "multisample", {
						get: function() {
							return this.framebuffer.multisample
						},
						set: function(t) {
							this.framebuffer.multisample = t
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.resize = function(t, e, i) {
						void 0 === i && (i = !0);
						var r = this.baseTexture.resolution,
							n = Math.round(t * r) / r,
							o = Math.round(e * r) / r;
						this.valid = n > 0 && o > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = o, i && this.baseTexture.resize(n, o), this.updateUvs()
					}, e.prototype.setResolution = function(t) {
						var e = this.baseTexture;
						e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1))
					}, e.create = function(t) {
						for (var i = arguments, r = [], n = 1; n < arguments.length; n++) r[n - 1] = i[n];
						return "number" == typeof t && ($i("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated."), t = {
							width: t,
							height: r[0],
							scaleMode: r[1],
							resolution: r[2]
						}), new e(new En(t))
					}, e
				}(Sn),
				On = function() {
					function t(t) {
						this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
					}
					return t.prototype.createTexture = function(t, e, i) {
						void 0 === i && (i = mi.NONE);
						var r = new En(Object.assign({
							width: t,
							height: e,
							resolution: 1,
							multisample: i
						}, this.textureOptions));
						return new Rn(r)
					}, t.prototype.getOptimalTexture = function(t, e, i, r) {
						var n;
						void 0 === i && (i = 1), void 0 === r && (r = mi.NONE), t = Math.ceil(t * i), e = Math.ceil(e * i), this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight ? n = r > 1 ? -r : -1 : (n = ((65535 & (t = zi(t))) << 16 | 65535 & (e = zi(e))) >>> 0, r > 1 && (n += 4294967296 * r)), this.texturePool[n] || (this.texturePool[n] = []);
						var o = this.texturePool[n].pop();
						return o || (o = this.createTexture(t, e, r)), o.filterPoolKey = n, o.setResolution(i), o
					}, t.prototype.getFilterTexture = function(t, e, i) {
						var r = this.getOptimalTexture(t.width, t.height, e || t.resolution, i || mi.NONE);
						return r.filterFrame = t.filterFrame, r
					}, t.prototype.returnTexture = function(t) {
						var e = t.filterPoolKey;
						t.filterFrame = null, this.texturePool[e].push(t)
					}, t.prototype.returnFilterTexture = function(t) {
						this.returnTexture(t)
					}, t.prototype.clear = function(t) {
						if (t = !1 !== t)
							for (var e in this.texturePool) {
								var i = this.texturePool[e];
								if (i)
									for (var r = 0; r < i.length; r++) i[r].destroy(!0)
							}
						this.texturePool = {}
					}, t.prototype.setScreenSize = function(t) {
						if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
							for (var e in this.enableFullScreen = t.width > 0 && t.height > 0, this.texturePool)
								if (Number(e) < 0) {
									var i = this.texturePool[e];
									if (i)
										for (var r = 0; r < i.length; r++) i[r].destroy(!0);
									this.texturePool[e] = []
								} this._pixelsWidth = t.width, this._pixelsHeight = t.height
						}
					}, t.SCREEN_KEY = -1, t
				}(),
				In = function() {
					function t(t, e, i, r, n, o, s) {
						void 0 === e && (e = 0), void 0 === i && (i = !1), void 0 === r && (r = si.FLOAT), this.buffer = t, this.size = e, this.normalized = i, this.type = r, this.stride = n, this.start = o, this.instance = s
					}
					return t.prototype.destroy = function() {
						this.buffer = null
					}, t.from = function(e, i, r, n, o) {
						return new t(e, i, r, n, o)
					}, t
				}(),
				Pn = 0,
				Mn = function() {
					function t(t, e, i) {
						void 0 === e && (e = !0), void 0 === i && (i = !1), this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = i, this.static = e, this.id = Pn++, this.disposeRunner = new Qr("disposeBuffer")
					}
					return t.prototype.update = function(t) {
						t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++
					}, t.prototype.dispose = function() {
						this.disposeRunner.emit(this, !1)
					}, t.prototype.destroy = function() {
						this.dispose(), this.data = null
					}, Object.defineProperty(t.prototype, "index", {
						get: function() {
							return this.type === gi.ELEMENT_ARRAY_BUFFER
						},
						set: function(t) {
							this.type = t ? gi.ELEMENT_ARRAY_BUFFER : gi.ARRAY_BUFFER
						},
						enumerable: !1,
						configurable: !0
					}), t.from = function(e) {
						return e instanceof Array && (e = new Float32Array(e)), new t(e)
					}, t
				}(),
				Cn = {
					Float32Array: Float32Array,
					Uint32Array: Uint32Array,
					Int32Array: Int32Array,
					Uint8Array: Uint8Array
				},
				Dn = {
					5126: 4,
					5123: 2,
					5121: 1
				},
				Nn = 0,
				Ln = {
					Float32Array: Float32Array,
					Uint32Array: Uint32Array,
					Int32Array: Int32Array,
					Uint8Array: Uint8Array,
					Uint16Array: Uint16Array
				},
				Fn = function() {
					function t(t, e) {
						void 0 === t && (t = []), void 0 === e && (e = {}), this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = Nn++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new Qr("disposeGeometry"), this.refCount = 0
					}
					return t.prototype.addAttribute = function(t, e, i, r, n, o, s, a) {
						if (void 0 === i && (i = 0), void 0 === r && (r = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
						e instanceof Mn || (e instanceof Array && (e = new Float32Array(e)), e = new Mn(e));
						var h = t.split("|");
						if (h.length > 1) {
							for (var u = 0; u < h.length; u++) this.addAttribute(h[u], e, i, r, n);
							return this
						}
						var l = this.buffers.indexOf(e);
						return -1 === l && (this.buffers.push(e), l = this.buffers.length - 1), this.attributes[t] = new In(l, i, r, n, o, s, a), this.instanced = this.instanced || a, this
					}, t.prototype.getAttribute = function(t) {
						return this.attributes[t]
					}, t.prototype.getBuffer = function(t) {
						return this.buffers[this.getAttribute(t).buffer]
					}, t.prototype.addIndex = function(t) {
						return t instanceof Mn || (t instanceof Array && (t = new Uint16Array(t)), t = new Mn(t)), t.type = gi.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this
					}, t.prototype.getIndex = function() {
						return this.indexBuffer
					}, t.prototype.interleave = function() {
						if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
						var t, e = [],
							i = [],
							r = new Mn;
						for (t in this.attributes) {
							var n = this.attributes[t],
								o = this.buffers[n.buffer];
							e.push(o.data), i.push(n.size * Dn[n.type] / 4), n.buffer = 0
						}
						for (r.data = function(t, e) {
								for (var i = 0, r = 0, n = {}, o = 0; o < t.length; o++) r += e[o], i += t[o].length;
								var s = new ArrayBuffer(4 * i),
									a = null,
									h = 0;
								for (o = 0; o < t.length; o++) {
									var u = e[o],
										l = t[o],
										c = Xi(l);
									n[c] || (n[c] = new Cn[c](s)), a = n[c];
									for (var d = 0; d < l.length; d++) a[(d / u | 0) * r + h + d % u] = l[d];
									h += u
								}
								return new Float32Array(s)
							}(e, i), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
						return this.buffers = [r], this.indexBuffer && this.buffers.push(this.indexBuffer), this
					}, t.prototype.getSize = function() {
						for (var t in this.attributes) {
							var e = this.attributes[t];
							return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
						}
						return 0
					}, t.prototype.dispose = function() {
						this.disposeRunner.emit(this, !1)
					}, t.prototype.destroy = function() {
						this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
					}, t.prototype.clone = function() {
						for (var e = new t, i = 0; i < this.buffers.length; i++) e.buffers[i] = new Mn(this.buffers[i].data.slice(0));
						for (var i in this.attributes) {
							var r = this.attributes[i];
							e.attributes[i] = new In(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance)
						}
						return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)], e.indexBuffer.type = gi.ELEMENT_ARRAY_BUFFER), e
					}, t.merge = function(e) {
						for (var i, r = new t, n = [], o = [], s = [], a = 0; a < e.length; a++) {
							i = e[a];
							for (var h = 0; h < i.buffers.length; h++) o[h] = o[h] || 0, o[h] += i.buffers[h].data.length, s[h] = 0
						}
						for (a = 0; a < i.buffers.length; a++) n[a] = new(Ln[Xi(i.buffers[a].data)])(o[a]), r.buffers[a] = new Mn(n[a]);
						for (a = 0; a < e.length; a++)
							for (i = e[a], h = 0; h < i.buffers.length; h++) n[h].set(i.buffers[h].data, s[h]), s[h] += i.buffers[h].data.length;
						if (r.attributes = i.attributes, i.indexBuffer) {
							r.indexBuffer = r.buffers[i.buffers.indexOf(i.indexBuffer)], r.indexBuffer.type = gi.ELEMENT_ARRAY_BUFFER;
							var u = 0,
								l = 0,
								c = 0,
								d = 0;
							for (a = 0; a < i.buffers.length; a++)
								if (i.buffers[a] !== i.indexBuffer) {
									d = a;
									break
								} for (var a in i.attributes) {
								var f = i.attributes[a];
								(0 | f.buffer) === d && (l += f.size * Dn[f.type] / 4)
							}
							for (a = 0; a < e.length; a++) {
								var p = e[a].indexBuffer.data;
								for (h = 0; h < p.length; h++) r.indexBuffer.data[h + c] += u;
								u += e[a].buffers[d].data.length / l, c += p.length
							}
						}
						return r
					}, t
				}(),
				Bn = function(t) {
					function e() {
						var e = t.call(this) || this;
						return e.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]), e
					}
					return nn(e, t), e
				}(Fn),
				Un = function(t) {
					function e() {
						var e = t.call(this) || this;
						return e.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), e.vertexBuffer = new Mn(e.vertices), e.uvBuffer = new Mn(e.uvs), e.addAttribute("aVertexPosition", e.vertexBuffer).addAttribute("aTextureCoord", e.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]), e
					}
					return nn(e, t), e.prototype.map = function(t, e) {
						var i = 0,
							r = 0;
						return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + e.width / t.width, this.uvs[3] = r, this.uvs[4] = i + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = i, this.uvs[7] = r + e.height / t.height, i = e.x, r = e.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + e.width, this.vertices[3] = r, this.vertices[4] = i + e.width, this.vertices[5] = r + e.height, this.vertices[6] = i, this.vertices[7] = r + e.height, this.invalidate(), this
					}, e.prototype.invalidate = function() {
						return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
					}, e
				}(Fn),
				kn = 0,
				Gn = function() {
					function t(t, e, i) {
						this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = kn++, this.static = !!e, this.ubo = !!i, t instanceof Mn ? (this.buffer = t, this.buffer.type = gi.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new Mn(new Float32Array(1)), this.buffer.type = gi.UNIFORM_BUFFER, this.autoManage = !0))
					}
					return t.prototype.update = function() {
						this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update()
					}, t.prototype.add = function(e, i, r) {
						if (this.ubo) throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
						this.uniforms[e] = new t(i, r)
					}, t.from = function(e, i, r) {
						return new t(e, i, r)
					}, t.uboFrom = function(e, i) {
						return new t(e, null == i || i, !0)
					}, t
				}(),
				Xn = function() {
					function t() {
						this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = mi.NONE, this.sourceFrame = new _r, this.destinationFrame = new _r, this.bindingSourceFrame = new _r, this.bindingDestinationFrame = new _r, this.filters = [], this.transform = null
					}
					return t.prototype.clear = function() {
						this.target = null, this.filters = null, this.renderTexture = null
					}, t
				}(),
				Hn = [new Tr, new Tr, new Tr, new Tr],
				jn = new Er,
				zn = function() {
					function t(t) {
						this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new On, this.texturePool.setScreenSize(t.view), this.statePool = [], this.quad = new Bn, this.quadUv = new Un, this.tempRect = new _r, this.activeState = {}, this.globalUniforms = new Gn({
							outputFrame: new _r,
							inputSize: new Float32Array(4),
							inputPixel: new Float32Array(4),
							inputClamp: new Float32Array(4),
							resolution: 1,
							filterArea: new Float32Array(4),
							filterClamp: new Float32Array(4)
						}, !0), this.forceClear = !1, this.useMaxPadding = !1
					}
					return t.prototype.push = function(t, e) {
						for (var i = this.renderer, r = this.defaultFilterStack, n = this.statePool.pop() || new Xn, o = this.renderer.renderTexture, s = e[0].resolution, a = e[0].multisample, h = e[0].padding, u = e[0].autoFit, l = e[0].legacy, c = 1; c < e.length; c++) {
							var d = e[c];
							s = Math.min(s, d.resolution), a = Math.min(a, d.multisample), h = this.useMaxPadding ? Math.max(h, d.padding) : h + d.padding, u = u && d.autoFit, l = l || d.legacy
						}
						if (1 === r.length && (this.defaultFilterStack[0].renderTexture = o.current), r.push(n), n.resolution = s, n.multisample = a, n.legacy = l, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(h), u) {
							var f = this.tempRect.copyFrom(o.sourceFrame);
							i.projection.transform && this.transformAABB(jn.copyFrom(i.projection.transform).invert(), f), n.sourceFrame.fit(f)
						}
						this.roundFrame(n.sourceFrame, o.current ? o.current.resolution : i.resolution, o.sourceFrame, o.destinationFrame, i.projection.transform), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, s, a), n.filters = e, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height;
						var p = this.tempRect;
						p.x = 0, p.y = 0, p.width = n.sourceFrame.width, p.height = n.sourceFrame.height, n.renderTexture.filterFrame = n.sourceFrame, n.bindingSourceFrame.copyFrom(o.sourceFrame), n.bindingDestinationFrame.copyFrom(o.destinationFrame), n.transform = i.projection.transform, i.projection.transform = null, o.bind(n.renderTexture, n.sourceFrame, p), i.framebuffer.clear(0, 0, 0, 0)
					}, t.prototype.pop = function() {
						var t = this.defaultFilterStack,
							e = t.pop(),
							i = e.filters;
						this.activeState = e;
						var r = this.globalUniforms.uniforms;
						r.outputFrame = e.sourceFrame, r.resolution = e.resolution;
						var n = r.inputSize,
							o = r.inputPixel,
							s = r.inputClamp;
						if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = Math.round(n[0] * e.resolution), o[1] = Math.round(n[1] * e.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = .5 * o[2], s[1] = .5 * o[3], s[2] = e.sourceFrame.width * n[2] - .5 * o[2], s[3] = e.sourceFrame.height * n[3] - .5 * o[3], e.legacy) {
							var a = r.filterArea;
							a[0] = e.destinationFrame.width, a[1] = e.destinationFrame.height, a[2] = e.sourceFrame.x, a[3] = e.sourceFrame.y, r.filterClamp = r.inputClamp
						}
						this.globalUniforms.update();
						var h = t[t.length - 1];
						if (this.renderer.framebuffer.blit(), 1 === i.length) i[0].apply(this, e.renderTexture, h.renderTexture, di.BLEND, e), this.returnFilterTexture(e.renderTexture);
						else {
							var u = e.renderTexture,
								l = this.getOptimalFilterTexture(u.width, u.height, e.resolution);
							l.filterFrame = u.filterFrame;
							var c = 0;
							for (c = 0; c < i.length - 1; ++c) {
								1 === c && e.multisample > 1 && ((l = this.getOptimalFilterTexture(u.width, u.height, e.resolution)).filterFrame = u.filterFrame), i[c].apply(this, u, l, di.CLEAR, e);
								var d = u;
								u = l, l = d
							}
							i[c].apply(this, u, h.renderTexture, di.BLEND, e), c > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture), this.returnFilterTexture(u), this.returnFilterTexture(l)
						}
						e.clear(), this.statePool.push(e)
					}, t.prototype.bindAndClear = function(t, e) {
						void 0 === e && (e = di.CLEAR);
						var i = this.renderer,
							r = i.renderTexture,
							n = i.state;
						if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t && t.filterFrame) {
							var o = this.tempRect;
							o.x = 0, o.y = 0, o.width = t.filterFrame.width, o.height = t.filterFrame.height, r.bind(t, t.filterFrame, o)
						} else t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? r.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
						var s = 1 & n.stateId || this.forceClear;
						(e === di.CLEAR || e === di.BLIT && s) && this.renderer.framebuffer.clear(0, 0, 0, 0)
					}, t.prototype.applyFilter = function(t, e, i, r) {
						var n = this.renderer;
						n.state.set(t.state), this.bindAndClear(i, r), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(ri.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(ri.TRIANGLE_STRIP))
					}, t.prototype.calculateSpriteMatrix = function(t, e) {
						var i = this.activeState,
							r = i.sourceFrame,
							n = i.destinationFrame,
							o = e._texture.orig,
							s = t.set(n.width, 0, 0, n.height, r.x, r.y),
							a = e.worldTransform.copyTo(Er.TEMP_MATRIX);
						return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(e.anchor.x, e.anchor.y), s
					}, t.prototype.destroy = function() {
						this.renderer = null, this.texturePool.clear(!1)
					}, t.prototype.getOptimalFilterTexture = function(t, e, i, r) {
						return void 0 === i && (i = 1), void 0 === r && (r = mi.NONE), this.texturePool.getOptimalTexture(t, e, i, r)
					}, t.prototype.getFilterTexture = function(t, e, i) {
						if ("number" == typeof t) {
							var r = t;
							t = e, e = r
						}
						t = t || this.activeState.renderTexture;
						var n = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, i || mi.NONE);
						return n.filterFrame = t.filterFrame, n
					}, t.prototype.returnFilterTexture = function(t) {
						this.texturePool.returnTexture(t)
					}, t.prototype.emptyPool = function() {
						this.texturePool.clear(!0)
					}, t.prototype.resize = function() {
						this.texturePool.setScreenSize(this.renderer.view)
					}, t.prototype.transformAABB = function(t, e) {
						var i = Hn[0],
							r = Hn[1],
							n = Hn[2],
							o = Hn[3];
						i.set(e.left, e.top), r.set(e.left, e.bottom), n.set(e.right, e.top), o.set(e.right, e.bottom), t.apply(i, i), t.apply(r, r), t.apply(n, n), t.apply(o, o);
						var s = Math.min(i.x, r.x, n.x, o.x),
							a = Math.min(i.y, r.y, n.y, o.y),
							h = Math.max(i.x, r.x, n.x, o.x),
							u = Math.max(i.y, r.y, n.y, o.y);
						e.x = s, e.y = a, e.width = h - s, e.height = u - a
					}, t.prototype.roundFrame = function(t, e, i, r, n) {
						if (n) {
							var o = n.a,
								s = n.b,
								a = n.c,
								h = n.d;
							if ((Math.abs(s) > 1e-4 || Math.abs(a) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4)) return
						}(n = n ? jn.copyFrom(n) : jn.identity()).translate(-i.x, -i.y).scale(r.width / i.width, r.height / i.height).translate(r.x, r.y), this.transformAABB(n, t), t.ceil(e), this.transformAABB(n.invert(), t)
					}, t
				}(),
				Yn = function() {
					function t(t) {
						this.renderer = t
					}
					return t.prototype.flush = function() {}, t.prototype.destroy = function() {
						this.renderer = null
					}, t.prototype.start = function() {}, t.prototype.stop = function() {
						this.flush()
					}, t.prototype.render = function(t) {}, t
				}(),
				Vn = function() {
					function t(t) {
						this.renderer = t, this.emptyRenderer = new Yn(t), this.currentRenderer = this.emptyRenderer
					}
					return t.prototype.setObjectRenderer = function(t) {
						this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
					}, t.prototype.flush = function() {
						this.setObjectRenderer(this.emptyRenderer)
					}, t.prototype.reset = function() {
						this.setObjectRenderer(this.emptyRenderer)
					}, t.prototype.copyBoundTextures = function(t, e) {
						for (var i = this.renderer.texture.boundTextures, r = e - 1; r >= 0; --r) t[r] = i[r] || null, t[r] && (t[r]._batchLocation = r)
					}, t.prototype.boundArray = function(t, e, i, r) {
						for (var n = t.elements, o = t.ids, s = t.count, a = 0, h = 0; h < s; h++) {
							var u = n[h],
								l = u._batchLocation;
							if (l >= 0 && l < r && e[l] === u) o[h] = l;
							else
								for (; a < r;) {
									var c = e[a];
									if (!c || c._batchEnabled !== i || c._batchLocation !== a) {
										o[h] = a, u._batchLocation = a, e[a] = u;
										break
									}
									a++
								}
						}
					}, t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}(),
				Wn = 0,
				qn = function() {
					function t(t) {
						this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
							uint32Indices: !1
						}, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), t.view.addEventListener("webglcontextlost", this.handleContextLost, !1), t.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
					}
					return Object.defineProperty(t.prototype, "isLost", {
						get: function() {
							return !this.gl || this.gl.isContextLost()
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.contextChange = function(t) {
						this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = Wn++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
					}, t.prototype.initFromContext = function(t) {
						this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = Wn++, this.renderer.runners.contextChange.emit(t)
					}, t.prototype.initFromOptions = function(t) {
						var e = this.createContext(this.renderer.view, t);
						this.initFromContext(e)
					}, t.prototype.createContext = function(t, e) {
						var i;
						if (yi.PREFER_ENV >= Qe.WEBGL2 && (i = t.getContext("webgl2", e)), i) this.webGLVersion = 2;
						else if (this.webGLVersion = 1, !(i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
						return this.gl = i, this.getExtensions(), this.gl
					}, t.prototype.getExtensions = function() {
						var t = this.gl,
							e = {
								anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
								floatTextureLinear: t.getExtension("OES_texture_float_linear"),
								s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
								s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
								etc: t.getExtension("WEBGL_compressed_texture_etc"),
								etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
								pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
								atc: t.getExtension("WEBGL_compressed_texture_atc"),
								astc: t.getExtension("WEBGL_compressed_texture_astc")
							};
						1 === this.webGLVersion ? Object.assign(this.extensions, e, {
							drawBuffers: t.getExtension("WEBGL_draw_buffers"),
							depthTexture: t.getExtension("WEBGL_depth_texture"),
							loseContext: t.getExtension("WEBGL_lose_context"),
							vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
							uint32ElementIndex: t.getExtension("OES_element_index_uint"),
							floatTexture: t.getExtension("OES_texture_float"),
							floatTextureLinear: t.getExtension("OES_texture_float_linear"),
							textureHalfFloat: t.getExtension("OES_texture_half_float"),
							textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
						}) : 2 === this.webGLVersion && Object.assign(this.extensions, e, {
							colorBufferFloat: t.getExtension("EXT_color_buffer_float")
						})
					}, t.prototype.handleContextLost = function(t) {
						t.preventDefault()
					}, t.prototype.handleContextRestored = function() {
						this.renderer.runners.contextChange.emit(this.gl)
					}, t.prototype.destroy = function() {
						var t = this.renderer.view;
						this.renderer = null, t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
					}, t.prototype.postrender = function() {
						this.renderer.renderingToScreen && this.gl.flush()
					}, t.prototype.validateContext = function(t) {
						var e = t.getContextAttributes(),
							i = "WebGL2RenderingContext" in self && t instanceof self.WebGL2RenderingContext;
						i && (this.webGLVersion = 2), e.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
						var r = i || !!t.getExtension("OES_element_index_uint");
						this.supports.uint32Indices = r, r || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
					}, t
				}(),
				Kn = function(t) {
					this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = mi.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0
				},
				Zn = new _r,
				Jn = function() {
					function t(t) {
						this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new bn(10, 10), this.msaaSamples = null
					}
					return t.prototype.contextChange = function() {
						var t = this.gl = this.renderer.gl;
						if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new _r, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
							var e = this.renderer.context.extensions.drawBuffers,
								i = this.renderer.context.extensions.depthTexture;
							yi.PREFER_ENV === Qe.WEBGL_LEGACY && (e = null, i = null), e ? t.drawBuffers = function(t) {
								return e.drawBuffersWEBGL(t)
							} : (this.hasMRT = !1, t.drawBuffers = function() {}), i || (this.writeDepthTexture = !1)
						} else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
					}, t.prototype.bind = function(t, e, i) {
						void 0 === i && (i = 0);
						var r = this.gl;
						if (t) {
							var n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
							this.current !== t && (this.current = t, r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== i && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = i), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, i)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
							for (var o = 0; o < t.colorTextures.length; o++) {
								var s = t.colorTextures[o];
								this.renderer.texture.unbind(s.parentTextureArray || s)
							}
							if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e) {
								var a = e.width >> i,
									h = e.height >> i,
									u = a / e.width;
								this.setViewport(e.x * u, e.y * u, a, h)
							} else a = t.width >> i, h = t.height >> i, this.setViewport(0, 0, a, h)
						} else this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
					}, t.prototype.setViewport = function(t, e, i, r) {
						var n = this.viewport;
						t = Math.round(t), e = Math.round(e), i = Math.round(i), r = Math.round(r), n.width === i && n.height === r && n.x === t && n.y === e || (n.x = t, n.y = e, n.width = i, n.height = r, this.gl.viewport(t, e, i, r))
					}, Object.defineProperty(t.prototype, "size", {
						get: function() {
							return this.current ? {
								x: 0,
								y: 0,
								width: this.current.width,
								height: this.current.height
							} : {
								x: 0,
								y: 0,
								width: this.renderer.width,
								height: this.renderer.height
							}
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.clear = function(t, e, i, r, n) {
						void 0 === n && (n = ei.COLOR | ei.DEPTH);
						var o = this.gl;
						o.clearColor(t, e, i, r), o.clear(n)
					}, t.prototype.initFramebuffer = function(t) {
						var e = this.gl,
							i = new Kn(e.createFramebuffer());
						return i.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = i, this.managedFramebuffers.push(t), t.disposeRunner.add(this), i
					}, t.prototype.resizeFramebuffer = function(t) {
						var e = this.gl,
							i = t.glFramebuffers[this.CONTEXT_UID];
						i.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, i.msaaBuffer), e.renderbufferStorageMultisample(e.RENDERBUFFER, i.multisample, e.RGBA8, t.width, t.height)), i.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, i.stencil), i.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, i.multisample, e.DEPTH24_STENCIL8, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
						var r = t.colorTextures,
							n = r.length;
						e.drawBuffers || (n = Math.min(n, 1));
						for (var o = 0; o < n; o++) {
							var s = r[o],
								a = s.parentTextureArray || s;
							this.renderer.texture.bind(a, 0)
						}
						t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
					}, t.prototype.updateFramebuffer = function(t, e) {
						var i = this.gl,
							r = t.glFramebuffers[this.CONTEXT_UID],
							n = t.colorTextures,
							o = n.length;
						i.drawBuffers || (o = Math.min(o, 1)), r.multisample > 1 && this.canMultisampleFramebuffer(t) ? (r.msaaBuffer = r.msaaBuffer || i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, r.msaaBuffer), i.renderbufferStorageMultisample(i.RENDERBUFFER, r.multisample, i.RGBA8, t.width, t.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, r.msaaBuffer)) : r.msaaBuffer && (i.deleteRenderbuffer(r.msaaBuffer), r.msaaBuffer = null, r.blitFramebuffer && (r.blitFramebuffer.dispose(), r.blitFramebuffer = null));
						for (var s = [], a = 0; a < o; a++) {
							var h = n[a],
								u = h.parentTextureArray || h;
							this.renderer.texture.bind(u, 0), 0 === a && r.msaaBuffer || (i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + a, h.target, u._glTextures[this.CONTEXT_UID].texture, e), s.push(i.COLOR_ATTACHMENT0 + a))
						}
						if (s.length > 1 && i.drawBuffers(s), t.depthTexture && this.writeDepthTexture) {
							var l = t.depthTexture;
							this.renderer.texture.bind(l, 0), i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, e)
						}!t.stencil && !t.depth || t.depthTexture && this.writeDepthTexture ? r.stencil && (i.deleteRenderbuffer(r.stencil), r.stencil = null) : (r.stencil = r.stencil || i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, r.stencil), r.msaaBuffer ? i.renderbufferStorageMultisample(i.RENDERBUFFER, r.multisample, i.DEPTH24_STENCIL8, t.width, t.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t.width, t.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, r.stencil))
					}, t.prototype.canMultisampleFramebuffer = function(t) {
						return 1 !== this.renderer.context.webGLVersion && t.colorTextures.length <= 1 && !t.depthTexture
					}, t.prototype.detectSamples = function(t) {
						var e = this.msaaSamples,
							i = mi.NONE;
						if (t <= 1 || null === e) return i;
						for (var r = 0; r < e.length; r++)
							if (e[r] <= t) {
								i = e[r];
								break
							} return 1 === i && (i = mi.NONE), i
					}, t.prototype.blit = function(t, e, i) {
						var r = this,
							n = r.current,
							o = r.renderer,
							s = r.gl,
							a = r.CONTEXT_UID;
						if (2 === o.context.webGLVersion && n) {
							var h = n.glFramebuffers[a];
							if (h) {
								if (!t) {
									if (!h.msaaBuffer) return;
									var u = n.colorTextures[0];
									if (!u) return;
									h.blitFramebuffer || (h.blitFramebuffer = new bn(n.width, n.height), h.blitFramebuffer.addColorTexture(0, u)), (t = h.blitFramebuffer).colorTextures[0] !== u && (t.colorTextures[0] = u, t.dirtyId++, t.dirtyFormat++), t.width === n.width && t.height === n.height || (t.width = n.width, t.height = n.height, t.dirtyId++, t.dirtySize++)
								}
								e || ((e = Zn).width = n.width, e.height = n.height), i || (i = e);
								var l = e.width === i.width && e.height === i.height;
								this.bind(t), s.bindFramebuffer(s.READ_FRAMEBUFFER, h.framebuffer), s.blitFramebuffer(e.x, e.y, e.width, e.height, i.x, i.y, i.width, i.height, s.COLOR_BUFFER_BIT, l ? s.NEAREST : s.LINEAR)
							}
						}
					}, t.prototype.disposeFramebuffer = function(t, e) {
						var i = t.glFramebuffers[this.CONTEXT_UID],
							r = this.gl;
						if (i) {
							delete t.glFramebuffers[this.CONTEXT_UID];
							var n = this.managedFramebuffers.indexOf(t);
							n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (r.deleteFramebuffer(i.framebuffer), i.msaaBuffer && r.deleteRenderbuffer(i.msaaBuffer), i.stencil && r.deleteRenderbuffer(i.stencil)), i.blitFramebuffer && i.blitFramebuffer.dispose()
						}
					}, t.prototype.disposeAll = function(t) {
						var e = this.managedFramebuffers;
						this.managedFramebuffers = [];
						for (var i = 0; i < e.length; i++) this.disposeFramebuffer(e[i], t)
					}, t.prototype.forceStencil = function() {
						var t = this.current;
						if (t) {
							var e = t.glFramebuffers[this.CONTEXT_UID];
							if (e && !e.stencil) {
								t.stencil = !0;
								var i = t.width,
									r = t.height,
									n = this.gl,
									o = n.createRenderbuffer();
								n.bindRenderbuffer(n.RENDERBUFFER, o), e.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, e.multisample, n.DEPTH24_STENCIL8, i, r) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, i, r), e.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o)
							}
						}
					}, t.prototype.reset = function() {
						this.current = this.unknownFramebuffer, this.viewport = new _r
					}, t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}(),
				$n = {
					5126: 4,
					5123: 2,
					5121: 1
				},
				Qn = function() {
					function t(t) {
						this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {}
					}
					return t.prototype.contextChange = function() {
						this.disposeAll(!0);
						var t = this.gl = this.renderer.gl,
							e = this.renderer.context;
						if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== e.webGLVersion) {
							var i = this.renderer.context.extensions.vertexArrayObject;
							yi.PREFER_ENV === Qe.WEBGL_LEGACY && (i = null), i ? (t.createVertexArray = function() {
								return i.createVertexArrayOES()
							}, t.bindVertexArray = function(t) {
								return i.bindVertexArrayOES(t)
							}, t.deleteVertexArray = function(t) {
								return i.deleteVertexArrayOES(t)
							}) : (this.hasVao = !1, t.createVertexArray = function() {
								return null
							}, t.bindVertexArray = function() {
								return null
							}, t.deleteVertexArray = function() {
								return null
							})
						}
						if (2 !== e.webGLVersion) {
							var r = t.getExtension("ANGLE_instanced_arrays");
							r ? (t.vertexAttribDivisor = function(t, e) {
								return r.vertexAttribDivisorANGLE(t, e)
							}, t.drawElementsInstanced = function(t, e, i, n, o) {
								return r.drawElementsInstancedANGLE(t, e, i, n, o)
							}, t.drawArraysInstanced = function(t, e, i, n) {
								return r.drawArraysInstancedANGLE(t, e, i, n)
							}) : this.hasInstance = !1
						}
						this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex
					}, t.prototype.bind = function(t, e) {
						e = e || this.renderer.shader.shader;
						var i = this.gl,
							r = t.glVertexArrayObjects[this.CONTEXT_UID],
							n = !1;
						r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}, n = !0);
						var o = r[e.program.id] || this.initGeometryVao(t, e, n);
						this._activeGeometry = t, this._activeVao !== o && (this._activeVao = o, this.hasVao ? i.bindVertexArray(o) : this.activateVao(t, e.program)), this.updateBuffers()
					}, t.prototype.reset = function() {
						this.unbind()
					}, t.prototype.updateBuffers = function() {
						for (var t = this._activeGeometry, e = this.renderer.buffer, i = 0; i < t.buffers.length; i++) {
							var r = t.buffers[i];
							e.update(r)
						}
					}, t.prototype.checkCompatibility = function(t, e) {
						var i = t.attributes,
							r = e.attributeData;
						for (var n in r)
							if (!i[n]) throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute')
					}, t.prototype.getSignature = function(t, e) {
						var i = t.attributes,
							r = e.attributeData,
							n = ["g", t.id];
						for (var o in i) r[o] && n.push(o);
						return n.join("-")
					}, t.prototype.initGeometryVao = function(t, e, i) {
						void 0 === i && (i = !0);
						var r = this.gl,
							n = this.CONTEXT_UID,
							o = this.renderer.buffer,
							s = e.program;
						s.glPrograms[n] || this.renderer.shader.generateProgram(e), this.checkCompatibility(t, s);
						var a = this.getSignature(t, s),
							h = t.glVertexArrayObjects[this.CONTEXT_UID],
							u = h[a];
						if (u) return h[s.id] = u, u;
						var l = t.buffers,
							c = t.attributes,
							d = {},
							f = {};
						for (var p in l) d[p] = 0, f[p] = 0;
						for (var p in c) !c[p].size && s.attributeData[p] ? c[p].size = s.attributeData[p].size : c[p].size || console.warn("PIXI Geometry attribute '" + p + "' size cannot be determined (likely the bound shader does not have the attribute)"), d[c[p].buffer] += c[p].size * $n[c[p].type];
						for (var p in c) {
							var _ = c[p],
								m = _.size;
							void 0 === _.stride && (d[_.buffer] === m * $n[_.type] ? _.stride = 0 : _.stride = d[_.buffer]), void 0 === _.start && (_.start = f[_.buffer], f[_.buffer] += m * $n[_.type])
						}
						u = r.createVertexArray(), r.bindVertexArray(u);
						for (var g = 0; g < l.length; g++) {
							var y = l[g];
							o.bind(y), i && y._glBuffers[n].refCount++
						}
						return this.activateVao(t, s), this._activeVao = u, h[s.id] = u, h[a] = u, u
					}, t.prototype.disposeGeometry = function(t, e) {
						var i;
						if (this.managedGeometries[t.id]) {
							delete this.managedGeometries[t.id];
							var r = t.glVertexArrayObjects[this.CONTEXT_UID],
								n = this.gl,
								o = t.buffers,
								s = null === (i = this.renderer) || void 0 === i ? void 0 : i.buffer;
							if (t.disposeRunner.remove(this), r) {
								if (s)
									for (var a = 0; a < o.length; a++) {
										var h = o[a]._glBuffers[this.CONTEXT_UID];
										h && (h.refCount--, 0 !== h.refCount || e || s.dispose(o[a], e))
									}
								if (!e)
									for (var u in r)
										if ("g" === u[0]) {
											var l = r[u];
											this._activeVao === l && this.unbind(), n.deleteVertexArray(l)
										} delete t.glVertexArrayObjects[this.CONTEXT_UID]
							}
						}
					}, t.prototype.disposeAll = function(t) {
						for (var e = Object.keys(this.managedGeometries), i = 0; i < e.length; i++) this.disposeGeometry(this.managedGeometries[e[i]], t)
					}, t.prototype.activateVao = function(t, e) {
						var i = this.gl,
							r = this.CONTEXT_UID,
							n = this.renderer.buffer,
							o = t.buffers,
							s = t.attributes;
						t.indexBuffer && n.bind(t.indexBuffer);
						var a = null;
						for (var h in s) {
							var u = s[h],
								l = o[u.buffer],
								c = l._glBuffers[r];
							if (e.attributeData[h]) {
								a !== c && (n.bind(l), a = c);
								var d = e.attributeData[h].location;
								if (i.enableVertexAttribArray(d), i.vertexAttribPointer(d, u.size, u.type || i.FLOAT, u.normalized, u.stride, u.start), u.instance) {
									if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
									i.vertexAttribDivisor(d, 1)
								}
							}
						}
					}, t.prototype.draw = function(t, e, i, r) {
						var n = this.gl,
							o = this._activeGeometry;
						if (o.indexBuffer) {
							var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
								a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
							2 === s || 4 === s && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, a, (i || 0) * s, r || 1) : n.drawElements(t, e || o.indexBuffer.data.length, a, (i || 0) * s) : console.warn("unsupported index buffer type: uint32")
						} else o.instanced ? n.drawArraysInstanced(t, i, e || o.getSize(), r || 1) : n.drawArrays(t, i, e || o.getSize());
						return this
					}, t.prototype.unbind = function() {
						this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
					}, t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}(),
				to = function() {
					function t(t) {
						void 0 === t && (t = null), this.type = _i.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = yi.FILTER_MULTISAMPLE, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._target = null
					}
					return t.prototype.reset = function() {
						this.pooled && (this.maskObject = null, this.type = _i.NONE, this.autoDetect = !0), this._target = null
					}, t.prototype.copyCountersOrReset = function(t) {
						t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
					}, t
				}();

			function eo(t, e, i) {
				var r = t.createShader(e);
				return t.shaderSource(r, i), t.compileShader(r), r
			}

			function io(t, e) {
				var i = t.getShaderSource(e).split("\n").map((function(t, e) {
						return e + ": " + t
					})),
					r = t.getShaderInfoLog(e),
					n = r.split("\n"),
					o = {},
					s = n.map((function(t) {
						return parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))
					})).filter((function(t) {
						return !(!t || o[t] || (o[t] = !0, 0))
					})),
					a = [""];
				s.forEach((function(t) {
					i[t - 1] = "%c" + i[t - 1] + "%c", a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
				}));
				var h = i.join("\n");
				a[0] = h, console.error(r), console.groupCollapsed("click to view full shader code"), console.warn.apply(console, a), console.groupEnd()
			}

			function ro(t) {
				for (var e = new Array(t), i = 0; i < e.length; i++) e[i] = !1;
				return e
			}

			function no(t, e) {
				switch (t) {
					case "float":
					case "int":
					case "uint":
					case "sampler2D":
					case "sampler2DArray":
						return 0;
					case "vec2":
						return new Float32Array(2 * e);
					case "vec3":
						return new Float32Array(3 * e);
					case "vec4":
						return new Float32Array(4 * e);
					case "ivec2":
						return new Int32Array(2 * e);
					case "ivec3":
						return new Int32Array(3 * e);
					case "ivec4":
						return new Int32Array(4 * e);
					case "uvec2":
						return new Uint32Array(2 * e);
					case "uvec3":
						return new Uint32Array(3 * e);
					case "uvec4":
						return new Uint32Array(4 * e);
					case "bool":
						return !1;
					case "bvec2":
						return ro(2 * e);
					case "bvec3":
						return ro(3 * e);
					case "bvec4":
						return ro(4 * e);
					case "mat2":
						return new Float32Array([1, 0, 0, 1]);
					case "mat3":
						return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
					case "mat4":
						return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
				}
				return null
			}
			var oo, so = {},
				ao = so;

			function ho() {
				if (ao === so || ao && ao.isContextLost()) {
					var t = document.createElement("canvas"),
						e = void 0;
					yi.PREFER_ENV >= Qe.WEBGL2 && (e = t.getContext("webgl2", {})), e || ((e = t.getContext("webgl", {}) || t.getContext("experimental-webgl", {})) ? e.getExtension("WEBGL_draw_buffers") : e = null), ao = e
				}
				return ao
			}

			function uo(t, e, i) {
				if ("precision" !== t.substring(0, 9)) {
					var r = e;
					return e === pi.HIGH && i !== pi.HIGH && (r = pi.MEDIUM), "precision " + r + " float;\n" + t
				}
				return i !== pi.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
			}
			var lo = {
				float: 1,
				vec2: 2,
				vec3: 3,
				vec4: 4,
				int: 1,
				ivec2: 2,
				ivec3: 3,
				ivec4: 4,
				uint: 1,
				uvec2: 2,
				uvec3: 3,
				uvec4: 4,
				bool: 1,
				bvec2: 2,
				bvec3: 3,
				bvec4: 4,
				mat2: 4,
				mat3: 9,
				mat4: 16,
				sampler2D: 1
			};

			function co(t) {
				return lo[t]
			}
			var fo = null,
				po = {
					FLOAT: "float",
					FLOAT_VEC2: "vec2",
					FLOAT_VEC3: "vec3",
					FLOAT_VEC4: "vec4",
					INT: "int",
					INT_VEC2: "ivec2",
					INT_VEC3: "ivec3",
					INT_VEC4: "ivec4",
					UNSIGNED_INT: "uint",
					UNSIGNED_INT_VEC2: "uvec2",
					UNSIGNED_INT_VEC3: "uvec3",
					UNSIGNED_INT_VEC4: "uvec4",
					BOOL: "bool",
					BOOL_VEC2: "bvec2",
					BOOL_VEC3: "bvec3",
					BOOL_VEC4: "bvec4",
					FLOAT_MAT2: "mat2",
					FLOAT_MAT3: "mat3",
					FLOAT_MAT4: "mat4",
					SAMPLER_2D: "sampler2D",
					INT_SAMPLER_2D: "sampler2D",
					UNSIGNED_INT_SAMPLER_2D: "sampler2D",
					SAMPLER_CUBE: "samplerCube",
					INT_SAMPLER_CUBE: "samplerCube",
					UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
					SAMPLER_2D_ARRAY: "sampler2DArray",
					INT_SAMPLER_2D_ARRAY: "sampler2DArray",
					UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
				};

			function _o(t, e) {
				if (!fo) {
					var i = Object.keys(po);
					fo = {};
					for (var r = 0; r < i.length; ++r) {
						var n = i[r];
						fo[t[n]] = po[n]
					}
				}
				return fo[e]
			}
			var mo, go = [{
					test: function(t) {
						return "float" === t.type && 1 === t.size
					},
					code: function(t) {
						return '\n            if(uv["' + t + '"] !== ud["' + t + '"].value)\n            {\n                ud["' + t + '"].value = uv["' + t + '"]\n                gl.uniform1f(ud["' + t + '"].location, uv["' + t + '"])\n            }\n            '
					}
				}, {
					test: function(t) {
						return ("sampler2D" === t.type || "samplerCube" === t.type || "sampler2DArray" === t.type) && 1 === t.size && !t.isArray
					},
					code: function(t) {
						return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + t + '"], t);\n\n            if(ud["' + t + '"].value !== t)\n            {\n                ud["' + t + '"].value = t;\n                gl.uniform1i(ud["' + t + '"].location, t);\n; // eslint-disable-line max-len\n            }'
					}
				}, {
					test: function(t, e) {
						return "mat3" === t.type && 1 === t.size && void 0 !== e.a
					},
					code: function(t) {
						return '\n            gl.uniformMatrix3fv(ud["' + t + '"].location, false, uv["' + t + '"].toArray(true));\n            '
					},
					codeUbo: function(t) {
						return "\n                var " + t + "_matrix = uv." + t + ".toArray(true);\n\n                data[offset] = " + t + "_matrix[0];\n                data[offset+1] = " + t + "_matrix[1];\n                data[offset+2] = " + t + "_matrix[2];\n        \n                data[offset + 4] = " + t + "_matrix[3];\n                data[offset + 5] = " + t + "_matrix[4];\n                data[offset + 6] = " + t + "_matrix[5];\n        \n                data[offset + 8] = " + t + "_matrix[6];\n                data[offset + 9] = " + t + "_matrix[7];\n                data[offset + 10] = " + t + "_matrix[8];\n            "
					}
				}, {
					test: function(t, e) {
						return "vec2" === t.type && 1 === t.size && void 0 !== e.x
					},
					code: function(t) {
						return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + t + '"].location, v.x, v.y);\n                }'
					},
					codeUbo: function(t) {
						return "\n                v = uv." + t + ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            "
					}
				}, {
					test: function(t) {
						return "vec2" === t.type && 1 === t.size
					},
					code: function(t) {
						return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + t + '"].location, v[0], v[1]);\n                }\n            '
					}
				}, {
					test: function(t, e) {
						return "vec4" === t.type && 1 === t.size && void 0 !== e.width
					},
					code: function(t) {
						return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + t + '"].location, v.x, v.y, v.width, v.height)\n                }'
					},
					codeUbo: function(t) {
						return "\n                    v = uv." + t + ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                "
					}
				}, {
					test: function(t) {
						return "vec4" === t.type && 1 === t.size
					},
					code: function(t) {
						return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + t + '"].location, v[0], v[1], v[2], v[3])\n                }'
					}
				}],
				yo = {
					float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
					vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
					vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
					vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
					int: "gl.uniform1i(location, v)",
					ivec2: "gl.uniform2i(location, v[0], v[1])",
					ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
					ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
					uint: "gl.uniform1ui(location, v)",
					uvec2: "gl.uniform2ui(location, v[0], v[1])",
					uvec3: "gl.uniform3ui(location, v[0], v[1], v[2])",
					uvec4: "gl.uniform4ui(location, v[0], v[1], v[2], v[3])",
					bool: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1i(location, v)\n    }",
					bvec2: "gl.uniform2i(location, v[0], v[1])",
					bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
					bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
					mat2: "gl.uniformMatrix2fv(location, false, v)",
					mat3: "gl.uniformMatrix3fv(location, false, v)",
					mat4: "gl.uniformMatrix4fv(location, false, v)",
					sampler2D: "gl.uniform1i(location, v)",
					samplerCube: "gl.uniform1i(location, v)",
					sampler2DArray: "gl.uniform1i(location, v)"
				},
				vo = {
					float: "gl.uniform1fv(location, v)",
					vec2: "gl.uniform2fv(location, v)",
					vec3: "gl.uniform3fv(location, v)",
					vec4: "gl.uniform4fv(location, v)",
					mat4: "gl.uniformMatrix4fv(location, false, v)",
					mat3: "gl.uniformMatrix3fv(location, false, v)",
					mat2: "gl.uniformMatrix2fv(location, false, v)",
					int: "gl.uniform1iv(location, v)",
					ivec2: "gl.uniform2iv(location, v)",
					ivec3: "gl.uniform3iv(location, v)",
					ivec4: "gl.uniform4iv(location, v)",
					uint: "gl.uniform1uiv(location, v)",
					uvec2: "gl.uniform2uiv(location, v)",
					uvec3: "gl.uniform3uiv(location, v)",
					uvec4: "gl.uniform4uiv(location, v)",
					bool: "gl.uniform1iv(location, v)",
					bvec2: "gl.uniform2iv(location, v)",
					bvec3: "gl.uniform3iv(location, v)",
					bvec4: "gl.uniform4iv(location, v)",
					sampler2D: "gl.uniform1iv(location, v)",
					samplerCube: "gl.uniform1iv(location, v)",
					sampler2DArray: "gl.uniform1iv(location, v)"
				},
				To = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

			function bo(t) {
				for (var e = "", i = 0; i < t; ++i) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(test == " + i + ".0){}");
				return e
			}

			function Eo(t, e) {
				if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
				for (var i = e.createShader(e.FRAGMENT_SHADER);;) {
					var r = To.replace(/%forloop%/gi, bo(t));
					if (e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS)) break;
					t = t / 2 | 0
				}
				return t
			}
			var xo = 0,
				Ao = {},
				So = function() {
					function t(e, i, r) {
						void 0 === r && (r = "pixi-shader"), this.id = xo++, this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = i || t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (r = r.replace(/\s+/g, "-"), Ao[r] ? (Ao[r]++, r += "-" + Ao[r]) : Ao[r] = 1, this.vertexSrc = "#define SHADER_NAME " + r + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + r + "\n" + this.fragmentSrc, this.vertexSrc = uo(this.vertexSrc, yi.PRECISION_VERTEX, pi.HIGH), this.fragmentSrc = uo(this.fragmentSrc, yi.PRECISION_FRAGMENT, function() {
							if (!oo) {
								oo = pi.MEDIUM;
								var t = ho();
								if (t && t.getShaderPrecisionFormat) {
									var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
									oo = e.precision ? pi.HIGH : pi.MEDIUM
								}
							}
							return oo
						}())), this.glPrograms = {}, this.syncUniforms = null
					}
					return Object.defineProperty(t, "defaultVertexSrc", {
						get: function() {
							return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t, "defaultFragmentSrc", {
						get: function() {
							return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
						},
						enumerable: !1,
						configurable: !0
					}), t.from = function(e, i, r) {
						var n = e + i,
							o = Qi[n];
						return o || (Qi[n] = o = new t(e, i, r)), o
					}, t
				}(),
				wo = function() {
					function t(t, e) {
						this.uniformBindCount = 0, this.program = t, this.uniformGroup = e ? e instanceof Gn ? e : new Gn(e) : new Gn({})
					}
					return t.prototype.checkUniformExists = function(t, e) {
						if (e.uniforms[t]) return !0;
						for (var i in e.uniforms) {
							var r = e.uniforms[i];
							if (r.group && this.checkUniformExists(t, r)) return !0
						}
						return !1
					}, t.prototype.destroy = function() {
						this.uniformGroup = null
					}, Object.defineProperty(t.prototype, "uniforms", {
						get: function() {
							return this.uniformGroup.uniforms
						},
						enumerable: !1,
						configurable: !0
					}), t.from = function(e, i, r) {
						return new t(So.from(e, i), r)
					}, t
				}(),
				Ro = function() {
					function t() {
						this.data = 0, this.blendMode = ii.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0
					}
					return Object.defineProperty(t.prototype, "blend", {
						get: function() {
							return !!(1 & this.data)
						},
						set: function(t) {
							!!(1 & this.data) !== t && (this.data ^= 1)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "offsets", {
						get: function() {
							return !!(2 & this.data)
						},
						set: function(t) {
							!!(2 & this.data) !== t && (this.data ^= 2)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "culling", {
						get: function() {
							return !!(4 & this.data)
						},
						set: function(t) {
							!!(4 & this.data) !== t && (this.data ^= 4)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "depthTest", {
						get: function() {
							return !!(8 & this.data)
						},
						set: function(t) {
							!!(8 & this.data) !== t && (this.data ^= 8)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "depthMask", {
						get: function() {
							return !!(32 & this.data)
						},
						set: function(t) {
							!!(32 & this.data) !== t && (this.data ^= 32)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "clockwiseFrontFace", {
						get: function() {
							return !!(16 & this.data)
						},
						set: function(t) {
							!!(16 & this.data) !== t && (this.data ^= 16)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "blendMode", {
						get: function() {
							return this._blendMode
						},
						set: function(t) {
							this.blend = t !== ii.NONE, this._blendMode = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "polygonOffset", {
						get: function() {
							return this._polygonOffset
						},
						set: function(t) {
							this.offsets = !!t, this._polygonOffset = t
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.toString = function() {
						return "[@pixi/core:State blendMode=" + this.blendMode + " clockwiseFrontFace=" + this.clockwiseFrontFace + " culling=" + this.culling + " depthMask=" + this.depthMask + " polygonOffset=" + this.polygonOffset + "]"
					}, t.for2d = function() {
						var e = new t;
						return e.depthTest = !1, e.blend = !0, e
					}, t
				}(),
				Oo = function(t) {
					function e(i, r, n) {
						var o = this,
							s = So.from(i || e.defaultVertexSrc, r || e.defaultFragmentSrc);
						return (o = t.call(this, s, n) || this).padding = 0, o.resolution = yi.FILTER_RESOLUTION, o.multisample = yi.FILTER_MULTISAMPLE, o.enabled = !0, o.autoFit = !0, o.state = new Ro, o
					}
					return nn(e, t), e.prototype.apply = function(t, e, i, r, n) {
						t.applyFilter(this, e, i, r)
					}, Object.defineProperty(e.prototype, "blendMode", {
						get: function() {
							return this.state.blendMode
						},
						set: function(t) {
							this.state.blendMode = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "resolution", {
						get: function() {
							return this._resolution
						},
						set: function(t) {
							this._resolution = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "defaultVertexSrc", {
						get: function() {
							return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "defaultFragmentSrc", {
						get: function() {
							return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(wo),
				Io = new Er,
				Po = function() {
					function t(t, e) {
						this._texture = t, this.mapCoord = new Er, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1
					}
					return Object.defineProperty(t.prototype, "texture", {
						get: function() {
							return this._texture
						},
						set: function(t) {
							this._texture = t, this._textureID = -1
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.multiplyUvs = function(t, e) {
						void 0 === e && (e = t);
						for (var i = this.mapCoord, r = 0; r < t.length; r += 2) {
							var n = t[r],
								o = t[r + 1];
							e[r] = n * i.a + o * i.c + i.tx, e[r + 1] = n * i.b + o * i.d + i.ty
						}
						return e
					}, t.prototype.update = function(t) {
						var e = this._texture;
						if (!e || !e.valid) return !1;
						if (!t && this._textureID === e._updateID) return !1;
						this._textureID = e._updateID, this._updateID++;
						var i = e._uvs;
						this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
						var r = e.orig,
							n = e.trim;
						n && (Io.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Io));
						var o = e.baseTexture,
							s = this.uClampFrame,
							a = this.clampMargin / o.resolution,
							h = this.clampOffset;
						return s[0] = (e._frame.x + a + h) / o.width, s[1] = (e._frame.y + a + h) / o.height, s[2] = (e._frame.x + e._frame.width - a + h) / o.width, s[3] = (e._frame.y + e._frame.height - a + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate, !0
					}, t
				}(),
				Mo = function(t) {
					function e(e) {
						var i = this,
							r = new Er;
						return i = t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n") || this, e.renderable = !1, i.maskSprite = e, i.maskMatrix = r, i
					}
					return nn(e, t), e.prototype.apply = function(t, e, i, r) {
						var n = this.maskSprite,
							o = n._texture;
						o.valid && (o.uvMatrix || (o.uvMatrix = new Po(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, t.applyFilter(this, e, i, r))
					}, e
				}(Oo),
				Co = function() {
					function t(t) {
						this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
					}
					return t.prototype.setMaskStack = function(t) {
						this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t)
					}, t.prototype.push = function(t, e) {
						var i = e;
						if (!i.isMaskData) {
							var r = this.maskDataPool.pop() || new to;
							r.pooled = !0, r.maskObject = e, i = r
						}
						switch (i.autoDetect && this.detect(i), i.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), i._target = t, i.type) {
							case _i.SCISSOR:
								this.maskStack.push(i), this.renderer.scissor.push(i);
								break;
							case _i.STENCIL:
								this.maskStack.push(i), this.renderer.stencil.push(i);
								break;
							case _i.SPRITE:
								i.copyCountersOrReset(null), this.pushSpriteMask(i), this.maskStack.push(i)
						}
					}, t.prototype.pop = function(t) {
						var e = this.maskStack.pop();
						if (e && e._target === t) {
							switch (e.type) {
								case _i.SCISSOR:
									this.renderer.scissor.pop();
									break;
								case _i.STENCIL:
									this.renderer.stencil.pop(e.maskObject);
									break;
								case _i.SPRITE:
									this.popSpriteMask()
							}
							e.reset(), e.pooled && this.maskDataPool.push(e)
						}
					}, t.prototype.detect = function(t) {
						var e = t.maskObject;
						if (e.isSprite) t.type = _i.SPRITE;
						else if (t.type = _i.STENCIL, this.enableScissor && e.isFastRect && e.isFastRect()) {
							var i = e.worldTransform,
								r = Math.atan2(i.b, i.a),
								n = Math.atan2(i.d, i.c);
							r = Math.round(r * (180 / Math.PI) * 100), n = ((n = Math.round(n * (180 / Math.PI) * 100) - r) % 18e3 + 18e3) % 18e3, 0 == (r = (r % 9e3 + 9e3) % 9e3) && 9e3 === n && (t.type = _i.SCISSOR)
						}
					}, t.prototype.pushSpriteMask = function(t) {
						var e, i, r = t.maskObject,
							n = t._target,
							o = this.alphaMaskPool[this.alphaMaskIndex];
						o || (o = this.alphaMaskPool[this.alphaMaskIndex] = [new Mo(r)]);
						var s, a, h = this.renderer,
							u = h.renderTexture;
						if (u.current) {
							var l = u.current;
							s = t.resolution || l.resolution, a = null !== (e = t.multisample) && void 0 !== e ? e : l.multisample
						} else s = t.resolution || h.resolution, a = null !== (i = t.multisample) && void 0 !== i ? i : h.multisample;
						o[0].resolution = s, o[0].multisample = a, o[0].maskSprite = r;
						var c = n.filterArea;
						n.filterArea = r.getBounds(!0), h.filter.push(n, o), n.filterArea = c, this.alphaMaskIndex++
					}, t.prototype.popSpriteMask = function() {
						this.renderer.filter.pop(), this.alphaMaskIndex--
					}, t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}(),
				Do = function() {
					function t(t) {
						this.renderer = t, this.maskStack = [], this.glConst = 0
					}
					return t.prototype.getStackLength = function() {
						return this.maskStack.length
					}, t.prototype.setMaskStack = function(t) {
						var e = this.renderer.gl,
							i = this.getStackLength();
						this.maskStack = t;
						var r = this.getStackLength();
						r !== i && (0 === r ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()))
					}, t.prototype._useCurrent = function() {}, t.prototype.destroy = function() {
						this.renderer = null, this.maskStack = null
					}, t
				}(),
				No = function(t) {
					function e(e) {
						var i = t.call(this, e) || this;
						return i.glConst = WebGLRenderingContext.SCISSOR_TEST, i
					}
					return nn(e, t), e.prototype.getStackLength = function() {
						var t = this.maskStack[this.maskStack.length - 1];
						return t ? t._scissorCounter : 0
					}, e.prototype.push = function(t) {
						var e = t.maskObject;
						e.renderable = !0;
						var i = t._scissorRect,
							r = e.getBounds(!0),
							n = this.renderer.gl;
						e.renderable = !1, i ? r.fit(i) : n.enable(n.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = r, this._useCurrent()
					}, e.prototype.pop = function() {
						var t = this.renderer.gl;
						this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST)
					}, e.prototype._useCurrent = function() {
						var t = this.maskStack[this.maskStack.length - 1]._scissorRect,
							e = this.renderer.renderTexture.current,
							i = this.renderer.projection,
							r = i.transform,
							n = i.sourceFrame,
							o = i.destinationFrame,
							s = e ? e.resolution : this.renderer.resolution,
							a = o.width / n.width,
							h = o.height / n.height,
							u = ((t.x - n.x) * a + o.x) * s,
							l = ((t.y - n.y) * h + o.y) * s,
							c = t.width * a * s,
							d = t.height * h * s;
						r && (u += r.tx * s, l += r.ty * s), e || (l = this.renderer.height - d - l), u = Math.round(u), l = Math.round(l), c = Math.round(c), d = Math.round(d), this.renderer.gl.scissor(u, l, c, d)
					}, e
				}(Do),
				Lo = function(t) {
					function e(e) {
						var i = t.call(this, e) || this;
						return i.glConst = WebGLRenderingContext.STENCIL_TEST, i
					}
					return nn(e, t), e.prototype.getStackLength = function() {
						var t = this.maskStack[this.maskStack.length - 1];
						return t ? t._stencilCounter : 0
					}, e.prototype.push = function(t) {
						var e = t.maskObject,
							i = this.renderer.gl,
							r = t._stencilCounter;
						0 === r && (this.renderer.framebuffer.forceStencil(), i.enable(i.STENCIL_TEST)), t._stencilCounter++, i.colorMask(!1, !1, !1, !1), i.stencilFunc(i.EQUAL, r, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent()
					}, e.prototype.pop = function(t) {
						var e = this.renderer.gl;
						0 === this.getStackLength() ? (e.disable(e.STENCIL_TEST), e.clearStencil(0), e.clear(e.STENCIL_BUFFER_BIT)) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent())
					}, e.prototype._useCurrent = function() {
						var t = this.renderer.gl;
						t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
					}, e
				}(Do),
				Fo = function() {
					function t(t) {
						this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new Er, this.transform = null
					}
					return t.prototype.update = function(t, e, i, r) {
						this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, i, r), this.transform && this.projectionMatrix.append(this.transform);
						var n = this.renderer;
						n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
					}, t.prototype.calculateProjection = function(t, e, i, r) {
						var n = this.projectionMatrix,
							o = r ? -1 : 1;
						n.identity(), n.a = 1 / e.width * 2, n.d = o * (1 / e.height * 2), n.tx = -1 - e.x * n.a, n.ty = -o - e.y * n.d
					}, t.prototype.setTransform = function(t) {}, t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}(),
				Bo = new _r,
				Uo = new _r,
				ko = function() {
					function t(t) {
						this.renderer = t, this.clearColor = t._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new _r, this.destinationFrame = new _r, this.viewportFrame = new _r
					}
					return t.prototype.bind = function(t, e, i) {
						void 0 === t && (t = null);
						var r, n, o, s = this.renderer;
						this.current = t, t ? (o = (r = t.baseTexture).resolution, e || (Bo.width = t.frame.width, Bo.height = t.frame.height, e = Bo), i || (Uo.x = t.frame.x, Uo.y = t.frame.y, Uo.width = e.width, Uo.height = e.height, i = Uo), n = r.framebuffer) : (o = s.resolution, e || (Bo.width = s.screen.width, Bo.height = s.screen.height, e = Bo), i || ((i = Bo).width = e.width, i.height = e.height));
						var a = this.viewportFrame;
						a.x = i.x * o, a.y = i.y * o, a.width = i.width * o, a.height = i.height * o, t || (a.y = s.view.height - (a.y + a.height)), a.ceil(), this.renderer.framebuffer.bind(n, a), this.renderer.projection.update(i, e, o, !n), t ? this.renderer.mask.setMaskStack(r.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(i)
					}, t.prototype.clear = function(t, e) {
						t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor;
						var i = this.destinationFrame,
							r = this.current ? this.current.baseTexture : this.renderer.screen,
							n = i.width !== r.width || i.height !== r.height;
						if (n) {
							var o = this.viewportFrame,
								s = o.x,
								a = o.y,
								h = o.width,
								u = o.height;
							s = Math.round(s), a = Math.round(a), h = Math.round(h), u = Math.round(u), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(s, a, h, u)
						}
						this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e), n && this.renderer.scissor.pop()
					}, t.prototype.resize = function() {
						this.bind(null)
					}, t.prototype.reset = function() {
						this.bind(null)
					}, t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}();

			function Go(t, e, i, r, n) {
				i.buffer.update(n)
			}
			var Xo = {
					float: "\n        data[offset] = v;\n    ",
					vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
					vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
					vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
					mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
					mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
					mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
				},
				Ho = {
					float: 4,
					vec2: 8,
					vec3: 12,
					vec4: 16,
					int: 4,
					ivec2: 8,
					ivec3: 12,
					ivec4: 16,
					uint: 4,
					uvec2: 8,
					uvec3: 12,
					uvec4: 16,
					bool: 4,
					bvec2: 8,
					bvec3: 12,
					bvec4: 16,
					mat2: 32,
					mat3: 48,
					mat4: 64
				};

			function jo(t) {
				for (var e = t.map((function(t) {
						return {
							data: t,
							offset: 0,
							dataLen: 0,
							dirty: 0
						}
					})), i = 0, r = 0, n = 0, o = 0; o < e.length; o++) {
					var s = e[o];
					if (i = Ho[s.data.type], s.data.size > 1 && (i = Math.max(i, 16) * s.data.size), s.dataLen = i, r % i != 0 && r < 16) {
						var a = r % i % 16;
						r += a, n += a
					}
					r + i > 16 ? (n = 16 * Math.ceil(n / 16), s.offset = n, n += i, r = i) : (s.offset = n, r += i, n += i)
				}
				return {
					uboElements: e,
					size: n = 16 * Math.ceil(n / 16)
				}
			}

			function zo(t, e) {
				var i = [];
				for (var r in t) e[r] && i.push(e[r]);
				return i.sort((function(t, e) {
					return t.index - e.index
				})), i
			}

			function Yo(t, e) {
				if (!t.autoManage) return {
					size: 0,
					syncFunc: Go
				};
				for (var i = jo(zo(t.uniforms, e)), r = i.uboElements, n = i.size, o = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "], s = 0; s < r.length; s++) {
					for (var a = r[s], h = t.uniforms[a.data.name], u = a.data.name, l = !1, c = 0; c < go.length; c++) {
						var d = go[c];
						if (d.codeUbo && d.test(a.data, h)) {
							o.push("offset = " + a.offset / 4 + ";", go[c].codeUbo(a.data.name, h)), l = !0;
							break
						}
					}
					if (!l)
						if (a.data.size > 1) {
							var f = co(a.data.type),
								p = Math.max(Ho[a.data.type] / 16, 1),
								_ = f / p,
								m = (4 - _ % 4) % 4;
							o.push("\n                cv = ud." + u + ".value;\n                v = uv." + u + ";\n                offset = " + a.offset / 4 + ";\n\n                t = 0;\n\n                for(var i=0; i < " + a.data.size * p + "; i++)\n                {\n                    for(var j = 0; j < " + _ + "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += " + m + ";\n                }\n\n                ")
						} else {
							var g = Xo[a.data.type];
							o.push("\n                cv = ud." + u + ".value;\n                v = uv." + u + ";\n                offset = " + a.offset / 4 + ";\n                " + g + ";\n                ")
						}
				}
				return o.push("\n       renderer.buffer.update(buffer);\n    "), {
					size: n,
					syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", o.join("\n"))
				}
			}
			var Vo = function() {},
				Wo = function() {
					function t(t, e) {
						this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {}
					}
					return t.prototype.destroy = function() {
						this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null
					}, t
				}();

			function qo(t, e) {
				var i = eo(t, t.VERTEX_SHADER, e.vertexSrc),
					r = eo(t, t.FRAGMENT_SHADER, e.fragmentSrc),
					n = t.createProgram();
				t.attachShader(n, i), t.attachShader(n, r), t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || function(t, e, i, r) {
					t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(i, t.COMPILE_STATUS) || io(t, i), t.getShaderParameter(r, t.COMPILE_STATUS) || io(t, r), console.error("PixiJS Error: Could not initialize shader."), "" !== t.getProgramInfoLog(e) && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(e)))
				}(t, n, i, r), e.attributeData = function(t, e) {
					for (var i = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), n = 0; n < r; n++) {
						var o = e.getActiveAttrib(t, n);
						if (0 !== o.name.indexOf("gl_")) {
							var s = _o(e, o.type),
								a = {
									type: s,
									name: o.name,
									size: co(s),
									location: n
								};
							i[o.name] = a
						}
					}
					return i
				}(n, t), e.uniformData = function(t, e) {
					for (var i = {}, r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < r; n++) {
						var o = e.getActiveUniform(t, n),
							s = o.name.replace(/\[.*?\]$/, ""),
							a = !!o.name.match(/\[.*?\]$/),
							h = _o(e, o.type);
						i[s] = {
							name: s,
							index: n,
							type: h,
							size: o.size,
							isArray: a,
							value: no(h, o.size)
						}
					}
					return i
				}(n, t);
				var o = Object.keys(e.attributeData);
				o.sort((function(t, e) {
					return t > e ? 1 : -1
				}));
				for (var s = 0; s < o.length; s++) e.attributeData[o[s]].location = s, t.bindAttribLocation(n, s, o[s]);
				t.linkProgram(n), t.deleteShader(i), t.deleteShader(r);
				var a = {};
				for (var s in e.uniformData) {
					var h = e.uniformData[s];
					a[s] = {
						location: t.getUniformLocation(n, s),
						value: no(h.type, h.size)
					}
				}
				return new Wo(n, a)
			}
			var Ko = 0,
				Zo = {
					textureCount: 0,
					uboCount: 0
				},
				Jo = function() {
					function t(t) {
						this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = Ko++
					}
					return t.prototype.systemCheck = function() {
						if (! function() {
								if ("boolean" == typeof mo) return mo;
								try {
									var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
									mo = !0 === t({
										a: "b"
									}, "a", "b")
								} catch (t) {
									mo = !1
								}
								return mo
							}()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
					}, t.prototype.contextChange = function(t) {
						this.gl = t, this.reset()
					}, t.prototype.bind = function(t, e) {
						t.uniforms.globals = this.renderer.globalUniforms;
						var i = t.program,
							r = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
						return this.shader = t, this.program !== i && (this.program = i, this.gl.useProgram(r.program)), e || (Zo.textureCount = 0, Zo.uboCount = 0, this.syncUniformGroup(t.uniformGroup, Zo)), r
					}, t.prototype.setUniforms = function(t) {
						var e = this.shader.program,
							i = e.glPrograms[this.renderer.CONTEXT_UID];
						e.syncUniforms(i.uniformData, t, this.renderer)
					}, t.prototype.syncUniformGroup = function(t, e) {
						var i = this.getGlProgram();
						t.static && t.dirtyId === i.uniformDirtyGroups[t.id] || (i.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, i, e))
					}, t.prototype.syncUniforms = function(t, e, i) {
						(t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, i)
					}, t.prototype.createSyncGroups = function(t) {
						var e = this.getSignature(t, this.shader.program.uniformData, "u");
						return this.cache[e] || (this.cache[e] = function(t, e) {
							var i = ["\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    "];
							for (var r in t.uniforms) {
								var n = e[r];
								if (n) {
									for (var o = t.uniforms[r], s = !1, a = 0; a < go.length; a++)
										if (go[a].test(n, o)) {
											i.push(go[a].code(r, o)), s = !0;
											break
										} if (!s) {
										var h = (1 === n.size ? yo : vo)[n.type].replace("location", 'ud["' + r + '"].location');
										i.push('\n            cv = ud["' + r + '"].value;\n            v = uv["' + r + '"];\n            ' + h + ";")
									}
								} else t.uniforms[r].group && (t.uniforms[r].ubo ? i.push("\n                        renderer.shader.syncUniformBufferGroup(uv." + r + ", '" + r + "');\n                    ") : i.push("\n                        renderer.shader.syncUniformGroup(uv." + r + ", syncData);\n                    "))
							}
							return new Function("ud", "uv", "renderer", "syncData", i.join("\n"))
						}(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
					}, t.prototype.syncUniformBufferGroup = function(t, e) {
						var i = this.getGlProgram();
						if (!t.static || 0 !== t.dirtyId || !i.uniformGroups[t.id]) {
							t.dirtyId = 0;
							var r = i.uniformGroups[t.id] || this.createSyncBufferGroup(t, i, e);
							t.buffer.update(), r(i.uniformData, t.uniforms, this.renderer, Zo, t.buffer)
						}
						this.renderer.buffer.bindBufferBase(t.buffer, i.uniformBufferBindings[e])
					}, t.prototype.createSyncBufferGroup = function(t, e, i) {
						var r = this.renderer.gl;
						this.renderer.buffer.bind(t.buffer);
						var n = this.gl.getUniformBlockIndex(e.program, i);
						e.uniformBufferBindings[i] = this.shader.uniformBindCount, r.uniformBlockBinding(e.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
						var o = this.getSignature(t, this.shader.program.uniformData, "ubo"),
							s = this._uboCache[o];
						if (s || (s = this._uboCache[o] = Yo(t, this.shader.program.uniformData)), t.autoManage) {
							var a = new Float32Array(s.size / 4);
							t.buffer.update(a)
						}
						return e.uniformGroups[t.id] = s.syncFunc, e.uniformGroups[t.id]
					}, t.prototype.getSignature = function(t, e, i) {
						var r = t.uniforms,
							n = [i + "-"];
						for (var o in r) n.push(o), e[o] && n.push(e[o].type);
						return n.join("-")
					}, t.prototype.getGlProgram = function() {
						return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
					}, t.prototype.generateProgram = function(t) {
						var e = this.gl,
							i = t.program,
							r = qo(e, i);
						return i.glPrograms[this.renderer.CONTEXT_UID] = r, r
					}, t.prototype.reset = function() {
						this.program = null, this.shader = null
					}, t.prototype.destroy = function() {
						this.renderer = null, this.destroyed = !0
					}, t
				}(),
				$o = function() {
					function t() {
						this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = ii.NONE, this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, this.map[5] = this.setDepthMask, this.checks = [], this.defaultState = new Ro, this.defaultState.blend = !0
					}
					return t.prototype.contextChange = function(t) {
						this.gl = t, this.blendModes = function(t, e) {
							return void 0 === e && (e = []), e[ii.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.ADD] = [t.ONE, t.ONE], e[ii.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.NONE] = [0, 0], e[ii.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e[ii.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[ii.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[ii.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[ii.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[ii.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[ii.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[ii.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[ii.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[ii.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[ii.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e
						}(t), this.set(this.defaultState), this.reset()
					}, t.prototype.set = function(t) {
						if (t = t || this.defaultState, this.stateId !== t.data) {
							for (var e = this.stateId ^ t.data, i = 0; e;) 1 & e && this.map[i].call(this, !!(t.data & 1 << i)), e >>= 1, i++;
							this.stateId = t.data
						}
						for (i = 0; i < this.checks.length; i++) this.checks[i](this, t)
					}, t.prototype.forceState = function(t) {
						t = t || this.defaultState;
						for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
						for (e = 0; e < this.checks.length; e++) this.checks[e](this, t);
						this.stateId = t.data
					}, t.prototype.setBlend = function(e) {
						this.updateCheck(t.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND)
					}, t.prototype.setOffset = function(e) {
						this.updateCheck(t.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
					}, t.prototype.setDepthTest = function(t) {
						this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
					}, t.prototype.setDepthMask = function(t) {
						this.gl.depthMask(t)
					}, t.prototype.setCullFace = function(t) {
						this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
					}, t.prototype.setFrontFace = function(t) {
						this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
					}, t.prototype.setBlendMode = function(t) {
						if (t !== this.blendMode) {
							this.blendMode = t;
							var e = this.blendModes[t],
								i = this.gl;
							2 === e.length ? i.blendFunc(e[0], e[1]) : i.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, i.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD))
						}
					}, t.prototype.setPolygonOffset = function(t, e) {
						this.gl.polygonOffset(t, e)
					}, t.prototype.reset = function() {
						this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
					}, t.prototype.updateCheck = function(t, e) {
						var i = this.checks.indexOf(t);
						e && -1 === i ? this.checks.push(t) : e || -1 === i || this.checks.splice(i, 1)
					}, t.checkBlendMode = function(t, e) {
						t.setBlendMode(e.blendMode)
					}, t.checkPolygonOffset = function(t, e) {
						t.setPolygonOffset(1, e.polygonOffset)
					}, t.prototype.destroy = function() {
						this.gl = null
					}, t
				}(),
				Qo = function() {
					function t(t) {
						this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = yi.GC_MAX_IDLE, this.checkCountMax = yi.GC_MAX_CHECK_COUNT, this.mode = yi.GC_MODE
					}
					return t.prototype.postrender = function() {
						this.renderer.renderingToScreen && (this.count++, this.mode !== fi.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
					}, t.prototype.run = function() {
						for (var t = this.renderer.texture, e = t.managedTextures, i = !1, r = 0; r < e.length; r++) {
							var n = e[r];
							!n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[r] = null, i = !0)
						}
						if (i) {
							var o = 0;
							for (r = 0; r < e.length; r++) null !== e[r] && (e[o++] = e[r]);
							e.length = o
						}
					}, t.prototype.unload = function(t) {
						var e = this.renderer.texture,
							i = t._texture;
						i && !i.framebuffer && e.destroyTexture(i);
						for (var r = t.children.length - 1; r >= 0; r--) this.unload(t.children[r])
					}, t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}(),
				ts = function(t) {
					this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = si.UNSIGNED_BYTE, this.internalFormat = ni.RGBA, this.samplerType = 0
				},
				es = function() {
					function t(t) {
						this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new un, this.hasIntegerTextures = !1
					}
					return t.prototype.contextChange = function() {
						var t = this.gl = this.renderer.gl;
						this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = function(t) {
							var e, i, r, n, o, s, a, h, u, l, c, d, f, p, _, m, g, y, v, T, b, E, x;
							return "WebGL2RenderingContext" in self && t instanceof self.WebGL2RenderingContext ? ((e = {})[si.UNSIGNED_BYTE] = ((i = {})[ni.RGBA] = t.RGBA8, i[ni.RGB] = t.RGB8, i[ni.RG] = t.RG8, i[ni.RED] = t.R8, i[ni.RGBA_INTEGER] = t.RGBA8UI, i[ni.RGB_INTEGER] = t.RGB8UI, i[ni.RG_INTEGER] = t.RG8UI, i[ni.RED_INTEGER] = t.R8UI, i[ni.ALPHA] = t.ALPHA, i[ni.LUMINANCE] = t.LUMINANCE, i[ni.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA, i), e[si.BYTE] = ((r = {})[ni.RGBA] = t.RGBA8_SNORM, r[ni.RGB] = t.RGB8_SNORM, r[ni.RG] = t.RG8_SNORM, r[ni.RED] = t.R8_SNORM, r[ni.RGBA_INTEGER] = t.RGBA8I, r[ni.RGB_INTEGER] = t.RGB8I, r[ni.RG_INTEGER] = t.RG8I, r[ni.RED_INTEGER] = t.R8I, r), e[si.UNSIGNED_SHORT] = ((n = {})[ni.RGBA_INTEGER] = t.RGBA16UI, n[ni.RGB_INTEGER] = t.RGB16UI, n[ni.RG_INTEGER] = t.RG16UI, n[ni.RED_INTEGER] = t.R16UI, n[ni.DEPTH_COMPONENT] = t.DEPTH_COMPONENT16, n), e[si.SHORT] = ((o = {})[ni.RGBA_INTEGER] = t.RGBA16I, o[ni.RGB_INTEGER] = t.RGB16I, o[ni.RG_INTEGER] = t.RG16I, o[ni.RED_INTEGER] = t.R16I, o), e[si.UNSIGNED_INT] = ((s = {})[ni.RGBA_INTEGER] = t.RGBA32UI, s[ni.RGB_INTEGER] = t.RGB32UI, s[ni.RG_INTEGER] = t.RG32UI, s[ni.RED_INTEGER] = t.R32UI, s[ni.DEPTH_COMPONENT] = t.DEPTH_COMPONENT24, s), e[si.INT] = ((a = {})[ni.RGBA_INTEGER] = t.RGBA32I, a[ni.RGB_INTEGER] = t.RGB32I, a[ni.RG_INTEGER] = t.RG32I, a[ni.RED_INTEGER] = t.R32I, a), e[si.FLOAT] = ((h = {})[ni.RGBA] = t.RGBA32F, h[ni.RGB] = t.RGB32F, h[ni.RG] = t.RG32F, h[ni.RED] = t.R32F, h[ni.DEPTH_COMPONENT] = t.DEPTH_COMPONENT32F, h), e[si.HALF_FLOAT] = ((u = {})[ni.RGBA] = t.RGBA16F, u[ni.RGB] = t.RGB16F, u[ni.RG] = t.RG16F, u[ni.RED] = t.R16F, u), e[si.UNSIGNED_SHORT_5_6_5] = ((l = {})[ni.RGB] = t.RGB565, l), e[si.UNSIGNED_SHORT_4_4_4_4] = ((c = {})[ni.RGBA] = t.RGBA4, c), e[si.UNSIGNED_SHORT_5_5_5_1] = ((d = {})[ni.RGBA] = t.RGB5_A1, d), e[si.UNSIGNED_INT_2_10_10_10_REV] = ((f = {})[ni.RGBA] = t.RGB10_A2, f[ni.RGBA_INTEGER] = t.RGB10_A2UI, f), e[si.UNSIGNED_INT_10F_11F_11F_REV] = ((p = {})[ni.RGB] = t.R11F_G11F_B10F, p), e[si.UNSIGNED_INT_5_9_9_9_REV] = ((_ = {})[ni.RGB] = t.RGB9_E5, _), e[si.UNSIGNED_INT_24_8] = ((m = {})[ni.DEPTH_STENCIL] = t.DEPTH24_STENCIL8, m), e[si.FLOAT_32_UNSIGNED_INT_24_8_REV] = ((g = {})[ni.DEPTH_STENCIL] = t.DEPTH32F_STENCIL8, g), x = e) : ((y = {})[si.UNSIGNED_BYTE] = ((v = {})[ni.RGBA] = t.RGBA, v[ni.RGB] = t.RGB, v[ni.ALPHA] = t.ALPHA, v[ni.LUMINANCE] = t.LUMINANCE, v[ni.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA, v), y[si.UNSIGNED_SHORT_5_6_5] = ((T = {})[ni.RGB] = t.RGB, T), y[si.UNSIGNED_SHORT_4_4_4_4] = ((b = {})[ni.RGBA] = t.RGBA, b), y[si.UNSIGNED_SHORT_5_5_5_1] = ((E = {})[ni.RGBA] = t.RGBA, E), x = y), x
						}(t);
						var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
						this.boundTextures.length = e;
						for (var i = 0; i < e; i++) this.boundTextures[i] = null;
						this.emptyTextures = {};
						var r = new ts(t.createTexture());
						for (t.bindTexture(t.TEXTURE_2D, r.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = r, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new ts(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture), i = 0; i < 6; i++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
						for (t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR), i = 0; i < this.boundTextures.length; i++) this.bind(null, i)
					}, t.prototype.bind = function(t, e) {
						void 0 === e && (e = 0);
						var i = this.gl;
						if ((t = null == t ? void 0 : t.castToBaseTexture()) && t.valid && !t.parentTextureArray) {
							t.touched = this.renderer.textureGC.count;
							var r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
							this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), i.bindTexture(t.target, r.texture)), r.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), this.updateTexture(t)), this.boundTextures[e] = t
						} else this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), i.bindTexture(i.TEXTURE_2D, this.emptyTextures[i.TEXTURE_2D].texture), this.boundTextures[e] = null
					}, t.prototype.reset = function() {
						this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
						for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
					}, t.prototype.unbind = function(t) {
						var e = this.gl,
							i = this.boundTextures;
						if (this._unknownBoundTextures) {
							this._unknownBoundTextures = !1;
							for (var r = 0; r < i.length; r++) i[r] === this.unknownTexture && this.bind(null, r)
						}
						for (r = 0; r < i.length; r++) i[r] === t && (this.currentLocation !== r && (e.activeTexture(e.TEXTURE0 + r), this.currentLocation = r), e.bindTexture(t.target, this.emptyTextures[t.target].texture), i[r] = null)
					}, t.prototype.ensureSamplerType = function(t) {
						var e = this,
							i = e.boundTextures,
							r = e.hasIntegerTextures,
							n = e.CONTEXT_UID;
						if (r)
							for (var o = t - 1; o >= 0; --o) {
								var s = i[o];
								s && s._glTextures[n].samplerType !== ai.FLOAT && this.renderer.texture.unbind(s)
							}
					}, t.prototype.initTexture = function(t) {
						var e = new ts(this.gl.createTexture());
						return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
					}, t.prototype.initTextureType = function(t, e) {
						var i, r;
						e.internalFormat = null !== (r = null === (i = this.internalFormats[t.type]) || void 0 === i ? void 0 : i[t.format]) && void 0 !== r ? r : t.format, 2 === this.webGLVersion && t.type === si.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type
					}, t.prototype.updateTexture = function(t) {
						var e = t._glTextures[this.CONTEXT_UID];
						if (e) {
							var i = this.renderer;
							if (this.initTextureType(t, e), t.resource && t.resource.upload(i, t, e)) e.samplerType !== ai.FLOAT && (this.hasIntegerTextures = !0);
							else {
								var r = t.realWidth,
									n = t.realHeight,
									o = i.gl;
								(e.width !== r || e.height !== n || e.dirtyId < 0) && (e.width = r, e.height = n, o.texImage2D(t.target, 0, e.internalFormat, r, n, 0, t.format, e.type, null))
							}
							t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId
						}
					}, t.prototype.destroyTexture = function(t, e) {
						var i = this.gl;
						if ((t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(t), i.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
							var r = this.managedTextures.indexOf(t); - 1 !== r && Wi(this.managedTextures, r, 1)
						}
					}, t.prototype.updateTextureStyle = function(t) {
						var e = t._glTextures[this.CONTEXT_UID];
						e && (t.mipmap !== li.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = t.mipmap >= 1 : e.mipmap = !1, 2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = ui.CLAMP, t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId)
					}, t.prototype.setStyle = function(t, e) {
						var i = this.gl;
						if (e.mipmap && t.mipmap !== li.ON_MANUAL && i.generateMipmap(t.target), i.texParameteri(t.target, i.TEXTURE_WRAP_S, e.wrapMode), i.texParameteri(t.target, i.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
							i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode === hi.LINEAR ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST);
							var r = this.renderer.context.extensions.anisotropicFiltering;
							if (r && t.anisotropicLevel > 0 && t.scaleMode === hi.LINEAR) {
								var n = Math.min(t.anisotropicLevel, i.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
								i.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n)
							}
						} else i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode === hi.LINEAR ? i.LINEAR : i.NEAREST);
						i.texParameteri(t.target, i.TEXTURE_MAG_FILTER, t.scaleMode === hi.LINEAR ? i.LINEAR : i.NEAREST)
					}, t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}(),
				is = {
					__proto__: null,
					FilterSystem: zn,
					BatchSystem: Vn,
					ContextSystem: qn,
					FramebufferSystem: Jn,
					GeometrySystem: Qn,
					MaskSystem: Co,
					ScissorSystem: No,
					StencilSystem: Lo,
					ProjectionSystem: Fo,
					RenderTextureSystem: ko,
					ShaderSystem: Jo,
					StateSystem: $o,
					TextureGCSystem: Qo,
					TextureSystem: es
				},
				rs = new Er,
				ns = function(t) {
					function e(e, i) {
						void 0 === e && (e = ti.UNKNOWN);
						var r = t.call(this) || this;
						return i = Object.assign({}, yi.RENDER_OPTIONS, i), r.options = i, r.type = e, r.screen = new _r(0, 0, i.width, i.height), r.view = i.view || document.createElement("canvas"), r.resolution = i.resolution || yi.RESOLUTION, r.useContextAlpha = i.useContextAlpha, r.autoDensity = !!i.autoDensity, r.preserveDrawingBuffer = i.preserveDrawingBuffer, r.clearBeforeRender = i.clearBeforeRender, r._backgroundColor = 0, r._backgroundColorRgba = [0, 0, 0, 1], r._backgroundColorString = "#000000", r.backgroundColor = i.backgroundColor || r._backgroundColor, r.backgroundAlpha = i.backgroundAlpha, void 0 !== i.transparent && ($i("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead."), r.useContextAlpha = i.transparent, r.backgroundAlpha = i.transparent ? 0 : 1), r._lastObjectRendered = null, r.plugins = {}, r
					}
					return nn(e, t), e.prototype.initPlugins = function(t) {
						for (var e in t) this.plugins[e] = new t[e](this)
					}, Object.defineProperty(e.prototype, "width", {
						get: function() {
							return this.view.width
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "height", {
						get: function() {
							return this.view.height
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.resize = function(t, e) {
						this.view.width = Math.round(t * this.resolution), this.view.height = Math.round(e * this.resolution);
						var i = this.view.width / this.resolution,
							r = this.view.height / this.resolution;
						this.screen.width = i, this.screen.height = r, this.autoDensity && (this.view.style.width = i + "px", this.view.style.height = r + "px"), this.emit("resize", i, r)
					}, e.prototype.generateTexture = function(t, e, i, r) {
						void 0 === e && (e = {}), "number" == typeof e && ($i("6.1.0", "generateTexture options (scaleMode, resolution, region) are now object options."), e = {
							scaleMode: e,
							resolution: i,
							region: r
						});
						var n = e.region,
							o = function(t, e) {
								var i = {};
								for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (i[r] = t[r]);
								if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
									var n = 0;
									for (r = Object.getOwnPropertySymbols(t); n < r.length; n++) e.indexOf(r[n]) < 0 && (i[r[n]] = t[r[n]])
								}
								return i
							}(e, ["region"]);
						0 === (r = n || t.getLocalBounds(null, !0)).width && (r.width = 1), 0 === r.height && (r.height = 1);
						var s = Rn.create(on({
							width: r.width,
							height: r.height
						}, o));
						return rs.tx = -r.x, rs.ty = -r.y, this.render(t, {
							renderTexture: s,
							clear: !1,
							transform: rs,
							skipUpdateTransform: !!t.parent
						}), s
					}, e.prototype.destroy = function(t) {
						for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
						t && this.view.parentNode && this.view.parentNode.removeChild(this.view);
						var i = this;
						i.plugins = null, i.type = ti.UNKNOWN, i.view = null, i.screen = null, i._tempDisplayObjectParent = null, i.options = null, this._backgroundColorRgba = null, this._backgroundColorString = null, this._lastObjectRendered = null
					}, Object.defineProperty(e.prototype, "backgroundColor", {
						get: function() {
							return this._backgroundColor
						},
						set: function(t) {
							this._backgroundColor = t, this._backgroundColorString = Ci(t), Mi(t, this._backgroundColorRgba)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "backgroundAlpha", {
						get: function() {
							return this._backgroundColorRgba[3]
						},
						set: function(t) {
							this._backgroundColorRgba[3] = t
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Ti()),
				os = function(t) {
					this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0
				},
				ss = function() {
					function t(t) {
						this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {}
					}
					return t.prototype.destroy = function() {
						this.renderer = null
					}, t.prototype.contextChange = function() {
						this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
					}, t.prototype.bind = function(t) {
						var e = this.gl,
							i = this.CONTEXT_UID,
							r = t._glBuffers[i] || this.createGLBuffer(t);
						e.bindBuffer(t.type, r.buffer)
					}, t.prototype.bindBufferBase = function(t, e) {
						var i = this.gl,
							r = this.CONTEXT_UID;
						if (this.boundBufferBases[e] !== t) {
							var n = t._glBuffers[r] || this.createGLBuffer(t);
							this.boundBufferBases[e] = t, i.bindBufferBase(i.UNIFORM_BUFFER, e, n.buffer)
						}
					}, t.prototype.bindBufferRange = function(t, e, i) {
						var r = this.gl,
							n = this.CONTEXT_UID;
						i = i || 0;
						var o = t._glBuffers[n] || this.createGLBuffer(t);
						r.bindBufferRange(r.UNIFORM_BUFFER, e || 0, o.buffer, 256 * i, 256)
					}, t.prototype.update = function(t) {
						var e = this.gl,
							i = this.CONTEXT_UID,
							r = t._glBuffers[i];
						if (t._updateID !== r.updateID)
							if (r.updateID = t._updateID, e.bindBuffer(t.type, r.buffer), r.byteLength >= t.data.byteLength) e.bufferSubData(t.type, 0, t.data);
							else {
								var n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
								r.byteLength = t.data.byteLength, e.bufferData(t.type, t.data, n)
							}
					}, t.prototype.dispose = function(t, e) {
						if (this.managedBuffers[t.id]) {
							delete this.managedBuffers[t.id];
							var i = t._glBuffers[this.CONTEXT_UID],
								r = this.gl;
							t.disposeRunner.remove(this), i && (e || r.deleteBuffer(i.buffer), delete t._glBuffers[this.CONTEXT_UID])
						}
					}, t.prototype.disposeAll = function(t) {
						for (var e = Object.keys(this.managedBuffers), i = 0; i < e.length; i++) this.dispose(this.managedBuffers[e[i]], t)
					}, t.prototype.createGLBuffer = function(t) {
						var e = this.CONTEXT_UID,
							i = this.gl;
						return t._glBuffers[e] = new os(i.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[e]
					}, t
				}(),
				as = function(t) {
					function e(i) {
						var r = t.call(this, ti.WEBGL, i) || this;
						return i = r.options, r.gl = null, r.CONTEXT_UID = 0, r.runners = {
							destroy: new Qr("destroy"),
							contextChange: new Qr("contextChange"),
							reset: new Qr("reset"),
							update: new Qr("update"),
							postrender: new Qr("postrender"),
							prerender: new Qr("prerender"),
							resize: new Qr("resize")
						}, r.runners.contextChange.add(r), r.globalUniforms = new Gn({
							projectionMatrix: new Er
						}, !0), r.addSystem(Co, "mask").addSystem(qn, "context").addSystem($o, "state").addSystem(Jo, "shader").addSystem(es, "texture").addSystem(ss, "buffer").addSystem(Qn, "geometry").addSystem(Jn, "framebuffer").addSystem(No, "scissor").addSystem(Lo, "stencil").addSystem(Fo, "projection").addSystem(Qo, "textureGC").addSystem(zn, "filter").addSystem(ko, "renderTexture").addSystem(Vn, "batch"), r.initPlugins(e.__plugins), r.multisample = void 0, i.context ? r.context.initFromContext(i.context) : r.context.initFromOptions({
							alpha: !!r.useContextAlpha,
							antialias: i.antialias,
							premultipliedAlpha: r.useContextAlpha && "notMultiplied" !== r.useContextAlpha,
							stencil: !0,
							preserveDrawingBuffer: i.preserveDrawingBuffer,
							powerPreference: r.options.powerPreference
						}), r.renderingToScreen = !0, Oi(2 === r.context.webGLVersion ? "WebGL 2" : "WebGL 1"), r.resize(r.options.width, r.options.height), r
					}
					return nn(e, t), e.create = function(t) {
						if (Ii()) return new e(t);
						throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
					}, e.prototype.contextChange = function() {
						var t, e = this.gl;
						if (1 === this.context.webGLVersion) {
							var i = e.getParameter(e.FRAMEBUFFER_BINDING);
							e.bindFramebuffer(e.FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.FRAMEBUFFER, i)
						} else i = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, i);
						t >= mi.HIGH ? this.multisample = mi.HIGH : t >= mi.MEDIUM ? this.multisample = mi.MEDIUM : t >= mi.LOW ? this.multisample = mi.LOW : this.multisample = mi.NONE
					}, e.prototype.addSystem = function(t, e) {
						var i = new t(this);
						if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');
						for (var r in this[e] = i, this.runners) this.runners[r].add(i);
						return this
					}, e.prototype.render = function(t, e) {
						var i, r, n, o;
						if (e && (e instanceof Rn ? ($i("6.0.0", "Renderer#render arguments changed, use options instead."), i = e, r = arguments[2], n = arguments[3], o = arguments[4]) : (i = e.renderTexture, r = e.clear, n = e.transform, o = e.skipUpdateTransform)), this.renderingToScreen = !i, this.runners.prerender.emit(), this.emit("prerender"), this.projection.transform = n, !this.context.isLost) {
							if (i || (this._lastObjectRendered = t), !o) {
								var s = t.enableTempParent();
								t.updateTransform(), t.disableTempParent(s)
							}
							this.renderTexture.bind(i), this.batch.currentRenderer.start(), (void 0 !== r ? r : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), i && i.baseTexture.update(), this.runners.postrender.emit(), this.projection.transform = null, this.emit("postrender")
						}
					}, e.prototype.generateTexture = function(e, i, r, n) {
						void 0 === i && (i = {});
						var o = t.prototype.generateTexture.call(this, e, i, r, n);
						return this.framebuffer.blit(), o
					}, e.prototype.resize = function(e, i) {
						t.prototype.resize.call(this, e, i), this.runners.resize.emit(this.screen.height, this.screen.width)
					}, e.prototype.reset = function() {
						return this.runners.reset.emit(), this
					}, e.prototype.clear = function() {
						this.renderTexture.bind(), this.renderTexture.clear()
					}, e.prototype.destroy = function(e) {
						for (var i in this.runners.destroy.emit(), this.runners) this.runners[i].destroy();
						t.prototype.destroy.call(this, e), this.gl = null
					}, Object.defineProperty(e.prototype, "extract", {
						get: function() {
							return $i("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."), this.plugins.extract
						},
						enumerable: !1,
						configurable: !0
					}), e.registerPlugin = function(t, i) {
						e.__plugins = e.__plugins || {}, e.__plugins[t] = i
					}, e
				}(ns);

			function hs(t) {
				return as.create(t)
			}
			var us = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
				ls = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
				cs = function() {
					function t(t) {
						$i("6.1.0", "System class is deprecated, implemement ISystem interface instead."), this.renderer = t
					}
					return t.prototype.destroy = function() {
						this.renderer = null
					}, t
				}(),
				ds = function() {
					this.texArray = null, this.blend = 0, this.type = ri.TRIANGLES, this.start = 0, this.size = 0, this.data = null
				},
				fs = function() {
					function t() {
						this.elements = [], this.ids = [], this.count = 0
					}
					return t.prototype.clear = function() {
						for (var t = 0; t < this.count; t++) this.elements[t] = null;
						this.count = 0
					}, t
				}(),
				ps = function() {
					function t(t) {
						"number" == typeof t ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
					}
					return Object.defineProperty(t.prototype, "int8View", {
						get: function() {
							return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "uint8View", {
						get: function() {
							return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "int16View", {
						get: function() {
							return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "uint16View", {
						get: function() {
							return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "int32View", {
						get: function() {
							return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.view = function(t) {
						return this[t + "View"]
					}, t.prototype.destroy = function() {
						this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
					}, t.sizeOf = function(t) {
						switch (t) {
							case "int8":
							case "uint8":
								return 1;
							case "int16":
							case "uint16":
								return 2;
							case "int32":
							case "uint32":
							case "float32":
								return 4;
							default:
								throw new Error(t + " isn't a valid view type")
						}
					}, t
				}(),
				_s = function(t) {
					function e(e) {
						var i = t.call(this, e) || this;
						return i.shaderGenerator = null, i.geometryClass = null, i.vertexSize = null, i.state = Ro.for2d(), i.size = 4 * yi.SPRITE_BATCH_SIZE, i._vertexCount = 0, i._indexCount = 0, i._bufferedElements = [], i._bufferedTextures = [], i._bufferSize = 0, i._shader = null, i._packedGeometries = [], i._packedGeometryPoolSize = 2, i._flushId = 0, i._aBuffers = {}, i._iBuffers = {}, i.MAX_TEXTURES = 1, i.renderer.on("prerender", i.onPrerender, i), e.runners.contextChange.add(i), i._dcIndex = 0, i._aIndex = 0, i._iIndex = 0, i._attributeBuffer = null, i._indexBuffer = null, i._tempBoundTextures = [], i
					}
					return nn(e, t), e.prototype.contextChange = function() {
						var t = this.renderer.gl;
						yi.PREFER_ENV === Qe.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), yi.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = Eo(this.MAX_TEXTURES, t)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
						for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass;
						this.initFlushBuffers()
					}, e.prototype.initFlushBuffers = function() {
						for (var t = e._drawCallPool, i = e._textureArrayPool, r = this.size / 4, n = Math.floor(r / this.MAX_TEXTURES) + 1; t.length < r;) t.push(new ds);
						for (; i.length < n;) i.push(new fs);
						for (var o = 0; o < this.MAX_TEXTURES; o++) this._tempBoundTextures[o] = null
					}, e.prototype.onPrerender = function() {
						this._flushId = 0
					}, e.prototype.render = function(t) {
						t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t)
					}, e.prototype.buildTexturesAndDrawCalls = function() {
						var t = this._bufferedTextures,
							i = this.MAX_TEXTURES,
							r = e._textureArrayPool,
							n = this.renderer.batch,
							o = this._tempBoundTextures,
							s = this.renderer.textureGC.count,
							a = ++un._globalBatch,
							h = 0,
							u = r[0],
							l = 0;
						n.copyBoundTextures(o, i);
						for (var c = 0; c < this._bufferSize; ++c) {
							var d = t[c];
							t[c] = null, d._batchEnabled !== a && (u.count >= i && (n.boundArray(u, o, a, i), this.buildDrawCalls(u, l, c), l = c, u = r[++h], ++a), d._batchEnabled = a, d.touched = s, u.elements[u.count++] = d)
						}
						for (u.count > 0 && (n.boundArray(u, o, a, i), this.buildDrawCalls(u, l, this._bufferSize), ++h, ++a), c = 0; c < o.length; c++) o[c] = null;
						un._globalBatch = a
					}, e.prototype.buildDrawCalls = function(t, i, r) {
						var n = this,
							o = n._bufferedElements,
							s = n._attributeBuffer,
							a = n._indexBuffer,
							h = n.vertexSize,
							u = e._drawCallPool,
							l = this._dcIndex,
							c = this._aIndex,
							d = this._iIndex,
							f = u[l];
						f.start = this._iIndex, f.texArray = t;
						for (var p = i; p < r; ++p) {
							var _ = o[p],
								m = _._texture.baseTexture,
								g = Li[m.alphaMode ? 1 : 0][_.blendMode];
							o[p] = null, i < p && f.blend !== g && (f.size = d - f.start, i = p, (f = u[++l]).texArray = t, f.start = d), this.packInterleavedGeometry(_, s, a, c, d), c += _.vertexData.length / 2 * h, d += _.indices.length, f.blend = g
						}
						i < r && (f.size = d - f.start, ++l), this._dcIndex = l, this._aIndex = c, this._iIndex = d
					}, e.prototype.bindAndClearTexArray = function(t) {
						for (var e = this.renderer.texture, i = 0; i < t.count; i++) e.bind(t.elements[i], t.ids[i]), t.elements[i] = null;
						t.count = 0
					}, e.prototype.updateGeometry = function() {
						var t = this,
							e = t._packedGeometries,
							i = t._attributeBuffer,
							r = t._indexBuffer;
						yi.CAN_UPLOAD_SAME_BUFFER ? (e[this._flushId]._buffer.update(i.rawBinaryData), e[this._flushId]._indexBuffer.update(r), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass), e[this._flushId]._buffer.update(i.rawBinaryData), e[this._flushId]._indexBuffer.update(r), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
					}, e.prototype.drawBatches = function() {
						for (var t = this._dcIndex, i = this.renderer, r = i.gl, n = i.state, o = e._drawCallPool, s = null, a = 0; a < t; a++) {
							var h = o[a],
								u = h.texArray,
								l = h.type,
								c = h.size,
								d = h.start,
								f = h.blend;
							s !== u && (s = u, this.bindAndClearTexArray(u)), this.state.blendMode = f, n.set(this.state), r.drawElements(l, c, r.UNSIGNED_SHORT, 2 * d)
						}
					}, e.prototype.flush = function() {
						0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
					}, e.prototype.start = function() {
						this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES), this.renderer.shader.bind(this._shader), yi.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
					}, e.prototype.stop = function() {
						this.flush()
					}, e.prototype.destroy = function() {
						for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
						this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), t.prototype.destroy.call(this)
					}, e.prototype.getAttributeBuffer = function(t) {
						var e = zi(Math.ceil(t / 8)),
							i = Vi(e),
							r = 8 * e;
						this._aBuffers.length <= i && (this._iBuffers.length = i + 1);
						var n = this._aBuffers[r];
						return n || (this._aBuffers[r] = n = new ps(r * this.vertexSize * 4)), n
					}, e.prototype.getIndexBuffer = function(t) {
						var e = zi(Math.ceil(t / 12)),
							i = Vi(e),
							r = 12 * e;
						this._iBuffers.length <= i && (this._iBuffers.length = i + 1);
						var n = this._iBuffers[i];
						return n || (this._iBuffers[i] = n = new Uint16Array(r)), n
					}, e.prototype.packInterleavedGeometry = function(t, e, i, r, n) {
						for (var o = e.uint32View, s = e.float32View, a = r / this.vertexSize, h = t.uvs, u = t.indices, l = t.vertexData, c = t._texture.baseTexture._batchLocation, d = Math.min(t.worldAlpha, 1), f = d < 1 && t._texture.baseTexture.alphaMode ? Ui(t._tintRGB, d) : t._tintRGB + (255 * d << 24), p = 0; p < l.length; p += 2) s[r++] = l[p], s[r++] = l[p + 1], s[r++] = h[p], s[r++] = h[p + 1], o[r++] = f, s[r++] = c;
						for (p = 0; p < u.length; p++) i[n++] = a + u[p]
					}, e._drawCallPool = [], e._textureArrayPool = [], e
				}(Yn),
				ms = function() {
					function t(t, e) {
						if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
						if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".')
					}
					return t.prototype.generateShader = function(t) {
						if (!this.programCache[t]) {
							for (var e = new Int32Array(t), i = 0; i < t; i++) e[i] = i;
							this.defaultGroupCache[t] = Gn.from({
								uSamplers: e
							}, !0);
							var r = this.fragTemplate;
							r = (r = r.replace(/%count%/gi, "" + t)).replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new So(this.vertexSrc, r)
						}
						var n = {
							tint: new Float32Array([1, 1, 1, 1]),
							translationMatrix: new Er,
							default: this.defaultGroupCache[t]
						};
						return new wo(this.programCache[t], n)
					}, t.prototype.generateSampleSrc = function(t) {
						var e = "";
						e += "\n", e += "\n";
						for (var i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(vTextureId < " + i + ".5)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);", e += "\n}";
						return (e += "\n") + "\n"
					}, t
				}(),
				gs = function(t) {
					function e(e) {
						void 0 === e && (e = !1);
						var i = t.call(this) || this;
						return i._buffer = new Mn(null, e, !1), i._indexBuffer = new Mn(null, e, !0), i.addAttribute("aVertexPosition", i._buffer, 2, !1, si.FLOAT).addAttribute("aTextureCoord", i._buffer, 2, !1, si.FLOAT).addAttribute("aColor", i._buffer, 4, !0, si.UNSIGNED_BYTE).addAttribute("aTextureId", i._buffer, 1, !0, si.FLOAT).addIndex(i._indexBuffer), i
					}
					return nn(e, t), e
				}(Fn),
				ys = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
				vs = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
				Ts = function() {
					function t() {}
					return t.create = function(t) {
						var e = Object.assign({
								vertex: ys,
								fragment: vs,
								geometryClass: gs,
								vertexSize: 6
							}, t),
							i = e.vertex,
							r = e.fragment,
							n = e.vertexSize,
							o = e.geometryClass;
						return function(t) {
							function e(e) {
								var s = t.call(this, e) || this;
								return s.shaderGenerator = new ms(i, r), s.geometryClass = o, s.vertexSize = n, s
							}
							return nn(e, t), e
						}(_s)
					}, Object.defineProperty(t, "defaultVertexSrc", {
						get: function() {
							return ys
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t, "defaultFragmentTemplate", {
						get: function() {
							return vs
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(),
				bs = Ts.create(),
				Es = {},
				xs = function(t) {
					Object.defineProperty(Es, t, {
						get: function() {
							return $i("6.0.0", "PIXI.systems." + t + " has moved to PIXI." + t), vn[t]
						}
					})
				};
			for (var As in vn) xs(As);
			var Ss = {},
				ws = function(t) {
					Object.defineProperty(Ss, t, {
						get: function() {
							return $i("6.0.0", "PIXI.resources." + t + " has moved to PIXI." + t), is[t]
						}
					})
				};
			for (var As in is) ws(As);
			var Rs = function() {
					function t(e) {
						var i = this;
						this.stage = new Ur, e = Object.assign({
							forceCanvas: !1
						}, e), this.renderer = hs(e), t._plugins.forEach((function(t) {
							t.init.call(i, e)
						}))
					}
					return t.registerPlugin = function(e) {
						t._plugins.push(e)
					}, t.prototype.render = function() {
						this.renderer.render(this.stage)
					}, Object.defineProperty(t.prototype, "view", {
						get: function() {
							return this.renderer.view
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "screen", {
						get: function() {
							return this.renderer.screen
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.destroy = function(e, i) {
						var r = this,
							n = t._plugins.slice(0);
						n.reverse(), n.forEach((function(t) {
							t.destroy.call(r)
						})), this.stage.destroy(i), this.stage = null, this.renderer.destroy(e), this.renderer = null
					}, t._plugins = [], t
				}(),
				Os = function() {
					function t() {}
					return t.init = function(t) {
						var e = this;
						Object.defineProperty(this, "resizeTo", {
							set: function(t) {
								self.removeEventListener("resize", this.queueResize), this._resizeTo = t, t && (self.addEventListener("resize", this.queueResize), this.resize())
							},
							get: function() {
								return this._resizeTo
							}
						}), this.queueResize = function() {
							e._resizeTo && (e.cancelResize(), e._resizeId = requestAnimationFrame((function() {
								return e.resize()
							})))
						}, this.cancelResize = function() {
							e._resizeId && (cancelAnimationFrame(e._resizeId), e._resizeId = null)
						}, this.resize = function() {
							if (e._resizeTo) {
								var t, i;
								if (e.cancelResize(), e._resizeTo === self) t = self.innerWidth, i = self.innerHeight;
								else {
									var r = e._resizeTo;
									t = r.clientWidth, i = r.clientHeight
								}
								e.renderer.resize(t, i)
							}
						}, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null
					}, t.destroy = function() {
						self.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null
					}, t
				}();
			Rs.registerPlugin(Os);
			var Is = new _r,
				Ps = function() {
					function t(t) {
						this.renderer = t
					}
					return t.prototype.image = function(t, e, i) {
						var r = new Image;
						return r.src = this.base64(t, e, i), r
					}, t.prototype.base64 = function(t, e, i) {
						return this.canvas(t).toDataURL(e, i)
					}, t.prototype.canvas = function(e) {
						var i, r, n, o = this.renderer,
							s = !1,
							a = !1;
						e && (e instanceof Rn ? n = e : (n = this.renderer.generateTexture(e), a = !0)), n ? (i = n.baseTexture.resolution, r = n.frame, s = !1, o.renderTexture.bind(n)) : (i = this.renderer.resolution, s = !0, (r = Is).width = this.renderer.width, r.height = this.renderer.height, o.renderTexture.bind(null));
						var h = Math.floor(r.width * i + 1e-4),
							u = Math.floor(r.height * i + 1e-4),
							l = new nr(h, u, 1),
							c = new Uint8Array(4 * h * u),
							d = o.gl;
						d.readPixels(r.x * i, r.y * i, h, u, d.RGBA, d.UNSIGNED_BYTE, c);
						var f = l.context.getImageData(0, 0, h, u);
						if (t.arrayPostDivide(c, f.data), l.context.putImageData(f, 0, 0), s) {
							var p = new nr(l.width, l.height, 1);
							p.context.scale(1, -1), p.context.drawImage(l.canvas, 0, -u), l.destroy(), l = p
						}
						return a && n.destroy(!0), l.canvas
					}, t.prototype.pixels = function(e) {
						var i, r, n, o = this.renderer,
							s = !1;
						e && (e instanceof Rn ? n = e : (n = this.renderer.generateTexture(e), s = !0)), n ? (i = n.baseTexture.resolution, r = n.frame, o.renderTexture.bind(n)) : (i = o.resolution, (r = Is).width = o.width, r.height = o.height, o.renderTexture.bind(null));
						var a = r.width * i,
							h = r.height * i,
							u = new Uint8Array(4 * a * h),
							l = o.gl;
						return l.readPixels(r.x * i, r.y * i, a, h, l.RGBA, l.UNSIGNED_BYTE, u), s && n.destroy(!0), t.arrayPostDivide(u, u), u
					}, t.prototype.destroy = function() {
						this.renderer = null
					}, t.arrayPostDivide = function(t, e) {
						for (var i = 0; i < t.length; i += 4) {
							var r = e[i + 3] = t[i + 3];
							0 !== r ? (e[i] = Math.round(Math.min(255 * t[i] / r, 255)), e[i + 1] = Math.round(Math.min(255 * t[i + 1] / r, 255)), e[i + 2] = Math.round(Math.min(255 * t[i + 2] / r, 255))) : (e[i] = t[i], e[i + 1] = t[i + 1], e[i + 2] = t[i + 2])
						}
					}, t
				}(),
				Ms = function() {
					function t(t, e, i) {
						void 0 === e && (e = !1), this._fn = t, this._once = e, this._thisArg = i, this._next = this._prev = this._owner = null
					}
					return t.prototype.detach = function() {
						return null !== this._owner && (this._owner.detach(this), !0)
					}, t
				}();

			function Cs(t, e) {
				return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
			}
			var Ds = function() {
				function t() {
					this._head = this._tail = void 0
				}
				return t.prototype.handlers = function(t) {
					void 0 === t && (t = !1);
					var e = this._head;
					if (t) return !!e;
					for (var i = []; e;) i.push(e), e = e._next;
					return i
				}, t.prototype.has = function(t) {
					if (!(t instanceof Ms)) throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");
					return t._owner === this
				}, t.prototype.dispatch = function() {
					for (var t = arguments, e = [], i = 0; i < arguments.length; i++) e[i] = t[i];
					var r = this._head;
					if (!r) return !1;
					for (; r;) r._once && this.detach(r), r._fn.apply(r._thisArg, e), r = r._next;
					return !0
				}, t.prototype.add = function(t, e) {
					if (void 0 === e && (e = null), "function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
					return Cs(this, new Ms(t, !1, e))
				}, t.prototype.once = function(t, e) {
					if (void 0 === e && (e = null), "function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
					return Cs(this, new Ms(t, !0, e))
				}, t.prototype.detach = function(t) {
					if (!(t instanceof Ms)) throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");
					return t._owner !== this || (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null), this
				}, t.prototype.detachAll = function() {
					var t = this._head;
					if (!t) return this;
					for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
					return this
				}, t
			}();

			function Ns(t, e) {
				e = e || {};
				for (var i = {
						key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
						q: {
							name: "queryKey",
							parser: /(?:^|&)([^&=]*)=?([^&]*)/g
						},
						parser: {
							strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
							loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
						}
					}, r = i.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[i.key[o]] = r[o] || "";
				return n[i.q.name] = {}, n[i.key[12]].replace(i.q.parser, (function(t, e, r) {
					e && (n[i.q.name][e] = r)
				})), n
			}
			var Ls = !(!self.XDomainRequest || "withCredentials" in new XMLHttpRequest),
				Fs = null;

			function Bs() {}

			function Us(t, e, i) {
				e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
			}

			function ks(t) {
				return t.toString().replace("object ", "")
			}
			var Gs = function() {
				function t(e, i, r) {
					if (this._dequeue = Bs, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = null, this._boundOnError = null, this._boundOnProgress = null, this._boundOnTimeout = null, this._boundXhrOnError = null, this._boundXhrOnTimeout = null, this._boundXhrOnAbort = null, this._boundXhrOnLoad = null, "string" != typeof e || "string" != typeof i) throw new Error("Both name and url are required for constructing a resource.");
					r = r || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === i.indexOf("data:")), this.name = e, this.url = i, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === r.crossOrigin ? "anonymous" : r.crossOrigin, this.timeout = r.timeout || 0, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.metadata = r.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = Bs, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new Ds, this.onProgress = new Ds, this.onComplete = new Ds, this.onAfterMiddleware = new Ds
				}
				return t.setExtensionLoadType = function(e, i) {
					Us(t._loadTypeMap, e, i)
				}, t.setExtensionXhrType = function(e, i) {
					Us(t._xhrTypeMap, e, i)
				}, Object.defineProperty(t.prototype, "isDataUrl", {
					get: function() {
						return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "isComplete", {
					get: function() {
						return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "isLoading", {
					get: function() {
						return this._hasFlag(t.STATUS_FLAGS.LOADING)
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.complete = function() {
					this._clearEvents(), this._finish()
				}, t.prototype.abort = function(e) {
					if (!this.error) {
						if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();
						else if (this.xdr) this.xdr.abort();
						else if (this.data)
							if (this.data.src) this.data.src = t.EMPTY_GIF;
							else
								for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
						this._finish()
					}
				}, t.prototype.load = function(e) {
					var i = this;
					if (!this.isLoading)
						if (this.isComplete) e && setTimeout((function() {
							return e(i)
						}), 1);
						else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
							case t.LOAD_TYPE.IMAGE:
								this.type = t.TYPE.IMAGE, this._loadElement("image");
								break;
							case t.LOAD_TYPE.AUDIO:
								this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
								break;
							case t.LOAD_TYPE.VIDEO:
								this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
								break;
							case t.LOAD_TYPE.XHR:
							default:
								Ls && this.crossOrigin ? this._loadXdr() : this._loadXhr()
						}
				}, t.prototype._hasFlag = function(t) {
					return 0 != (this._flags & t)
				}, t.prototype._setFlag = function(t, e) {
					this._flags = e ? this._flags | t : this._flags & ~t
				}, t.prototype._clearEvents = function() {
					clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
				}, t.prototype._finish = function() {
					if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
					this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
				}, t.prototype._loadElement = function(t) {
					this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== self.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
				}, t.prototype._loadSourceElement = function(t) {
					if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== self.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
						if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource)
							if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
							else if (Array.isArray(this.url))
							for (var e = this.metadata.mimeType, i = 0; i < this.url.length; ++i) this.data.appendChild(this._createSource(t, this.url[i], Array.isArray(e) ? e[i] : e));
						else e = this.metadata.mimeType, this.data.appendChild(this._createSource(t, this.url, Array.isArray(e) ? e[0] : e));
						this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
					} else this.abort("Unsupported element: " + t)
				}, t.prototype._loadXhr = function() {
					"string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
					var e = this.xhr = new XMLHttpRequest;
					e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
				}, t.prototype._loadXdr = function() {
					"string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
					var t = this.xhr = new self.XDomainRequest;
					t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout((function() {
						return t.send()
					}), 1)
				}, t.prototype._createSource = function(t, e, i) {
					i || (i = t + "/" + this._getExtension(e));
					var r = document.createElement("source");
					return r.src = e, r.type = i, r
				}, t.prototype._onError = function(t) {
					this.abort("Failed to load element using: " + t.target.nodeName)
				}, t.prototype._onProgress = function(t) {
					t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
				}, t.prototype._onTimeout = function() {
					this.abort("Load timed out.")
				}, t.prototype._xhrOnError = function() {
					var t = this.xhr;
					this.abort(ks(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
				}, t.prototype._xhrOnTimeout = function() {
					var t = this.xhr;
					this.abort(ks(t) + " Request timed out.")
				}, t.prototype._xhrOnAbort = function() {
					var t = this.xhr;
					this.abort(ks(t) + " Request was aborted by the user.")
				}, t.prototype._xhrOnLoad = function() {
					var e = this.xhr,
						i = "",
						r = void 0 === e.status ? 200 : e.status;
					if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (i = e.responseText), 0 === r && (i.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? r = 200 : 1223 === r && (r = 204), 2 == (r / 100 | 0)) {
						if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = i, this.type = t.TYPE.TEXT;
						else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
							this.data = JSON.parse(i), this.type = t.TYPE.JSON
						} catch (t) {
							return void this.abort("Error trying to parse loaded json: " + t)
						} else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
							if (self.DOMParser) {
								var n = new DOMParser;
								this.data = n.parseFromString(i, "text/xml")
							} else {
								var o = document.createElement("div");
								o.innerHTML = i, this.data = o
							}
							this.type = t.TYPE.XML
						} catch (t) {
							return void this.abort("Error trying to parse loaded xml: " + t)
						} else this.data = e.response || i;
						this.complete()
					} else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
				}, t.prototype._determineCrossOrigin = function(t, e) {
					if (0 === t.indexOf("data:")) return "";
					if (self.origin !== self.location.origin) return "anonymous";
					e = e || self.location, Fs || (Fs = document.createElement("a")), Fs.href = t;
					var i = Ns(Fs.href, {
							strictMode: !0
						}),
						r = !i.port && "" === e.port || i.port === e.port,
						n = i.protocol ? i.protocol + ":" : "";
					return i.host === e.hostname && r && n === e.protocol ? "" : "anonymous"
				}, t.prototype._determineXhrType = function() {
					return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
				}, t.prototype._determineLoadType = function() {
					return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
				}, t.prototype._getExtension = function(t) {
					void 0 === t && (t = this.url);
					var e = "";
					if (this.isDataUrl) {
						var i = t.indexOf("/");
						e = t.substring(i + 1, t.indexOf(";", i))
					} else {
						var r = t.indexOf("?"),
							n = t.indexOf("#"),
							o = Math.min(r > -1 ? r : t.length, n > -1 ? n : t.length);
						e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
					}
					return e.toLowerCase()
				}, t.prototype._getMimeFromXhrType = function(e) {
					switch (e) {
						case t.XHR_RESPONSE_TYPE.BUFFER:
							return "application/octet-binary";
						case t.XHR_RESPONSE_TYPE.BLOB:
							return "application/blob";
						case t.XHR_RESPONSE_TYPE.DOCUMENT:
							return "application/xml";
						case t.XHR_RESPONSE_TYPE.JSON:
							return "application/json";
						case t.XHR_RESPONSE_TYPE.DEFAULT:
						case t.XHR_RESPONSE_TYPE.TEXT:
						default:
							return "text/plain"
					}
				}, t
			}();

			function Xs() {}

			function Hs(t) {
				return function() {
					for (var e = arguments, i = [], r = 0; r < arguments.length; r++) i[r] = e[r];
					if (null === t) throw new Error("Callback was already called.");
					var n = t;
					t = null, n.apply(this, i)
				}
			}! function(t) {
				var e, i, r, n;
				(n = t.STATUS_FLAGS || (t.STATUS_FLAGS = {}))[n.NONE = 0] = "NONE", n[n.DATA_URL = 1] = "DATA_URL", n[n.COMPLETE = 2] = "COMPLETE", n[n.LOADING = 4] = "LOADING", (r = t.TYPE || (t.TYPE = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.JSON = 1] = "JSON", r[r.XML = 2] = "XML", r[r.IMAGE = 3] = "IMAGE", r[r.AUDIO = 4] = "AUDIO", r[r.VIDEO = 5] = "VIDEO", r[r.TEXT = 6] = "TEXT", (i = t.LOAD_TYPE || (t.LOAD_TYPE = {}))[i.XHR = 1] = "XHR", i[i.IMAGE = 2] = "IMAGE", i[i.AUDIO = 3] = "AUDIO", i[i.VIDEO = 4] = "VIDEO", (e = t.XHR_RESPONSE_TYPE || (t.XHR_RESPONSE_TYPE = {})).DEFAULT = "text", e.BUFFER = "arraybuffer", e.BLOB = "blob", e.DOCUMENT = "document", e.JSON = "json", e.TEXT = "text", t._loadTypeMap = {
					gif: t.LOAD_TYPE.IMAGE,
					png: t.LOAD_TYPE.IMAGE,
					bmp: t.LOAD_TYPE.IMAGE,
					jpg: t.LOAD_TYPE.IMAGE,
					jpeg: t.LOAD_TYPE.IMAGE,
					tif: t.LOAD_TYPE.IMAGE,
					tiff: t.LOAD_TYPE.IMAGE,
					webp: t.LOAD_TYPE.IMAGE,
					tga: t.LOAD_TYPE.IMAGE,
					svg: t.LOAD_TYPE.IMAGE,
					"svg+xml": t.LOAD_TYPE.IMAGE,
					mp3: t.LOAD_TYPE.AUDIO,
					ogg: t.LOAD_TYPE.AUDIO,
					wav: t.LOAD_TYPE.AUDIO,
					mp4: t.LOAD_TYPE.VIDEO,
					webm: t.LOAD_TYPE.VIDEO
				}, t._xhrTypeMap = {
					xhtml: t.XHR_RESPONSE_TYPE.DOCUMENT,
					html: t.XHR_RESPONSE_TYPE.DOCUMENT,
					htm: t.XHR_RESPONSE_TYPE.DOCUMENT,
					xml: t.XHR_RESPONSE_TYPE.DOCUMENT,
					tmx: t.XHR_RESPONSE_TYPE.DOCUMENT,
					svg: t.XHR_RESPONSE_TYPE.DOCUMENT,
					tsx: t.XHR_RESPONSE_TYPE.DOCUMENT,
					gif: t.XHR_RESPONSE_TYPE.BLOB,
					png: t.XHR_RESPONSE_TYPE.BLOB,
					bmp: t.XHR_RESPONSE_TYPE.BLOB,
					jpg: t.XHR_RESPONSE_TYPE.BLOB,
					jpeg: t.XHR_RESPONSE_TYPE.BLOB,
					tif: t.XHR_RESPONSE_TYPE.BLOB,
					tiff: t.XHR_RESPONSE_TYPE.BLOB,
					webp: t.XHR_RESPONSE_TYPE.BLOB,
					tga: t.XHR_RESPONSE_TYPE.BLOB,
					json: t.XHR_RESPONSE_TYPE.JSON,
					text: t.XHR_RESPONSE_TYPE.TEXT,
					txt: t.XHR_RESPONSE_TYPE.TEXT,
					ttf: t.XHR_RESPONSE_TYPE.BUFFER,
					otf: t.XHR_RESPONSE_TYPE.BUFFER
				}, t.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
			}(Gs || (Gs = {}));
			var js = function(t, e) {
					this.data = t, this.callback = e
				},
				zs = function() {
					function t(t, e) {
						var i = this;
						if (void 0 === e && (e = 1), this.workers = 0, this.saturated = Xs, this.unsaturated = Xs, this.empty = Xs, this.drain = Xs, this.error = Xs, this.started = !1, this.paused = !1, this._tasks = [], this._insert = function(t, e, r) {
								if (r && "function" != typeof r) throw new Error("task callback must be a function");
								if (i.started = !0, null == t && i.idle()) setTimeout((function() {
									return i.drain()
								}), 1);
								else {
									var n = new js(t, "function" == typeof r ? r : Xs);
									e ? i._tasks.unshift(n) : i._tasks.push(n), setTimeout(i.process, 1)
								}
							}, this.process = function() {
								for (; !i.paused && i.workers < i.concurrency && i._tasks.length;) {
									var t = i._tasks.shift();
									0 === i._tasks.length && i.empty(), i.workers += 1, i.workers === i.concurrency && i.saturated(), i._worker(t.data, Hs(i._next(t)))
								}
							}, this._worker = t, 0 === e) throw new Error("Concurrency must not be zero");
						this.concurrency = e, this.buffer = e / 4
					}
					return t.prototype._next = function(t) {
						var e = this;
						return function() {
							for (var i = arguments, r = [], n = 0; n < arguments.length; n++) r[n] = i[n];
							e.workers -= 1, t.callback.apply(t, r), null != r[0] && e.error(r[0], t.data), e.workers <= e.concurrency - e.buffer && e.unsaturated(), e.idle() && e.drain(), e.process()
						}
					}, t.prototype.push = function(t, e) {
						this._insert(t, !1, e)
					}, t.prototype.kill = function() {
						this.workers = 0, this.drain = Xs, this.started = !1, this._tasks = []
					}, t.prototype.unshift = function(t, e) {
						this._insert(t, !0, e)
					}, t.prototype.length = function() {
						return this._tasks.length
					}, t.prototype.running = function() {
						return this.workers
					}, t.prototype.idle = function() {
						return this._tasks.length + this.workers === 0
					}, t.prototype.pause = function() {
						!0 !== this.paused && (this.paused = !0)
					}, t.prototype.resume = function() {
						if (!1 !== this.paused) {
							this.paused = !1;
							for (var t = 1; t <= this.concurrency; t++) this.process()
						}
					}, t.eachSeries = function(t, e, i, r) {
						var n = 0,
							o = t.length;
						! function s(a) {
							a || n === o ? i && i(a) : r ? setTimeout((function() {
								e(t[n++], s)
							}), 1) : e(t[n++], s)
						}()
					}, t.queue = function(e, i) {
						return new t(e, i)
					}, t
				}(),
				Ys = /(#[\w-]+)?$/,
				Vs = function() {
					function t(e, i) {
						var r = this;
						void 0 === e && (e = ""), void 0 === i && (i = 10), this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
							return r._loadResource(t, e)
						}, this.resources = {}, this.baseUrl = e, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
							return r._loadResource(t, e)
						}, this._queue = zs.queue(this._boundLoadResource, i), this._queue.pause(), this.resources = {}, this.onProgress = new Ds, this.onError = new Ds, this.onLoad = new Ds, this.onStart = new Ds, this.onComplete = new Ds;
						for (var n = 0; n < t._plugins.length; ++n) {
							var o = t._plugins[n],
								s = o.pre,
								a = o.use;
							s && this.pre(s), a && this.use(a)
						}
						this._protected = !1
					}
					return t.prototype._add = function(t, e, i, r) {
						if (this.loading && (!i || !i.parentResource)) throw new Error("Cannot add resources while the loader is running.");
						if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
						if (e = this._prepareUrl(e), this.resources[t] = new Gs(t, e, i), "function" == typeof r && this.resources[t].onAfterMiddleware.once(r), this.loading) {
							for (var n = i.parentResource, o = [], s = 0; s < n.children.length; ++s) n.children[s].isComplete || o.push(n.children[s]);
							var a = n.progressChunk * (o.length + 1) / (o.length + 2);
							for (n.children.push(this.resources[t]), n.progressChunk = a, s = 0; s < o.length; ++s) o[s].progressChunk = a;
							this.resources[t].progressChunk = a
						}
						return this._queue.push(this.resources[t]), this
					}, t.prototype.pre = function(t) {
						return this._beforeMiddleware.push(t), this
					}, t.prototype.use = function(t) {
						return this._afterMiddleware.push(t), this
					}, t.prototype.reset = function() {
						for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
							var e = this.resources[t];
							e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort("loader reset")
						}
						return this.resources = {}, this
					}, t.prototype.load = function(t) {
						if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
						if (this._queue.idle()) this._onStart(), this._onComplete();
						else {
							for (var e = 100 / this._queue._tasks.length, i = 0; i < this._queue._tasks.length; ++i) this._queue._tasks[i].data.progressChunk = e;
							this._onStart(), this._queue.resume()
						}
						return this
					}, Object.defineProperty(t.prototype, "concurrency", {
						get: function() {
							return this._queue.concurrency
						},
						set: function(t) {
							this._queue.concurrency = t
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype._prepareUrl = function(t) {
						var e, i = Ns(t, {
							strictMode: !0
						});
						if (e = i.protocol || !i.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
							var r = Ys.exec(e)[0]; - 1 !== (e = e.substr(0, e.length - r.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, e += r
						}
						return e
					}, t.prototype._loadResource = function(t, e) {
						var i = this;
						t._dequeue = e, zs.eachSeries(this._beforeMiddleware, (function(e, r) {
							e.call(i, t, (function() {
								r(t.isComplete ? {} : null)
							}))
						}), (function() {
							t.isComplete ? i._onLoad(t) : (t._onLoadBinding = t.onComplete.once(i._onLoad, i), t.load())
						}), !0)
					}, t.prototype._onStart = function() {
						this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
					}, t.prototype._onComplete = function() {
						this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
					}, t.prototype._onLoad = function(t) {
						var e = this;
						t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), zs.eachSeries(this._afterMiddleware, (function(i, r) {
							i.call(e, t, r)
						}), (function() {
							t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
						}), !0)
					}, t.prototype.destroy = function() {
						this._protected || this.reset()
					}, Object.defineProperty(t, "shared", {
						get: function() {
							var e = t._shared;
							return e || ((e = new t)._protected = !0, t._shared = e), e
						},
						enumerable: !1,
						configurable: !0
					}), t.registerPlugin = function(e) {
						return t._plugins.push(e), e.add && e.add(), t
					}, t._plugins = [], t
				}();
			Vs.prototype.add = function(t, e, i, r) {
				if (Array.isArray(t)) {
					for (var n = 0; n < t.length; ++n) this.add(t[n]);
					return this
				}
				if ("object" == typeof t && (i = t, r = e || i.callback || i.onComplete, e = i.url, t = i.name || i.key || i.url), "string" != typeof e && (r = i, i = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
				return "function" == typeof i && (r = i, i = null), this._add(t, e, i, r)
			};
			var Ws, qs, Ks = function() {
					function t() {}
					return t.init = function(t) {
						t = Object.assign({
							sharedLoader: !1
						}, t), this.loader = t.sharedLoader ? Vs.shared : new Vs
					}, t.destroy = function() {
						this.loader && (this.loader.destroy(), this.loader = null)
					}, t
				}(),
				Zs = function() {
					function t() {}
					return t.add = function() {
						Gs.setExtensionLoadType("svg", Gs.LOAD_TYPE.XHR), Gs.setExtensionXhrType("svg", Gs.XHR_RESPONSE_TYPE.TEXT)
					}, t.use = function(t, e) {
						if (!t.data || t.type !== Gs.TYPE.IMAGE && "svg" !== t.extension) e();
						else {
							var i = t.data,
								r = t.url,
								n = t.name,
								o = t.metadata;
							Sn.fromLoader(i, r, n, o).then((function(i) {
								t.texture = i, e()
							})).catch(e)
						}
					}, t
				}(),
				Js = self.URL || self.webkitURL;
			Vs.registerPlugin({
					use: function(t, e) {
						if (t.data) {
							if (t.xhr && t.xhrType === Gs.XHR_RESPONSE_TYPE.BLOB)
								if (self.Blob && "string" != typeof t.data) {
									if (0 === t.data.type.indexOf("image")) {
										var i = Js.createObjectURL(t.data);
										return t.blob = t.data, t.data = new Image, t.data.src = i, t.type = Gs.TYPE.IMAGE, void(t.data.onload = function() {
											Js.revokeObjectURL(i), t.data.onload = null, e()
										})
									}
								} else {
									var r = t.xhr.getResponseHeader("content-type");
									if (r && 0 === r.indexOf("image")) return t.data = new Image, t.data.src = "data:" + r + ";base64," + function(t) {
										for (var e = "", i = 0; i < t.length;) {
											for (var r = [0, 0, 0], n = [0, 0, 0, 0], o = 0; o < r.length; ++o) i < t.length ? r[o] = 255 & t.charCodeAt(i++) : r[o] = 0;
											switch (n[0] = r[0] >> 2, n[1] = (3 & r[0]) << 4 | r[1] >> 4, n[2] = (15 & r[1]) << 2 | r[2] >> 6, n[3] = 63 & r[2], i - (t.length - 1)) {
												case 2:
													n[3] = 64, n[2] = 64;
													break;
												case 1:
													n[3] = 64
											}
											for (o = 0; o < n.length; ++o) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n[o])
										}
										return e
									}(t.xhr.responseText), t.type = Gs.TYPE.IMAGE, void(t.data.onload = function() {
										t.data.onload = null, e()
									})
								} e()
						} else e()
					}
				}), Vs.registerPlugin(Zs),
				function(t) {
					t[t.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", t[t.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", t[t.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", t[t.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", t[t.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", t[t.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", t[t.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", t[t.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", t[t.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", t[t.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"
				}(qs || (qs = {}));
			var $s = ((Ws = {})[qs.COMPRESSED_RGB_S3TC_DXT1_EXT] = .5, Ws[qs.COMPRESSED_RGBA_S3TC_DXT1_EXT] = .5, Ws[qs.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1, Ws[qs.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1, Ws[qs.COMPRESSED_SRGB_S3TC_DXT1_EXT] = .5, Ws[qs.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = .5, Ws[qs.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1, Ws[qs.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1, Ws[qs.COMPRESSED_R11_EAC] = .5, Ws[qs.COMPRESSED_SIGNED_R11_EAC] = .5, Ws[qs.COMPRESSED_RG11_EAC] = 1, Ws[qs.COMPRESSED_SIGNED_RG11_EAC] = 1, Ws[qs.COMPRESSED_RGB8_ETC2] = .5, Ws[qs.COMPRESSED_RGBA8_ETC2_EAC] = 1, Ws[qs.COMPRESSED_SRGB8_ETC2] = .5, Ws[qs.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1, Ws[qs.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = .5, Ws[qs.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = .5, Ws[qs.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = .5, Ws[qs.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = .5, Ws[qs.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = .25, Ws[qs.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = .25, Ws[qs.COMPRESSED_RGB_ETC1_WEBGL] = .5, Ws[qs.COMPRESSED_RGB_ATC_WEBGL] = .5, Ws[qs.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1, Ws[qs.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1, Ws),
				Qs = function(t, e) {
					return Qs = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, Qs(t, e)
				};

			function ta(t, e) {
				function i() {
					this.constructor = t
				}
				Qs(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var ea, ia, ra = function(t) {
					function e(e, i) {
						void 0 === i && (i = {
							width: 1,
							height: 1,
							autoLoad: !0
						});
						var r, n, o = this;
						return "string" == typeof e ? (r = e, n = new Uint8Array) : (r = null, n = e), (o = t.call(this, n, i) || this).origin = r, o.buffer = n ? new ps(n) : null, o.origin && !1 !== i.autoLoad && o.load(), n && n.length && (o.loaded = !0, o.onBlobLoaded(o.buffer.rawBinaryData)), o
					}
					return ta(e, t), e.prototype.onBlobLoaded = function(t) {}, e.prototype.load = function() {
						return t = this, void 0, i = function() {
							var t;
							return function(t, e) {
								var i, r, n, o, s = {
									label: 0,
									sent: function() {
										if (1 & n[0]) throw n[1];
										return n[1]
									},
									trys: [],
									ops: []
								};
								return o = {
									next: a(0),
									throw: a(1),
									return: a(2)
								}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
									return this
								}), o;

								function a(o) {
									return function(a) {
										return function(o) {
											if (i) throw new TypeError("Generator is already executing.");
											for (; s;) try {
												if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
												switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
													case 0:
													case 1:
														n = o;
														break;
													case 4:
														return s.label++, {
															value: o[1],
															done: !1
														};
													case 5:
														s.label++, r = o[1], o = [0];
														continue;
													case 7:
														o = s.ops.pop(), s.trys.pop();
														continue;
													default:
														if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
															s = 0;
															continue
														}
														if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
															s.label = o[1];
															break
														}
														if (6 === o[0] && s.label < n[1]) {
															s.label = n[1], n = o;
															break
														}
														if (n && s.label < n[2]) {
															s.label = n[2], s.ops.push(o);
															break
														}
														n[2] && s.ops.pop(), s.trys.pop();
														continue
												}
												o = e.call(t, s)
											} catch (t) {
												o = [6, t], r = 0
											} finally {
												i = n = 0
											}
											if (5 & o[0]) throw o[1];
											return {
												value: o[0] ? o[1] : void 0,
												done: !0
											}
										}([o, a])
									}
								}
							}(this, (function(e) {
								switch (e.label) {
									case 0:
										return [4, fetch(this.origin)];
									case 1:
										return [4, e.sent().blob()];
									case 2:
										return [4, e.sent().arrayBuffer()];
									case 3:
										return t = e.sent(), this.data = new Uint32Array(t), this.buffer = new ps(t), this.loaded = !0, this.onBlobLoaded(t), this.update(), [2, this]
								}
							}))
						}, new((e = Promise) || (e = Promise))((function(r, n) {
							function o(t) {
								try {
									a(i.next(t))
								} catch (t) {
									n(t)
								}
							}

							function s(t) {
								try {
									a(i.throw(t))
								} catch (t) {
									n(t)
								}
							}

							function a(t) {
								t.done ? r(t.value) : new e((function(e) {
									e(t.value)
								})).then(o, s)
							}
							a((i = i.apply(t, [])).next())
						}));
						var t, e, i
					}, e
				}(an),
				na = function(t) {
					function e(i, r) {
						var n = t.call(this, i, r) || this;
						return n.format = r.format, n.levels = r.levels || 1, n._width = r.width, n._height = r.height, n._extension = e._formatToExtension(n.format), (r.levelBuffers || n.buffer) && (n._levelBuffers = r.levelBuffers || e._createLevelBuffers(i instanceof Uint8Array ? i : n.buffer.uint8View, n.format, n.levels, 4, 4, n.width, n.height)), n
					}
					return ta(e, t), e.prototype.upload = function(t, e, i) {
						var r = t.gl;
						if (!t.context.extensions[this._extension]) throw new Error(this._extension + " textures are not supported on the current machine");
						if (!this._levelBuffers) return !1;
						for (var n = 0, o = this.levels; n < o; n++) {
							var s = this._levelBuffers[n],
								a = s.levelID,
								h = s.levelWidth,
								u = s.levelHeight,
								l = s.levelBuffer;
							r.compressedTexImage2D(r.TEXTURE_2D, a, this.format, h, u, 0, l)
						}
						return !0
					}, e.prototype.onBlobLoaded = function() {
						this._levelBuffers = e._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height)
					}, e._formatToExtension = function(t) {
						if (t >= 33776 && t <= 33779) return "s3tc";
						if (t >= 37488 && t <= 37497) return "etc";
						if (t >= 35840 && t <= 35843) return "pvrtc";
						if (t >= 36196) return "etc1";
						if (t >= 35986 && t <= 34798) return "atc";
						throw new Error("Invalid (compressed) texture format given!")
					}, e._createLevelBuffers = function(t, e, i, r, n, o, s) {
						for (var a = new Array(i), h = t.byteOffset, u = o, l = s, c = u + r - 1 & ~(r - 1), d = l + n - 1 & ~(n - 1), f = c * d * $s[e], p = 0; p < i; p++) a[p] = {
							levelID: p,
							levelWidth: i > 1 ? u : c,
							levelHeight: i > 1 ? l : d,
							levelBuffer: new Uint8Array(t.buffer, h, f)
						}, h += f, f = (c = (u = u >> 1 || 1) + r - 1 & ~(r - 1)) * (d = (l = l >> 1 || 1) + n - 1 & ~(n - 1)) * $s[e];
						return a
					}, e
				}(ra),
				oa = function() {
					function t() {}
					return t.use = function(e, i) {
						var r = e.data;
						if (e.type === Gs.TYPE.JSON && r && r.cacheID && r.textures) {
							for (var n = r.textures, o = void 0, s = void 0, a = 0, h = n.length; a < h; a++) {
								var u = n[a],
									l = u.src,
									c = u.format;
								if (c || (s = l), t.textureFormats[c]) {
									o = l;
									break
								}
							}
							if (!(o = o || s)) return void i(new Error("Cannot load compressed-textures in " + e.url + ", make sure you provide a fallback"));
							if (o === e.url) return void i(new Error("URL of compressed texture cannot be the same as the manifest's URL"));
							var d = {
									crossOrigin: e.crossOrigin,
									metadata: e.metadata.imageMetadata,
									parentResource: e
								},
								f = Ai.resolve(e.url.replace(this.baseUrl, ""), o),
								p = r.cacheID;
							this.add(p, f, d, (function(t) {
								if (t.error) i(t.error);
								else {
									var r = t.texture,
										n = void 0 === r ? null : r,
										o = t.textures,
										s = void 0 === o ? {} : o;
									Object.assign(e, {
										texture: n,
										textures: s
									}), i()
								}
							}))
						} else i()
					}, t.add = function() {
						var e = document.createElement("canvas").getContext("webgl");
						if (e) {
							var i = {
								s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
								s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
								etc: e.getExtension("WEBGL_compressed_texture_etc"),
								etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
								pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
								atc: e.getExtension("WEBGL_compressed_texture_atc"),
								astc: e.getExtension("WEBGL_compressed_texture_astc")
							};
							for (var r in t.textureExtensions = i, t.textureFormats = {}, i) {
								var n = i[r];
								n && Object.assign(t.textureFormats, Object.getPrototypeOf(n))
							}
						} else console.warn("WebGL not available for compressed textures. Silently failing.")
					}, t
				}();

			function sa(t, e, i) {
				var r = {
					textures: {},
					texture: null
				};
				return e ? (e.map((function(t) {
					return new Sn(new un(t, Object.assign({
						mipmap: li.OFF,
						alphaMode: ci.NO_PREMULTIPLIED_ALPHA
					}, i)))
				})).forEach((function(e, i) {
					var n = e.baseTexture,
						o = t + "-" + (i + 1);
					un.addToCache(n, o), Sn.addToCache(e, o), 0 === i && (un.addToCache(n, t), Sn.addToCache(e, t), r.texture = e), r.textures[o] = e
				})), r) : r
			}
			Gs.setExtensionXhrType("dds", Gs.XHR_RESPONSE_TYPE.BUFFER);
			var aa, ha;
			! function(t) {
				t[t.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN", t[t.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS", t[t.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT", t[t.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT", t[t.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT", t[t.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS", t[t.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT", t[t.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT", t[t.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT", t[t.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS", t[t.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT", t[t.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM", t[t.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT", t[t.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM", t[t.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT", t[t.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS", t[t.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT", t[t.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT", t[t.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT", t[t.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS", t[t.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT", t[t.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS", t[t.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT", t[t.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS", t[t.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM", t[t.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT", t[t.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT", t[t.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS", t[t.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM", t[t.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB", t[t.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT", t[t.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM", t[t.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT", t[t.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS", t[t.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT", t[t.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM", t[t.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT", t[t.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM", t[t.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT", t[t.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS", t[t.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT", t[t.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT", t[t.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT", t[t.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT", t[t.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS", t[t.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT", t[t.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS", t[t.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT", t[t.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS", t[t.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM", t[t.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT", t[t.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM", t[t.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT", t[t.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS", t[t.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT", t[t.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM", t[t.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM", t[t.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT", t[t.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM", t[t.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT", t[t.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS", t[t.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM", t[t.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT", t[t.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM", t[t.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT", t[t.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM", t[t.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM", t[t.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP", t[t.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM", t[t.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM", t[t.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS", t[t.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM", t[t.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB", t[t.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS", t[t.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM", t[t.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB", t[t.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS", t[t.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM", t[t.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB", t[t.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS", t[t.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM", t[t.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM", t[t.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS", t[t.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM", t[t.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM", t[t.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM", t[t.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM", t[t.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM", t[t.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM", t[t.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM", t[t.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS", t[t.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB", t[t.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS", t[t.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB", t[t.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS", t[t.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16", t[t.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16", t[t.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS", t[t.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM", t[t.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB", t[t.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV", t[t.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410", t[t.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416", t[t.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12", t[t.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010", t[t.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016", t[t.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE", t[t.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2", t[t.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210", t[t.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216", t[t.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11", t[t.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44", t[t.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44", t[t.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8", t[t.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8", t[t.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM", t[t.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208", t[t.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208", t[t.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408", t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE", t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE", t[t.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT"
			}(aa || (aa = {})),
			function(t) {
				t[t.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D", t[t.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D", t[t.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D"
			}(ha || (ha = {}));
			var ua, la, ca, da = ((ea = {})[827611204] = qs.COMPRESSED_RGBA_S3TC_DXT1_EXT, ea[861165636] = qs.COMPRESSED_RGBA_S3TC_DXT3_EXT, ea[894720068] = qs.COMPRESSED_RGBA_S3TC_DXT5_EXT, ea),
				fa = ((ia = {})[aa.DXGI_FORMAT_BC1_TYPELESS] = qs.COMPRESSED_RGBA_S3TC_DXT1_EXT, ia[aa.DXGI_FORMAT_BC1_UNORM] = qs.COMPRESSED_RGBA_S3TC_DXT1_EXT, ia[aa.DXGI_FORMAT_BC2_TYPELESS] = qs.COMPRESSED_RGBA_S3TC_DXT3_EXT, ia[aa.DXGI_FORMAT_BC2_UNORM] = qs.COMPRESSED_RGBA_S3TC_DXT3_EXT, ia[aa.DXGI_FORMAT_BC3_TYPELESS] = qs.COMPRESSED_RGBA_S3TC_DXT5_EXT, ia[aa.DXGI_FORMAT_BC3_UNORM] = qs.COMPRESSED_RGBA_S3TC_DXT5_EXT, ia[aa.DXGI_FORMAT_BC1_UNORM_SRGB] = qs.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, ia[aa.DXGI_FORMAT_BC2_UNORM_SRGB] = qs.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, ia[aa.DXGI_FORMAT_BC3_UNORM_SRGB] = qs.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT, ia),
				pa = function() {
					function t() {}
					return t.use = function(e, i) {
						if ("dds" === e.extension && e.data) try {
							Object.assign(e, sa(e.name || e.url, t.parse(e.data), e.metadata))
						} catch (t) {
							return void i(t)
						}
						i()
					}, t.parse = function(t) {
						var e = new Uint32Array(t);
						if (542327876 !== e[0]) throw new Error("Invalid DDS file magic word");
						var i = new Uint32Array(t, 0, 124 / Uint32Array.BYTES_PER_ELEMENT),
							r = i[3],
							n = i[4],
							o = i[7],
							s = new Uint32Array(t, 19 * Uint32Array.BYTES_PER_ELEMENT, 32 / Uint32Array.BYTES_PER_ELEMENT),
							a = s[1];
						if (4 & a) {
							var h = s[2];
							if (808540228 !== h) {
								var u = da[h],
									l = new Uint8Array(t, 128);
								return [new na(l, {
									format: u,
									width: n,
									height: r,
									levels: o
								})]
							}
							var c = new Uint32Array(e.buffer, 128, 20 / Uint32Array.BYTES_PER_ELEMENT),
								d = c[0],
								f = c[1],
								p = c[2],
								_ = c[3],
								m = fa[d];
							if (void 0 === m) throw new Error("DDSLoader cannot parse texture data with DXGI format " + d);
							if (4 === p) throw new Error("DDSLoader does not support cubemap textures");
							if (f === ha.DDS_DIMENSION_TEXTURE3D) throw new Error("DDSLoader does not supported 3D texture data");
							var g = new Array;
							if (1 === _) g.push(new Uint8Array(t, 148));
							else {
								for (var y = $s[m], v = 0, T = n, b = r, E = 0; E < o; E++) v += Math.max(1, T + 3 & -4) * Math.max(1, b + 3 & -4) * y, T >>>= 1, b >>>= 1;
								var x = 148;
								for (E = 0; E < _; E++) g.push(new Uint8Array(t, x, v)), x += v
							}
							return g.map((function(t) {
								return new na(t, {
									format: m,
									width: n,
									height: r,
									levels: o
								})
							}))
						}
						if (64 & a) throw new Error("DDSLoader does not support uncompressed texture data.");
						if (512 & a) throw new Error("DDSLoader does not supported YUV uncompressed texture data.");
						if (131072 & a) throw new Error("DDSLoader does not support single-channel (lumninance) texture data!");
						if (2 & a) throw new Error("DDSLoader does not support single-channel (alpha) texture data!");
						throw new Error("DDSLoader failed to load a texture file due to an unknown reason!")
					}, t
				}();
			Gs.setExtensionXhrType("ktx", Gs.XHR_RESPONSE_TYPE.BUFFER);
			var _a = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
				ma = ((ua = {})[si.UNSIGNED_BYTE] = 1, ua[si.UNSIGNED_SHORT] = 2, ua[si.FLOAT] = 4, ua[si.HALF_FLOAT] = 8, ua),
				ga = ((la = {})[ni.RGBA] = 4, la[ni.RGB] = 3, la[ni.LUMINANCE] = 1, la[ni.LUMINANCE_ALPHA] = 2, la[ni.ALPHA] = 1, la),
				ya = ((ca = {})[si.UNSIGNED_SHORT_4_4_4_4] = 2, ca[si.UNSIGNED_SHORT_5_5_5_1] = 2, ca[si.UNSIGNED_SHORT_5_6_5] = 2, ca),
				va = function() {
					function t() {}
					return t.use = function(e, i) {
						if ("ktx" === e.extension && e.data) try {
							var r = e.name || e.url;
							Object.assign(e, sa(r, t.parse(r, e.data), e.metadata))
						} catch (t) {
							return void i(t)
						}
						i()
					}, t.parse = function(e, i) {
						var r = new DataView(i);
						if (!t.validate(e, r)) return null;
						var n = 67305985 === r.getUint32(12, !0),
							o = r.getUint32(16, n),
							s = r.getUint32(24, n),
							a = r.getUint32(28, n),
							h = r.getUint32(36, n),
							u = r.getUint32(40, n) || 1,
							l = r.getUint32(44, n) || 1,
							c = r.getUint32(48, n) || 1,
							d = r.getUint32(52, n),
							f = r.getUint32(56, n),
							p = r.getUint32(60, n);
						if (0 === u || 1 !== l) throw new Error("Only 2D textures are supported");
						if (1 !== d) throw new Error("CubeTextures are not supported by KTXLoader yet!");
						if (1 !== c) throw new Error("WebGL does not support array textures");
						var _, m = h + 3 & -4,
							g = u + 3 & -4,
							y = new Array(c),
							v = h * u;
						if (0 === o && (v = m * g), void 0 === (_ = 0 !== o ? ma[o] ? ma[o] * ga[s] : ya[o] : $s[a])) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
						for (var T = v * _, b = h, E = u, x = m, A = g, S = 64 + p, w = 0; w < f; w++) {
							for (var R = r.getUint32(S, n), O = S + 4, I = 0; I < c; I++) {
								var P = y[I];
								P || (P = y[I] = new Array(f)), P[w] = {
									levelID: w,
									levelWidth: f > 1 ? b : x,
									levelHeight: f > 1 ? E : A,
									levelBuffer: new Uint8Array(i, O, T)
								}, O += T
							}
							S = (S += R + 4) % 4 != 0 ? S + 4 - S % 4 : S, T = (x = (b = b >> 1 || 1) + 4 - 1 & -4) * (A = (E = E >> 1 || 1) + 4 - 1 & -4) * _
						}
						if (0 !== o) throw new Error("TODO: Uncompressed");
						return y.map((function(t) {
							return new na(null, {
								format: a,
								width: h,
								height: u,
								levels: f,
								levelBuffers: t
							})
						}))
					}, t.validate = function(t, e) {
						for (var i = 0; i < _a.length; i++)
							if (e.getUint8(i) !== _a[i]) return console.error(t + " is not a valid *.ktx file!"), !1;
						return !0
					}, t
				}(),
				Ta = function(t, e) {
					return Ta = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, Ta(t, e)
				};

			function ba(t, e) {
				function i() {
					this.constructor = t
				}
				Ta(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var Ea, xa, Aa = function(t) {
					function e(e, i, r, n) {
						void 0 === e && (e = 1500), void 0 === r && (r = 16384), void 0 === n && (n = !1);
						var o = t.call(this) || this;
						return r > 16384 && (r = 16384), o._properties = [!1, !0, !1, !1, !1], o._maxSize = e, o._batchSize = r, o._buffers = null, o._bufferUpdateIDs = [], o._updateID = 0, o.interactiveChildren = !1, o.blendMode = ii.NORMAL, o.autoResize = n, o.roundPixels = !0, o.baseTexture = null, o.setProperties(i), o._tint = 0, o.tintRgb = new Float32Array(4), o.tint = 16777215, o
					}
					return ba(e, t), e.prototype.setProperties = function(t) {
						t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
					}, e.prototype.updateTransform = function() {
						this.displayObjectUpdateTransform()
					}, Object.defineProperty(e.prototype, "tint", {
						get: function() {
							return this._tint
						},
						set: function(t) {
							this._tint = t, Mi(t, this.tintRgb)
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.render = function(t) {
						var e = this;
						this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", (function() {
							return e.onChildrenChange(0)
						}))), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
					}, e.prototype.onChildrenChange = function(t) {
						for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
						this._bufferUpdateIDs[e] = ++this._updateID
					}, e.prototype.dispose = function() {
						if (this._buffers) {
							for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
							this._buffers = null
						}
					}, e.prototype.destroy = function(e) {
						t.prototype.destroy.call(this, e), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
					}, e
				}(Ur),
				Sa = function() {
					function t(t, e, i) {
						this.geometry = new Fn, this.indexBuffer = null, this.size = i, this.dynamicProperties = [], this.staticProperties = [];
						for (var r = 0; r < t.length; ++r) {
							var n = t[r];
							n = {
								attributeName: n.attributeName,
								size: n.size,
								uploadFunction: n.uploadFunction,
								type: n.type || si.FLOAT,
								offset: n.offset
							}, e[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
						}
						this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
					}
					return t.prototype.initBuffers = function() {
						var t = this.geometry,
							e = 0;
						this.indexBuffer = new Mn(Gi(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
						for (var i = 0; i < this.dynamicProperties.length; ++i)(s = this.dynamicProperties[i]).offset = e, e += s.size, this.dynamicStride += s.size;
						var r = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
						this.dynamicData = new Float32Array(r), this.dynamicDataUint32 = new Uint32Array(r), this.dynamicBuffer = new Mn(this.dynamicData, !1, !1);
						var n = 0;
						for (this.staticStride = 0, i = 0; i < this.staticProperties.length; ++i)(s = this.staticProperties[i]).offset = n, n += s.size, this.staticStride += s.size;
						var o = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
						for (this.staticData = new Float32Array(o), this.staticDataUint32 = new Uint32Array(o), this.staticBuffer = new Mn(this.staticData, !0, !1), i = 0; i < this.dynamicProperties.length; ++i) {
							var s = this.dynamicProperties[i];
							t.addAttribute(s.attributeName, this.dynamicBuffer, 0, s.type === si.UNSIGNED_BYTE, s.type, 4 * this.dynamicStride, 4 * s.offset)
						}
						for (i = 0; i < this.staticProperties.length; ++i) s = this.staticProperties[i], t.addAttribute(s.attributeName, this.staticBuffer, 0, s.type === si.UNSIGNED_BYTE, s.type, 4 * this.staticStride, 4 * s.offset)
					}, t.prototype.uploadDynamic = function(t, e, i) {
						for (var r = 0; r < this.dynamicProperties.length; r++) {
							var n = this.dynamicProperties[r];
							n.uploadFunction(t, e, i, n.type === si.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
						}
						this.dynamicBuffer._updateID++
					}, t.prototype.uploadStatic = function(t, e, i) {
						for (var r = 0; r < this.staticProperties.length; r++) {
							var n = this.staticProperties[r];
							n.uploadFunction(t, e, i, n.type === si.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
						}
						this.staticBuffer._updateID++
					}, t.prototype.destroy = function() {
						this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy()
					}, t
				}(),
				wa = function(t) {
					function e(e) {
						var i = t.call(this, e) || this;
						return i.shader = null, i.properties = null, i.tempMatrix = new Er, i.properties = [{
							attributeName: "aVertexPosition",
							size: 2,
							uploadFunction: i.uploadVertices,
							offset: 0
						}, {
							attributeName: "aPositionCoord",
							size: 2,
							uploadFunction: i.uploadPosition,
							offset: 0
						}, {
							attributeName: "aRotation",
							size: 1,
							uploadFunction: i.uploadRotation,
							offset: 0
						}, {
							attributeName: "aTextureCoord",
							size: 2,
							uploadFunction: i.uploadUvs,
							offset: 0
						}, {
							attributeName: "aColor",
							size: 1,
							type: si.UNSIGNED_BYTE,
							uploadFunction: i.uploadTint,
							offset: 0
						}], i.shader = wo.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n", "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}", {}), i.state = Ro.for2d(), i
					}
					return ba(e, t), e.prototype.render = function(t) {
						var e = t.children,
							i = t._maxSize,
							r = t._batchSize,
							n = this.renderer,
							o = e.length;
						if (0 !== o) {
							o > i && !t.autoResize && (o = i);
							var s = t._buffers;
							s || (s = t._buffers = this.generateBuffers(t));
							var a = e[0]._texture.baseTexture;
							this.state.blendMode = Fi(t.blendMode, a.alphaMode), n.state.set(this.state);
							var h = n.gl,
								u = t.worldTransform.copyTo(this.tempMatrix);
							u.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u.toArray(!0), this.shader.uniforms.uColor = Bi(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, a.alphaMode), this.shader.uniforms.uSampler = a, this.renderer.shader.bind(this.shader);
							for (var l = !1, c = 0, d = 0; c < o; c += r, d += 1) {
								var f = o - c;
								f > r && (f = r), d >= s.length && s.push(this._generateOneMoreBuffer(t));
								var p = s[d];
								p.uploadDynamic(e, c, f);
								var _ = t._bufferUpdateIDs[d] || 0;
								(l = l || p._updateID < _) && (p._updateID = t._updateID, p.uploadStatic(e, c, f)), n.geometry.bind(p.geometry), h.drawElements(h.TRIANGLES, 6 * f, h.UNSIGNED_SHORT, 0)
							}
						}
					}, e.prototype.generateBuffers = function(t) {
						for (var e = [], i = t._maxSize, r = t._batchSize, n = t._properties, o = 0; o < i; o += r) e.push(new Sa(this.properties, n, r));
						return e
					}, e.prototype._generateOneMoreBuffer = function(t) {
						var e = t._batchSize,
							i = t._properties;
						return new Sa(this.properties, i, e)
					}, e.prototype.uploadVertices = function(t, e, i, r, n, o) {
						for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < i; ++l) {
							var c = t[e + l],
								d = c._texture,
								f = c.scale.x,
								p = c.scale.y,
								_ = d.trim,
								m = d.orig;
							_ ? (s = (a = _.x - c.anchor.x * m.width) + _.width, h = (u = _.y - c.anchor.y * m.height) + _.height) : (s = m.width * (1 - c.anchor.x), a = m.width * -c.anchor.x, h = m.height * (1 - c.anchor.y), u = m.height * -c.anchor.y), r[o] = a * f, r[o + 1] = u * p, r[o + n] = s * f, r[o + n + 1] = u * p, r[o + 2 * n] = s * f, r[o + 2 * n + 1] = h * p, r[o + 3 * n] = a * f, r[o + 3 * n + 1] = h * p, o += 4 * n
						}
					}, e.prototype.uploadPosition = function(t, e, i, r, n, o) {
						for (var s = 0; s < i; s++) {
							var a = t[e + s].position;
							r[o] = a.x, r[o + 1] = a.y, r[o + n] = a.x, r[o + n + 1] = a.y, r[o + 2 * n] = a.x, r[o + 2 * n + 1] = a.y, r[o + 3 * n] = a.x, r[o + 3 * n + 1] = a.y, o += 4 * n
						}
					}, e.prototype.uploadRotation = function(t, e, i, r, n, o) {
						for (var s = 0; s < i; s++) {
							var a = t[e + s].rotation;
							r[o] = a, r[o + n] = a, r[o + 2 * n] = a, r[o + 3 * n] = a, o += 4 * n
						}
					}, e.prototype.uploadUvs = function(t, e, i, r, n, o) {
						for (var s = 0; s < i; ++s) {
							var a = t[e + s]._texture._uvs;
							a ? (r[o] = a.x0, r[o + 1] = a.y0, r[o + n] = a.x1, r[o + n + 1] = a.y1, r[o + 2 * n] = a.x2, r[o + 2 * n + 1] = a.y2, r[o + 3 * n] = a.x3, r[o + 3 * n + 1] = a.y3, o += 4 * n) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + 2 * n] = 0, r[o + 2 * n + 1] = 0, r[o + 3 * n] = 0, r[o + 3 * n + 1] = 0, o += 4 * n)
						}
					}, e.prototype.uploadTint = function(t, e, i, r, n, o) {
						for (var s = 0; s < i; ++s) {
							var a = t[e + s],
								h = a._texture.baseTexture.alphaMode > 0,
								u = a.alpha,
								l = u < 1 && h ? Ui(a._tintRGB, u) : a._tintRGB + (255 * u << 24);
							r[o] = l, r[o + n] = l, r[o + 2 * n] = l, r[o + 3 * n] = l, o += 4 * n
						}
					}, e.prototype.destroy = function() {
						t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null
					}, e
				}(Yn);
			! function(t) {
				t.MITER = "miter", t.BEVEL = "bevel", t.ROUND = "round"
			}(Ea || (Ea = {})),
			function(t) {
				t.BUTT = "butt", t.ROUND = "round", t.SQUARE = "square"
			}(xa || (xa = {}));
			var Ra = {
					adaptive: !0,
					maxLength: 10,
					minSegments: 8,
					maxSegments: 2048,
					epsilon: 1e-4,
					_segmentsCount: function(t, e) {
						if (void 0 === e && (e = 20), !this.adaptive || !t || isNaN(t)) return e;
						var i = Math.ceil(t / this.maxLength);
						return i < this.minSegments ? i = this.minSegments : i > this.maxSegments && (i = this.maxSegments), i
					}
				},
				Oa = function() {
					function t() {
						this.color = 16777215, this.alpha = 1, this.texture = Sn.WHITE, this.matrix = null, this.visible = !1, this.reset()
					}
					return t.prototype.clone = function() {
						var e = new t;
						return e.color = this.color, e.alpha = this.alpha, e.texture = this.texture, e.matrix = this.matrix, e.visible = this.visible, e
					}, t.prototype.reset = function() {
						this.color = 16777215, this.alpha = 1, this.texture = Sn.WHITE, this.matrix = null, this.visible = !1
					}, t.prototype.destroy = function() {
						this.texture = null, this.matrix = null
					}, t
				}(),
				Ia = function(t, e) {
					return Ia = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, Ia(t, e)
				};

			function Pa(t, e) {
				function i() {
					this.constructor = t
				}
				Ia(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var Ma = {
					build: function(t) {
						t.points = t.shape.points.slice()
					},
					triangulate: function(t, e) {
						var i = t.points,
							r = t.holes,
							n = e.points,
							o = e.indices;
						if (i.length >= 6) {
							for (var s = [], a = 0; a < r.length; a++) {
								var h = r[a];
								s.push(i.length / 2), i = i.concat(h.points)
							}
							var u = Ei()(i, s, 2);
							if (!u) return;
							var l = n.length / 2;
							for (a = 0; a < u.length; a += 3) o.push(u[a] + l), o.push(u[a + 1] + l), o.push(u[a + 2] + l);
							for (a = 0; a < i.length; a++) n.push(i[a])
						}
					}
				},
				Ca = {
					build: function(t) {
						var e, i, r = t.shape,
							n = t.points,
							o = r.x,
							s = r.y;
						if (n.length = 0, t.type === cr.CIRC) e = r.radius, i = r.radius;
						else {
							var a = t.shape;
							e = a.width, i = a.height
						}
						if (0 !== e && 0 !== i) {
							var h = Math.floor(30 * Math.sqrt(r.radius)) || Math.floor(15 * Math.sqrt(e + i));
							h /= 2.3;
							for (var u = 2 * Math.PI / h, l = 0; l < h - .5; l++) n.push(o + Math.sin(-u * l) * e, s + Math.cos(-u * l) * i);
							n.push(n[0], n[1])
						}
					},
					triangulate: function(t, e) {
						var i = t.points,
							r = e.points,
							n = e.indices,
							o = r.length / 2,
							s = o,
							a = t.shape,
							h = t.matrix,
							u = a.x,
							l = a.y;
						r.push(t.matrix ? h.a * u + h.c * l + h.tx : u, t.matrix ? h.b * u + h.d * l + h.ty : l);
						for (var c = 0; c < i.length; c += 2) r.push(i[c], i[c + 1]), n.push(o++, s, o)
					}
				},
				Da = {
					build: function(t) {
						var e = t.shape,
							i = e.x,
							r = e.y,
							n = e.width,
							o = e.height,
							s = t.points;
						s.length = 0, s.push(i, r, i + n, r, i + n, r + o, i, r + o)
					},
					triangulate: function(t, e) {
						var i = t.points,
							r = e.points,
							n = r.length / 2;
						r.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]), e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3)
					}
				};

			function Na(t, e, i) {
				return t + (e - t) * i
			}

			function La(t, e, i, r, n, o, s) {
				void 0 === s && (s = []);
				for (var a = s, h = 0, u = 0, l = 0, c = 0, d = 0, f = 0, p = 0, _ = 0; p <= 20; ++p) h = Na(t, i, _ = p / 20), u = Na(e, r, _), l = Na(i, n, _), c = Na(r, o, _), d = Na(h, l, _), f = Na(u, c, _), 0 === p && a[a.length - 2] === d && a[a.length - 1] === f || a.push(d, f);
				return a
			}
			var Fa = {
				build: function(t) {
					var e = t.shape,
						i = t.points,
						r = e.x,
						n = e.y,
						o = e.width,
						s = e.height,
						a = Math.max(0, Math.min(e.radius, Math.min(o, s) / 2));
					i.length = 0, a ? (La(r, n + a, r, n, r + a, n, i), La(r + o - a, n, r + o, n, r + o, n + a, i), La(r + o, n + s - a, r + o, n + s, r + o - a, n + s, i), La(r + a, n + s, r, n + s, r, n + s - a, i)) : i.push(r, n, r + o, n, r + o, n + s, r, n + s)
				},
				triangulate: function(t, e) {
					for (var i = t.points, r = e.points, n = e.indices, o = r.length / 2, s = Ei()(i, null, 2), a = 0, h = s.length; a < h; a += 3) n.push(s[a] + o), n.push(s[a + 1] + o), n.push(s[a + 2] + o);
					for (a = 0, h = i.length; a < h; a++) r.push(i[a], i[++a])
				}
			};

			function Ba(t, e, i, r, n, o, s, a) {
				var h, u;
				s ? (h = r, u = -i) : (h = -r, u = i);
				var l = t - i * n + h,
					c = e - r * n + u,
					d = t + i * o + h,
					f = e + r * o + u;
				return a.push(l, c), a.push(d, f), 2
			}

			function Ua(t, e, i, r, n, o, s, a) {
				var h = i - t,
					u = r - e,
					l = Math.atan2(h, u),
					c = Math.atan2(n - t, o - e);
				a && l < c ? l += 2 * Math.PI : !a && l > c && (c += 2 * Math.PI);
				var d = l,
					f = c - l,
					p = Math.abs(f),
					_ = Math.sqrt(h * h + u * u),
					m = 1 + (15 * p * Math.sqrt(_) / Math.PI >> 0),
					g = f / m;
				if (d += g, a) {
					s.push(t, e), s.push(i, r);
					for (var y = 1, v = d; y < m; y++, v += g) s.push(t, e), s.push(t + Math.sin(v) * _, e + Math.cos(v) * _);
					s.push(t, e), s.push(n, o)
				} else {
					for (s.push(i, r), s.push(t, e), y = 1, v = d; y < m; y++, v += g) s.push(t + Math.sin(v) * _, e + Math.cos(v) * _), s.push(t, e);
					s.push(n, o), s.push(t, e)
				}
				return 2 * m
			}

			function ka(t, e) {
				t.lineStyle.native ? function(t, e) {
					var i = 0,
						r = t.shape,
						n = t.points || r.points,
						o = r.type !== cr.POLY || r.closeStroke;
					if (0 !== n.length) {
						var s = e.points,
							a = e.indices,
							h = n.length / 2,
							u = s.length / 2,
							l = u;
						for (s.push(n[0], n[1]), i = 1; i < h; i++) s.push(n[2 * i], n[2 * i + 1]), a.push(l, l + 1), l++;
						o && a.push(l, u)
					}
				}(t, e) : function(t, e) {
					var i = t.shape,
						r = t.points || i.points.slice(),
						n = e.closePointEps;
					if (0 !== r.length) {
						var o = t.lineStyle,
							s = new Tr(r[0], r[1]),
							a = new Tr(r[r.length - 2], r[r.length - 1]),
							h = i.type !== cr.POLY || i.closeStroke,
							u = Math.abs(s.x - a.x) < n && Math.abs(s.y - a.y) < n;
						if (h) {
							r = r.slice(), u && (r.pop(), r.pop(), a.set(r[r.length - 2], r[r.length - 1]));
							var l = .5 * (s.x + a.x),
								c = .5 * (a.y + s.y);
							r.unshift(l, c), r.push(l, c)
						}
						var d = e.points,
							f = r.length / 2,
							p = r.length,
							_ = d.length / 2,
							m = o.width / 2,
							g = m * m,
							y = o.miterLimit * o.miterLimit,
							v = r[0],
							T = r[1],
							b = r[2],
							E = r[3],
							x = 0,
							A = 0,
							S = -(T - E),
							w = v - b,
							R = 0,
							O = 0,
							I = Math.sqrt(S * S + w * w);
						S /= I, w /= I, S *= m, w *= m;
						var P = o.alignment,
							M = 2 * (1 - P),
							C = 2 * P;
						h || (o.cap === xa.ROUND ? p += Ua(v - S * (M - C) * .5, T - w * (M - C) * .5, v - S * M, T - w * M, v + S * C, T + w * C, d, !0) + 2 : o.cap === xa.SQUARE && (p += Ba(v, T, S, w, M, C, !0, d))), d.push(v - S * M, T - w * M), d.push(v + S * C, T + w * C);
						for (var D = 1; D < f - 1; ++D) {
							v = r[2 * (D - 1)], T = r[2 * (D - 1) + 1], b = r[2 * D], E = r[2 * D + 1], x = r[2 * (D + 1)], A = r[2 * (D + 1) + 1], S = -(T - E), w = v - b, S /= I = Math.sqrt(S * S + w * w), w /= I, S *= m, w *= m, R = -(E - A), O = b - x, R /= I = Math.sqrt(R * R + O * O), O /= I, R *= m, O *= m;
							var N = b - v,
								L = T - E,
								F = b - x,
								B = A - E,
								U = L * F - B * N,
								k = U < 0;
							if (Math.abs(U) < .1) d.push(b - S * M, E - w * M), d.push(b + S * C, E + w * C);
							else {
								var G = (-S + v) * (-w + E) - (-S + b) * (-w + T),
									X = (-R + x) * (-O + E) - (-R + b) * (-O + A),
									H = (N * X - F * G) / U,
									j = (B * G - L * X) / U,
									z = (H - b) * (H - b) + (j - E) * (j - E),
									Y = b + (H - b) * M,
									V = E + (j - E) * M,
									W = b - (H - b) * C,
									q = E - (j - E) * C,
									K = k ? M : C;
								z <= Math.min(N * N + L * L, F * F + B * B) + K * K * g ? o.join === Ea.BEVEL || z / g > y ? (k ? (d.push(Y, V), d.push(b + S * C, E + w * C), d.push(Y, V), d.push(b + R * C, E + O * C)) : (d.push(b - S * M, E - w * M), d.push(W, q), d.push(b - R * M, E - O * M), d.push(W, q)), p += 2) : o.join === Ea.ROUND ? k ? (d.push(Y, V), d.push(b + S * C, E + w * C), p += Ua(b, E, b + S * C, E + w * C, b + R * C, E + O * C, d, !0) + 4, d.push(Y, V), d.push(b + R * C, E + O * C)) : (d.push(b - S * M, E - w * M), d.push(W, q), p += Ua(b, E, b - S * M, E - w * M, b - R * M, E - O * M, d, !1) + 4, d.push(b - R * M, E - O * M), d.push(W, q)) : (d.push(Y, V), d.push(W, q)) : (d.push(b - S * M, E - w * M), d.push(b + S * C, E + w * C), o.join === Ea.BEVEL || z / g > y || (o.join === Ea.ROUND ? p += k ? Ua(b, E, b + S * C, E + w * C, b + R * C, E + O * C, d, !0) + 2 : Ua(b, E, b - S * M, E - w * M, b - R * M, E - O * M, d, !1) + 2 : (k ? (d.push(W, q), d.push(W, q)) : (d.push(Y, V), d.push(Y, V)), p += 2)), d.push(b - R * M, E - O * M), d.push(b + R * C, E + O * C), p += 2)
							}
						}
						v = r[2 * (f - 2)], T = r[2 * (f - 2) + 1], b = r[2 * (f - 1)], S = -(T - (E = r[2 * (f - 1) + 1])), w = v - b, S /= I = Math.sqrt(S * S + w * w), w /= I, S *= m, w *= m, d.push(b - S * M, E - w * M), d.push(b + S * C, E + w * C), h || (o.cap === xa.ROUND ? p += Ua(b - S * (M - C) * .5, E - w * (M - C) * .5, b - S * M, E - w * M, b + S * C, E + w * C, d, !1) + 2 : o.cap === xa.SQUARE && (p += Ba(b, E, S, w, M, C, !1, d)));
						var Z = e.indices,
							J = Ra.epsilon * Ra.epsilon;
						for (D = _; D < p + _ - 2; ++D) v = d[2 * D], T = d[2 * D + 1], b = d[2 * (D + 1)], E = d[2 * (D + 1) + 1], x = d[2 * (D + 2)], A = d[2 * (D + 2) + 1], Math.abs(v * (E - A) + b * (A - T) + x * (T - E)) < J || Z.push(D, D + 1, D + 2)
					}
				}(t, e)
			}
			var Ga, Xa = function() {
					function t() {}
					return t.curveTo = function(t, e, i, r, n, o) {
						var s = o[o.length - 2],
							a = o[o.length - 1] - e,
							h = s - t,
							u = r - e,
							l = i - t,
							c = Math.abs(a * l - h * u);
						if (c < 1e-8 || 0 === n) return o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e), null;
						var d = a * a + h * h,
							f = u * u + l * l,
							p = a * u + h * l,
							_ = n * Math.sqrt(d) / c,
							m = n * Math.sqrt(f) / c,
							g = _ * p / d,
							y = m * p / f,
							v = _ * l + m * h,
							T = _ * u + m * a,
							b = h * (m + g),
							E = a * (m + g),
							x = l * (_ + y),
							A = u * (_ + y);
						return {
							cx: v + t,
							cy: T + e,
							radius: n,
							startAngle: Math.atan2(E - T, b - v),
							endAngle: Math.atan2(A - T, x - v),
							anticlockwise: h * u > l * a
						}
					}, t.arc = function(t, e, i, r, n, o, s, a, h) {
						for (var u = s - o, l = Ra._segmentsCount(Math.abs(u) * n, 40 * Math.ceil(Math.abs(u) / dr)), c = u / (2 * l), d = 2 * c, f = Math.cos(c), p = Math.sin(c), _ = l - 1, m = _ % 1 / _, g = 0; g <= _; ++g) {
							var y = c + o + d * (g + m * g),
								v = Math.cos(y),
								T = -Math.sin(y);
							h.push((f * v + p * T) * n + i, (f * -T + p * v) * n + r)
						}
					}, t
				}(),
				Ha = function() {
					function t() {}
					return t.curveLength = function(t, e, i, r, n, o, s, a) {
						for (var h = 0, u = 0, l = 0, c = 0, d = 0, f = 0, p = 0, _ = 0, m = 0, g = 0, y = 0, v = t, T = e, b = 1; b <= 10; ++b) g = v - (_ = (p = (f = (d = 1 - (u = b / 10)) * d) * d) * t + 3 * f * u * i + 3 * d * (l = u * u) * n + (c = l * u) * s), y = T - (m = p * e + 3 * f * u * r + 3 * d * l * o + c * a), v = _, T = m, h += Math.sqrt(g * g + y * y);
						return h
					}, t.curveTo = function(e, i, r, n, o, s, a) {
						var h = a[a.length - 2],
							u = a[a.length - 1];
						a.length -= 2;
						var l = Ra._segmentsCount(t.curveLength(h, u, e, i, r, n, o, s)),
							c = 0,
							d = 0,
							f = 0,
							p = 0,
							_ = 0;
						a.push(h, u);
						for (var m = 1, g = 0; m <= l; ++m) f = (d = (c = 1 - (g = m / l)) * c) * c, _ = (p = g * g) * g, a.push(f * h + 3 * d * g * e + 3 * c * p * r + _ * o, f * u + 3 * d * g * i + 3 * c * p * n + _ * s)
					}, t
				}(),
				ja = function() {
					function t() {}
					return t.curveLength = function(t, e, i, r, n, o) {
						var s = t - 2 * i + n,
							a = e - 2 * r + o,
							h = 2 * i - 2 * t,
							u = 2 * r - 2 * e,
							l = 4 * (s * s + a * a),
							c = 4 * (s * h + a * u),
							d = h * h + u * u,
							f = 2 * Math.sqrt(l + c + d),
							p = Math.sqrt(l),
							_ = 2 * l * p,
							m = 2 * Math.sqrt(d),
							g = c / p;
						return (_ * f + p * c * (f - m) + (4 * d * l - c * c) * Math.log((2 * p + g + f) / (g + m))) / (4 * _)
					}, t.curveTo = function(e, i, r, n, o) {
						for (var s = o[o.length - 2], a = o[o.length - 1], h = Ra._segmentsCount(t.curveLength(s, a, e, i, r, n)), u = 0, l = 0, c = 1; c <= h; ++c) {
							var d = c / h;
							u = s + (e - s) * d, l = a + (i - a) * d, o.push(u + (e + (r - e) * d - u) * d, l + (i + (n - i) * d - l) * d)
						}
					}, t
				}(),
				za = function() {
					function t() {
						this.reset()
					}
					return t.prototype.begin = function(t, e, i) {
						this.reset(), this.style = t, this.start = e, this.attribStart = i
					}, t.prototype.end = function(t, e) {
						this.attribSize = e - this.attribStart, this.size = t - this.start
					}, t.prototype.reset = function() {
						this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
					}, t
				}(),
				Ya = ((Ga = {})[cr.POLY] = Ma, Ga[cr.CIRC] = Ca, Ga[cr.ELIP] = Ca, Ga[cr.RECT] = Da, Ga[cr.RREC] = Fa, Ga),
				Va = [],
				Wa = [];

			function qa(t) {
				for (var e = t.points, i = 0, r = 0; r < e.length - 2; r += 2) i += (e[r + 2] - e[r]) * (e[r + 3] + e[r + 1]);
				return i > 0
			}
			var Ka, Za = function() {
					function t(t, e, i, r) {
						void 0 === e && (e = null), void 0 === i && (i = null), void 0 === r && (r = null), this.points = [], this.holes = [], this.shape = t, this.lineStyle = i, this.fillStyle = e, this.matrix = r, this.type = t.type
					}
					return t.prototype.clone = function() {
						return new t(this.shape, this.fillStyle, this.lineStyle, this.matrix)
					}, t.prototype.destroy = function() {
						this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
					}, t
				}(),
				Ja = new Tr,
				$a = new Cr,
				Qa = function(t) {
					function e() {
						var e = t.call(this) || this;
						return e.closePointEps = 1e-4, e.boundsPadding = 0, e.uvsFloat32 = null, e.indicesUint16 = null, e.batchable = !1, e.points = [], e.colors = [], e.uvs = [], e.indices = [], e.textureIds = [], e.graphicsData = [], e.drawCalls = [], e.batchDirty = -1, e.batches = [], e.dirty = 0, e.cacheDirty = -1, e.clearDirty = 0, e.shapeIndex = 0, e._bounds = new Cr, e.boundsDirty = -1, e
					}
					return Pa(e, t), Object.defineProperty(e.prototype, "bounds", {
						get: function() {
							return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.invalidate = function() {
						this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
						for (var t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].texArray.clear(), Wa.push(this.drawCalls[t]);
						for (this.drawCalls.length = 0, t = 0; t < this.batches.length; t++) {
							var e = this.batches[t];
							e.reset(), Va.push(e)
						}
						this.batches.length = 0
					}, e.prototype.clear = function() {
						return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this
					}, e.prototype.drawShape = function(t, e, i, r) {
						void 0 === e && (e = null), void 0 === i && (i = null), void 0 === r && (r = null);
						var n = new Za(t, e, i, r);
						return this.graphicsData.push(n), this.dirty++, this
					}, e.prototype.drawHole = function(t, e) {
						if (void 0 === e && (e = null), !this.graphicsData.length) return null;
						var i = new Za(t, null, null, e),
							r = this.graphicsData[this.graphicsData.length - 1];
						return i.lineStyle = r.lineStyle, r.holes.push(i), this.dirty++, this
					}, e.prototype.destroy = function() {
						t.prototype.destroy.call(this);
						for (var e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
						this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
					}, e.prototype.containsPoint = function(t) {
						for (var e = this.graphicsData, i = 0; i < e.length; ++i) {
							var r = e[i];
							if (r.fillStyle.visible && r.shape && (r.matrix ? r.matrix.applyInverse(t, Ja) : Ja.copyFrom(t), r.shape.contains(Ja.x, Ja.y))) {
								var n = !1;
								if (r.holes)
									for (var o = 0; o < r.holes.length; o++)
										if (r.holes[o].shape.contains(Ja.x, Ja.y)) {
											n = !0;
											break
										} if (!n) return !0
							}
						}
						return !1
					}, e.prototype.updateBatches = function(t) {
						if (this.graphicsData.length) {
							if (this.validateBatching()) {
								this.cacheDirty = this.dirty;
								var e = this.uvs,
									i = this.graphicsData,
									r = null,
									n = null;
								this.batches.length > 0 && (n = (r = this.batches[this.batches.length - 1]).style);
								for (var o = this.shapeIndex; o < i.length; o++) {
									this.shapeIndex++;
									var s = i[o],
										a = s.fillStyle,
										h = s.lineStyle;
									Ya[s.type].build(s), s.matrix && this.transformPoints(s.points, s.matrix);
									for (var u = 0; u < 2; u++) {
										var l = 0 === u ? a : h;
										if (l.visible) {
											var c = l.texture.baseTexture,
												d = this.indices.length,
												f = this.points.length / 2;
											c.wrapMode = ui.REPEAT, 0 === u ? this.processFill(s) : this.processLine(s);
											var p = this.points.length / 2 - f;
											0 !== p && (r && !this._compareStyles(n, l) && (r.end(d, f), r = null), r || ((r = Va.pop() || new za).begin(l, d, f), this.batches.push(r), n = l), this.addUvs(this.points, e, l.texture, f, p, l.matrix))
										}
									}
								}
								var _ = this.indices.length,
									m = this.points.length / 2;
								if (r && r.end(_, m), 0 !== this.batches.length) {
									if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) this.indicesUint16.set(this.indices);
									else {
										var g = m > 65535 && t;
										this.indicesUint16 = g ? new Uint32Array(this.indices) : new Uint16Array(this.indices)
									}
									this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()
								} else this.batchable = !0
							}
						} else this.batchable = !0
					}, e.prototype._compareStyles = function(t, e) {
						return !(!t || !e) && t.texture.baseTexture === e.texture.baseTexture && t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native
					}, e.prototype.validateBatching = function() {
						if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
						for (var t = 0, e = this.graphicsData.length; t < e; t++) {
							var i = this.graphicsData[t],
								r = i.fillStyle,
								n = i.lineStyle;
							if (r && !r.texture.baseTexture.valid) return !1;
							if (n && !n.texture.baseTexture.valid) return !1
						}
						return !0
					}, e.prototype.packBatches = function() {
						this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
						for (var t = this.batches, e = 0, i = t.length; e < i; e++)
							for (var r = t[e], n = 0; n < r.size; n++) {
								var o = r.start + n;
								this.indicesUint16[o] = this.indicesUint16[o] - r.attribStart
							}
					}, e.prototype.isBatchable = function() {
						if (this.points.length > 131070) return !1;
						for (var t = this.batches, i = 0; i < t.length; i++)
							if (t[i].style.native) return !1;
						return this.points.length < 2 * e.BATCHABLE_SIZE
					}, e.prototype.buildDrawCalls = function() {
						for (var t = ++un._globalBatch, e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].texArray.clear(), Wa.push(this.drawCalls[e]);
						this.drawCalls.length = 0;
						var i = this.colors,
							r = this.textureIds,
							n = Wa.pop();
						n || ((n = new ds).texArray = new fs), n.texArray.count = 0, n.start = 0, n.size = 0, n.type = ri.TRIANGLES;
						var o = 0,
							s = null,
							a = 0,
							h = !1,
							u = ri.TRIANGLES,
							l = 0;
						for (this.drawCalls.push(n), e = 0; e < this.batches.length; e++) {
							var c = this.batches[e],
								d = c.style,
								f = d.texture.baseTexture;
							h !== !!d.native && (u = (h = !!d.native) ? ri.LINES : ri.TRIANGLES, s = null, o = 8, t++), s !== f && (s = f, f._batchEnabled !== t && (8 === o && (t++, o = 0, n.size > 0 && ((n = Wa.pop()) || ((n = new ds).texArray = new fs), this.drawCalls.push(n)), n.start = l, n.size = 0, n.texArray.count = 0, n.type = u), f.touched = 1, f._batchEnabled = t, f._batchLocation = o, f.wrapMode = ui.REPEAT, n.texArray.elements[n.texArray.count++] = f, o++)), n.size += c.size, l += c.size, a = f._batchLocation, this.addColors(i, d.color, d.alpha, c.attribSize, c.attribStart), this.addTextureIds(r, a, c.attribSize, c.attribStart)
						}
						un._globalBatch = t, this.packAttributes()
					}, e.prototype.packAttributes = function() {
						for (var t = this.points, e = this.uvs, i = this.colors, r = this.textureIds, n = new ArrayBuffer(3 * t.length * 4), o = new Float32Array(n), s = new Uint32Array(n), a = 0, h = 0; h < t.length / 2; h++) o[a++] = t[2 * h], o[a++] = t[2 * h + 1], o[a++] = e[2 * h], o[a++] = e[2 * h + 1], s[a++] = i[h], o[a++] = r[h];
						this._buffer.update(n), this._indexBuffer.update(this.indicesUint16)
					}, e.prototype.processFill = function(t) {
						t.holes.length ? (this.processHoles(t.holes), Ma.triangulate(t, this)) : Ya[t.type].triangulate(t, this)
					}, e.prototype.processLine = function(t) {
						ka(t, this);
						for (var e = 0; e < t.holes.length; e++) ka(t.holes[e], this)
					}, e.prototype.processHoles = function(t) {
						for (var e = 0; e < t.length; e++) {
							var i = t[e];
							Ya[i.type].build(i), i.matrix && this.transformPoints(i.points, i.matrix)
						}
					}, e.prototype.calculateBounds = function() {
						var t = this._bounds,
							e = $a,
							i = Er.IDENTITY;
						this._bounds.clear(), e.clear();
						for (var r = 0; r < this.graphicsData.length; r++) {
							var n = this.graphicsData[r],
								o = n.shape,
								s = n.type,
								a = n.lineStyle,
								h = n.matrix || Er.IDENTITY,
								u = 0;
							if (a && a.visible) {
								var l = a.alignment;
								u = a.width, s === cr.POLY ? qa(o) ? u *= 1 - l : u *= l : u *= Math.max(0, l)
							}
							if (i !== h && (e.isEmpty() || (t.addBoundsMatrix(e, i), e.clear()), i = h), s === cr.RECT || s === cr.RREC) {
								var c = o;
								e.addFramePad(c.x, c.y, c.x + c.width, c.y + c.height, u, u)
							} else if (s === cr.CIRC) {
								var d = o;
								e.addFramePad(d.x, d.y, d.x, d.y, d.radius + u, d.radius + u)
							} else if (s === cr.ELIP) {
								var f = o;
								e.addFramePad(f.x, f.y, f.x, f.y, f.width + u, f.height + u)
							} else {
								var p = o;
								t.addVerticesMatrix(i, p.points, 0, p.points.length, u, u)
							}
						}
						e.isEmpty() || t.addBoundsMatrix(e, i), t.pad(this.boundsPadding, this.boundsPadding)
					}, e.prototype.transformPoints = function(t, e) {
						for (var i = 0; i < t.length / 2; i++) {
							var r = t[2 * i],
								n = t[2 * i + 1];
							t[2 * i] = e.a * r + e.c * n + e.tx, t[2 * i + 1] = e.b * r + e.d * n + e.ty
						}
					}, e.prototype.addColors = function(t, e, i, r, n) {
						void 0 === n && (n = 0);
						var o = Ui((e >> 16) + (65280 & e) + ((255 & e) << 16), i);
						t.length = Math.max(t.length, n + r);
						for (var s = 0; s < r; s++) t[n + s] = o
					}, e.prototype.addTextureIds = function(t, e, i, r) {
						void 0 === r && (r = 0), t.length = Math.max(t.length, r + i);
						for (var n = 0; n < i; n++) t[r + n] = e
					}, e.prototype.addUvs = function(t, e, i, r, n, o) {
						void 0 === o && (o = null);
						for (var s = 0, a = e.length, h = i.frame; s < n;) {
							var u = t[2 * (r + s)],
								l = t[2 * (r + s) + 1];
							if (o) {
								var c = o.a * u + o.c * l + o.tx;
								l = o.b * u + o.d * l + o.ty, u = c
							}
							s++, e.push(u / h.width, l / h.height)
						}
						var d = i.baseTexture;
						(h.width < d.width || h.height < d.height) && this.adjustUvs(e, i, a, n)
					}, e.prototype.adjustUvs = function(t, e, i, r) {
						for (var n = e.baseTexture, o = 1e-6, s = i + 2 * r, a = e.frame, h = a.width / n.width, u = a.height / n.height, l = a.x / a.width, c = a.y / a.height, d = Math.floor(t[i] + o), f = Math.floor(t[i + 1] + o), p = i + 2; p < s; p += 2) d = Math.min(d, Math.floor(t[p] + o)), f = Math.min(f, Math.floor(t[p + 1] + o));
						for (l -= d, c -= f, p = i; p < s; p += 2) t[p] = (t[p] + l) * h, t[p + 1] = (t[p + 1] + c) * u
					}, e.BATCHABLE_SIZE = 100, e
				}(gs),
				th = function(t) {
					function e() {
						var e = null !== t && t.apply(this, arguments) || this;
						return e.width = 0, e.alignment = .5, e.native = !1, e.cap = xa.BUTT, e.join = Ea.MITER, e.miterLimit = 10, e
					}
					return Pa(e, t), e.prototype.clone = function() {
						var t = new e;
						return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t
					}, e.prototype.reset = function() {
						t.prototype.reset.call(this), this.color = 0, this.alignment = .5, this.width = 0, this.native = !1
					}, e
				}(Oa),
				eh = new Float32Array(3),
				ih = {},
				rh = function(t) {
					function e(e) {
						void 0 === e && (e = null);
						var i = t.call(this) || this;
						return i.shader = null, i.pluginName = "batch", i.currentPath = null, i.batches = [], i.batchTint = -1, i.batchDirty = -1, i.vertexData = null, i._fillStyle = new Oa, i._lineStyle = new th, i._matrix = null, i._holeMode = !1, i.state = Ro.for2d(), i._geometry = e || new Qa, i._geometry.refCount++, i._transformID = -1, i.tint = 16777215, i.blendMode = ii.NORMAL, i
					}
					return Pa(e, t), Object.defineProperty(e.prototype, "geometry", {
						get: function() {
							return this._geometry
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.clone = function() {
						return this.finishPoly(), new e(this._geometry)
					}, Object.defineProperty(e.prototype, "blendMode", {
						get: function() {
							return this.state.blendMode
						},
						set: function(t) {
							this.state.blendMode = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "tint", {
						get: function() {
							return this._tint
						},
						set: function(t) {
							this._tint = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "fill", {
						get: function() {
							return this._fillStyle
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "line", {
						get: function() {
							return this._lineStyle
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.lineStyle = function(t, e, i, r, n) {
						return void 0 === t && (t = null), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === r && (r = .5), void 0 === n && (n = !1), "number" == typeof t && (t = {
							width: t,
							color: e,
							alpha: i,
							alignment: r,
							native: n
						}), this.lineTextureStyle(t)
					}, e.prototype.lineTextureStyle = function(t) {
						t = Object.assign({
							width: 0,
							texture: Sn.WHITE,
							color: t && t.texture ? 16777215 : 0,
							alpha: 1,
							matrix: null,
							alignment: .5,
							native: !1,
							cap: xa.BUTT,
							join: Ea.MITER,
							miterLimit: 10
						}, t), this.currentPath && this.startPoly();
						var e = t.width > 0 && t.alpha > 0;
						return e ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, {
							visible: e
						}, t)) : this._lineStyle.reset(), this
					}, e.prototype.startPoly = function() {
						if (this.currentPath) {
							var t = this.currentPath.points,
								e = this.currentPath.points.length;
							e > 2 && (this.drawShape(this.currentPath), this.currentPath = new yr, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
						} else this.currentPath = new yr, this.currentPath.closeStroke = !1
					}, e.prototype.finishPoly = function() {
						this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
					}, e.prototype.moveTo = function(t, e) {
						return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this
					}, e.prototype.lineTo = function(t, e) {
						this.currentPath || this.moveTo(0, 0);
						var i = this.currentPath.points,
							r = i[i.length - 2],
							n = i[i.length - 1];
						return r === t && n === e || i.push(t, e), this
					}, e.prototype._initCurve = function(t, e) {
						void 0 === t && (t = 0), void 0 === e && (e = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
					}, e.prototype.quadraticCurveTo = function(t, e, i, r) {
						this._initCurve();
						var n = this.currentPath.points;
						return 0 === n.length && this.moveTo(0, 0), ja.curveTo(t, e, i, r, n), this
					}, e.prototype.bezierCurveTo = function(t, e, i, r, n, o) {
						return this._initCurve(), Ha.curveTo(t, e, i, r, n, o, this.currentPath.points), this
					}, e.prototype.arcTo = function(t, e, i, r, n) {
						this._initCurve(t, e);
						var o = this.currentPath.points,
							s = Xa.curveTo(t, e, i, r, n, o);
						if (s) {
							var a = s.cx,
								h = s.cy,
								u = s.radius,
								l = s.startAngle,
								c = s.endAngle,
								d = s.anticlockwise;
							this.arc(a, h, u, l, c, d)
						}
						return this
					}, e.prototype.arc = function(t, e, i, r, n, o) {
						if (void 0 === o && (o = !1), r === n) return this;
						if (!o && n <= r ? n += dr : o && r <= n && (r += dr), 0 == n - r) return this;
						var s = t + Math.cos(r) * i,
							a = e + Math.sin(r) * i,
							h = this._geometry.closePointEps,
							u = this.currentPath ? this.currentPath.points : null;
						if (u) {
							var l = Math.abs(u[u.length - 2] - s),
								c = Math.abs(u[u.length - 1] - a);
							l < h && c < h || u.push(s, a)
						} else this.moveTo(s, a), u = this.currentPath.points;
						return Xa.arc(s, a, t, e, i, r, n, o, u), this
					}, e.prototype.beginFill = function(t, e) {
						return void 0 === t && (t = 0), void 0 === e && (e = 1), this.beginTextureFill({
							texture: Sn.WHITE,
							color: t,
							alpha: e
						})
					}, e.prototype.beginTextureFill = function(t) {
						t = Object.assign({
							texture: Sn.WHITE,
							color: 16777215,
							alpha: 1,
							matrix: null
						}, t), this.currentPath && this.startPoly();
						var e = t.alpha > 0;
						return e ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {
							visible: e
						}, t)) : this._fillStyle.reset(), this
					}, e.prototype.endFill = function() {
						return this.finishPoly(), this._fillStyle.reset(), this
					}, e.prototype.drawRect = function(t, e, i, r) {
						return this.drawShape(new _r(t, e, i, r))
					}, e.prototype.drawRoundedRect = function(t, e, i, r, n) {
						return this.drawShape(new vr(t, e, i, r, n))
					}, e.prototype.drawCircle = function(t, e, i) {
						return this.drawShape(new mr(t, e, i))
					}, e.prototype.drawEllipse = function(t, e, i, r) {
						return this.drawShape(new gr(t, e, i, r))
					}, e.prototype.drawPolygon = function() {
						for (var t, e = arguments, i = [], r = 0; r < arguments.length; r++) i[r] = e[r];
						var n = !0,
							o = i[0];
						o.points ? (n = o.closeStroke, t = o.points) : t = Array.isArray(i[0]) ? i[0] : i;
						var s = new yr(t);
						return s.closeStroke = n, this.drawShape(s), this
					}, e.prototype.drawShape = function(t) {
						return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
					}, e.prototype.clear = function() {
						return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this
					}, e.prototype.isFastRect = function() {
						var t = this._geometry.graphicsData;
						return !(1 !== t.length || t[0].shape.type !== cr.RECT || t[0].holes.length || t[0].lineStyle.visible && t[0].lineStyle.width)
					}, e.prototype._render = function(t) {
						this.finishPoly();
						var e = this._geometry,
							i = t.context.supports.uint32Indices;
						e.updateBatches(i), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t))
					}, e.prototype._populateBatches = function() {
						var t = this._geometry,
							e = this.blendMode,
							i = t.batches.length;
						this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.batches.length = i, this.vertexData = new Float32Array(t.points);
						for (var r = 0; r < i; r++) {
							var n = t.batches[r],
								o = n.style.color,
								s = new Float32Array(this.vertexData.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
								a = new Float32Array(t.uvsFloat32.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
								h = {
									vertexData: s,
									blendMode: e,
									indices: new Uint16Array(t.indicesUint16.buffer, 2 * n.start, n.size),
									uvs: a,
									_batchRGB: Mi(o),
									_tintRGB: o,
									_texture: n.style.texture,
									alpha: n.style.alpha,
									worldAlpha: 1
								};
							this.batches[r] = h
						}
					}, e.prototype._renderBatched = function(t) {
						if (this.batches.length) {
							t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
							for (var e = 0, i = this.batches.length; e < i; e++) {
								var r = this.batches[e];
								r.worldAlpha = this.worldAlpha * r.alpha, t.plugins[this.pluginName].render(r)
							}
						}
					}, e.prototype._renderDirect = function(t) {
						var e = this._resolveDirectShader(t),
							i = this._geometry,
							r = this.tint,
							n = this.worldAlpha,
							o = e.uniforms,
							s = i.drawCalls;
						o.translationMatrix = this.transform.worldTransform, o.tint[0] = (r >> 16 & 255) / 255 * n, o.tint[1] = (r >> 8 & 255) / 255 * n, o.tint[2] = (255 & r) / 255 * n, o.tint[3] = n, t.shader.bind(e), t.geometry.bind(i, e), t.state.set(this.state);
						for (var a = 0, h = s.length; a < h; a++) this._renderDrawCallDirect(t, i.drawCalls[a])
					}, e.prototype._renderDrawCallDirect = function(t, e) {
						for (var i = e.texArray, r = e.type, n = e.size, o = e.start, s = i.count, a = 0; a < s; a++) t.texture.bind(i.elements[a], a);
						t.geometry.draw(r, n, o)
					}, e.prototype._resolveDirectShader = function(t) {
						var e = this.shader,
							i = this.pluginName;
						if (!e) {
							if (!ih[i]) {
								for (var r = t.plugins.batch.MAX_TEXTURES, n = new Int32Array(r), o = 0; o < r; o++) n[o] = o;
								var s = {
										tint: new Float32Array([1, 1, 1, 1]),
										translationMatrix: new Er,
										default: Gn.from({
											uSamplers: n
										}, !0)
									},
									a = t.plugins[i]._shader.program;
								ih[i] = new wo(a, s)
							}
							e = ih[i]
						}
						return e
					}, e.prototype._calculateBounds = function() {
						this.finishPoly();
						var t = this._geometry;
						if (t.graphicsData.length) {
							var e = t.bounds,
								i = e.minX,
								r = e.minY,
								n = e.maxX,
								o = e.maxY;
							this._bounds.addFrame(this.transform, i, r, n, o)
						}
					}, e.prototype.containsPoint = function(t) {
						return this.worldTransform.applyInverse(t, e._TEMP_POINT), this._geometry.containsPoint(e._TEMP_POINT)
					}, e.prototype.calculateTints = function() {
						if (this.batchTint !== this.tint) {
							this.batchTint = this.tint;
							for (var t = Mi(this.tint, eh), e = 0; e < this.batches.length; e++) {
								var i = this.batches[e],
									r = i._batchRGB,
									n = (t[0] * r[0] * 255 << 16) + (t[1] * r[1] * 255 << 8) + (0 | t[2] * r[2] * 255);
								i._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16)
							}
						}
					}, e.prototype.calculateVertices = function() {
						var t = this.transform._worldID;
						if (this._transformID !== t) {
							this._transformID = t;
							for (var e = this.transform.worldTransform, i = e.a, r = e.b, n = e.c, o = e.d, s = e.tx, a = e.ty, h = this._geometry.points, u = this.vertexData, l = 0, c = 0; c < h.length; c += 2) {
								var d = h[c],
									f = h[c + 1];
								u[l++] = i * d + n * f + s, u[l++] = o * f + r * d + a
							}
						}
					}, e.prototype.closePath = function() {
						var t = this.currentPath;
						return t && (t.closeStroke = !0, this.finishPoly()), this
					}, e.prototype.setMatrix = function(t) {
						return this._matrix = t, this
					}, e.prototype.beginHole = function() {
						return this.finishPoly(), this._holeMode = !0, this
					}, e.prototype.endHole = function() {
						return this.finishPoly(), this._holeMode = !1, this
					}, e.prototype.destroy = function(e) {
						this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, t.prototype.destroy.call(this, e)
					}, e._TEMP_POINT = new Tr, e
				}(Ur),
				nh = {
					buildPoly: Ma,
					buildCircle: Ca,
					buildRectangle: Da,
					buildRoundedRectangle: Fa,
					buildLine: ka,
					ArcUtils: Xa,
					BezierUtils: Ha,
					QuadraticUtils: ja,
					BatchPart: za,
					FILL_COMMANDS: Ya,
					BATCH_POOL: Va,
					DRAW_CALL_POOL: Wa
				},
				oh = function(t, e) {
					return oh = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, oh(t, e)
				},
				sh = new Tr,
				ah = new Uint16Array([0, 1, 2, 0, 2, 3]),
				hh = function(t) {
					function e(e) {
						var i = t.call(this) || this;
						return i._anchor = new br(i._onAnchorUpdate, i, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), i._texture = null, i._width = 0, i._height = 0, i._tint = null, i._tintRGB = null, i.tint = 16777215, i.blendMode = ii.NORMAL, i._cachedTint = 16777215, i.uvs = null, i.texture = e || Sn.EMPTY, i.vertexData = new Float32Array(8), i.vertexTrimmedData = null, i._transformID = -1, i._textureID = -1, i._transformTrimmedID = -1, i._textureTrimmedID = -1, i.indices = ah, i.pluginName = "batch", i.isSprite = !0, i._roundPixels = yi.ROUND_PIXELS, i
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						oh(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), e.prototype._onTextureUpdate = function() {
						this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = qi(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = qi(this.scale.y) * this._height / this._texture.orig.height)
					}, e.prototype._onAnchorUpdate = function() {
						this._transformID = -1, this._transformTrimmedID = -1
					}, e.prototype.calculateVertices = function() {
						var t = this._texture;
						if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
							this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
							var e = this.transform.worldTransform,
								i = e.a,
								r = e.b,
								n = e.c,
								o = e.d,
								s = e.tx,
								a = e.ty,
								h = this.vertexData,
								u = t.trim,
								l = t.orig,
								c = this._anchor,
								d = 0,
								f = 0,
								p = 0,
								_ = 0;
							if (u ? (d = (f = u.x - c._x * l.width) + u.width, p = (_ = u.y - c._y * l.height) + u.height) : (d = (f = -c._x * l.width) + l.width, p = (_ = -c._y * l.height) + l.height), h[0] = i * f + n * _ + s, h[1] = o * _ + r * f + a, h[2] = i * d + n * _ + s, h[3] = o * _ + r * d + a, h[4] = i * d + n * p + s, h[5] = o * p + r * d + a, h[6] = i * f + n * p + s, h[7] = o * p + r * f + a, this._roundPixels)
								for (var m = yi.RESOLUTION, g = 0; g < h.length; ++g) h[g] = Math.round((h[g] * m | 0) / m)
						}
					}, e.prototype.calculateTrimmedVertices = function() {
						if (this.vertexTrimmedData) {
							if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
						} else this.vertexTrimmedData = new Float32Array(8);
						this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
						var t = this._texture,
							e = this.vertexTrimmedData,
							i = t.orig,
							r = this._anchor,
							n = this.transform.worldTransform,
							o = n.a,
							s = n.b,
							a = n.c,
							h = n.d,
							u = n.tx,
							l = n.ty,
							c = -r._x * i.width,
							d = c + i.width,
							f = -r._y * i.height,
							p = f + i.height;
						e[0] = o * c + a * f + u, e[1] = h * f + s * c + l, e[2] = o * d + a * f + u, e[3] = h * f + s * d + l, e[4] = o * d + a * p + u, e[5] = h * p + s * d + l, e[6] = o * c + a * p + u, e[7] = h * p + s * c + l
					}, e.prototype._render = function(t) {
						this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
					}, e.prototype._calculateBounds = function() {
						var t = this._texture.trim,
							e = this._texture.orig;
						!t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
					}, e.prototype.getLocalBounds = function(e) {
						return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new _r), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
					}, e.prototype.containsPoint = function(t) {
						this.worldTransform.applyInverse(t, sh);
						var e = this._texture.orig.width,
							i = this._texture.orig.height,
							r = -e * this.anchor.x,
							n = 0;
						return sh.x >= r && sh.x < r + e && (n = -i * this.anchor.y, sh.y >= n && sh.y < n + i)
					}, e.prototype.destroy = function(e) {
						if (t.prototype.destroy.call(this, e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
							var i = "boolean" == typeof e ? e : e && e.baseTexture;
							this._texture.destroy(!!i)
						}
						this._texture = null
					}, e.from = function(t, i) {
						return new e(t instanceof Sn ? t : Sn.from(t, i))
					}, Object.defineProperty(e.prototype, "roundPixels", {
						get: function() {
							return this._roundPixels
						},
						set: function(t) {
							this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "width", {
						get: function() {
							return Math.abs(this.scale.x) * this._texture.orig.width
						},
						set: function(t) {
							var e = qi(this.scale.x) || 1;
							this.scale.x = e * t / this._texture.orig.width, this._width = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "height", {
						get: function() {
							return Math.abs(this.scale.y) * this._texture.orig.height
						},
						set: function(t) {
							var e = qi(this.scale.y) || 1;
							this.scale.y = e * t / this._texture.orig.height, this._height = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "anchor", {
						get: function() {
							return this._anchor
						},
						set: function(t) {
							this._anchor.copyFrom(t)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "tint", {
						get: function() {
							return this._tint
						},
						set: function(t) {
							this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "texture", {
						get: function() {
							return this._texture
						},
						set: function(t) {
							this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || Sn.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Ur),
				uh = function(t, e) {
					return uh = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, uh(t, e)
				};
			! function(t) {
				t[t.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", t[t.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL"
			}(Ka || (Ka = {}));
			var lh = {
					align: "left",
					breakWords: !1,
					dropShadow: !1,
					dropShadowAlpha: 1,
					dropShadowAngle: Math.PI / 6,
					dropShadowBlur: 0,
					dropShadowColor: "black",
					dropShadowDistance: 5,
					fill: "black",
					fillGradientType: Ka.LINEAR_VERTICAL,
					fillGradientStops: [],
					fontFamily: "Arial",
					fontSize: 26,
					fontStyle: "normal",
					fontVariant: "normal",
					fontWeight: "normal",
					letterSpacing: 0,
					lineHeight: 0,
					lineJoin: "miter",
					miterLimit: 10,
					padding: 0,
					stroke: "black",
					strokeThickness: 0,
					textBaseline: "alphabetic",
					trim: !1,
					whiteSpace: "pre",
					wordWrap: !1,
					wordWrapWidth: 100,
					leading: 0
				},
				ch = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
				dh = function() {
					function t(t) {
						this.styleID = 0, this.reset(), _h(this, t, t)
					}
					return t.prototype.clone = function() {
						var e = {};
						return _h(e, this, lh), new t(e)
					}, t.prototype.reset = function() {
						_h(this, lh, lh)
					}, Object.defineProperty(t.prototype, "align", {
						get: function() {
							return this._align
						},
						set: function(t) {
							this._align !== t && (this._align = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "breakWords", {
						get: function() {
							return this._breakWords
						},
						set: function(t) {
							this._breakWords !== t && (this._breakWords = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "dropShadow", {
						get: function() {
							return this._dropShadow
						},
						set: function(t) {
							this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "dropShadowAlpha", {
						get: function() {
							return this._dropShadowAlpha
						},
						set: function(t) {
							this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "dropShadowAngle", {
						get: function() {
							return this._dropShadowAngle
						},
						set: function(t) {
							this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "dropShadowBlur", {
						get: function() {
							return this._dropShadowBlur
						},
						set: function(t) {
							this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "dropShadowColor", {
						get: function() {
							return this._dropShadowColor
						},
						set: function(t) {
							var e = ph(t);
							this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "dropShadowDistance", {
						get: function() {
							return this._dropShadowDistance
						},
						set: function(t) {
							this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fill", {
						get: function() {
							return this._fill
						},
						set: function(t) {
							var e = ph(t);
							this._fill !== e && (this._fill = e, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fillGradientType", {
						get: function() {
							return this._fillGradientType
						},
						set: function(t) {
							this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fillGradientStops", {
						get: function() {
							return this._fillGradientStops
						},
						set: function(t) {
							(function(t, e) {
								if (!Array.isArray(t) || !Array.isArray(e)) return !1;
								if (t.length !== e.length) return !1;
								for (var i = 0; i < t.length; ++i)
									if (t[i] !== e[i]) return !1;
								return !0
							})(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fontFamily", {
						get: function() {
							return this._fontFamily
						},
						set: function(t) {
							this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fontSize", {
						get: function() {
							return this._fontSize
						},
						set: function(t) {
							this._fontSize !== t && (this._fontSize = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fontStyle", {
						get: function() {
							return this._fontStyle
						},
						set: function(t) {
							this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fontVariant", {
						get: function() {
							return this._fontVariant
						},
						set: function(t) {
							this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fontWeight", {
						get: function() {
							return this._fontWeight
						},
						set: function(t) {
							this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "letterSpacing", {
						get: function() {
							return this._letterSpacing
						},
						set: function(t) {
							this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "lineHeight", {
						get: function() {
							return this._lineHeight
						},
						set: function(t) {
							this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "leading", {
						get: function() {
							return this._leading
						},
						set: function(t) {
							this._leading !== t && (this._leading = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "lineJoin", {
						get: function() {
							return this._lineJoin
						},
						set: function(t) {
							this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "miterLimit", {
						get: function() {
							return this._miterLimit
						},
						set: function(t) {
							this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "padding", {
						get: function() {
							return this._padding
						},
						set: function(t) {
							this._padding !== t && (this._padding = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "stroke", {
						get: function() {
							return this._stroke
						},
						set: function(t) {
							var e = ph(t);
							this._stroke !== e && (this._stroke = e, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "strokeThickness", {
						get: function() {
							return this._strokeThickness
						},
						set: function(t) {
							this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "textBaseline", {
						get: function() {
							return this._textBaseline
						},
						set: function(t) {
							this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "trim", {
						get: function() {
							return this._trim
						},
						set: function(t) {
							this._trim !== t && (this._trim = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "whiteSpace", {
						get: function() {
							return this._whiteSpace
						},
						set: function(t) {
							this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "wordWrap", {
						get: function() {
							return this._wordWrap
						},
						set: function(t) {
							this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "wordWrapWidth", {
						get: function() {
							return this._wordWrapWidth
						},
						set: function(t) {
							this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.toFontString = function() {
						var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
							e = this.fontFamily;
						Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
						for (var i = e.length - 1; i >= 0; i--) {
							var r = e[i].trim();
							!/([\"\'])[^\'\"]+\1/.test(r) && ch.indexOf(r) < 0 && (r = '"' + r + '"'), e[i] = r
						}
						return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
					}, t
				}();

			function fh(t) {
				return "number" == typeof t ? Ci(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
			}

			function ph(t) {
				if (Array.isArray(t)) {
					for (var e = 0; e < t.length; ++e) t[e] = fh(t[e]);
					return t
				}
				return fh(t)
			}

			function _h(t, e, i) {
				for (var r in i) Array.isArray(e[r]) ? t[r] = e[r].slice() : t[r] = e[r]
			}
			var mh = function() {
					function t(t, e, i, r, n, o, s, a, h) {
						this.text = t, this.style = e, this.width = i, this.height = r, this.lines = n, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = h
					}
					return t.measureText = function(e, i, r, n) {
						void 0 === n && (n = t._canvas), r = null == r ? i.wordWrap : r;
						var o = i.toFontString(),
							s = t.measureFont(o);
						0 === s.fontSize && (s.fontSize = i.fontSize, s.ascent = i.fontSize);
						var a = n.getContext("2d");
						a.font = o;
						for (var h = (r ? t.wordWrap(e, i, n) : e).split(/(?:\r\n|\r|\n)/), u = new Array(h.length), l = 0, c = 0; c < h.length; c++) {
							var d = a.measureText(h[c]).width + (h[c].length - 1) * i.letterSpacing;
							u[c] = d, l = Math.max(l, d)
						}
						var f = l + i.strokeThickness;
						i.dropShadow && (f += i.dropShadowDistance);
						var p = i.lineHeight || s.fontSize + i.strokeThickness,
							_ = Math.max(p, s.fontSize + i.strokeThickness) + (h.length - 1) * (p + i.leading);
						return i.dropShadow && (_ += i.dropShadowDistance), new t(e, i, f, _, h, u, p + i.leading, l, s)
					}, t.wordWrap = function(e, i, r) {
						void 0 === r && (r = t._canvas);
						for (var n = r.getContext("2d"), o = 0, s = "", a = "", h = Object.create(null), u = i.letterSpacing, l = i.whiteSpace, c = t.collapseSpaces(l), d = t.collapseNewlines(l), f = !c, p = i.wordWrapWidth + u, _ = t.tokenize(e), m = 0; m < _.length; m++) {
							var g = _[m];
							if (t.isNewline(g)) {
								if (!d) {
									a += t.addLine(s), f = !c, s = "", o = 0;
									continue
								}
								g = " "
							}
							if (c) {
								var y = t.isBreakingSpace(g),
									v = t.isBreakingSpace(s[s.length - 1]);
								if (y && v) continue
							}
							var T = t.getFromCache(g, u, h, n);
							if (T > p)
								if ("" !== s && (a += t.addLine(s), s = "", o = 0), t.canBreakWords(g, i.breakWords))
									for (var b = t.wordWrapSplit(g), E = 0; E < b.length; E++) {
										for (var x = b[E], A = 1; b[E + A];) {
											var S = b[E + A],
												w = x[x.length - 1];
											if (t.canBreakChars(w, S, g, E, i.breakWords)) break;
											x += S, A++
										}
										E += x.length - 1;
										var R = t.getFromCache(x, u, h, n);
										R + o > p && (a += t.addLine(s), f = !1, s = "", o = 0), s += x, o += R
									} else {
										s.length > 0 && (a += t.addLine(s), s = "", o = 0);
										var O = m === _.length - 1;
										a += t.addLine(g, !O), f = !1, s = "", o = 0
									} else T + o > p && (f = !1, a += t.addLine(s), s = "", o = 0), (s.length > 0 || !t.isBreakingSpace(g) || f) && (s += g, o += T)
						}
						return a + t.addLine(s, !1)
					}, t.addLine = function(e, i) {
						return void 0 === i && (i = !0), e = t.trimRight(e), i ? e + "\n" : e
					}, t.getFromCache = function(t, e, i, r) {
						var n = i[t];
						if ("number" != typeof n) {
							var o = t.length * e;
							n = r.measureText(t).width + o, i[t] = n
						}
						return n
					}, t.collapseSpaces = function(t) {
						return "normal" === t || "pre-line" === t
					}, t.collapseNewlines = function(t) {
						return "normal" === t
					}, t.trimRight = function(e) {
						if ("string" != typeof e) return "";
						for (var i = e.length - 1; i >= 0; i--) {
							var r = e[i];
							if (!t.isBreakingSpace(r)) break;
							e = e.slice(0, -1)
						}
						return e
					}, t.isNewline = function(e) {
						return "string" == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0
					}, t.isBreakingSpace = function(e, i) {
						return "string" == typeof e && t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
					}, t.tokenize = function(e) {
						var i = [],
							r = "";
						if ("string" != typeof e) return i;
						for (var n = 0; n < e.length; n++) {
							var o = e[n],
								s = e[n + 1];
							t.isBreakingSpace(o, s) || t.isNewline(o) ? ("" !== r && (i.push(r), r = ""), i.push(o)) : r += o
						}
						return "" !== r && i.push(r), i
					}, t.canBreakWords = function(t, e) {
						return e
					}, t.canBreakChars = function(t, e, i, r, n) {
						return !0
					}, t.wordWrapSplit = function(t) {
						return t.split("")
					}, t.measureFont = function(e) {
						if (t._fonts[e]) return t._fonts[e];
						var i = {
								ascent: 0,
								descent: 0,
								fontSize: 0
							},
							r = t._canvas,
							n = t._context;
						n.font = e;
						var o = t.METRICS_STRING + t.BASELINE_SYMBOL,
							s = Math.ceil(n.measureText(o).width),
							a = Math.ceil(n.measureText(t.BASELINE_SYMBOL).width),
							h = Math.ceil(t.HEIGHT_MULTIPLIER * a);
						a = a * t.BASELINE_MULTIPLIER | 0, r.width = s, r.height = h, n.fillStyle = "#f00", n.fillRect(0, 0, s, h), n.font = e, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText(o, 0, a);
						var u = n.getImageData(0, 0, s, h).data,
							l = u.length,
							c = 4 * s,
							d = 0,
							f = 0,
							p = !1;
						for (d = 0; d < a; ++d) {
							for (var _ = 0; _ < c; _ += 4)
								if (255 !== u[f + _]) {
									p = !0;
									break
								} if (p) break;
							f += c
						}
						for (i.ascent = a - d, f = l - c, p = !1, d = h; d > a; --d) {
							for (_ = 0; _ < c; _ += 4)
								if (255 !== u[f + _]) {
									p = !0;
									break
								} if (p) break;
							f -= c
						}
						return i.descent = d - a, i.fontSize = i.ascent + i.descent, t._fonts[e] = i, i
					}, t.clearMetrics = function(e) {
						void 0 === e && (e = ""), e ? delete t._fonts[e] : t._fonts = {}
					}, t
				}(),
				gh = function() {
					try {
						var t = new OffscreenCanvas(0, 0),
							e = t.getContext("2d");
						return e && e.measureText ? t : document.createElement("canvas")
					} catch (t) {
						return document.createElement("canvas")
					}
				}();
			gh.width = gh.height = 10, mh._canvas = gh, mh._context = gh.getContext("2d"), mh._fonts = {}, mh.METRICS_STRING = "|ÉqÅ", mh.BASELINE_SYMBOL = "M", mh.BASELINE_MULTIPLIER = 1.4, mh.HEIGHT_MULTIPLIER = 2, mh._newlines = [10, 13], mh._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
			var yh = {
					texture: !0,
					children: !1,
					baseTexture: !0
				},
				vh = function(t) {
					function e(e, i, r) {
						var n = this,
							o = !1;
						r || (r = document.createElement("canvas"), o = !0), r.width = 3, r.height = 3;
						var s = Sn.from(r);
						return s.orig = new _r, s.trim = new _r, (n = t.call(this, s) || this)._ownCanvas = o, n.canvas = r, n.context = n.canvas.getContext("2d"), n._resolution = yi.RESOLUTION, n._autoResolution = !0, n._text = null, n._style = null, n._styleListener = null, n._font = "", n.text = e, n.style = i, n.localStyleID = -1, n
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						uh(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), e.prototype.updateText = function(t) {
						var i = this._style;
						if (this.localStyleID !== i.styleID && (this.dirty = !0, this.localStyleID = i.styleID), this.dirty || !t) {
							this._font = this._style.toFontString();
							var r, n, o = this.context,
								s = mh.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
								a = s.width,
								h = s.height,
								u = s.lines,
								l = s.lineHeight,
								c = s.lineWidths,
								d = s.maxLineWidth,
								f = s.fontProperties;
							this.canvas.width = Math.ceil(Math.ceil(Math.max(1, a) + 2 * i.padding) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, h) + 2 * i.padding) * this._resolution), o.scale(this._resolution, this._resolution), o.clearRect(0, 0, this.canvas.width, this.canvas.height), o.font = this._font, o.lineWidth = i.strokeThickness, o.textBaseline = i.textBaseline, o.lineJoin = i.lineJoin, o.miterLimit = i.miterLimit;
							for (var p = i.dropShadow ? 2 : 1, _ = 0; _ < p; ++_) {
								var m = i.dropShadow && 0 === _,
									g = m ? Math.ceil(Math.max(1, h) + 2 * i.padding) : 0,
									y = g * this._resolution;
								if (m) {
									o.fillStyle = "black", o.strokeStyle = "black";
									var v = i.dropShadowColor,
										T = Mi("number" == typeof v ? v : Di(v));
									o.shadowColor = "rgba(" + 255 * T[0] + "," + 255 * T[1] + "," + 255 * T[2] + "," + i.dropShadowAlpha + ")", o.shadowBlur = i.dropShadowBlur, o.shadowOffsetX = Math.cos(i.dropShadowAngle) * i.dropShadowDistance, o.shadowOffsetY = Math.sin(i.dropShadowAngle) * i.dropShadowDistance + y
								} else o.fillStyle = this._generateFillStyle(i, u, s), o.strokeStyle = i.stroke, o.shadowColor = "black", o.shadowBlur = 0, o.shadowOffsetX = 0, o.shadowOffsetY = 0;
								var b = (l - f.fontSize) / 2;
								(!e.nextLineHeightBehavior || l - f.fontSize < 0) && (b = 0);
								for (var E = 0; E < u.length; E++) r = i.strokeThickness / 2, n = i.strokeThickness / 2 + E * l + f.ascent + b, "right" === i.align ? r += d - c[E] : "center" === i.align && (r += (d - c[E]) / 2), i.stroke && i.strokeThickness && this.drawLetterSpacing(u[E], r + i.padding, n + i.padding - g, !0), i.fill && this.drawLetterSpacing(u[E], r + i.padding, n + i.padding - g)
							}
							this.updateTexture()
						}
					}, e.prototype.drawLetterSpacing = function(t, e, i, r) {
						void 0 === r && (r = !1);
						var n = this._style.letterSpacing;
						if (0 !== n)
							for (var o = e, s = Array.from ? Array.from(t) : t.split(""), a = this.context.measureText(t).width, h = 0, u = 0; u < s.length; ++u) {
								var l = s[u];
								r ? this.context.strokeText(l, o, i) : this.context.fillText(l, o, i), o += a - (h = this.context.measureText(t.substring(u + 1)).width) + n, a = h
							} else r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i)
					}, e.prototype.updateTexture = function() {
						var t = this.canvas;
						if (this._style.trim) {
							var e = or(t);
							e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0))
						}
						var i = this._texture,
							r = this._style,
							n = r.trim ? 0 : r.padding,
							o = i.baseTexture;
						i.trim.width = i._frame.width = t.width / this._resolution, i.trim.height = i._frame.height = t.height / this._resolution, i.trim.x = -n, i.trim.y = -n, i.orig.width = i._frame.width - 2 * n, i.orig.height = i._frame.height - 2 * n, this._onTextureUpdate(), o.setRealSize(t.width, t.height, this._resolution), i.updateUvs(), this._recursivePostUpdateTransform(), this.dirty = !1
					}, e.prototype._render = function(e) {
						this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._render.call(this, e)
					}, e.prototype.getLocalBounds = function(e) {
						return this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
					}, e.prototype._calculateBounds = function() {
						this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
					}, e.prototype._generateFillStyle = function(t, e, i) {
						var r, n = t.fill;
						if (!Array.isArray(n)) return n;
						if (1 === n.length) return n[0];
						var o = t.dropShadow ? t.dropShadowDistance : 0,
							s = t.padding || 0,
							a = this.canvas.width / this._resolution - o - 2 * s,
							h = this.canvas.height / this._resolution - o - 2 * s,
							u = n.slice(),
							l = t.fillGradientStops.slice();
						if (!l.length)
							for (var c = u.length + 1, d = 1; d < c; ++d) l.push(d / c);
						if (u.unshift(n[0]), l.unshift(0), u.push(n[n.length - 1]), l.push(1), t.fillGradientType === Ka.LINEAR_VERTICAL) {
							r = this.context.createLinearGradient(a / 2, s, a / 2, h + s);
							var f = i.fontProperties.fontSize + t.strokeThickness;
							for (d = 0; d < e.length; d++) {
								var p = i.lineHeight * (d - 1) + f,
									_ = i.lineHeight * d,
									m = _;
								d > 0 && p > _ && (m = (_ + p) / 2);
								var g = _ + f,
									y = i.lineHeight * (d + 1),
									v = g;
								d + 1 < e.length && y < g && (v = (g + y) / 2);
								for (var T = (v - m) / h, b = 0; b < u.length; b++) {
									var E;
									E = "number" == typeof l[b] ? l[b] : b / u.length;
									var x = Math.min(1, Math.max(0, m / h + E * T));
									x = Number(x.toFixed(5)), r.addColorStop(x, u[b])
								}
							}
						} else {
							r = this.context.createLinearGradient(s, h / 2, a + s, h / 2);
							var A = u.length + 1,
								S = 1;
							for (d = 0; d < u.length; d++) {
								var w;
								w = "number" == typeof l[d] ? l[d] : S / A, r.addColorStop(w, u[d]), S++
							}
						}
						return r
					}, e.prototype.destroy = function(e) {
						"boolean" == typeof e && (e = {
							children: e
						}), e = Object.assign({}, yh, e), t.prototype.destroy.call(this, e), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null
					}, Object.defineProperty(e.prototype, "width", {
						get: function() {
							return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
						},
						set: function(t) {
							this.updateText(!0);
							var e = qi(this.scale.x) || 1;
							this.scale.x = e * t / this._texture.orig.width, this._width = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "height", {
						get: function() {
							return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
						},
						set: function(t) {
							this.updateText(!0);
							var e = qi(this.scale.y) || 1;
							this.scale.y = e * t / this._texture.orig.height, this._height = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "style", {
						get: function() {
							return this._style
						},
						set: function(t) {
							t = t || {}, this._style = t instanceof dh ? t : new dh(t), this.localStyleID = -1, this.dirty = !0
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "text", {
						get: function() {
							return this._text
						},
						set: function(t) {
							t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "resolution", {
						get: function() {
							return this._resolution
						},
						set: function(t) {
							this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), e.nextLineHeightBehavior = !1, e
				}(hh);
			yi.UPLOADS_PER_FRAME = 4;
			var Th = function(t, e) {
					return Th = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, Th(t, e)
				},
				bh = function() {
					function t(t) {
						this.maxItemsPerFrame = t, this.itemsLeft = 0
					}
					return t.prototype.beginFrame = function() {
						this.itemsLeft = this.maxItemsPerFrame
					}, t.prototype.allowedToUpload = function() {
						return this.itemsLeft-- > 0
					}, t
				}();

			function Eh(t, e) {
				var i = !1;
				if (t && t._textures && t._textures.length)
					for (var r = 0; r < t._textures.length; r++)
						if (t._textures[r] instanceof Sn) {
							var n = t._textures[r].baseTexture; - 1 === e.indexOf(n) && (e.push(n), i = !0)
						} return i
			}

			function xh(t, e) {
				if (t.baseTexture instanceof un) {
					var i = t.baseTexture;
					return -1 === e.indexOf(i) && e.push(i), !0
				}
				return !1
			}

			function Ah(t, e) {
				if (t._texture && t._texture instanceof Sn) {
					var i = t._texture.baseTexture;
					return -1 === e.indexOf(i) && e.push(i), !0
				}
				return !1
			}

			function Sh(t, e) {
				return e instanceof vh && (e.updateText(!0), !0)
			}

			function wh(t, e) {
				if (e instanceof dh) {
					var i = e.toFontString();
					return mh.measureFont(i), !0
				}
				return !1
			}

			function Rh(t, e) {
				if (t instanceof vh) {
					-1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
					var i = t._texture.baseTexture;
					return -1 === e.indexOf(i) && e.push(i), !0
				}
				return !1
			}

			function Oh(t, e) {
				return t instanceof dh && (-1 === e.indexOf(t) && e.push(t), !0)
			}
			var Ih = function() {
				function t(t) {
					var e = this;
					this.limiter = new bh(yi.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
						e.queue && e.prepareItems()
					}, this.registerFindHook(Rh), this.registerFindHook(Oh), this.registerFindHook(Eh), this.registerFindHook(xh), this.registerFindHook(Ah), this.registerUploadHook(Sh), this.registerUploadHook(wh)
				}
				return t.prototype.upload = function(t, e) {
					"function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, jr.system.addOnce(this.tick, this, Gr.UTILITY))) : e && e()
				}, t.prototype.tick = function() {
					setTimeout(this.delayedTick, 0)
				}, t.prototype.prepareItems = function() {
					for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
						var t = this.queue[0],
							e = !1;
						if (t && !t._destroyed)
							for (var i = 0, r = this.uploadHooks.length; i < r; i++)
								if (this.uploadHooks[i](this.uploadHookHelper, t)) {
									this.queue.shift(), e = !0;
									break
								} e || this.queue.shift()
					}
					if (this.queue.length) jr.system.addOnce(this.tick, this, Gr.UTILITY);
					else {
						this.ticking = !1;
						var n = this.completes.slice(0);
						for (this.completes.length = 0, i = 0, r = n.length; i < r; i++) n[i]()
					}
				}, t.prototype.registerFindHook = function(t) {
					return t && this.addHooks.push(t), this
				}, t.prototype.registerUploadHook = function(t) {
					return t && this.uploadHooks.push(t), this
				}, t.prototype.add = function(t) {
					for (var e = 0, i = this.addHooks.length; e < i && !this.addHooks[e](t, this.queue); e++);
					if (t instanceof Ur)
						for (e = t.children.length - 1; e >= 0; e--) this.add(t.children[e]);
					return this
				}, t.prototype.destroy = function() {
					this.ticking && jr.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
				}, t
			}();

			function Ph(t, e) {
				return e instanceof un && (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0)
			}

			function Mh(t, e) {
				if (!(e instanceof rh)) return !1;
				var i = e.geometry;
				e.finishPoly(), i.updateBatches();
				for (var r = i.batches, n = 0; n < r.length; n++) {
					var o = r[n].style.texture;
					o && Ph(t, o.baseTexture)
				}
				return i.batchable || t.geometry.bind(i, e._resolveDirectShader(t)), !0
			}

			function Ch(t, e) {
				return t instanceof rh && (e.push(t), !0)
			}
			var Dh = function(t) {
					function e(e) {
						var i = t.call(this, e) || this;
						return i.uploadHookHelper = i.renderer, i.registerFindHook(Ch), i.registerUploadHook(Ph), i.registerUploadHook(Mh), i
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						Th(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), e
				}(Ih),
				Nh = function() {
					function t(t) {
						this.maxMilliseconds = t, this.frameStart = 0
					}
					return t.prototype.beginFrame = function() {
						this.frameStart = Date.now()
					}, t.prototype.allowedToUpload = function() {
						return Date.now() - this.frameStart < this.maxMilliseconds
					}, t
				}(),
				Lh = function() {
					function t(t, e, i) {
						void 0 === i && (i = null), this._texture = t instanceof Sn ? t : null, this.baseTexture = t instanceof un ? t : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = e;
						var r = this.baseTexture.resource;
						this.resolution = this._updateResolution(i || (r ? r.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
					}
					return t.prototype._updateResolution = function(t) {
						void 0 === t && (t = null);
						var e = this.data.meta.scale,
							i = lr(t, null);
						return null === i && (i = void 0 !== e ? parseFloat(e) : 1), 1 !== i && this.baseTexture.setResolution(i), i
					}, t.prototype.parse = function(e) {
						this._batchIndex = 0, this._callback = e, this._frameKeys.length <= t.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
					}, t.prototype._processFrames = function(e) {
						for (var i = e, r = t.BATCH_SIZE; i - e < r && i < this._frameKeys.length;) {
							var n = this._frameKeys[i],
								o = this._frames[n],
								s = o.frame;
							if (s) {
								var a, h = null,
									u = !1 !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame,
									l = new _r(0, 0, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution);
								a = o.rotated ? new _r(Math.floor(s.x) / this.resolution, Math.floor(s.y) / this.resolution, Math.floor(s.h) / this.resolution, Math.floor(s.w) / this.resolution) : new _r(Math.floor(s.x) / this.resolution, Math.floor(s.y) / this.resolution, Math.floor(s.w) / this.resolution, Math.floor(s.h) / this.resolution), !1 !== o.trimmed && o.spriteSourceSize && (h = new _r(Math.floor(o.spriteSourceSize.x) / this.resolution, Math.floor(o.spriteSourceSize.y) / this.resolution, Math.floor(s.w) / this.resolution, Math.floor(s.h) / this.resolution)), this.textures[n] = new Sn(this.baseTexture, a, l, h, o.rotated ? 2 : 0, o.anchor), Sn.addToCache(this.textures[n], n)
							}
							i++
						}
					}, t.prototype._processAnimations = function() {
						var t = this.data.animations || {};
						for (var e in t) {
							this.animations[e] = [];
							for (var i = 0; i < t[e].length; i++) {
								var r = t[e][i];
								this.animations[e].push(this.textures[r])
							}
						}
					}, t.prototype._parseComplete = function() {
						var t = this._callback;
						this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
					}, t.prototype._nextBatch = function() {
						var e = this;
						this._processFrames(this._batchIndex * t.BATCH_SIZE), this._batchIndex++, setTimeout((function() {
							e._batchIndex * t.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(), e._parseComplete())
						}), 0)
					}, t.prototype.destroy = function(t) {
						var e;
						for (var i in void 0 === t && (t = !1), this.textures) this.textures[i].destroy();
						this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (null === (e = this._texture) || void 0 === e || e.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null
					}, t.BATCH_SIZE = 1e3, t
				}(),
				Fh = function() {
					function t() {}
					return t.use = function(e, i) {
						var r, n, o = this,
							s = e.name + "_image";
						if (e.data && e.type === Gs.TYPE.JSON && e.data.frames && !o.resources[s]) {
							var a = null === (n = null === (r = e.data) || void 0 === r ? void 0 : r.meta) || void 0 === n ? void 0 : n.related_multi_packs;
							if (Array.isArray(a))
								for (var h = function(t) {
										if ("string" != typeof t) return "continue";
										var i = t.replace(".json", ""),
											r = Ai.resolve(e.url.replace(o.baseUrl, ""), t);
										if (o.resources[i] || Object.values(o.resources).some((function(t) {
												return Ai.format(Ai.parse(t.url)) === r
											}))) return "continue";
										var n = {
											crossOrigin: e.crossOrigin,
											loadType: Gs.LOAD_TYPE.XHR,
											xhrType: Gs.XHR_RESPONSE_TYPE.JSON,
											parentResource: e,
											metadata: e.metadata
										};
										o.add(i, r, n)
									}, u = 0, l = a; u < l.length; u++) h(l[u]);
							var c = {
									crossOrigin: e.crossOrigin,
									metadata: e.metadata.imageMetadata,
									parentResource: e
								},
								d = t.getResourcePath(e, o.baseUrl);
							o.add(s, d, c, (function(t) {
								if (t.error) i(t.error);
								else {
									var r = new Lh(t.texture, e.data, e.url);
									r.parse((function() {
										e.spritesheet = r, e.textures = r.textures, i()
									}))
								}
							}))
						} else i()
					}, t.getResourcePath = function(t, e) {
						return t.isDataUrl ? t.data.meta.image : Ai.resolve(t.url.replace(e, ""), t.data.meta.image)
					}, t
				}(),
				Bh = function(t, e) {
					return Bh = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, Bh(t, e)
				};

			function Uh(t, e) {
				function i() {
					this.constructor = t
				}
				Bh(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var kh = new Tr,
				Gh = function(t) {
					function e(e, i, r) {
						void 0 === i && (i = 100), void 0 === r && (r = 100);
						var n = t.call(this, e) || this;
						return n.tileTransform = new Mr, n._width = i, n._height = r, n.uvMatrix = n.texture.uvMatrix || new Po(e), n.pluginName = "tilingSprite", n.uvRespectAnchor = !1, n
					}
					return Uh(e, t), Object.defineProperty(e.prototype, "clampMargin", {
						get: function() {
							return this.uvMatrix.clampMargin
						},
						set: function(t) {
							this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "tileScale", {
						get: function() {
							return this.tileTransform.scale
						},
						set: function(t) {
							this.tileTransform.scale.copyFrom(t)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "tilePosition", {
						get: function() {
							return this.tileTransform.position
						},
						set: function(t) {
							this.tileTransform.position.copyFrom(t)
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._onTextureUpdate = function() {
						this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215
					}, e.prototype._render = function(t) {
						var e = this._texture;
						e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
					}, e.prototype._calculateBounds = function() {
						var t = this._width * -this._anchor._x,
							e = this._height * -this._anchor._y,
							i = this._width * (1 - this._anchor._x),
							r = this._height * (1 - this._anchor._y);
						this._bounds.addFrame(this.transform, t, e, i, r)
					}, e.prototype.getLocalBounds = function(e) {
						return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new _r), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
					}, e.prototype.containsPoint = function(t) {
						this.worldTransform.applyInverse(t, kh);
						var e = this._width,
							i = this._height,
							r = -e * this.anchor._x;
						if (kh.x >= r && kh.x < r + e) {
							var n = -i * this.anchor._y;
							if (kh.y >= n && kh.y < n + i) return !0
						}
						return !1
					}, e.prototype.destroy = function(e) {
						t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvMatrix = null
					}, e.from = function(t, i) {
						return new e(t instanceof Sn ? t : Sn.from(t, i), i.width, i.height)
					}, Object.defineProperty(e.prototype, "width", {
						get: function() {
							return this._width
						},
						set: function(t) {
							this._width = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "height", {
						get: function() {
							return this._height
						},
						set: function(t) {
							this._height = t
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(hh),
				Xh = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
				Hh = new Er,
				jh = function(t) {
					function e(e) {
						var i = t.call(this, e) || this,
							r = {
								globals: i.renderer.globalUniforms
							};
						return i.shader = wo.from(Xh, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n", r), i.simpleShader = wo.from(Xh, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n", r), i.quad = new Un, i.state = Ro.for2d(), i
					}
					return Uh(e, t), e.prototype.render = function(t) {
						var e = this.renderer,
							i = this.quad,
							r = i.vertices;
						r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y);
						var n = t.uvRespectAnchor ? t.anchor.x : 0,
							o = t.uvRespectAnchor ? t.anchor.y : 0;
						(r = i.uvs)[0] = r[6] = -n, r[1] = r[3] = -o, r[2] = r[4] = 1 - n, r[5] = r[7] = 1 - o, i.invalidate();
						var s = t._texture,
							a = s.baseTexture,
							h = t.tileTransform.localTransform,
							u = t.uvMatrix,
							l = a.isPowerOfTwo && s.frame.width === a.width && s.frame.height === a.height;
						l && (a._glTextures[e.CONTEXT_UID] ? l = a.wrapMode !== ui.CLAMP : a.wrapMode === ui.CLAMP && (a.wrapMode = ui.REPEAT));
						var c = l ? this.simpleShader : this.shader,
							d = s.width,
							f = s.height,
							p = t._width,
							_ = t._height;
						Hh.set(h.a * d / p, h.b * d / _, h.c * f / p, h.d * f / _, h.tx / p, h.ty / _), Hh.invert(), l ? Hh.prepend(u.mapCoord) : (c.uniforms.uMapCoord = u.mapCoord.toArray(!0), c.uniforms.uClampFrame = u.uClampFrame, c.uniforms.uClampOffset = u.uClampOffset), c.uniforms.uTransform = Hh.toArray(!0), c.uniforms.uColor = ki(t.tint, t.worldAlpha, c.uniforms.uColor, a.alphaMode), c.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), c.uniforms.uSampler = s, e.shader.bind(c), e.geometry.bind(i), this.state.blendMode = Fi(t.blendMode, a.alphaMode), e.state.set(this.state), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
					}, e
				}(Yn),
				zh = function(t, e) {
					return zh = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, zh(t, e)
				};

			function Yh(t, e) {
				function i() {
					this.constructor = t
				}
				zh(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var Vh = function() {
					function t(t, e) {
						this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
					}
					return t.prototype.update = function(t) {
						if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
							this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
							var e = this.uvBuffer.data;
							this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
						}
					}, t
				}(),
				Wh = new Tr,
				qh = new yr,
				Kh = function(t) {
					function e(e, i, r, n) {
						void 0 === n && (n = ri.TRIANGLES);
						var o = t.call(this) || this;
						return o.geometry = e, e.refCount++, o.shader = i, o.state = r || Ro.for2d(), o.drawMode = n, o.start = 0, o.size = 0, o.uvs = null, o.indices = null, o.vertexData = new Float32Array(1), o.vertexDirty = -1, o._transformID = -1, o._roundPixels = yi.ROUND_PIXELS, o.batchUvs = null, o
					}
					return Yh(e, t), Object.defineProperty(e.prototype, "uvBuffer", {
						get: function() {
							return this.geometry.buffers[1]
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "verticesBuffer", {
						get: function() {
							return this.geometry.buffers[0]
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "material", {
						get: function() {
							return this.shader
						},
						set: function(t) {
							this.shader = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "blendMode", {
						get: function() {
							return this.state.blendMode
						},
						set: function(t) {
							this.state.blendMode = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "roundPixels", {
						get: function() {
							return this._roundPixels
						},
						set: function(t) {
							this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "tint", {
						get: function() {
							return "tint" in this.shader ? this.shader.tint : null
						},
						set: function(t) {
							this.shader.tint = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "texture", {
						get: function() {
							return "texture" in this.shader ? this.shader.texture : null
						},
						set: function(t) {
							this.shader.texture = t
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._render = function(t) {
						var i = this.geometry.buffers[0].data;
						this.shader.batchable && this.drawMode === ri.TRIANGLES && i.length < 2 * e.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t)
					}, e.prototype._renderDefault = function(t) {
						var e = this.shader;
						e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
					}, e.prototype._renderToBatch = function(t) {
						var e = this.geometry,
							i = this.shader;
						i.uvMatrix && (i.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = i._tintRGB, this._texture = i.texture;
						var r = this.material.pluginName;
						t.batch.setObjectRenderer(t.plugins[r]), t.plugins[r].render(this)
					}, e.prototype.calculateVertices = function() {
						var t = this.geometry.buffers[0],
							e = t.data,
							i = t._updateID;
						if (i !== this.vertexDirty || this._transformID !== this.transform._worldID) {
							this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
							for (var r = this.transform.worldTransform, n = r.a, o = r.b, s = r.c, a = r.d, h = r.tx, u = r.ty, l = this.vertexData, c = 0; c < l.length / 2; c++) {
								var d = e[2 * c],
									f = e[2 * c + 1];
								l[2 * c] = n * d + s * f + h, l[2 * c + 1] = o * d + a * f + u
							}
							if (this._roundPixels) {
								var p = yi.RESOLUTION;
								for (c = 0; c < l.length; ++c) l[c] = Math.round((l[c] * p | 0) / p)
							}
							this.vertexDirty = i
						}
					}, e.prototype.calculateUvs = function() {
						var t = this.geometry.buffers[1],
							e = this.shader;
						e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new Vh(t, e.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
					}, e.prototype._calculateBounds = function() {
						this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
					}, e.prototype.containsPoint = function(t) {
						if (!this.getBounds().contains(t.x, t.y)) return !1;
						this.worldTransform.applyInverse(t, Wh);
						for (var e = this.geometry.getBuffer("aVertexPosition").data, i = qh.points, r = this.geometry.getIndex().data, n = r.length, o = 4 === this.drawMode ? 3 : 1, s = 0; s + 2 < n; s += o) {
							var a = 2 * r[s],
								h = 2 * r[s + 1],
								u = 2 * r[s + 2];
							if (i[0] = e[a], i[1] = e[a + 1], i[2] = e[h], i[3] = e[h + 1], i[4] = e[u], i[5] = e[u + 1], qh.contains(Wh.x, Wh.y)) return !0
						}
						return !1
					}, e.prototype.destroy = function(e) {
						t.prototype.destroy.call(this, e), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
					}, e.BATCHABLE_SIZE = 100, e
				}(Ur),
				Zh = function(t) {
					function e(e, i) {
						var r = this,
							n = {
								uSampler: e,
								alpha: 1,
								uTextureMatrix: Er.IDENTITY,
								uColor: new Float32Array([1, 1, 1, 1])
							};
						return (i = Object.assign({
							tint: 16777215,
							alpha: 1,
							pluginName: "batch"
						}, i)).uniforms && Object.assign(n, i.uniforms), (r = t.call(this, i.program || So.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"), n) || this)._colorDirty = !1, r.uvMatrix = new Po(e), r.batchable = void 0 === i.program, r.pluginName = i.pluginName, r.tint = i.tint, r.alpha = i.alpha, r
					}
					return Yh(e, t), Object.defineProperty(e.prototype, "texture", {
						get: function() {
							return this.uniforms.uSampler
						},
						set: function(t) {
							this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "alpha", {
						get: function() {
							return this._alpha
						},
						set: function(t) {
							t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "tint", {
						get: function() {
							return this._tint
						},
						set: function(t) {
							t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.update = function() {
						if (this._colorDirty) {
							this._colorDirty = !1;
							var t = this.texture.baseTexture;
							ki(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode)
						}
						this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
					}, e
				}(wo),
				Jh = function(t) {
					function e(e, i, r) {
						var n = t.call(this) || this,
							o = new Mn(e),
							s = new Mn(i, !0),
							a = new Mn(r, !0, !0);
						return n.addAttribute("aVertexPosition", o, 2, !1, si.FLOAT).addAttribute("aTextureCoord", s, 2, !1, si.FLOAT).addIndex(a), n._updateId = -1, n
					}
					return Yh(e, t), Object.defineProperty(e.prototype, "vertexDirtyId", {
						get: function() {
							return this.buffers[0]._updateID
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Fn),
				$h = function(t, e) {
					return $h = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, $h(t, e)
				},
				Qh = function() {
					this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = []
				},
				tu = function() {
					function t() {}
					return t.test = function(t) {
						return "string" == typeof t && 0 === t.indexOf("info face=")
					}, t.parse = function(t) {
						var e = t.match(/^[a-z]+\s+.+$/gm),
							i = {
								info: [],
								common: [],
								page: [],
								char: [],
								chars: [],
								kerning: [],
								kernings: []
							};
						for (var r in e) {
							var n = e[r].match(/^[a-z]+/gm)[0],
								o = e[r].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
								s = {};
							for (var a in o) {
								var h = o[a].split("="),
									u = h[0],
									l = h[1].replace(/"/gm, ""),
									c = parseFloat(l),
									d = isNaN(c) ? l : c;
								s[u] = d
							}
							i[n].push(s)
						}
						var f = new Qh;
						return i.info.forEach((function(t) {
							return f.info.push({
								face: t.face,
								size: parseInt(t.size, 10)
							})
						})), i.common.forEach((function(t) {
							return f.common.push({
								lineHeight: parseInt(t.lineHeight, 10)
							})
						})), i.page.forEach((function(t) {
							return f.page.push({
								id: parseInt(t.id, 10),
								file: t.file
							})
						})), i.char.forEach((function(t) {
							return f.char.push({
								id: parseInt(t.id, 10),
								page: parseInt(t.page, 10),
								x: parseInt(t.x, 10),
								y: parseInt(t.y, 10),
								width: parseInt(t.width, 10),
								height: parseInt(t.height, 10),
								xoffset: parseInt(t.xoffset, 10),
								yoffset: parseInt(t.yoffset, 10),
								xadvance: parseInt(t.xadvance, 10)
							})
						})), i.kerning.forEach((function(t) {
							return f.kerning.push({
								first: parseInt(t.first, 10),
								second: parseInt(t.second, 10),
								amount: parseInt(t.amount, 10)
							})
						})), f
					}, t
				}(),
				eu = function() {
					function t() {}
					return t.test = function(t) {
						return t instanceof XMLDocument && t.getElementsByTagName("page").length && null !== t.getElementsByTagName("info")[0].getAttribute("face")
					}, t.parse = function(t) {
						for (var e = new Qh, i = t.getElementsByTagName("info"), r = t.getElementsByTagName("common"), n = t.getElementsByTagName("page"), o = t.getElementsByTagName("char"), s = t.getElementsByTagName("kerning"), a = 0; a < i.length; a++) e.info.push({
							face: i[a].getAttribute("face"),
							size: parseInt(i[a].getAttribute("size"), 10)
						});
						for (a = 0; a < r.length; a++) e.common.push({
							lineHeight: parseInt(r[a].getAttribute("lineHeight"), 10)
						});
						for (a = 0; a < n.length; a++) e.page.push({
							id: parseInt(n[a].getAttribute("id"), 10) || 0,
							file: n[a].getAttribute("file")
						});
						for (a = 0; a < o.length; a++) {
							var h = o[a];
							e.char.push({
								id: parseInt(h.getAttribute("id"), 10),
								page: parseInt(h.getAttribute("page"), 10) || 0,
								x: parseInt(h.getAttribute("x"), 10),
								y: parseInt(h.getAttribute("y"), 10),
								width: parseInt(h.getAttribute("width"), 10),
								height: parseInt(h.getAttribute("height"), 10),
								xoffset: parseInt(h.getAttribute("xoffset"), 10),
								yoffset: parseInt(h.getAttribute("yoffset"), 10),
								xadvance: parseInt(h.getAttribute("xadvance"), 10)
							})
						}
						for (a = 0; a < s.length; a++) e.kerning.push({
							first: parseInt(s[a].getAttribute("first"), 10),
							second: parseInt(s[a].getAttribute("second"), 10),
							amount: parseInt(s[a].getAttribute("amount"), 10)
						});
						return e
					}, t
				}(),
				iu = function() {
					function t() {}
					return t.test = function(t) {
						if ("string" == typeof t && t.indexOf("<font>") > -1) {
							var e = (new self.DOMParser).parseFromString(t, "text/xml");
							return eu.test(e)
						}
						return !1
					}, t.parse = function(t) {
						var e = (new self.DOMParser).parseFromString(t, "text/xml");
						return eu.parse(e)
					}, t
				}(),
				ru = [tu, eu, iu];

			function nu(t) {
				for (var e = 0; e < ru.length; e++)
					if (ru[e].test(t)) return ru[e];
				return null
			}

			function ou(t, e, i, r, n, o, s) {
				var a = i.text,
					h = i.fontProperties;
				e.translate(r, n), e.scale(o, o);
				var u = s.strokeThickness / 2,
					l = -s.strokeThickness / 2;
				e.font = s.toFontString(), e.lineWidth = s.strokeThickness, e.textBaseline = s.textBaseline, e.lineJoin = s.lineJoin, e.miterLimit = s.miterLimit, e.fillStyle = function(t, e, i, r, n, o) {
					var s, a = i.fill;
					if (!Array.isArray(a)) return a;
					if (1 === a.length) return a[0];
					var h = i.dropShadow ? i.dropShadowDistance : 0,
						u = i.padding || 0,
						l = t.width / r - h - 2 * u,
						c = t.height / r - h - 2 * u,
						d = a.slice(),
						f = i.fillGradientStops.slice();
					if (!f.length)
						for (var p = d.length + 1, _ = 1; _ < p; ++_) f.push(_ / p);
					if (d.unshift(a[0]), f.unshift(0), d.push(a[a.length - 1]), f.push(1), i.fillGradientType === Ka.LINEAR_VERTICAL) {
						s = e.createLinearGradient(l / 2, u, l / 2, c + u);
						var m = 0,
							g = (o.fontProperties.fontSize + i.strokeThickness) / c;
						for (_ = 0; _ < n.length; _++)
							for (var y = o.lineHeight * _, v = 0; v < d.length; v++) {
								var T = y / c + ("number" == typeof f[v] ? f[v] : v / d.length) * g,
									b = Math.max(m, T);
								b = Math.min(b, 1), s.addColorStop(b, d[v]), m = b
							}
					} else {
						s = e.createLinearGradient(u, c / 2, l + u, c / 2);
						var E = d.length + 1,
							x = 1;
						for (_ = 0; _ < d.length; _++) {
							var A;
							A = "number" == typeof f[_] ? f[_] : x / E, s.addColorStop(A, d[_]), x++
						}
					}
					return s
				}(t, e, s, o, [a], i), e.strokeStyle = s.stroke;
				var c = s.dropShadowColor,
					d = Mi("number" == typeof c ? c : Di(c));
				s.dropShadow ? (e.shadowColor = "rgba(" + 255 * d[0] + "," + 255 * d[1] + "," + 255 * d[2] + "," + s.dropShadowAlpha + ")", e.shadowBlur = s.dropShadowBlur, e.shadowOffsetX = Math.cos(s.dropShadowAngle) * s.dropShadowDistance, e.shadowOffsetY = Math.sin(s.dropShadowAngle) * s.dropShadowDistance) : (e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0), s.stroke && s.strokeThickness && e.strokeText(a, u, l + i.lineHeight - h.descent), s.fill && e.fillText(a, u, l + i.lineHeight - h.descent), e.setTransform(1, 0, 0, 1, 0, 0), e.fillStyle = "rgba(0, 0, 0, 0)"
			}
			var su = function() {
					function t(t, e, i) {
						var r = t.info[0],
							n = t.common[0],
							o = lr(t.page[0].file),
							s = {};
						this._ownsTextures = i, this.font = r.face, this.size = r.size, this.lineHeight = n.lineHeight / o, this.chars = {}, this.pageTextures = s;
						for (var a = 0; a < t.page.length; a++) {
							var h = t.page[a],
								u = h.id,
								l = h.file;
							s[u] = e instanceof Array ? e[a] : e[l]
						}
						for (a = 0; a < t.char.length; a++) {
							var c = t.char[a],
								d = (u = c.id, c.page),
								f = t.char[a],
								p = f.x,
								_ = f.y,
								m = f.width,
								g = f.height,
								y = f.xoffset,
								v = f.yoffset,
								T = f.xadvance;
							_ /= o, m /= o, g /= o, y /= o, v /= o, T /= o;
							var b = new _r((p /= o) + s[d].frame.x / o, _ + s[d].frame.y / o, m, g);
							this.chars[u] = {
								xOffset: y,
								yOffset: v,
								xAdvance: T,
								kerning: {},
								texture: new Sn(s[d].baseTexture, b),
								page: d
							}
						}
						for (a = 0; a < t.kerning.length; a++) {
							var E = t.kerning[a],
								x = E.first,
								A = E.second,
								S = E.amount;
							x /= o, A /= o, S /= o, this.chars[A] && (this.chars[A].kerning[x] = S)
						}
					}
					return t.prototype.destroy = function() {
						for (var t in this.chars) this.chars[t].texture.destroy(), this.chars[t].texture = null;
						for (var t in this.pageTextures) this._ownsTextures && this.pageTextures[t].destroy(!0), this.pageTextures[t] = null;
						this.chars = null, this.pageTextures = null
					}, t.install = function(e, i, r) {
						var n;
						if (e instanceof Qh) n = e;
						else {
							var o = nu(e);
							if (!o) throw new Error("Unrecognized data format for font.");
							n = o.parse(e)
						}
						i instanceof Sn && (i = [i]);
						var s = new t(n, i, r);
						return t.available[s.font] = s, s
					}, t.uninstall = function(e) {
						var i = t.available[e];
						if (!i) throw new Error("No font found named '" + e + "'");
						i.destroy(), delete t.available[e]
					}, t.from = function(e, i, r) {
						if (!e) throw new Error("[BitmapFont] Property `name` is required.");
						var n = Object.assign({}, t.defaultOptions, r),
							o = n.chars,
							s = n.padding,
							a = n.resolution,
							h = n.textureWidth,
							u = n.textureHeight,
							l = function(t) {
								"string" == typeof t && (t = [t]);
								for (var e = [], i = 0, r = t.length; i < r; i++) {
									var n = t[i];
									if (Array.isArray(n)) {
										if (2 !== n.length) throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got " + n.length + ".");
										var o = n[0].charCodeAt(0),
											s = n[1].charCodeAt(0);
										if (s < o) throw new Error("[BitmapFont]: Invalid character range.");
										for (var a = o, h = s; a <= h; a++) e.push(String.fromCharCode(a))
									} else e.push.apply(e, n.split(""))
								}
								if (0 === e.length) throw new Error("[BitmapFont]: Empty set when resolving characters.");
								return e
							}(o),
							c = i instanceof dh ? i : new dh(i),
							d = h,
							f = new Qh;
						f.info[0] = {
							face: c.fontFamily,
							size: c.fontSize
						}, f.common[0] = {
							lineHeight: c.fontSize
						};
						for (var p, _, m, g = 0, y = 0, v = 0, T = [], b = 0; b < l.length; b++) {
							p || ((p = document.createElement("canvas")).width = h, p.height = u, _ = p.getContext("2d"), m = new un(p, {
								resolution: a
							}), T.push(new Sn(m)), f.page.push({
								id: T.length - 1,
								file: ""
							}));
							var E = mh.measureText(l[b], c, !1, p),
								x = E.width,
								A = Math.ceil(E.height),
								S = Math.ceil(("italic" === c.fontStyle ? 2 : 1) * x);
							if (y >= u - A * a) {
								if (0 === y) throw new Error("[BitmapFont] textureHeight " + u + "px is too small for " + c.fontSize + "px fonts");
								--b, p = null, _ = null, m = null, y = 0, g = 0, v = 0
							} else if (v = Math.max(A + E.fontProperties.descent, v), S * a + g >= d) --b, y += v * a, y = Math.ceil(y), g = 0, v = 0;
							else {
								ou(p, _, E, g, y, a, c);
								var w = E.text.charCodeAt(0);
								f.char.push({
									id: w,
									page: T.length - 1,
									x: g / a,
									y: y / a,
									width: S,
									height: A,
									xoffset: 0,
									yoffset: 0,
									xadvance: Math.ceil(x - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0))
								}), g += (S + 2 * s) * a, g = Math.ceil(g)
							}
						}
						b = 0;
						for (var R = l.length; b < R; b++)
							for (var O = l[b], I = 0; I < R; I++) {
								var P = l[I],
									M = _.measureText(O).width,
									C = _.measureText(P).width,
									D = _.measureText(O + P).width - (M + C);
								D && f.kerning.push({
									first: O.charCodeAt(0),
									second: P.charCodeAt(0),
									amount: D
								})
							}
						var N = new t(f, T, !0);
						return void 0 !== t.available[e] && t.uninstall(e), t.available[e] = N, N
					}, t.ALPHA = [
						["a", "z"],
						["A", "Z"], " "
					], t.NUMERIC = [
						["0", "9"]
					], t.ALPHANUMERIC = [
						["a", "z"],
						["A", "Z"],
						["0", "9"], " "
					], t.ASCII = [
						[" ", "~"]
					], t.defaultOptions = {
						resolution: 1,
						textureWidth: 512,
						textureHeight: 512,
						padding: 4,
						chars: t.ALPHANUMERIC
					}, t.available = {}, t
				}(),
				au = [],
				hu = [],
				uu = function(t) {
					function e(i, r) {
						void 0 === r && (r = {});
						var n = t.call(this) || this;
						n._tint = 16777215;
						var o = Object.assign({}, e.styleDefaults, r),
							s = o.align,
							a = o.tint,
							h = o.maxWidth,
							u = o.letterSpacing,
							l = o.fontName,
							c = o.fontSize;
						if (!su.available[l]) throw new Error('Missing BitmapFont "' + l + '"');
						return n._activePagesMeshData = [], n._textWidth = 0, n._textHeight = 0, n._align = s, n._tint = a, n._fontName = l, n._fontSize = c || su.available[l].size, n._text = i, n._maxWidth = h, n._maxLineHeight = 0, n._letterSpacing = u, n._anchor = new br((function() {
							n.dirty = !0
						}), n, 0, 0), n._roundPixels = yi.ROUND_PIXELS, n.dirty = !0, n._textureCache = {}, n
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						$h(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), e.prototype.updateText = function() {
						for (var t, e = su.available[this._fontName], i = this._fontSize / e.size, r = new Tr, n = [], o = [], s = [], a = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", h = a.length, u = this._maxWidth * e.size / this._fontSize, l = null, c = 0, d = 0, f = 0, p = -1, _ = 0, m = 0, g = 0, y = 0, v = 0; v < h; v++) {
							var T = a.charCodeAt(v),
								b = a.charAt(v);
							if (/(?:\s)/.test(b) && (p = v, _ = c, y++), "\r" !== b && "\n" !== b) {
								var E = e.chars[T];
								if (E) {
									l && E.kerning[l] && (r.x += E.kerning[l]);
									var x = hu.pop() || {
										texture: Sn.EMPTY,
										line: 0,
										charCode: 0,
										prevSpaces: 0,
										position: new Tr
									};
									x.texture = E.texture, x.line = f, x.charCode = T, x.position.x = r.x + E.xOffset + this._letterSpacing / 2, x.position.y = r.y + E.yOffset, x.prevSpaces = y, n.push(x), c = x.position.x + E.texture.orig.width, r.x += E.xAdvance + this._letterSpacing, g = Math.max(g, E.yOffset + E.texture.height), l = T, -1 !== p && u > 0 && r.x > u && (Wi(n, 1 + p - ++m, 1 + v - p), v = p, p = -1, o.push(_), s.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0), d = Math.max(d, _), f++, r.x = 0, r.y += e.lineHeight, l = null, y = 0)
								}
							} else o.push(c), s.push(-1), d = Math.max(d, c), ++f, ++m, r.x = 0, r.y += e.lineHeight, l = null, y = 0
						}
						var A = a.charAt(a.length - 1);
						"\r" !== A && "\n" !== A && (/(?:\s)/.test(A) && (c = _), o.push(c), d = Math.max(d, c), s.push(-1));
						var S = [];
						for (v = 0; v <= f; v++) {
							var w = 0;
							"right" === this._align ? w = d - o[v] : "center" === this._align ? w = (d - o[v]) / 2 : "justify" === this._align && (w = s[v] < 0 ? 0 : (d - o[v]) / s[v]), S.push(w)
						}
						var R = n.length,
							O = {},
							I = [],
							P = this._activePagesMeshData;
						for (v = 0; v < P.length; v++) au.push(P[v]);
						for (v = 0; v < R; v++) {
							var M = (G = n[v].texture).baseTexture.uid;
							if (!O[M]) {
								if (!(W = au.pop())) {
									var C = new Jh,
										D = new Zh(Sn.EMPTY);
									W = {
										index: 0,
										indexCount: 0,
										vertexCount: 0,
										uvsCount: 0,
										total: 0,
										mesh: new Kh(C, D),
										vertices: null,
										uvs: null,
										indices: null
									}
								}
								W.index = 0, W.indexCount = 0, W.vertexCount = 0, W.uvsCount = 0, W.total = 0;
								var N = this._textureCache;
								N[M] = N[M] || new Sn(G.baseTexture), W.mesh.texture = N[M], W.mesh.tint = this._tint, I.push(W), O[M] = W
							}
							O[M].total++
						}
						for (v = 0; v < P.length; v++) - 1 === I.indexOf(P[v]) && this.removeChild(P[v].mesh);
						for (v = 0; v < I.length; v++) I[v].mesh.parent !== this && this.addChild(I[v].mesh);
						for (var v in this._activePagesMeshData = I, O) {
							var L = (W = O[v]).total;
							if (!((null === (t = W.indices) || void 0 === t ? void 0 : t.length) > 6 * L) || W.vertices.length < 2 * Kh.BATCHABLE_SIZE) W.vertices = new Float32Array(8 * L), W.uvs = new Float32Array(8 * L), W.indices = new Uint16Array(6 * L);
							else
								for (var F = W.total, B = W.vertices, U = 4 * F * 2; U < B.length; U++) B[U] = 0;
							W.mesh.size = 6 * L
						}
						for (v = 0; v < R; v++) {
							var k = (b = n[v]).position.x + S[b.line] * ("justify" === this._align ? b.prevSpaces : 1);
							this._roundPixels && (k = Math.round(k));
							var G, X = k * i,
								H = b.position.y * i,
								j = O[(G = b.texture).baseTexture.uid],
								z = G.frame,
								Y = G._uvs,
								V = j.index++;
							j.indices[6 * V + 0] = 0 + 4 * V, j.indices[6 * V + 1] = 1 + 4 * V, j.indices[6 * V + 2] = 2 + 4 * V, j.indices[6 * V + 3] = 0 + 4 * V, j.indices[6 * V + 4] = 2 + 4 * V, j.indices[6 * V + 5] = 3 + 4 * V, j.vertices[8 * V + 0] = X, j.vertices[8 * V + 1] = H, j.vertices[8 * V + 2] = X + z.width * i, j.vertices[8 * V + 3] = H, j.vertices[8 * V + 4] = X + z.width * i, j.vertices[8 * V + 5] = H + z.height * i, j.vertices[8 * V + 6] = X, j.vertices[8 * V + 7] = H + z.height * i, j.uvs[8 * V + 0] = Y.x0, j.uvs[8 * V + 1] = Y.y0, j.uvs[8 * V + 2] = Y.x1, j.uvs[8 * V + 3] = Y.y1, j.uvs[8 * V + 4] = Y.x2, j.uvs[8 * V + 5] = Y.y2, j.uvs[8 * V + 6] = Y.x3, j.uvs[8 * V + 7] = Y.y3
						}
						for (var v in this._textWidth = d * i, this._textHeight = (r.y + e.lineHeight) * i, O) {
							var W = O[v];
							if (0 !== this.anchor.x || 0 !== this.anchor.y)
								for (var q = 0, K = this._textWidth * this.anchor.x, Z = this._textHeight * this.anchor.y, J = 0; J < W.total; J++) W.vertices[q++] -= K, W.vertices[q++] -= Z, W.vertices[q++] -= K, W.vertices[q++] -= Z, W.vertices[q++] -= K, W.vertices[q++] -= Z, W.vertices[q++] -= K, W.vertices[q++] -= Z;
							this._maxLineHeight = g * i;
							var $ = W.mesh.geometry.getBuffer("aVertexPosition"),
								Q = W.mesh.geometry.getBuffer("aTextureCoord"),
								tt = W.mesh.geometry.getIndex();
							$.data = W.vertices, Q.data = W.uvs, tt.data = W.indices, $.update(), Q.update(), tt.update()
						}
						for (v = 0; v < n.length; v++) hu.push(n[v])
					}, e.prototype.updateTransform = function() {
						this.validate(), this.containerUpdateTransform()
					}, e.prototype.getLocalBounds = function() {
						return this.validate(), t.prototype.getLocalBounds.call(this)
					}, e.prototype.validate = function() {
						this.dirty && (this.updateText(), this.dirty = !1)
					}, Object.defineProperty(e.prototype, "tint", {
						get: function() {
							return this._tint
						},
						set: function(t) {
							if (this._tint !== t) {
								this._tint = t;
								for (var e = 0; e < this._activePagesMeshData.length; e++) this._activePagesMeshData[e].mesh.tint = t
							}
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "align", {
						get: function() {
							return this._align
						},
						set: function(t) {
							this._align !== t && (this._align = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "fontName", {
						get: function() {
							return this._fontName
						},
						set: function(t) {
							if (!su.available[t]) throw new Error('Missing BitmapFont "' + t + '"');
							this._fontName !== t && (this._fontName = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "fontSize", {
						get: function() {
							return this._fontSize
						},
						set: function(t) {
							this._fontSize !== t && (this._fontSize = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "anchor", {
						get: function() {
							return this._anchor
						},
						set: function(t) {
							"number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "text", {
						get: function() {
							return this._text
						},
						set: function(t) {
							t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "maxWidth", {
						get: function() {
							return this._maxWidth
						},
						set: function(t) {
							this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "maxLineHeight", {
						get: function() {
							return this.validate(), this._maxLineHeight
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "textWidth", {
						get: function() {
							return this.validate(), this._textWidth
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "letterSpacing", {
						get: function() {
							return this._letterSpacing
						},
						set: function(t) {
							this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "roundPixels", {
						get: function() {
							return this._roundPixels
						},
						set: function(t) {
							t !== this._roundPixels && (this._roundPixels = t, this.dirty = !0)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "textHeight", {
						get: function() {
							return this.validate(), this._textHeight
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.destroy = function(e) {
						var i = this._textureCache;
						for (var r in i) i[r].destroy(), delete i[r];
						this._textureCache = null, t.prototype.destroy.call(this, e)
					}, e.styleDefaults = {
						align: "left",
						tint: 16777215,
						maxWidth: 0,
						letterSpacing: 0
					}, e
				}(Ur),
				lu = function() {
					function t() {}
					return t.add = function() {
						Gs.setExtensionXhrType("fnt", Gs.XHR_RESPONSE_TYPE.TEXT)
					}, t.use = function(e, i) {
						var r = nu(e.data);
						if (r)
							for (var n = t.getBaseUrl(this, e), o = r.parse(e.data), s = {}, a = function(t) {
									s[t.metadata.pageFile] = t.texture, Object.keys(s).length === o.page.length && (e.bitmapFont = su.install(o, s, !0), i())
								}, h = 0; h < o.page.length; ++h) {
								var u = o.page[h].file,
									l = n + u,
									c = !1;
								for (var d in this.resources) {
									var f = this.resources[d];
									if (f.url === l) {
										f.metadata.pageFile = u, f.texture ? a(f) : f.onAfterMiddleware.add(a), c = !0;
										break
									}
								}
								if (!c) {
									var p = {
										crossOrigin: e.crossOrigin,
										loadType: Gs.LOAD_TYPE.IMAGE,
										metadata: Object.assign({
											pageFile: u
										}, e.metadata.imageMetadata),
										parentResource: e
									};
									this.add(l, p, a)
								}
							} else i()
					}, t.getBaseUrl = function(e, i) {
						var r = i.isDataUrl ? "" : t.dirname(i.url);
						return i.isDataUrl && ("." === r && (r = ""), e.baseUrl && r && "/" === e.baseUrl.charAt(e.baseUrl.length - 1) && (r += "/")), (r = r.replace(e.baseUrl, "")) && "/" !== r.charAt(r.length - 1) && (r += "/"), r
					}, t.dirname = function(t) {
						var e = t.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
						return e === t ? "." : "" === e ? "/" : e
					}, t
				}(),
				cu = function(t, e) {
					return cu = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, cu(t, e)
				},
				du = function(t) {
					function e(e) {
						void 0 === e && (e = 1);
						var i = t.call(this, us, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n", {
							uAlpha: 1
						}) || this;
						return i.alpha = e, i
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						cu(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), Object.defineProperty(e.prototype, "alpha", {
						get: function() {
							return this.uniforms.uAlpha
						},
						set: function(t) {
							this.uniforms.uAlpha = t
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Oo),
				fu = function(t, e) {
					return fu = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, fu(t, e)
				};

			function pu(t, e) {
				function i() {
					this.constructor = t
				}
				fu(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var _u, mu, gu, yu, vu, Tu, bu, Eu, xu, Au, Su, wu, Ru, Ou, Iu, Pu, Mu, Cu, Du, Nu = {
					5: [.153388, .221461, .250301],
					7: [.071303, .131514, .189879, .214607],
					9: [.028532, .067234, .124009, .179044, .20236],
					11: [.0093, .028002, .065984, .121703, .175713, .198596],
					13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
					15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
				},
				Lu = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
			! function(t) {
				t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
			}(_u || (_u = {})),
			function(t) {
				t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
			}(mu || (mu = {})),
			function(t) {
				t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
			}(gu || (gu = {})),
			function(t) {
				t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
			}(yu || (yu = {})),
			function(t) {
				t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
			}(vu || (vu = {})),
			function(t) {
				t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
			}(Tu || (Tu = {})),
			function(t) {
				t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
			}(bu || (bu = {})),
			function(t) {
				t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
			}(Eu || (Eu = {})),
			function(t) {
				t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
			}(xu || (xu = {})),
			function(t) {
				t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
			}(Au || (Au = {})),
			function(t) {
				t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
			}(Su || (Su = {})),
			function(t) {
				t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
			}(wu || (wu = {})),
			function(t) {
				t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
			}(Ru || (Ru = {})),
			function(t) {
				t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
			}(Ou || (Ou = {})),
			function(t) {
				t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
			}(Iu || (Iu = {})),
			function(t) {
				t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
			}(Pu || (Pu = {})),
			function(t) {
				t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
			}(Mu || (Mu = {})),
			function(t) {
				t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
			}(Cu || (Cu = {})),
			function(t) {
				t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
			}(Du || (Du = {}));
			var Fu = function(t) {
					function e(e, i, r, n, o) {
						void 0 === i && (i = 8), void 0 === r && (r = 4), void 0 === n && (n = yi.FILTER_RESOLUTION), void 0 === o && (o = 5);
						var s = this,
							a = function(t, e) {
								var i, r = Math.ceil(t / 2),
									n = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",
									o = "";
								i = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
								for (var s = 0; s < t; s++) {
									var a = i.replace("%index%", s.toString());
									o += a = a.replace("%sampleIndex%", s - (r - 1) + ".0"), o += "\n"
								}
								return (n = n.replace("%blur%", o)).replace("%size%", t.toString())
							}(o, e),
							h = function(t) {
								for (var e, i = Nu[t], r = i.length, n = Lu, o = "", s = 0; s < t; s++) {
									var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s.toString());
									e = s, s >= r && (e = t - s - 1), o += a = a.replace("%value%", i[e].toString()), o += "\n"
								}
								return (n = n.replace("%blur%", o)).replace("%size%", t.toString())
							}(o);
						return (s = t.call(this, a, h) || this).horizontal = e, s.resolution = n, s._quality = 0, s.quality = r, s.blur = i, s
					}
					return pu(e, t), e.prototype.apply = function(t, e, i, r) {
						if (i ? this.horizontal ? this.uniforms.strength = 1 / i.width * (i.width / e.width) : this.uniforms.strength = 1 / i.height * (i.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, r);
						else {
							var n = t.getFilterTexture(),
								o = t.renderer,
								s = e,
								a = n;
							this.state.blend = !1, t.applyFilter(this, s, a, Ou.CLEAR);
							for (var h = 1; h < this.passes - 1; h++) {
								t.bindAndClear(s, Ou.BLIT), this.uniforms.uSampler = a;
								var u = a;
								a = s, s = u, o.shader.bind(this), o.geometry.draw(5)
							}
							this.state.blend = !0, t.applyFilter(this, a, i, r), t.returnFilterTexture(n)
						}
					}, Object.defineProperty(e.prototype, "blur", {
						get: function() {
							return this.strength
						},
						set: function(t) {
							this.padding = 1 + 2 * Math.abs(t), this.strength = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "quality", {
						get: function() {
							return this._quality
						},
						set: function(t) {
							this._quality = t, this.passes = t
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Oo),
				Bu = function(t) {
					function e(e, i, r, n) {
						void 0 === e && (e = 8), void 0 === i && (i = 4), void 0 === r && (r = yi.FILTER_RESOLUTION), void 0 === n && (n = 5);
						var o = t.call(this) || this;
						return o.blurXFilter = new Fu(!0, e, i, r, n), o.blurYFilter = new Fu(!1, e, i, r, n), o.resolution = r, o.quality = i, o.blur = e, o.repeatEdgePixels = !1, o
					}
					return pu(e, t), e.prototype.apply = function(t, e, i, r) {
						var n = Math.abs(this.blurXFilter.strength),
							o = Math.abs(this.blurYFilter.strength);
						if (n && o) {
							var s = t.getFilterTexture();
							this.blurXFilter.apply(t, e, s, Ou.CLEAR), this.blurYFilter.apply(t, s, i, r), t.returnFilterTexture(s)
						} else o ? this.blurYFilter.apply(t, e, i, r) : this.blurXFilter.apply(t, e, i, r)
					}, e.prototype.updatePadding = function() {
						this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
					}, Object.defineProperty(e.prototype, "blur", {
						get: function() {
							return this.blurXFilter.blur
						},
						set: function(t) {
							this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "quality", {
						get: function() {
							return this.blurXFilter.quality
						},
						set: function(t) {
							this.blurXFilter.quality = this.blurYFilter.quality = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "blurX", {
						get: function() {
							return this.blurXFilter.blur
						},
						set: function(t) {
							this.blurXFilter.blur = t, this.updatePadding()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "blurY", {
						get: function() {
							return this.blurYFilter.blur
						},
						set: function(t) {
							this.blurYFilter.blur = t, this.updatePadding()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "blendMode", {
						get: function() {
							return this.blurYFilter.blendMode
						},
						set: function(t) {
							this.blurYFilter.blendMode = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "repeatEdgePixels", {
						get: function() {
							return this._repeatEdgePixels
						},
						set: function(t) {
							this._repeatEdgePixels = t, this.updatePadding()
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Oo),
				Uu = function(t, e) {
					return Uu = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, Uu(t, e)
				},
				ku = function(t) {
					function e() {
						var e = this,
							i = {
								m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
								uAlpha: 1
							};
						return (e = t.call(this, ls, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n", i) || this).alpha = 1, e
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						Uu(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), e.prototype._loadMatrix = function(t, e) {
						void 0 === e && (e = !1);
						var i = t;
						e && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i
					}, e.prototype._multiply = function(t, e, i) {
						return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19] + e[4], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19] + e[9], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19] + e[14], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19] + e[19], t
					}, e.prototype._colorMatrix = function(t) {
						var e = new Float32Array(t);
						return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
					}, e.prototype.brightness = function(t, e) {
						var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
						this._loadMatrix(i, e)
					}, e.prototype.tint = function(t, e) {
						var i = [(t >> 16 & 255) / 255, 0, 0, 0, 0, 0, (t >> 8 & 255) / 255, 0, 0, 0, 0, 0, (255 & t) / 255, 0, 0, 0, 0, 0, 1, 0];
						this._loadMatrix(i, e)
					}, e.prototype.greyscale = function(t, e) {
						var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
						this._loadMatrix(i, e)
					}, e.prototype.blackAndWhite = function(t) {
						this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
					}, e.prototype.hue = function(t, e) {
						t = (t || 0) / 180 * Math.PI;
						var i = Math.cos(t),
							r = Math.sin(t),
							n = 1 / 3,
							o = (0, Math.sqrt)(n),
							s = [i + (1 - i) * n, n * (1 - i) - o * r, n * (1 - i) + o * r, 0, 0, n * (1 - i) + o * r, i + n * (1 - i), n * (1 - i) - o * r, 0, 0, n * (1 - i) - o * r, n * (1 - i) + o * r, i + n * (1 - i), 0, 0, 0, 0, 0, 1, 0];
						this._loadMatrix(s, e)
					}, e.prototype.contrast = function(t, e) {
						var i = (t || 0) + 1,
							r = -.5 * (i - 1),
							n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
						this._loadMatrix(n, e)
					}, e.prototype.saturate = function(t, e) {
						void 0 === t && (t = 0);
						var i = 2 * t / 3 + 1,
							r = -.5 * (i - 1),
							n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
						this._loadMatrix(n, e)
					}, e.prototype.desaturate = function() {
						this.saturate(-1)
					}, e.prototype.negative = function(t) {
						this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t)
					}, e.prototype.sepia = function(t) {
						this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
					}, e.prototype.technicolor = function(t) {
						this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
					}, e.prototype.polaroid = function(t) {
						this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
					}, e.prototype.toBGR = function(t) {
						this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
					}, e.prototype.kodachrome = function(t) {
						this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
					}, e.prototype.browni = function(t) {
						this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
					}, e.prototype.vintage = function(t) {
						this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
					}, e.prototype.colorTone = function(t, e, i, r, n) {
						var o = ((i = i || 16770432) >> 16 & 255) / 255,
							s = (i >> 8 & 255) / 255,
							a = (255 & i) / 255,
							h = ((r = r || 3375104) >> 16 & 255) / 255,
							u = (r >> 8 & 255) / 255,
							l = (255 & r) / 255,
							c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, h, u, l, e = e || .15, 0, o - h, s - u, a - l, 0, 0];
						this._loadMatrix(c, n)
					}, e.prototype.night = function(t, e) {
						var i = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
						this._loadMatrix(i, e)
					}, e.prototype.predator = function(t, e) {
						var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
						this._loadMatrix(i, e)
					}, e.prototype.lsd = function(t) {
						this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
					}, e.prototype.reset = function() {
						this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
					}, Object.defineProperty(e.prototype, "matrix", {
						get: function() {
							return this.uniforms.m
						},
						set: function(t) {
							this.uniforms.m = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "alpha", {
						get: function() {
							return this.uniforms.uAlpha
						},
						set: function(t) {
							this.uniforms.uAlpha = t
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Oo);
			ku.prototype.grayscale = ku.prototype.greyscale;
			var Gu, Xu, Hu, ju, zu, Yu, Vu, Wu, qu, Ku, Zu, Ju, $u, Qu, tl, el, il, rl, nl, ol = function(t, e) {
					return ol = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, ol(t, e)
				},
				sl = function(t) {
					function e(e, i) {
						var r = this,
							n = new Er;
						return e.renderable = !1, (r = t.call(this, "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n", {
							mapSampler: e._texture,
							filterMatrix: n,
							scale: {
								x: 1,
								y: 1
							},
							rotation: new Float32Array([1, 0, 0, 1])
						}) || this).maskSprite = e, r.maskMatrix = n, null == i && (i = 20), r.scale = new Tr(i, i), r
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						ol(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), e.prototype.apply = function(t, e, i, r) {
						this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
						var n = this.maskSprite.worldTransform,
							o = Math.sqrt(n.a * n.a + n.b * n.b),
							s = Math.sqrt(n.c * n.c + n.d * n.d);
						0 !== o && 0 !== s && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / s, this.uniforms.rotation[3] = n.d / s), t.applyFilter(this, e, i, r)
					}, Object.defineProperty(e.prototype, "map", {
						get: function() {
							return this.uniforms.mapSampler
						},
						set: function(t) {
							this.uniforms.mapSampler = t
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Oo),
				al = function(t, e) {
					return al = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, al(t, e)
				},
				hl = function(t) {
					function e() {
						return t.call(this, "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n') || this
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						al(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), e
				}(Oo),
				ul = function(t, e) {
					return ul = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, ul(t, e)
				},
				ll = function(t) {
					function e(e, i) {
						void 0 === e && (e = .5), void 0 === i && (i = Math.random());
						var r = t.call(this, ls, "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n", {
							uNoise: 0,
							uSeed: 0
						}) || this;
						return r.noise = e, r.seed = i, r
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						ul(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), Object.defineProperty(e.prototype, "noise", {
						get: function() {
							return this.uniforms.uNoise
						},
						set: function(t) {
							this.uniforms.uNoise = t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "seed", {
						get: function() {
							return this.uniforms.uSeed
						},
						set: function(t) {
							this.uniforms.uSeed = t
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(Oo);
			! function(t) {
				t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
			}(Gu || (Gu = {})),
			function(t) {
				t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
			}(Xu || (Xu = {})),
			function(t) {
				t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
			}(Hu || (Hu = {})),
			function(t) {
				t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
			}(ju || (ju = {})),
			function(t) {
				t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
			}(zu || (zu = {})),
			function(t) {
				t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
			}(Yu || (Yu = {})),
			function(t) {
				t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
			}(Vu || (Vu = {})),
			function(t) {
				t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
			}(Wu || (Wu = {})),
			function(t) {
				t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
			}(qu || (qu = {})),
			function(t) {
				t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
			}(Ku || (Ku = {})),
			function(t) {
				t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
			}(Zu || (Zu = {})),
			function(t) {
				t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
			}(Ju || (Ju = {})),
			function(t) {
				t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
			}($u || ($u = {})),
			function(t) {
				t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
			}(Qu || (Qu = {})),
			function(t) {
				t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
			}(tl || (tl = {})),
			function(t) {
				t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
			}(el || (el = {})),
			function(t) {
				t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
			}(il || (il = {})),
			function(t) {
				t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
			}(rl || (rl = {})),
			function(t) {
				t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
			}(nl || (nl = {}));
			var cl = new Er;
			Lr.prototype._cacheAsBitmap = !1, Lr.prototype._cacheData = null, Lr.prototype._cacheAsBitmapResolution = null, Lr.prototype._cacheAsBitmapMultisample = rl.NONE;
			var dl = function() {
				this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null
			};
			Object.defineProperties(Lr.prototype, {
				cacheAsBitmapResolution: {
					get: function() {
						return this._cacheAsBitmapResolution
					},
					set: function(t) {
						t !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = t, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0))
					}
				},
				cacheAsBitmapMultisample: {
					get: function() {
						return this._cacheAsBitmapMultisample
					},
					set: function(t) {
						t !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = t, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0))
					}
				},
				cacheAsBitmap: {
					get: function() {
						return this._cacheAsBitmap
					},
					set: function(t) {
						var e;
						this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._cacheData || (this._cacheData = new dl), (e = this._cacheData).originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea))
					}
				}
			}), Lr.prototype._renderCached = function(t) {
				!this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t))
			}, Lr.prototype._initCachedDisplayObject = function(t) {
				var e;
				if (!this._cacheData || !this._cacheData.sprite) {
					var i = this.alpha;
					this.alpha = 1, t.batch.flush();
					var r = this.getLocalBounds(null, !0).clone();
					if (this.filters) {
						var n = this.filters[0].padding;
						r.pad(n)
					}
					r.ceil(yi.RESOLUTION);
					var o = t.renderTexture.current,
						s = t.renderTexture.sourceFrame.clone(),
						a = t.renderTexture.destinationFrame.clone(),
						h = t.projection.transform,
						u = Rn.create({
							width: r.width,
							height: r.height,
							resolution: this.cacheAsBitmapResolution || t.resolution,
							multisample: null !== (e = this.cacheAsBitmapMultisample) && void 0 !== e ? e : t.multisample
						}),
						l = "cacheAsBitmap_" + Zi();
					this._cacheData.textureCacheId = l, un.addToCache(u.baseTexture, l), Sn.addToCache(u, l);
					var c = this.transform.localTransform.copyTo(cl).invert().translate(-r.x, -r.y);
					this.render = this._cacheData.originalRender, t.render(this, {
						renderTexture: u,
						clear: !0,
						transform: c,
						skipUpdateTransform: !1
					}), t.framebuffer.blit(), t.projection.transform = h, t.renderTexture.bind(o, s, a), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = i;
					var d = new hh(u);
					d.transform.worldTransform = this.transform.worldTransform, d.anchor.x = -r.x / r.width, d.anchor.y = -r.y / r.height, d.alpha = i, d._bounds = this._bounds, this._cacheData.sprite = d, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = d.containsPoint.bind(d)
				}
			}, Lr.prototype._renderCachedCanvas = function(t) {
				!this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t))
			}, Lr.prototype._initCachedDisplayObjectCanvas = function(t) {
				if (!this._cacheData || !this._cacheData.sprite) {
					var e = this.getLocalBounds(null, !0),
						i = this.alpha;
					this.alpha = 1;
					var r = t.context,
						n = t._projTransform;
					e.ceil(yi.RESOLUTION);
					var o = Rn.create({
							width: e.width,
							height: e.height
						}),
						s = "cacheAsBitmap_" + Zi();
					this._cacheData.textureCacheId = s, un.addToCache(o.baseTexture, s), Sn.addToCache(o, s);
					var a = cl;
					this.transform.localTransform.copyTo(a), a.invert(), a.tx -= e.x, a.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, {
						renderTexture: o,
						clear: !0,
						transform: a,
						skipUpdateTransform: !1
					}), t.context = r, t._projTransform = n, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = i;
					var h = new hh(o);
					h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -e.x / e.width, h.anchor.y = -e.y / e.height, h.alpha = i, h._bounds = this._bounds, this._cacheData.sprite = h, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = h.containsPoint.bind(h)
				}
			}, Lr.prototype._calculateCachedBounds = function() {
				this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID
			}, Lr.prototype._getCachedLocalBounds = function() {
				return this._cacheData.sprite.getLocalBounds(null)
			}, Lr.prototype._destroyCachedDisplayObject = function() {
				this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, un.removeFromCache(this._cacheData.textureCacheId), Sn.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
			}, Lr.prototype._cacheAsBitmapDestroy = function(t) {
				this.cacheAsBitmap = !1, this.destroy(t)
			}, Lr.prototype.name = null, Ur.prototype.getChildByName = function(t, e) {
				for (var i = 0, r = this.children.length; i < r; i++)
					if (this.children[i].name === t) return this.children[i];
				if (e)
					for (i = 0, r = this.children.length; i < r; i++)
						if (this.children[i].getChildByName) {
							var n = this.children[i].getChildByName(t, !0);
							if (n) return n
						} return null
			}, Lr.prototype.getGlobalPosition = function(t, e) {
				return void 0 === t && (t = new Tr), void 0 === e && (e = !1), this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
			};
			var fl = function(t, e) {
				return fl = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, e) {
					t.__proto__ = e
				} || function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
				}, fl(t, e)
			};

			function pl(t, e) {
				function i() {
					this.constructor = t
				}
				fl(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			}
			var _l = function(t) {
					function e(e, i, r, n) {
						void 0 === e && (e = 100), void 0 === i && (i = 100), void 0 === r && (r = 10), void 0 === n && (n = 10);
						var o = t.call(this) || this;
						return o.segWidth = r, o.segHeight = n, o.width = e, o.height = i, o.build(), o
					}
					return pl(e, t), e.prototype.build = function() {
						for (var t = this.segWidth * this.segHeight, e = [], i = [], r = [], n = this.segWidth - 1, o = this.segHeight - 1, s = this.width / n, a = this.height / o, h = 0; h < t; h++) {
							var u = h % this.segWidth,
								l = h / this.segWidth | 0;
							e.push(u * s, l * a), i.push(u / n, l / o)
						}
						var c = n * o;
						for (h = 0; h < c; h++) {
							var d = h % n,
								f = h / n | 0,
								p = f * this.segWidth + d,
								_ = f * this.segWidth + d + 1,
								m = (f + 1) * this.segWidth + d,
								g = (f + 1) * this.segWidth + d + 1;
							r.push(p, _, m, _, g, m)
						}
						this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(i), this.indexBuffer.data = new Uint16Array(r), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
					}, e
				}(Jh),
				ml = function(t) {
					function e(e, i, r) {
						void 0 === e && (e = 200), void 0 === r && (r = 0);
						var n = t.call(this, new Float32Array(4 * i.length), new Float32Array(4 * i.length), new Uint16Array(6 * (i.length - 1))) || this;
						return n.points = i, n._width = e, n.textureScale = r, n.build(), n
					}
					return pl(e, t), Object.defineProperty(e.prototype, "width", {
						get: function() {
							return this._width
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.build = function() {
						var t = this.points;
						if (t) {
							var e = this.getBuffer("aVertexPosition"),
								i = this.getBuffer("aTextureCoord"),
								r = this.getIndex();
							if (!(t.length < 1)) {
								e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), i.data = new Float32Array(4 * t.length), r.data = new Uint16Array(6 * (t.length - 1)));
								var n = i.data,
									o = r.data;
								n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;
								for (var s = 0, a = t[0], h = this._width * this.textureScale, u = t.length, l = 0; l < u; l++) {
									var c = 4 * l;
									if (this.textureScale > 0) {
										var d = a.x - t[l].x,
											f = a.y - t[l].y,
											p = Math.sqrt(d * d + f * f);
										a = t[l], s += p / h
									} else s = l / (u - 1);
									n[c] = s, n[c + 1] = 0, n[c + 2] = s, n[c + 3] = 1
								}
								var _ = 0;
								for (l = 0; l < u - 1; l++) c = 2 * l, o[_++] = c, o[_++] = c + 1, o[_++] = c + 2, o[_++] = c + 2, o[_++] = c + 1, o[_++] = c + 3;
								i.update(), r.update(), this.updateVertices()
							}
						}
					}, e.prototype.updateVertices = function() {
						var t = this.points;
						if (!(t.length < 1)) {
							for (var e, i = t[0], r = 0, n = 0, o = this.buffers[0].data, s = t.length, a = 0; a < s; a++) {
								var h = t[a],
									u = 4 * a;
								n = -((e = a < t.length - 1 ? t[a + 1] : h).x - i.x), r = e.y - i.y;
								var l = Math.sqrt(r * r + n * n),
									c = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
								r /= l, n /= l, r *= c, n *= c, o[u] = h.x + r, o[u + 1] = h.y + n, o[u + 2] = h.x - r, o[u + 3] = h.y - n, i = h
							}
							this.buffers[0].update()
						}
					}, e.prototype.update = function() {
						this.textureScale > 0 ? this.build() : this.updateVertices()
					}, e
				}(Jh),
				gl = function(t) {
					function e(e, i, r) {
						void 0 === r && (r = 0);
						var n = this,
							o = new ml(e.height, i, r),
							s = new Zh(e);
						return r > 0 && (e.baseTexture.wrapMode = ui.REPEAT), (n = t.call(this, o, s) || this).autoUpdate = !0, n
					}
					return pl(e, t), e.prototype._render = function(e) {
						var i = this.geometry;
						(this.autoUpdate || i._width !== this.shader.texture.height) && (i._width = this.shader.texture.height, i.update()), t.prototype._render.call(this, e)
					}, e
				}(Kh),
				yl = function(t) {
					function e(e, i, r) {
						var n = this,
							o = new _l(e.width, e.height, i, r),
							s = new Zh(Sn.WHITE);
						return (n = t.call(this, o, s) || this).texture = e, n.autoResize = !0, n
					}
					return pl(e, t), e.prototype.textureUpdated = function() {
						this._textureID = this.shader.texture._updateID;
						var t = this.geometry,
							e = this.shader.texture,
							i = e.width,
							r = e.height;
						!this.autoResize || t.width === i && t.height === r || (t.width = this.shader.texture.width, t.height = this.shader.texture.height, t.build())
					}, Object.defineProperty(e.prototype, "texture", {
						get: function() {
							return this.shader.texture
						},
						set: function(t) {
							this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._render = function(e) {
						this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t.prototype._render.call(this, e)
					}, e.prototype.destroy = function(e) {
						this.shader.texture.off("update", this.textureUpdated, this), t.prototype.destroy.call(this, e)
					}, e
				}(Kh),
				vl = function(t) {
					function e(e, i, r, n, o) {
						void 0 === e && (e = Sn.EMPTY);
						var s = this,
							a = new Jh(i, r, n);
						a.getBuffer("aVertexPosition").static = !1;
						var h = new Zh(e);
						return (s = t.call(this, a, h, null, o) || this).autoUpdate = !0, s
					}
					return pl(e, t), Object.defineProperty(e.prototype, "vertices", {
						get: function() {
							return this.geometry.getBuffer("aVertexPosition").data
						},
						set: function(t) {
							this.geometry.getBuffer("aVertexPosition").data = t
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._render = function(e) {
						this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t.prototype._render.call(this, e)
					}, e
				}(Kh),
				Tl = function(t) {
					function e(e, i, r, n, o) {
						void 0 === i && (i = 10), void 0 === r && (r = 10), void 0 === n && (n = 10), void 0 === o && (o = 10);
						var s = t.call(this, Sn.WHITE, 4, 4) || this;
						return s._origWidth = e.orig.width, s._origHeight = e.orig.height, s._width = s._origWidth, s._height = s._origHeight, s._leftWidth = i, s._rightWidth = n, s._topHeight = r, s._bottomHeight = o, s.texture = e, s
					}
					return pl(e, t), e.prototype.textureUpdated = function() {
						this._textureID = this.shader.texture._updateID, this._refresh()
					}, Object.defineProperty(e.prototype, "vertices", {
						get: function() {
							return this.geometry.getBuffer("aVertexPosition").data
						},
						set: function(t) {
							this.geometry.getBuffer("aVertexPosition").data = t
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.updateHorizontalVertices = function() {
						var t = this.vertices,
							e = this._getMinScale();
						t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height
					}, e.prototype.updateVerticalVertices = function() {
						var t = this.vertices,
							e = this._getMinScale();
						t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width
					}, e.prototype._getMinScale = function() {
						var t = this._leftWidth + this._rightWidth,
							e = this._width > t ? 1 : this._width / t,
							i = this._topHeight + this._bottomHeight,
							r = this._height > i ? 1 : this._height / i;
						return Math.min(e, r)
					}, Object.defineProperty(e.prototype, "width", {
						get: function() {
							return this._width
						},
						set: function(t) {
							this._width = t, this._refresh()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "height", {
						get: function() {
							return this._height
						},
						set: function(t) {
							this._height = t, this._refresh()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "leftWidth", {
						get: function() {
							return this._leftWidth
						},
						set: function(t) {
							this._leftWidth = t, this._refresh()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "rightWidth", {
						get: function() {
							return this._rightWidth
						},
						set: function(t) {
							this._rightWidth = t, this._refresh()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "topHeight", {
						get: function() {
							return this._topHeight
						},
						set: function(t) {
							this._topHeight = t, this._refresh()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "bottomHeight", {
						get: function() {
							return this._bottomHeight
						},
						set: function(t) {
							this._bottomHeight = t, this._refresh()
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._refresh = function() {
						var t = this.texture,
							e = this.geometry.buffers[1].data;
						this._origWidth = t.orig.width, this._origHeight = t.orig.height;
						var i = 1 / this._origWidth,
							r = 1 / this._origHeight;
						e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = i * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - i * this._rightWidth, e[9] = e[11] = e[13] = e[15] = r * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update()
					}, e
				}(yl),
				bl = function(t, e) {
					return bl = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					}, bl(t, e)
				},
				El = function(t) {
					function e(e, i) {
						void 0 === i && (i = !0);
						var r = t.call(this, e[0] instanceof Sn ? e[0] : e[0].texture) || this;
						return r._textures = null, r._durations = null, r._autoUpdate = i, r._isConnectedToTicker = !1, r.animationSpeed = 1, r.loop = !0, r.updateAnchor = !1, r.onComplete = null, r.onFrameChange = null, r.onLoop = null, r._currentTime = 0, r._playing = !1, r._previousFrame = null, r.textures = e, r
					}
					return function(t, e) {
						function i() {
							this.constructor = t
						}
						bl(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
					}(e, t), e.prototype.stop = function() {
						this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (jr.shared.remove(this.update, this), this._isConnectedToTicker = !1))
					}, e.prototype.play = function() {
						this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (jr.shared.add(this.update, this, Gr.HIGH), this._isConnectedToTicker = !0))
					}, e.prototype.gotoAndStop = function(t) {
						this.stop();
						var e = this.currentFrame;
						this._currentTime = t, e !== this.currentFrame && this.updateTexture()
					}, e.prototype.gotoAndPlay = function(t) {
						var e = this.currentFrame;
						this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
					}, e.prototype.update = function(t) {
						if (this._playing) {
							var e = this.animationSpeed * t,
								i = this.currentFrame;
							if (null !== this._durations) {
								var r = this._currentTime % 1 * this._durations[this.currentFrame];
								for (r += e / 60 * 1e3; r < 0;) this._currentTime--, r += this._durations[this.currentFrame];
								var n = Math.sign(this.animationSpeed * t);
								for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];) r -= this._durations[this.currentFrame] * n, this._currentTime += n;
								this._currentTime += r / this._durations[this.currentFrame]
							} else this._currentTime += e;
							this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : i !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < i || this.animationSpeed < 0 && this.currentFrame > i) && this.onLoop(), this.updateTexture())
						}
					}, e.prototype.updateTexture = function() {
						var t = this.currentFrame;
						this._previousFrame !== t && (this._previousFrame = t, this._texture = this._textures[t], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame))
					}, e.prototype.destroy = function(e) {
						this.stop(), t.prototype.destroy.call(this, e), this.onComplete = null, this.onFrameChange = null, this.onLoop = null
					}, e.fromFrames = function(t) {
						for (var i = [], r = 0; r < t.length; ++r) i.push(Sn.from(t[r]));
						return new e(i)
					}, e.fromImages = function(t) {
						for (var i = [], r = 0; r < t.length; ++r) i.push(Sn.from(t[r]));
						return new e(i)
					}, Object.defineProperty(e.prototype, "totalFrames", {
						get: function() {
							return this._textures.length
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "textures", {
						get: function() {
							return this._textures
						},
						set: function(t) {
							if (t[0] instanceof Sn) this._textures = t, this._durations = null;
							else {
								this._textures = [], this._durations = [];
								for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
							}
							this._previousFrame = null, this.gotoAndStop(0), this.updateTexture()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "currentFrame", {
						get: function() {
							var t = Math.floor(this._currentTime) % this._textures.length;
							return t < 0 && (t += this._textures.length), t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "playing", {
						get: function() {
							return this._playing
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "autoUpdate", {
						get: function() {
							return this._autoUpdate
						},
						set: function(t) {
							t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (jr.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (jr.shared.add(this.update, this), this._isConnectedToTicker = !0))
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(hh);
			as.registerPlugin("accessibility", Xr), as.registerPlugin("extract", Ps), as.registerPlugin("interaction", $r), as.registerPlugin("particle", wa), as.registerPlugin("prepare", Dh), as.registerPlugin("batch", bs), as.registerPlugin("tilingSprite", jh), Vs.registerPlugin(lu), Vs.registerPlugin(oa), Vs.registerPlugin(pa), Vs.registerPlugin(va), Vs.registerPlugin(Fh), Rs.registerPlugin(zr), Rs.registerPlugin(Ks);
			var xl = "6.1.3",
				Al = {
					AlphaFilter: du,
					BlurFilter: Bu,
					BlurFilterPass: Fu,
					ColorMatrixFilter: ku,
					DisplacementFilter: sl,
					FXAAFilter: hl,
					NoiseFilter: ll
				},
				Sl = ["./img/app/background.jpg", "./img/skins/blank.png", "./img/skins/gradient.png", "./img/skins/judgements/osu/judgement-50.png", "./img/skins/judgements/osu/judgement-100.png", "./img/skins/judgements/osu/judgement-200.png", "./img/skins/judgements/osu/judgement-300.png", "./img/skins/judgements/osu/judgement-miss.png", "./img/skins/judgements/osu/judgement-rainbow.png", "./img/skins/judgements/stepmania/judgement-50.png", "./img/skins/judgements/stepmania/judgement-100.png", "./img/skins/judgements/stepmania/judgement-200.png", "./img/skins/judgements/stepmania/judgement-300.png", "./img/skins/judgements/stepmania/judgement-miss.png", "./img/skins/judgements/stepmania/judgement-rainbow.png", "./img/skins/arrows/hold-body-blue.png", "./img/skins/arrows/hold-body-green.png", "./img/skins/arrows/hold-body-red.png", "./img/skins/arrows/hold-cap-red.png", "./img/skins/arrows/hold-cap-blue.png", "./img/skins/arrows/hold-cap-center.png", "./img/skins/arrows/hold-cap-side.png", "./img/skins/arrows/note-center.png", "./img/skins/arrows/note-down-blue.png", "./img/skins/arrows/note-left-blue.png", "./img/skins/arrows/note-left-red.png", "./img/skins/arrows/note-right-blue.png", "./img/skins/arrows/note-right-red.png", "./img/skins/arrows/note-side.png", "./img/skins/arrows/note-up-blue.png", "./img/skins/arrows/note-upleft-blue.png", "./img/skins/arrows/note-upleft-red.png", "./img/skins/arrows/note-upright-blue.png", "./img/skins/arrows/note-upright-red.png", "./img/skins/arrows/receptor-center-pressed.png", "./img/skins/arrows/receptor-center.png", "./img/skins/arrows/receptor-down-pressed.png", "./img/skins/arrows/receptor-down.png", "./img/skins/arrows/receptor-left-pressed.png", "./img/skins/arrows/receptor-left.png", "./img/skins/arrows/receptor-right-pressed.png", "./img/skins/arrows/receptor-right.png", "./img/skins/arrows/receptor-up-pressed.png", "./img/skins/arrows/receptor-up.png", "./img/skins/arrows/receptor-upleft-pressed.png", "./img/skins/arrows/receptor-upleft.png", "./img/skins/arrows/receptor-upright-pressed.png", "./img/skins/arrows/receptor-upright.png", "./img/skins/arrowsColor/body.png", "./img/skins/arrowsColor/cap.png", "./img/skins/arrowsColor/note-1.png", "./img/skins/arrowsColor/note-2.png", "./img/skins/arrowsColor/note-3.png", "./img/skins/arrowsColor/note-4.png", "./img/skins/arrowsColor/note-6.png", "./img/skins/arrowsColor/note-8.png", "./img/skins/arrowsColor/note-12.png", "./img/skins/arrowsColor/note-16.png", "./img/skins/arrowsColor/receptor-down.png", "./img/skins/arrowsColor/receptor.png", "./img/skins/bars/effect-0.png", "./img/skins/bars/effect-1.png", "./img/skins/bars/effect-2.png", "./img/skins/bars/effect-3.png", "./img/skins/bars/effect-4.png", "./img/skins/bars/effect-5.png", "./img/skins/bars/effect-6.png", "./img/skins/bars/effect-7.png", "./img/skins/bars/effect-8.png", "./img/skins/bars/hint.png", "./img/skins/bars/hold-body-blue.png", "./img/skins/bars/hold-body-red.png", "./img/skins/bars/hold-body-white.png", "./img/skins/bars/hold-body-yellow.png", "./img/skins/bars/lighting-blue.png", "./img/skins/bars/lighting-red.png", "./img/skins/bars/lighting-yellow.png", "./img/skins/bars/note-blue.png", "./img/skins/bars/note-red.png", "./img/skins/bars/note-white.png", "./img/skins/bars/note-yellow.png", "./img/skins/bars/receptor-black-pressed.png", "./img/skins/bars/receptor-black.png", "./img/skins/bars/receptor-white-pressed.png", "./img/skins/bars/receptor-white.png", "./img/skins/barsColor/body.png", "./img/skins/barsColor/cap.png", "./img/skins/barsColor/note-1.png", "./img/skins/barsColor/note-2.png", "./img/skins/barsColor/note-3.png", "./img/skins/barsColor/note-4.png", "./img/skins/barsColor/note-6.png", "./img/skins/barsColor/note-8.png", "./img/skins/barsColor/note-12.png", "./img/skins/barsColor/note-16.png", "./img/skins/barsColor/receptor-down.png", "./img/skins/barsColor/receptor.png", "./img/skins/circles/hold-body.png", "./img/skins/circles/hold-cap.png", "./img/skins/circles/note-blue.png", "./img/skins/circles/note-red.png", "./img/skins/circles/note-white.png", "./img/skins/circles/note-yellow.png", "./img/skins/circles/receptor-pressed.png", "./img/skins/circles/receptor.png", "./img/skins/circlesColor/body.png", "./img/skins/circlesColor/cap.png", "./img/skins/circlesColor/note-1.png", "./img/skins/circlesColor/note-2.png", "./img/skins/circlesColor/note-3.png", "./img/skins/circlesColor/note-4.png", "./img/skins/circlesColor/note-6.png", "./img/skins/circlesColor/note-8.png", "./img/skins/circlesColor/note-12.png", "./img/skins/circlesColor/note-16.png", "./img/skins/circlesColor/receptor-down.png", "./img/skins/circlesColor/receptor.png", "./img/skins/diamonds/hold-body.png", "./img/skins/diamonds/hold-cap.png", "./img/skins/diamonds/note-blue.png", "./img/skins/diamonds/note-red.png", "./img/skins/diamonds/note-white.png", "./img/skins/diamonds/note-yellow.png", "./img/skins/diamonds/receptor-pressed.png", "./img/skins/diamonds/receptor.png", "./img/skins/diamondsColor/body.png", "./img/skins/diamondsColor/cap.png", "./img/skins/diamondsColor/note-1.png", "./img/skins/diamondsColor/note-2.png", "./img/skins/diamondsColor/note-3.png", "./img/skins/diamondsColor/note-4.png", "./img/skins/diamondsColor/note-6.png", "./img/skins/diamondsColor/note-8.png", "./img/skins/diamondsColor/note-12.png", "./img/skins/diamondsColor/note-16.png", "./img/skins/diamondsColor/receptor-down.png", "./img/skins/diamondsColor/receptor.png"];
			class wl extends Ur {}
			class Rl extends wl {
				backgroundSprite;
				rectangleGraphics;
				constructor(t) {
					super(), this.backgroundSprite = new hh, this.addChild(this.backgroundSprite), this.rectangleGraphics = new rh, this.addChild(this.rectangleGraphics), this.zIndex = 1, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showBackground;
					const t = Pm.keyMode;
					Pm.difficulty ? this.backgroundSprite.texture = Sn.from(Pm.difficulty.backgroundImage) : Pm.resources["./img/app/background.jpg"].texture && (this.backgroundSprite.texture = Pm.resources["./img/app/background.jpg"].texture), this.backgroundSprite.width = Pm.width, this.backgroundSprite.height = Pm.height, this.backgroundSprite.alpha = Pm.backgroundOpacity, this.rectangleGraphics.clear().beginFill(0).drawRect(Pm.width / 2 - Pm.columnSize * Pm.width * t / 2, 0, Pm.columnSize * Pm.width * t, Pm.height).endFill()
				}
			}
			class Ol extends wl {
				effects = new(Yt());
				textures = [];
				constructor(t) {
					super(), this.zIndex = 7, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showEffects, this.textures = [];
					const t = Pm.currentSkin.getEffects();
					for (const e of t) {
						const t = Pm.resources[e].texture;
						t && this.textures.push(t)
					}
					for (let t = 0; t < this.effects.length; t++) {
						const e = this.effects.peekAt(t);
						e && this.processEffect(e)
					}
				}
				newEffect(t) {
					const e = new El(this.textures, !0);
					this.addChild(e);
					const i = {
						lane: t,
						effectSprite: e
					};
					this.processEffect(i), this.effects.push(i), e.play(), e.onComplete = () => {
						e.stop(), this.removeChild(e), this.effects.shift()
					}
				}
				processEffect(t) {
					const e = Pm.width * Pm.columnSize,
						i = t.effectSprite;
					i.anchor.set(.5), i.width = Pm.width * Pm.effectSize, i.height = i.width * i.height / i.width, i.x = (Pm.width - e * Pm.keyMode) / 2 + e * t.lane + e / 2, i.y = Pm.height - Pm.hitPosition * Pm.height, i.visible = !0, i.blendMode = ii.SCREEN, i.loop = !1, i.animationSpeed = .5
				}
			}
			class Il extends wl {
				_fpsTextField;
				_fpsTicker;
				_timeValues = [];
				_lastTime = Date.now();
				constructor(t) {
					super(), this._fpsTextField = new vh(""), this.addChild(this._fpsTextField), this._fpsTicker = new jr, this._fpsTicker.add((() => {
						this.measureFPS()
					})), this._fpsTicker.start(), this.zIndex = 16, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showFps;
					const t = Pm.height * Ht,
						e = Pm.fpsSize * Pm.height;
					this._fpsTextField.anchor.set(1, 1), this._fpsTextField.x = Pm.width - t, this._fpsTextField.y = Pm.height - t, e >= 1 ? this._fpsTextField.style = new dh({
						fontSize: e,
						fill: 16711680
					}) : this.visible = !1
				}
				measureFPS() {
					const t = (new Date).getTime();
					if (this._timeValues.push(1e3 / (t - this._lastTime)), 30 === this._timeValues.length) {
						let t = 0;
						for (let e = 0; e < 30; e++) t += this._timeValues[e];
						this._fpsTextField && (this._fpsTextField.text = (t / 30).toFixed(2)), this._timeValues.length = 0
					}
					this._lastTime = t
				}
			}
			class Pl extends wl {
				hintLineSprite;
				constructor(t) {
					super(), this.hintLineSprite = new hh, this.addChild(this.hintLineSprite), this.zIndex = 2, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showHint;
					const t = Pm.keyMode,
						e = Pm.resources[Pm.currentSkin.getHint()].texture;
					e && (this.hintLineSprite.texture = e), this.hintLineSprite.anchor.set(.5), this.hintLineSprite.width = Pm.width * Pm.columnSize * t, this.hintLineSprite.x = Pm.width / 2, this.hintLineSprite.y = Pm.height - Pm.hitPosition * Pm.height
				}
			}

			function Ml(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t
			}

			function Cl(t, e) {
				t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
			}
			var Dl, Nl, Ll, Fl, Bl, Ul, kl, Gl, Xl, Hl, jl, zl, Yl, Vl, Wl, ql, Kl, Zl, Jl, $l, Ql, tc, ec, ic, rc, nc, oc, sc, ac = {
					autoSleep: 120,
					force3D: "auto",
					nullTargetWarn: 1,
					units: {
						lineHeight: ""
					}
				},
				hc = {
					duration: .5,
					overwrite: !1,
					delay: 0
				},
				uc = 1e8,
				lc = 1e-8,
				cc = 2 * Math.PI,
				dc = cc / 4,
				fc = 0,
				pc = Math.sqrt,
				_c = Math.cos,
				mc = Math.sin,
				gc = function(t) {
					return "string" == typeof t
				},
				yc = function(t) {
					return "function" == typeof t
				},
				vc = function(t) {
					return "number" == typeof t
				},
				Tc = function(t) {
					return void 0 === t
				},
				bc = function(t) {
					return "object" == typeof t
				},
				Ec = function(t) {
					return !1 !== t
				},
				xc = function() {
					return "undefined" != typeof window
				},
				Ac = function(t) {
					return yc(t) || gc(t)
				},
				Sc = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
				wc = Array.isArray,
				Rc = /(?:-?\.?\d|\.)+/gi,
				Oc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
				Ic = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
				Pc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
				Mc = /[+-]=-?[.\d]+/,
				Cc = /[^,'"\[\]\s]+/gi,
				Dc = /[\d.+\-=]+(?:e[-+]\d*)*/i,
				Nc = {},
				Lc = {},
				Fc = function(t) {
					return (Lc = hd(t, Nc)) && Kf
				},
				Bc = function(t, e) {
					return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
				},
				Uc = function(t, e) {
					return !e && console.warn(t)
				},
				kc = function(t, e) {
					return t && (Nc[t] = e) && Lc && (Lc[t] = e) || Nc
				},
				Gc = function() {
					return 0
				},
				Xc = {},
				Hc = [],
				jc = {},
				zc = {},
				Yc = {},
				Vc = 30,
				Wc = [],
				qc = "",
				Kc = function(t) {
					var e, i, r = t[0];
					if (bc(r) || yc(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
						for (i = Wc.length; i-- && !Wc[i].targetTest(r););
						e = Wc[i]
					}
					for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Tf(t[i], e))) || t.splice(i, 1);
					return t
				},
				Zc = function(t) {
					return t._gsap || Kc(Ud(t))[0]._gsap
				},
				Jc = function(t, e, i) {
					return (i = t[e]) && yc(i) ? t[e]() : Tc(i) && t.getAttribute && t.getAttribute(e) || i
				},
				$c = function(t, e) {
					return (t = t.split(",")).forEach(e) || t
				},
				Qc = function(t) {
					return Math.round(1e5 * t) / 1e5 || 0
				},
				td = function(t) {
					return Math.round(1e7 * t) / 1e7 || 0
				},
				ed = function(t, e) {
					for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
					return r < i
				},
				id = function() {
					var t, e, i = Hc.length,
						r = Hc.slice(0);
					for (jc = {}, Hc.length = 0, t = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
				},
				rd = function(t, e, i, r) {
					Hc.length && id(), t.render(e, i, r), Hc.length && id()
				},
				nd = function(t) {
					var e = parseFloat(t);
					return (e || 0 === e) && (t + "").match(Cc).length < 2 ? e : gc(t) ? t.trim() : t
				},
				od = function(t) {
					return t
				},
				sd = function(t, e) {
					for (var i in e) i in t || (t[i] = e[i]);
					return t
				},
				ad = function(t, e) {
					for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
				},
				hd = function(t, e) {
					for (var i in e) t[i] = e[i];
					return t
				},
				ud = function t(e, i) {
					for (var r in i) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = bc(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
					return e
				},
				ld = function(t, e) {
					var i, r = {};
					for (i in t) i in e || (r[i] = t[i]);
					return r
				},
				cd = function(t) {
					var e = t.parent || Nl,
						i = t.keyframes ? ad : sd;
					if (Ec(t.inherit))
						for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
					return t
				},
				dd = function(t, e, i, r) {
					void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
					var n = e._prev,
						o = e._next;
					n ? n._next = o : t[i] === e && (t[i] = o), o ? o._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null
				},
				fd = function(t, e) {
					t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
				},
				pd = function(t, e) {
					if (t && (!e || e._end > t._dur || e._start < 0))
						for (var i = t; i;) i._dirty = 1, i = i.parent;
					return t
				},
				_d = function(t) {
					for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
					return t
				},
				md = function t(e) {
					return !e || e._ts && t(e.parent)
				},
				gd = function(t) {
					return t._repeat ? yd(t._tTime, t = t.duration() + t._rDelay) * t : 0
				},
				yd = function(t, e) {
					var i = Math.floor(t /= e);
					return t && i === t ? i - 1 : i
				},
				vd = function(t, e) {
					return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
				},
				Td = function(t) {
					return t._end = td(t._start + (t._tDur / Math.abs(t._ts || t._rts || lc) || 0))
				},
				bd = function(t, e) {
					var i = t._dp;
					return i && i.smoothChildTiming && t._ts && (t._start = td(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Td(t), i._dirty || pd(i, t)), t
				},
				Ed = function(t, e) {
					var i;
					if ((e._time || e._initted && !e._dur) && (i = vd(t.rawTime(), e), (!e._dur || Nd(0, e.totalDuration(), i) - e._tTime > lc) && e.render(i, !0)), pd(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
						if (t._dur < t.duration())
							for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
						t._zTime = -1e-8
					}
				},
				xd = function(t, e, i, r) {
					return e.parent && fd(e), e._start = td((vc(i) ? i : i || t !== Nl ? Md(t, i, e) : t._time) + e._delay), e._end = td(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
						function(t, e, i, r, n) {
							void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
							var o, s = t[r];
							if (n)
								for (o = e[n]; s && s[n] > o;) s = s._prev;
							s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t
						}(t, e, "_first", "_last", t._sort ? "_start" : 0), Rd(e) || (t._recent = e), r || Ed(t, e), t
				},
				Ad = function(t, e) {
					return (Nc.ScrollTrigger || Bc("scrollTrigger", e)) && Nc.ScrollTrigger.create(e, t)
				},
				Sd = function(t, e, i, r) {
					return Rf(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && kl !== af.frame ? (Hc.push(t), t._lazy = [e, r], 1) : void 0 : 1
				},
				wd = function t(e) {
					var i = e.parent;
					return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
				},
				Rd = function(t) {
					var e = t.data;
					return "isFromStart" === e || "isStart" === e
				},
				Od = function(t, e, i, r) {
					var n = t._repeat,
						o = td(e) || 0,
						s = t._tTime / t._tDur;
					return s && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : td(o * (n + 1) + t._rDelay * n) : o, s && !r ? bd(t, t._tTime = t._tDur * s) : t.parent && Td(t), i || pd(t.parent, t), t
				},
				Id = function(t) {
					return t instanceof Ef ? pd(t) : Od(t, t._dur)
				},
				Pd = {
					_start: 0,
					endTime: Gc,
					totalDuration: Gc
				},
				Md = function t(e, i, r) {
					var n, o, s, a = e.labels,
						h = e._recent || Pd,
						u = e.duration() >= uc ? h.endTime(!1) : e._dur;
					return gc(i) && (isNaN(i) || i in a) ? (o = i.charAt(0), s = "%" === i.substr(-1), n = i.indexOf("="), "<" === o || ">" === o ? (n >= 0 && (i = i.replace(/=/, "")), ("<" === o ? h._start : h.endTime(h._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (s ? (n < 0 ? h : r).totalDuration() / 100 : 1)) : n < 0 ? (i in a || (a[i] = u), a[i]) : (o = parseFloat(i.charAt(n - 1) + i.substr(n + 1)), s && r && (o = o / 100 * (wc(r) ? r[0] : r).totalDuration()), n > 1 ? t(e, i.substr(0, n - 1), r) + o : u + o)) : null == i ? u : +i
				},
				Cd = function(t, e, i) {
					var r, n, o = vc(e[1]),
						s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
						a = e[s];
					if (o && (a.duration = e[1]), a.parent = i, t) {
						for (r = a, n = i; n && !("immediateRender" in r);) r = n.vars.defaults || {}, n = Ec(n.vars.inherit) && n.parent;
						a.immediateRender = Ec(r.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
					}
					return new Mf(e[0], a, e[s + 1])
				},
				Dd = function(t, e) {
					return t || 0 === t ? e(t) : e
				},
				Nd = function(t, e, i) {
					return i < t ? t : i > e ? e : i
				},
				Ld = function(t) {
					if ("string" != typeof t) return "";
					var e = Dc.exec(t);
					return e ? t.substr(e.index + e[0].length) : ""
				},
				Fd = [].slice,
				Bd = function(t, e) {
					return t && bc(t) && "length" in t && (!e && !t.length || t.length - 1 in t && bc(t[0])) && !t.nodeType && t !== Ll
				},
				Ud = function(t, e, i) {
					return !gc(t) || i || !Fl && hf() ? wc(t) ? function(t, e, i) {
						return void 0 === i && (i = []), t.forEach((function(t) {
							var r;
							return gc(t) && !e || Bd(t, 1) ? (r = i).push.apply(r, Ud(t)) : i.push(t)
						})) || i
					}(t, i) : Bd(t) ? Fd.call(t, 0) : t ? [t] : [] : Fd.call((e || Bl).querySelectorAll(t), 0)
				},
				kd = function(t) {
					return t.sort((function() {
						return .5 - Math.random()
					}))
				},
				Gd = function(t) {
					if (yc(t)) return t;
					var e = bc(t) ? t : {
							each: t
						},
						i = _f(e.ease),
						r = e.from || 0,
						n = parseFloat(e.base) || 0,
						o = {},
						s = r > 0 && r < 1,
						a = isNaN(r) || s,
						h = e.axis,
						u = r,
						l = r;
					return gc(r) ? u = l = {
							center: .5,
							edges: .5,
							end: 1
						} [r] || 0 : !s && a && (u = r[0], l = r[1]),
						function(t, s, c) {
							var d, f, p, _, m, g, y, v, T, b = (c || e).length,
								E = o[b];
							if (!E) {
								if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, uc])[1])) {
									for (y = -uc; y < (y = c[T++].getBoundingClientRect().left) && T < b;);
									T--
								}
								for (E = o[b] = [], d = a ? Math.min(T, b) * u - .5 : r % T, f = a ? b * l / T - .5 : r / T | 0, y = 0, v = uc, g = 0; g < b; g++) p = g % T - d, _ = f - (g / T | 0), E[g] = m = h ? Math.abs("y" === h ? _ : p) : pc(p * p + _ * _), m > y && (y = m), m < v && (v = m);
								"random" === r && kd(E), E.max = y - v, E.min = v, E.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (T > b ? b - 1 : h ? "y" === h ? b / T : T : Math.max(T, b / T)) || 0) * ("edges" === r ? -1 : 1), E.b = b < 0 ? n - b : n, E.u = Ld(e.amount || e.each) || 0, i = i && b < 0 ? ff(i) : i
							}
							return b = (E[t] - E.min) / E.max || 0, td(E.b + (i ? i(b) : b) * E.v) + E.u
						}
				},
				Xd = function(t) {
					var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
					return function(i) {
						var r = Math.round(parseFloat(i) / t) * t * e;
						return (r - r % 1) / e + (vc(i) ? 0 : Ld(i))
					}
				},
				Hd = function(t, e) {
					var i, r, n = wc(t);
					return !n && bc(t) && (i = n = t.radius || uc, t.values ? (t = Ud(t.values), (r = !vc(t[0])) && (i *= i)) : t = Xd(t.increment)), Dd(e, n ? yc(t) ? function(e) {
						return r = t(e), Math.abs(r - e) <= i ? r : e
					} : function(e) {
						for (var n, o, s = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), h = uc, u = 0, l = t.length; l--;)(n = r ? (n = t[l].x - s) * n + (o = t[l].y - a) * o : Math.abs(t[l] - s)) < h && (h = n, u = l);
						return u = !i || h <= i ? t[u] : e, r || u === e || vc(e) ? u : u + Ld(e)
					} : Xd(t))
				},
				jd = function(t, e, i, r) {
					return Dd(wc(t) ? !e : !0 === i ? !!(i = 0) : !r, (function() {
						return wc(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r
					}))
				},
				zd = function(t, e, i) {
					return Dd(i, (function(i) {
						return t[~~e(i)]
					}))
				},
				Yd = function(t) {
					for (var e, i, r, n, o = 0, s = ""; ~(e = t.indexOf("random(", o));) r = t.indexOf(")", e), n = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(n ? Cc : Rc), s += t.substr(o, e - o) + jd(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5), o = r + 1;
					return s + t.substr(o, t.length - o)
				},
				Vd = function(t, e, i, r, n) {
					var o = e - t,
						s = r - i;
					return Dd(n, (function(e) {
						return i + ((e - t) / o * s || 0)
					}))
				},
				Wd = function(t, e, i) {
					var r, n, o, s = t.labels,
						a = uc;
					for (r in s)(n = s[r] - e) < 0 == !!i && n && a > (n = Math.abs(n)) && (o = r, a = n);
					return o
				},
				qd = function(t, e, i) {
					var r, n, o = t.vars,
						s = o[e];
					if (s) return r = o[e + "Params"], n = o.callbackScope || t, i && Hc.length && id(), r ? s.apply(n, r) : s.call(n)
				},
				Kd = function(t) {
					return fd(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && qd(t, "onInterrupt"), t
				},
				Zd = function(t) {
					var e = (t = !t.name && t.default || t).name,
						i = yc(t),
						r = e && !i && t.init ? function() {
							this._props = []
						} : t,
						n = {
							init: Gc,
							render: Gf,
							add: Sf,
							kill: Hf,
							modifier: Xf,
							rawVars: 0
						},
						o = {
							targetTest: 0,
							get: 0,
							getSetter: Ff,
							aliases: {},
							register: 0
						};
					if (hf(), t !== r) {
						if (zc[e]) return;
						sd(r, sd(ld(t, n), o)), hd(r.prototype, hd(n, ld(t, o))), zc[r.prop = e] = r, t.targetTest && (Wc.push(r), Xc[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
					}
					kc(e, r), t.register && t.register(Kf, r, Yf)
				},
				Jd = 255,
				$d = {
					aqua: [0, Jd, Jd],
					lime: [0, Jd, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, Jd],
					navy: [0, 0, 128],
					white: [Jd, Jd, Jd],
					olive: [128, 128, 0],
					yellow: [Jd, Jd, 0],
					orange: [Jd, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [Jd, 0, 0],
					pink: [Jd, 192, 203],
					cyan: [0, Jd, Jd],
					transparent: [Jd, Jd, Jd, 0]
				},
				Qd = function(t, e, i) {
					return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * Jd + .5 | 0
				},
				tf = function(t, e, i) {
					var r, n, o, s, a, h, u, l, c, d, f = t ? vc(t) ? [t >> 16, t >> 8 & Jd, t & Jd] : 0 : $d.black;
					if (!f) {
						if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), $d[t]) f = $d[t];
						else if ("#" === t.charAt(0)) {
							if (t.length < 6 && (r = t.charAt(1), n = t.charAt(2), o = t.charAt(3), t = "#" + r + r + n + n + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & Jd, f & Jd, parseInt(t.substr(7), 16) / 255];
							f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Jd, t & Jd]
						} else if ("hsl" === t.substr(0, 3))
							if (f = d = t.match(Rc), e) {
								if (~t.indexOf("=")) return f = t.match(Oc), i && f.length < 4 && (f[3] = 1), f
							} else s = +f[0] % 360 / 360, a = +f[1] / 100, r = 2 * (h = +f[2] / 100) - (n = h <= .5 ? h * (a + 1) : h + a - h * a), f.length > 3 && (f[3] *= 1), f[0] = Qd(s + 1 / 3, r, n), f[1] = Qd(s, r, n), f[2] = Qd(s - 1 / 3, r, n);
						else f = t.match(Rc) || $d.transparent;
						f = f.map(Number)
					}
					return e && !d && (r = f[0] / Jd, n = f[1] / Jd, o = f[2] / Jd, h = ((u = Math.max(r, n, o)) + (l = Math.min(r, n, o))) / 2, u === l ? s = a = 0 : (c = u - l, a = h > .5 ? c / (2 - u - l) : c / (u + l), s = u === r ? (n - o) / c + (n < o ? 6 : 0) : u === n ? (o - r) / c + 2 : (r - n) / c + 4, s *= 60), f[0] = ~~(s + .5), f[1] = ~~(100 * a + .5), f[2] = ~~(100 * h + .5)), i && f.length < 4 && (f[3] = 1), f
				},
				ef = function(t) {
					var e = [],
						i = [],
						r = -1;
					return t.split(nf).forEach((function(t) {
						var n = t.match(Ic) || [];
						e.push.apply(e, n), i.push(r += n.length + 1)
					})), e.c = i, e
				},
				rf = function(t, e, i) {
					var r, n, o, s, a = "",
						h = (t + a).match(nf),
						u = e ? "hsla(" : "rgba(",
						l = 0;
					if (!h) return t;
					if (h = h.map((function(t) {
							return (t = tf(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
						})), i && (o = ef(t), (r = i.c).join(a) !== o.c.join(a)))
						for (s = (n = t.replace(nf, "1").split(Ic)).length - 1; l < s; l++) a += n[l] + (~r.indexOf(l) ? h.shift() || u + "0,0,0,0)" : (o.length ? o : h.length ? h : i).shift());
					if (!n)
						for (s = (n = t.split(nf)).length - 1; l < s; l++) a += n[l] + h[l];
					return a + n[s]
				},
				nf = function() {
					var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
					for (t in $d) e += "|" + t + "\\b";
					return new RegExp(e + ")", "gi")
				}(),
				of = /hsl[a]?\(/,
				sf = function(t) {
					var e, i = t.join(" ");
					if (nf.lastIndex = 0, nf.test(i)) return e = of .test(i), t[1] = rf(t[1], e), t[0] = rf(t[0], e, ef(t[1])), !0
				},
				af = (ql = Date.now, Kl = 500, Zl = 33, Jl = ql(), $l = Jl, tc = Ql = 1e3 / 240, ic = function t(e) {
					var i, r, n, o, s = ql() - $l,
						a = !0 === e;
					if (s > Kl && (Jl += s - Zl), ((i = (n = ($l += s) - Jl) - tc) > 0 || a) && (o = ++Yl.frame, Vl = n - 1e3 * Yl.time, Yl.time = n /= 1e3, tc += i + (i >= Ql ? 4 : Ql - i), r = 1), a || (Hl = jl(t)), r)
						for (Wl = 0; Wl < ec.length; Wl++) ec[Wl](n, Vl, o, e)
				}, Yl = {
					time: 0,
					frame: 0,
					tick: function() {
						ic(!0)
					},
					deltaRatio: function(t) {
						return Vl / (1e3 / (t || 60))
					},
					wake: function() {
						Ul && (!Fl && xc() && (Ll = Fl = window, Bl = Ll.document || {}, Nc.gsap = Kf, (Ll.gsapVersions || (Ll.gsapVersions = [])).push(Kf.version), Fc(Lc || Ll.GreenSockGlobals || !Ll.gsap && Ll || {}), zl = Ll.requestAnimationFrame), Hl && Yl.sleep(), jl = zl || function(t) {
							return setTimeout(t, tc - 1e3 * Yl.time + 1 | 0)
						}, Xl = 1, ic(2))
					},
					sleep: function() {
						(zl ? Ll.cancelAnimationFrame : clearTimeout)(Hl), Xl = 0, jl = Gc
					},
					lagSmoothing: function(t, e) {
						Kl = t || 1e8, Zl = Math.min(e, Kl, 0)
					},
					fps: function(t) {
						Ql = 1e3 / (t || 240), tc = 1e3 * Yl.time + Ql
					},
					add: function(t) {
						ec.indexOf(t) < 0 && ec.push(t), hf()
					},
					remove: function(t) {
						var e;
						~(e = ec.indexOf(t)) && ec.splice(e, 1) && Wl >= e && Wl--
					},
					_listeners: ec = []
				}, Yl),
				hf = function() {
					return !Xl && af.wake()
				},
				uf = {},
				lf = /^[\d.\-M][\d.\-,\s]/,
				cf = /["']/g,
				df = function(t) {
					for (var e, i, r, n = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, h = o.length; a < h; a++) i = o[a], e = a !== h - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), n[s] = isNaN(r) ? r.replace(cf, "").trim() : +r, s = i.substr(e + 1).trim();
					return n
				},
				ff = function(t) {
					return function(e) {
						return 1 - t(1 - e)
					}
				},
				pf = function t(e, i) {
					for (var r, n = e._first; n;) n instanceof Ef ? t(n, i) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === i || (n.timeline ? t(n.timeline, i) : (r = n._ease, n._ease = n._yEase, n._yEase = r, n._yoyo = i)), n = n._next
				},
				_f = function(t, e) {
					return t && (yc(t) ? t : uf[t] || function(t) {
						var e, i, r, n, o = (t + "").split("("),
							s = uf[o[0]];
						return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [df(o[1])] : (e = t, i = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", i), e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r)).split(",").map(nd)) : uf._CE && lf.test(t) ? uf._CE("", t) : s
					}(t)) || e
				},
				mf = function(t, e, i, r) {
					void 0 === i && (i = function(t) {
						return 1 - e(1 - t)
					}), void 0 === r && (r = function(t) {
						return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
					});
					var n, o = {
						easeIn: e,
						easeOut: i,
						easeInOut: r
					};
					return $c(t, (function(t) {
						for (var e in uf[t] = Nc[t] = o, uf[n = t.toLowerCase()] = i, o) uf[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = uf[t + "." + e] = o[e]
					})), o
				},
				gf = function(t) {
					return function(e) {
						return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
					}
				},
				yf = function t(e, i, r) {
					var n = i >= 1 ? i : 1,
						o = (r || (e ? .3 : .45)) / (i < 1 ? i : 1),
						s = o / cc * (Math.asin(1 / n) || 0),
						a = function(t) {
							return 1 === t ? 1 : n * Math.pow(2, -10 * t) * mc((t - s) * o) + 1
						},
						h = "out" === e ? a : "in" === e ? function(t) {
							return 1 - a(1 - t)
						} : gf(a);
					return o = cc / o, h.config = function(i, r) {
						return t(e, i, r)
					}, h
				},
				vf = function t(e, i) {
					void 0 === i && (i = 1.70158);
					var r = function(t) {
							return t ? --t * t * ((i + 1) * t + i) + 1 : 0
						},
						n = "out" === e ? r : "in" === e ? function(t) {
							return 1 - r(1 - t)
						} : gf(r);
					return n.config = function(i) {
						return t(e, i)
					}, n
				};
			$c("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
				var i = e < 5 ? e + 1 : e;
				mf(t + ",Power" + (i - 1), e ? function(t) {
					return Math.pow(t, i)
				} : function(t) {
					return t
				}, (function(t) {
					return 1 - Math.pow(1 - t, i)
				}), (function(t) {
					return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
				}))
			})), uf.Linear.easeNone = uf.none = uf.Linear.easeIn, mf("Elastic", yf("in"), yf("out"), yf()), rc = 7.5625, oc = 1 / (nc = 2.75), sc = function(t) {
				return t < oc ? rc * t * t : t < .7272727272727273 ? rc * Math.pow(t - 1.5 / nc, 2) + .75 : t < .9090909090909092 ? rc * (t -= 2.25 / nc) * t + .9375 : rc * Math.pow(t - 2.625 / nc, 2) + .984375
			}, mf("Bounce", (function(t) {
				return 1 - sc(1 - t)
			}), sc), mf("Expo", (function(t) {
				return t ? Math.pow(2, 10 * (t - 1)) : 0
			})), mf("Circ", (function(t) {
				return -(pc(1 - t * t) - 1)
			})), mf("Sine", (function(t) {
				return 1 === t ? 1 : 1 - _c(t * dc)
			})), mf("Back", vf("in"), vf("out"), vf()), uf.SteppedEase = uf.steps = Nc.SteppedEase = {
				config: function(t, e) {
					void 0 === t && (t = 1);
					var i = 1 / t,
						r = t + (e ? 0 : 1),
						n = e ? 1 : 0;
					return function(t) {
						return ((r * Nd(0, .99999999, t) | 0) + n) * i
					}
				}
			}, hc.ease = uf["quad.out"], $c("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
				return qc += t + "," + t + "Params,"
			}));
			var Tf = function(t, e) {
					this.id = fc++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Jc, this.set = e ? e.getSetter : Ff
				},
				bf = function() {
					function t(t) {
						this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Od(this, +t.duration, 1, 1), this.data = t.data, Xl || af.wake()
					}
					var e = t.prototype;
					return e.delay = function(t) {
						return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
					}, e.duration = function(t) {
						return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
					}, e.totalDuration = function(t) {
						return arguments.length ? (this._dirty = 0, Od(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
					}, e.totalTime = function(t, e) {
						if (hf(), !arguments.length) return this._tTime;
						var i = this._dp;
						if (i && i.smoothChildTiming && this._ts) {
							for (bd(this, t), !i._dp || i.parent || Ed(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
							!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && xd(this._dp, this, this._start - this._delay)
						}
						return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === lc || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), rd(this, t, e)), this
					}, e.time = function(t, e) {
						return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + gd(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
					}, e.totalProgress = function(t, e) {
						return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
					}, e.progress = function(t, e) {
						return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + gd(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
					}, e.iteration = function(t, e) {
						var i = this.duration() + this._rDelay;
						return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? yd(this._tTime, i) + 1 : 1
					}, e.timeScale = function(t) {
						if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
						if (this._rts === t) return this;
						var e = this.parent && this._ts ? vd(this.parent._time, this) : this._tTime;
						return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, _d(this.totalTime(Nd(-this._delay, this._tDur, e), !0)), Td(this), this
					}, e.paused = function(t) {
						return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (hf(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== lc && (this._tTime -= lc)))), this) : this._ps
					}, e.startTime = function(t) {
						if (arguments.length) {
							this._start = t;
							var e = this.parent || this._dp;
							return e && (e._sort || !this.parent) && xd(e, this, t - this._delay), this
						}
						return this._start
					}, e.endTime = function(t) {
						return this._start + (Ec(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
					}, e.rawTime = function(t) {
						var e = this.parent || this._dp;
						return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? vd(e.rawTime(t), this) : this._tTime : this._tTime
					}, e.globalTime = function(t) {
						for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
						return i
					}, e.repeat = function(t) {
						return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Id(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
					}, e.repeatDelay = function(t) {
						if (arguments.length) {
							var e = this._time;
							return this._rDelay = t, Id(this), e ? this.time(e) : this
						}
						return this._rDelay
					}, e.yoyo = function(t) {
						return arguments.length ? (this._yoyo = t, this) : this._yoyo
					}, e.seek = function(t, e) {
						return this.totalTime(Md(this, t), Ec(e))
					}, e.restart = function(t, e) {
						return this.play().totalTime(t ? -this._delay : 0, Ec(e))
					}, e.play = function(t, e) {
						return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
					}, e.reverse = function(t, e) {
						return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
					}, e.pause = function(t, e) {
						return null != t && this.seek(t, e), this.paused(!0)
					}, e.resume = function() {
						return this.paused(!1)
					}, e.reversed = function(t) {
						return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
					}, e.invalidate = function() {
						return this._initted = this._act = 0, this._zTime = -1e-8, this
					}, e.isActive = function() {
						var t, e = this.parent || this._dp,
							i = this._start;
						return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - lc))
					}, e.eventCallback = function(t, e, i) {
						var r = this.vars;
						return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
					}, e.then = function(t) {
						var e = this;
						return new Promise((function(i) {
							var r = yc(t) ? t : od,
								n = function() {
									var t = e.then;
									e.then = null, yc(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
								};
							e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
						}))
					}, e.kill = function() {
						Kd(this)
					}, t
				}();
			sd(bf.prototype, {
				_time: 0,
				_start: 0,
				_end: 0,
				_tTime: 0,
				_tDur: 0,
				_dirty: 0,
				_repeat: 0,
				_yoyo: !1,
				parent: null,
				_initted: !1,
				_rDelay: 0,
				_ts: 1,
				_dp: 0,
				ratio: 0,
				_zTime: -1e-8,
				_prom: 0,
				_ps: !1,
				_rts: 1
			});
			var Ef = function(t) {
				function e(e, i) {
					var r;
					return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = Ec(e.sortChildren), Nl && xd(e.parent || Nl, Ml(r), i), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && Ad(Ml(r), e.scrollTrigger), r
				}
				Cl(e, t);
				var i = e.prototype;
				return i.to = function(t, e, i) {
					return Cd(0, arguments, this), this
				}, i.from = function(t, e, i) {
					return Cd(1, arguments, this), this
				}, i.fromTo = function(t, e, i, r) {
					return Cd(2, arguments, this), this
				}, i.set = function(t, e, i) {
					return e.duration = 0, e.parent = this, cd(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Mf(t, e, Md(this, i), 1), this
				}, i.call = function(t, e, i) {
					return xd(this, Mf.delayedCall(0, t, e), i)
				}, i.staggerTo = function(t, e, i, r, n, o, s) {
					return i.duration = e, i.stagger = i.stagger || r, i.onComplete = o, i.onCompleteParams = s, i.parent = this, new Mf(t, i, Md(this, n)), this
				}, i.staggerFrom = function(t, e, i, r, n, o, s) {
					return i.runBackwards = 1, cd(i).immediateRender = Ec(i.immediateRender), this.staggerTo(t, e, i, r, n, o, s)
				}, i.staggerFromTo = function(t, e, i, r, n, o, s, a) {
					return r.startAt = i, cd(r).immediateRender = Ec(r.immediateRender), this.staggerTo(t, e, r, n, o, s, a)
				}, i.render = function(t, e, i) {
					var r, n, o, s, a, h, u, l, c, d, f, p, _ = this._time,
						m = this._dirty ? this.totalDuration() : this._tDur,
						g = this._dur,
						y = t <= 0 ? 0 : td(t),
						v = this._zTime < 0 != t < 0 && (this._initted || !g);
					if (this !== Nl && y > m && t >= 0 && (y = m), y !== this._tTime || i || v) {
						if (_ !== this._time && g && (y += this._time - _, t += this._time - _), r = y, c = this._start, h = !(l = this._ts), v && (g || (_ = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
							if (f = this._yoyo, a = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
							if (r = td(y % a), y === m ? (s = this._repeat, r = g) : ((s = ~~(y / a)) && s === y / a && (r = g, s--), r > g && (r = g)), d = yd(this._tTime, a), !_ && this._tTime && d !== s && (d = s), f && 1 & s && (r = g - r, p = 1), s !== d && !this._lock) {
								var T = f && 1 & d,
									b = T === (f && 1 & s);
								if (s < d && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : td(s * a)), e, !g)._lock = 0, this._tTime = y, !e && this.parent && qd(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
								if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !h) return this;
								pf(this, p)
							}
						}
						if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, i) {
								var r;
								if (i > e)
									for (r = t._first; r && r._start <= i;) {
										if (!r._dur && "isPause" === r.data && r._start > e) return r;
										r = r._next
									} else
										for (r = t._last; r && r._start >= i;) {
											if (!r._dur && "isPause" === r.data && r._start < e) return r;
											r = r._prev
										}
							}(this, td(_), td(r)), u && (y -= r - (r = u._start))), this._tTime = y, this._time = r, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && r && !e && (qd(this, "onStart"), this._tTime !== y)) return this;
						if (r >= _ && t >= 0)
							for (n = this._first; n;) {
								if (o = n._next, (n._act || r >= n._start) && n._ts && u !== n) {
									if (n.parent !== this) return this.render(t, e, i);
									if (n.render(n._ts > 0 ? (r - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (r - n._start) * n._ts, e, i), r !== this._time || !this._ts && !h) {
										u = 0, o && (y += this._zTime = -1e-8);
										break
									}
								}
								n = o
							} else {
								n = this._last;
								for (var E = t < 0 ? t : r; n;) {
									if (o = n._prev, (n._act || E <= n._end) && n._ts && u !== n) {
										if (n.parent !== this) return this.render(t, e, i);
										if (n.render(n._ts > 0 ? (E - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (E - n._start) * n._ts, e, i), r !== this._time || !this._ts && !h) {
											u = 0, o && (y += this._zTime = E ? -1e-8 : lc);
											break
										}
									}
									n = o
								}
							}
						if (u && !e && (this.pause(), u.render(r >= _ ? 0 : -1e-8)._zTime = r >= _ ? 1 : -1, this._ts)) return this._start = c, Td(this), this.render(t, e, i);
						this._onUpdate && !e && qd(this, "onUpdate", !0), (y === m && m >= this.totalDuration() || !y && _) && (c !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || ((t || !g) && (y === m && this._ts > 0 || !y && this._ts < 0) && fd(this, 1), e || t < 0 && !_ || !y && !_ && m || (qd(this, y === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < m && this.timeScale() > 0) && this._prom())))
					}
					return this
				}, i.add = function(t, e) {
					var i = this;
					if (vc(e) || (e = Md(this, e, t)), !(t instanceof bf)) {
						if (wc(t)) return t.forEach((function(t) {
							return i.add(t, e)
						})), this;
						if (gc(t)) return this.addLabel(t, e);
						if (!yc(t)) return this;
						t = Mf.delayedCall(0, t)
					}
					return this !== t ? xd(this, t, e) : this
				}, i.getChildren = function(t, e, i, r) {
					void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -uc);
					for (var n = [], o = this._first; o;) o._start >= r && (o instanceof Mf ? e && n.push(o) : (i && n.push(o), t && n.push.apply(n, o.getChildren(!0, e, i)))), o = o._next;
					return n
				}, i.getById = function(t) {
					for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
						if (e[i].vars.id === t) return e[i]
				}, i.remove = function(t) {
					return gc(t) ? this.removeLabel(t) : yc(t) ? this.killTweensOf(t) : (dd(this, t), t === this._recent && (this._recent = this._last), pd(this))
				}, i.totalTime = function(e, i) {
					return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = td(af.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
				}, i.addLabel = function(t, e) {
					return this.labels[t] = Md(this, e), this
				}, i.removeLabel = function(t) {
					return delete this.labels[t], this
				}, i.addPause = function(t, e, i) {
					var r = Mf.delayedCall(0, e || Gc, i);
					return r.data = "isPause", this._hasPause = 1, xd(this, r, Md(this, t))
				}, i.removePause = function(t) {
					var e = this._first;
					for (t = Md(this, t); e;) e._start === t && "isPause" === e.data && fd(e), e = e._next
				}, i.killTweensOf = function(t, e, i) {
					for (var r = this.getTweensOf(t, i), n = r.length; n--;) xf !== r[n] && r[n].kill(t, e);
					return this
				}, i.getTweensOf = function(t, e) {
					for (var i, r = [], n = Ud(t), o = this._first, s = vc(e); o;) o instanceof Mf ? ed(o._targets, n) && (s ? (!xf || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o) : (i = o.getTweensOf(n, e)).length && r.push.apply(r, i), o = o._next;
					return r
				}, i.tweenTo = function(t, e) {
					e = e || {};
					var i, r = this,
						n = Md(r, t),
						o = e,
						s = o.startAt,
						a = o.onStart,
						h = o.onStartParams,
						u = o.immediateRender,
						l = Mf.to(r, sd({
							ease: e.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: n,
							overwrite: "auto",
							duration: e.duration || Math.abs((n - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || lc,
							onStart: function() {
								if (r.pause(), !i) {
									var t = e.duration || Math.abs((n - (s && "time" in s ? s.time : r._time)) / r.timeScale());
									l._dur !== t && Od(l, t, 0, 1).render(l._time, !0, !0), i = 1
								}
								a && a.apply(l, h || [])
							}
						}, e));
					return u ? l.render(0) : l
				}, i.tweenFromTo = function(t, e, i) {
					return this.tweenTo(e, sd({
						startAt: {
							time: Md(this, t)
						}
					}, i))
				}, i.recent = function() {
					return this._recent
				}, i.nextLabel = function(t) {
					return void 0 === t && (t = this._time), Wd(this, Md(this, t))
				}, i.previousLabel = function(t) {
					return void 0 === t && (t = this._time), Wd(this, Md(this, t), 1)
				}, i.currentLabel = function(t) {
					return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + lc)
				}, i.shiftChildren = function(t, e, i) {
					void 0 === i && (i = 0);
					for (var r, n = this._first, o = this.labels; n;) n._start >= i && (n._start += t, n._end += t), n = n._next;
					if (e)
						for (r in o) o[r] >= i && (o[r] += t);
					return pd(this)
				}, i.invalidate = function() {
					var e = this._first;
					for (this._lock = 0; e;) e.invalidate(), e = e._next;
					return t.prototype.invalidate.call(this)
				}, i.clear = function(t) {
					void 0 === t && (t = !0);
					for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
					return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), pd(this)
				}, i.totalDuration = function(t) {
					var e, i, r, n = 0,
						o = this,
						s = o._last,
						a = uc;
					if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
					if (o._dirty) {
						for (r = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (i = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1, xd(o, s, i - s._delay, 1)._lock = 0) : a = i, i < 0 && s._ts && (n -= i, (!r && !o._dp || r && r.smoothChildTiming) && (o._start += i / o._ts, o._time -= i, o._tTime -= i), o.shiftChildren(-i, !1, -Infinity), a = 0), s._end > n && s._ts && (n = s._end), s = e;
						Od(o, o === Nl && o._time > n ? o._time : n, 1, 1), o._dirty = 0
					}
					return o._tDur
				}, e.updateRoot = function(t) {
					if (Nl._ts && (rd(Nl, vd(t, Nl)), kl = af.frame), af.frame >= Vc) {
						Vc += ac.autoSleep || 120;
						var e = Nl._first;
						if ((!e || !e._ts) && ac.autoSleep && af._listeners.length < 2) {
							for (; e && !e._ts;) e = e._next;
							e || af.sleep()
						}
					}
				}, e
			}(bf);
			sd(Ef.prototype, {
				_lock: 0,
				_hasPause: 0,
				_forcing: 0
			});
			var xf, Af = function(t, e, i, r, n, o, s) {
					var a, h, u, l, c, d, f, p, _ = new Yf(this._pt, t, e, 0, 1, kf, null, n),
						m = 0,
						g = 0;
					for (_.b = i, _.e = r, i += "", (f = ~(r += "").indexOf("random(")) && (r = Yd(r)), o && (o(p = [i, r], t, e), i = p[0], r = p[1]), h = i.match(Pc) || []; a = Pc.exec(r);) l = a[0], c = r.substring(m, a.index), u ? u = (u + 1) % 5 : "rgba(" === c.substr(-5) && (u = 1), l !== h[g++] && (d = parseFloat(h[g - 1]) || 0, _._pt = {
						_next: _._pt,
						p: c || 1 === g ? c : ",",
						s: d,
						c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
						m: u && u < 4 ? Math.round : 0
					}, m = Pc.lastIndex);
					return _.c = m < r.length ? r.substring(m, r.length) : "", _.fp = s, (Mc.test(r) || f) && (_.e = 0), this._pt = _, _
				},
				Sf = function(t, e, i, r, n, o, s, a, h) {
					yc(r) && (r = r(n || 0, t, o));
					var u, l = t[e],
						c = "get" !== i ? i : yc(l) ? h ? t[e.indexOf("set") || !yc(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : l,
						d = yc(l) ? h ? Nf : Df : Cf;
					if (gc(r) && (~r.indexOf("random(") && (r = Yd(r)), "=" === r.charAt(1) && ((u = parseFloat(c) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (Ld(c) || 0)) || 0 === u) && (r = u)), c !== r) return isNaN(c * r) || "" === r ? (!l && !(e in t) && Bc(e, r), Af.call(this, t, e, c, r, d, a || ac.stringFilter, h)) : (u = new Yf(this._pt, t, e, +c || 0, r - (c || 0), "boolean" == typeof l ? Uf : Bf, 0, d), h && (u.fp = h), s && u.modifier(s, this, t), this._pt = u)
				},
				wf = function(t, e, i, r, n, o) {
					var s, a, h, u;
					if (zc[t] && !1 !== (s = new zc[t]).init(n, s.rawVars ? e[t] : function(t, e, i, r, n) {
							if (yc(t) && (t = Of(t, n, e, i, r)), !bc(t) || t.style && t.nodeType || wc(t) || Sc(t)) return gc(t) ? Of(t, n, e, i, r) : t;
							var o, s = {};
							for (o in t) s[o] = Of(t[o], n, e, i, r);
							return s
						}(e[t], r, n, o, i), i, r, o) && (i._pt = a = new Yf(i._pt, n, t, 0, 1, s.render, s, 0, s.priority), i !== Gl))
						for (h = i._ptLookup[i._targets.indexOf(n)], u = s._props.length; u--;) h[s._props[u]] = a;
					return s
				},
				Rf = function t(e, i) {
					var r, n, o, s, a, h, u, l, c, d, f, p, _, m = e.vars,
						g = m.ease,
						y = m.startAt,
						v = m.immediateRender,
						T = m.lazy,
						b = m.onUpdate,
						E = m.onUpdateParams,
						x = m.callbackScope,
						A = m.runBackwards,
						S = m.yoyoEase,
						w = m.keyframes,
						R = m.autoRevert,
						O = e._dur,
						I = e._startAt,
						P = e._targets,
						M = e.parent,
						C = M && "nested" === M.data ? M.parent._targets : P,
						D = "auto" === e._overwrite && !Dl,
						N = e.timeline;
					if (N && (!w || !g) && (g = "none"), e._ease = _f(g, hc.ease), e._yEase = S ? ff(_f(!0 === S ? g : S, hc.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), e._from = !N && !!m.runBackwards, !N) {
						if (p = (l = P[0] ? Zc(P[0]).harness : 0) && m[l.prop], r = ld(m, Xc), I && I.render(-1, !0).kill(), y)
							if (fd(e._startAt = Mf.set(P, sd({
									data: "isStart",
									overwrite: !1,
									parent: M,
									immediateRender: !0,
									lazy: Ec(T),
									startAt: null,
									delay: 0,
									onUpdate: b,
									onUpdateParams: E,
									callbackScope: x,
									stagger: 0
								}, y))), i < 0 && !v && !R && e._startAt.render(-1, !0), v) {
								if (i > 0 && !R && (e._startAt = 0), O && i <= 0) return void(i && (e._zTime = i))
							} else !1 === R && (e._startAt = 0);
						else if (A && O)
							if (I) !R && (e._startAt = 0);
							else if (i && (v = !1), o = sd({
								overwrite: !1,
								data: "isFromStart",
								lazy: v && Ec(T),
								immediateRender: v,
								stagger: 0,
								parent: M
							}, r), p && (o[l.prop] = p), fd(e._startAt = Mf.set(P, o)), i < 0 && e._startAt.render(-1, !0), v) {
							if (!i) return
						} else t(e._startAt, lc);
						for (e._pt = 0, T = O && Ec(T) || T && !O, n = 0; n < P.length; n++) {
							if (u = (a = P[n])._gsap || Kc(P)[n]._gsap, e._ptLookup[n] = d = {}, jc[u.id] && Hc.length && id(), f = C === P ? n : C.indexOf(a), l && !1 !== (c = new l).init(a, p || r, e, f, C) && (e._pt = s = new Yf(e._pt, a, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function(t) {
									d[t] = s
								})), c.priority && (h = 1)), !l || p)
								for (o in r) zc[o] && (c = wf(o, r, e, f, a, C)) ? c.priority && (h = 1) : d[o] = s = Sf.call(e, a, o, "get", r[o], f, C, 0, m.stringFilter);
							e._op && e._op[n] && e.kill(a, e._op[n]), D && e._pt && (xf = e, Nl.killTweensOf(a, d, e.globalTime(i)), _ = !e.parent, xf = 0), e._pt && T && (jc[u.id] = 1)
						}
						h && zf(e), e._onInit && e._onInit(e)
					}
					e._onUpdate = b, e._initted = (!e._op || e._pt) && !_
				},
				Of = function(t, e, i, r, n) {
					return yc(t) ? t.call(e, i, r, n) : gc(t) && ~t.indexOf("random(") ? Yd(t) : t
				},
				If = qc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
				Pf = (If + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
				Mf = function(t) {
					function e(e, i, r, n) {
						var o;
						"number" == typeof i && (r.duration = i, i = r, r = null);
						var s, a, h, u, l, c, d, f, p = (o = t.call(this, n ? i : cd(i)) || this).vars,
							_ = p.duration,
							m = p.delay,
							g = p.immediateRender,
							y = p.stagger,
							v = p.overwrite,
							T = p.keyframes,
							b = p.defaults,
							E = p.scrollTrigger,
							x = p.yoyoEase,
							A = i.parent || Nl,
							S = (wc(e) || Sc(e) ? vc(e[0]) : "length" in i) ? [e] : Ud(e);
						if (o._targets = S.length ? Kc(S) : Uc("GSAP target " + e + " not found. https://greensock.com", !ac.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = v, T || y || Ac(_) || Ac(m)) {
							if (i = o.vars, (s = o.timeline = new Ef({
									data: "nested",
									defaults: b || {}
								})).kill(), s.parent = s._dp = Ml(o), s._start = 0, T) cd(sd(s.vars.defaults, {
								ease: "none"
							})), y ? S.forEach((function(t, e) {
								return T.forEach((function(i, r) {
									return s.to(t, i, r ? ">" : e * y)
								}))
							})) : T.forEach((function(t) {
								return s.to(S, t, ">")
							}));
							else {
								if (u = S.length, d = y ? Gd(y) : Gc, bc(y))
									for (l in y) ~If.indexOf(l) && (f || (f = {}), f[l] = y[l]);
								for (a = 0; a < u; a++) {
									for (l in h = {}, i) Pf.indexOf(l) < 0 && (h[l] = i[l]);
									h.stagger = 0, x && (h.yoyoEase = x), f && hd(h, f), c = S[a], h.duration = +Of(_, Ml(o), a, c, S), h.delay = (+Of(m, Ml(o), a, c, S) || 0) - o._delay, !y && 1 === u && h.delay && (o._delay = m = h.delay, o._start += m, h.delay = 0), s.to(c, h, d(a, c, S))
								}
								s.duration() ? _ = m = 0 : o.timeline = 0
							}
							_ || o.duration(_ = s.duration())
						} else o.timeline = 0;
						return !0 !== v || Dl || (xf = Ml(o), Nl.killTweensOf(S), xf = 0), xd(A, Ml(o), r), i.reversed && o.reverse(), i.paused && o.paused(!0), (g || !_ && !T && o._start === td(A._time) && Ec(g) && md(Ml(o)) && "nested" !== A.data) && (o._tTime = -1e-8, o.render(Math.max(0, -m))), E && Ad(Ml(o), E), o
					}
					Cl(e, t);
					var i = e.prototype;
					return i.render = function(t, e, i) {
						var r, n, o, s, a, h, u, l, c, d = this._time,
							f = this._tDur,
							p = this._dur,
							_ = t > f - lc && t >= 0 ? f : t < lc ? 0 : t;
						if (p) {
							if (_ !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
								if (r = _, l = this.timeline, this._repeat) {
									if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, i);
									if (r = td(_ % s), _ === f ? (o = this._repeat, r = p) : ((o = ~~(_ / s)) && o === _ / s && (r = p, o--), r > p && (r = p)), (h = this._yoyo && 1 & o) && (c = this._yEase, r = p - r), a = yd(this._tTime, s), r === d && !i && this._initted) return this;
									o !== a && (l && this._yEase && pf(l, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(td(s * o), !0).invalidate()._lock = 0))
								}
								if (!this._initted) {
									if (Sd(this, t < 0 ? t : r, i, e)) return this._tTime = 0, this;
									if (p !== this._dur) return this.render(t, e, i)
								}
								if (this._tTime = _, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (c || this._ease)(r / p), this._from && (this.ratio = u = 1 - u), r && !d && !e && (qd(this, "onStart"), this._tTime !== _)) return this;
								for (n = this._pt; n;) n.r(u, n.d), n = n._next;
								l && l.render(t < 0 ? t : !r && h ? -1e-8 : l._dur * u, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), qd(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && qd(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && fd(this, 1), e || t < 0 && !d || !_ && !d || (qd(this, _ === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < f && this.timeScale() > 0) && this._prom()))
							}
						} else ! function(t, e, i, r) {
							var n, o, s, a = t.ratio,
								h = e < 0 || !e && (!t._start && wd(t) && (t._initted || !Rd(t)) || (t._ts < 0 || t._dp._ts < 0) && !Rd(t)) ? 0 : 1,
								u = t._rDelay,
								l = 0;
							if (u && t._repeat && (l = Nd(0, t._tDur, e), o = yd(l, u), s = yd(t._tTime, u), t._yoyo && 1 & o && (h = 1 - h), o !== s && (a = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== a || r || t._zTime === lc || !e && t._zTime) {
								if (!t._initted && Sd(t, e, r, i)) return;
								for (s = t._zTime, t._zTime = e || (i ? lc : 0), i || (i = e && !s), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(h, n.d), n = n._next;
								t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && qd(t, "onUpdate"), l && t._repeat && !i && t.parent && qd(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && fd(t, 1), i || (qd(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
							} else t._zTime || (t._zTime = e)
						}(this, t, e, i);
						return this
					}, i.targets = function() {
						return this._targets
					}, i.invalidate = function() {
						return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
					}, i.kill = function(t, e) {
						if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Kd(this) : this;
						if (this.timeline) {
							var i = this.timeline.totalDuration();
							return this.timeline.killTweensOf(t, e, xf && !0 !== xf.vars.overwrite)._first || Kd(this), this.parent && i !== this.timeline.totalDuration() && Od(this, this._dur * this.timeline._tDur / i, 0, 1), this
						}
						var r, n, o, s, a, h, u, l = this._targets,
							c = t ? Ud(t) : l,
							d = this._ptLookup,
							f = this._pt;
						if ((!e || "all" === e) && function(t, e) {
								for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
								return i < 0
							}(l, c)) return "all" === e && (this._pt = 0), Kd(this);
						for (r = this._op = this._op || [], "all" !== e && (gc(e) && (a = {}, $c(e, (function(t) {
								return a[t] = 1
							})), e = a), e = function(t, e) {
								var i, r, n, o, s = t[0] ? Zc(t[0]).harness : 0,
									a = s && s.aliases;
								if (!a) return e;
								for (r in i = hd({}, e), a)
									if (r in i)
										for (n = (o = a[r].split(",")).length; n--;) i[o[n]] = i[r];
								return i
							}(l, e)), u = l.length; u--;)
							if (~c.indexOf(l[u]))
								for (a in n = d[u], "all" === e ? (r[u] = e, s = n, o = {}) : (o = r[u] = r[u] || {}, s = e), s)(h = n && n[a]) && ("kill" in h.d && !0 !== h.d.kill(a) || dd(this, h, "_pt"), delete n[a]), "all" !== o && (o[a] = 1);
						return this._initted && !this._pt && f && Kd(this), this
					}, e.to = function(t, i) {
						return new e(t, i, arguments[2])
					}, e.from = function(t, e) {
						return Cd(1, arguments)
					}, e.delayedCall = function(t, i, r, n) {
						return new e(i, 0, {
							immediateRender: !1,
							lazy: !1,
							overwrite: !1,
							delay: t,
							onComplete: i,
							onReverseComplete: i,
							onCompleteParams: r,
							onReverseCompleteParams: r,
							callbackScope: n
						})
					}, e.fromTo = function(t, e, i) {
						return Cd(2, arguments)
					}, e.set = function(t, i) {
						return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
					}, e.killTweensOf = function(t, e, i) {
						return Nl.killTweensOf(t, e, i)
					}, e
				}(bf);
			sd(Mf.prototype, {
				_targets: [],
				_lazy: 0,
				_startAt: 0,
				_op: 0,
				_onInit: 0
			}), $c("staggerTo,staggerFrom,staggerFromTo", (function(t) {
				Mf[t] = function() {
					var e = new Ef,
						i = Fd.call(arguments, 0);
					return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
				}
			}));
			var Cf = function(t, e, i) {
					return t[e] = i
				},
				Df = function(t, e, i) {
					return t[e](i)
				},
				Nf = function(t, e, i, r) {
					return t[e](r.fp, i)
				},
				Lf = function(t, e, i) {
					return t.setAttribute(e, i)
				},
				Ff = function(t, e) {
					return yc(t[e]) ? Df : Tc(t[e]) && t.setAttribute ? Lf : Cf
				},
				Bf = function(t, e) {
					return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
				},
				Uf = function(t, e) {
					return e.set(e.t, e.p, !!(e.s + e.c * t), e)
				},
				kf = function(t, e) {
					var i = e._pt,
						r = "";
					if (!t && e.b) r = e.b;
					else if (1 === t && e.e) r = e.e;
					else {
						for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
						r += e.c
					}
					e.set(e.t, e.p, r, e)
				},
				Gf = function(t, e) {
					for (var i = e._pt; i;) i.r(t, i.d), i = i._next
				},
				Xf = function(t, e, i, r) {
					for (var n, o = this._pt; o;) n = o._next, o.p === r && o.modifier(t, e, i), o = n
				},
				Hf = function(t) {
					for (var e, i, r = this._pt; r;) i = r._next, r.p === t && !r.op || r.op === t ? dd(this, r, "_pt") : r.dep || (e = 1), r = i;
					return !e
				},
				jf = function(t, e, i, r) {
					r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
				},
				zf = function(t) {
					for (var e, i, r, n, o = t._pt; o;) {
						for (e = o._next, i = r; i && i.pr > o.pr;) i = i._next;
						(o._prev = i ? i._prev : n) ? o._prev._next = o: r = o, (o._next = i) ? i._prev = o : n = o, o = e
					}
					t._pt = r
				},
				Yf = function() {
					function t(t, e, i, r, n, o, s, a, h) {
						this.t = e, this.s = r, this.c = n, this.p = i, this.r = o || Bf, this.d = s || this, this.set = a || Cf, this.pr = h || 0, this._next = t, t && (t._prev = this)
					}
					return t.prototype.modifier = function(t, e, i) {
						this.mSet = this.mSet || this.set, this.set = jf, this.m = t, this.mt = i, this.tween = e
					}, t
				}();
			$c(qc + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
				return Xc[t] = 1
			})), Nc.TweenMax = Nc.TweenLite = Mf, Nc.TimelineLite = Nc.TimelineMax = Ef, Nl = new Ef({
				sortChildren: !1,
				defaults: hc,
				autoRemoveChildren: !0,
				id: "root",
				smoothChildTiming: !0
			}), ac.stringFilter = sf;
			var Vf = {
				registerPlugin: function() {
					for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
					e.forEach((function(t) {
						return Zd(t)
					}))
				},
				timeline: function(t) {
					return new Ef(t)
				},
				getTweensOf: function(t, e) {
					return Nl.getTweensOf(t, e)
				},
				getProperty: function(t, e, i, r) {
					gc(t) && (t = Ud(t)[0]);
					var n = Zc(t || {}).get,
						o = i ? od : nd;
					return "native" === i && (i = ""), t ? e ? o((zc[e] && zc[e].get || n)(t, e, i, r)) : function(e, i, r) {
						return o((zc[e] && zc[e].get || n)(t, e, i, r))
					} : t
				},
				quickSetter: function(t, e, i) {
					if ((t = Ud(t)).length > 1) {
						var r = t.map((function(t) {
								return Kf.quickSetter(t, e, i)
							})),
							n = r.length;
						return function(t) {
							for (var e = n; e--;) r[e](t)
						}
					}
					t = t[0] || {};
					var o = zc[e],
						s = Zc(t),
						a = s.harness && (s.harness.aliases || {})[e] || e,
						h = o ? function(e) {
							var r = new o;
							Gl._pt = 0, r.init(t, i ? e + i : e, Gl, 0, [t]), r.render(1, r), Gl._pt && Gf(1, Gl)
						} : s.set(t, a);
					return o ? h : function(e) {
						return h(t, a, i ? e + i : e, s, 1)
					}
				},
				isTweening: function(t) {
					return Nl.getTweensOf(t, !0).length > 0
				},
				defaults: function(t) {
					return t && t.ease && (t.ease = _f(t.ease, hc.ease)), ud(hc, t || {})
				},
				config: function(t) {
					return ud(ac, t || {})
				},
				registerEffect: function(t) {
					var e = t.name,
						i = t.effect,
						r = t.plugins,
						n = t.defaults,
						o = t.extendTimeline;
					(r || "").split(",").forEach((function(t) {
						return t && !zc[t] && !Nc[t] && Uc(e + " effect requires " + t + " plugin.")
					})), Yc[e] = function(t, e, r) {
						return i(Ud(t), sd(e || {}, n), r)
					}, o && (Ef.prototype[e] = function(t, i, r) {
						return this.add(Yc[e](t, bc(i) ? i : (r = i) && {}, this), r)
					})
				},
				registerEase: function(t, e) {
					uf[t] = _f(e)
				},
				parseEase: function(t, e) {
					return arguments.length ? _f(t, e) : uf
				},
				getById: function(t) {
					return Nl.getById(t)
				},
				exportRoot: function(t, e) {
					void 0 === t && (t = {});
					var i, r, n = new Ef(t);
					for (n.smoothChildTiming = Ec(t.smoothChildTiming), Nl.remove(n), n._dp = 0, n._time = n._tTime = Nl._time, i = Nl._first; i;) r = i._next, !e && !i._dur && i instanceof Mf && i.vars.onComplete === i._targets[0] || xd(n, i, i._start - i._delay), i = r;
					return xd(Nl, n, 0), n
				},
				utils: {
					wrap: function t(e, i, r) {
						var n = i - e;
						return wc(e) ? zd(e, t(0, e.length), i) : Dd(r, (function(t) {
							return (n + (t - e) % n) % n + e
						}))
					},
					wrapYoyo: function t(e, i, r) {
						var n = i - e,
							o = 2 * n;
						return wc(e) ? zd(e, t(0, e.length - 1), i) : Dd(r, (function(t) {
							return e + ((t = (o + (t - e) % o) % o || 0) > n ? o - t : t)
						}))
					},
					distribute: Gd,
					random: jd,
					snap: Hd,
					normalize: function(t, e, i) {
						return Vd(t, e, 0, 1, i)
					},
					getUnit: Ld,
					clamp: function(t, e, i) {
						return Dd(i, (function(i) {
							return Nd(t, e, i)
						}))
					},
					splitColor: tf,
					toArray: Ud,
					selector: function(t) {
						return t = Ud(t)[0] || Uc("Invalid scope") || {},
							function(e) {
								var i = t.current || t.nativeElement || t;
								return Ud(e, i.querySelectorAll ? i : i === t ? Uc("Invalid scope") || Bl.createElement("div") : t)
							}
					},
					mapRange: Vd,
					pipe: function() {
						for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
						return function(t) {
							return e.reduce((function(t, e) {
								return e(t)
							}), t)
						}
					},
					unitize: function(t, e) {
						return function(i) {
							return t(parseFloat(i)) + (e || Ld(i))
						}
					},
					interpolate: function t(e, i, r, n) {
						var o = isNaN(e + i) ? 0 : function(t) {
							return (1 - t) * e + t * i
						};
						if (!o) {
							var s, a, h, u, l, c = gc(e),
								d = {};
							if (!0 === r && (n = 1) && (r = null), c) e = {
								p: e
							}, i = {
								p: i
							};
							else if (wc(e) && !wc(i)) {
								for (h = [], u = e.length, l = u - 2, a = 1; a < u; a++) h.push(t(e[a - 1], e[a]));
								u--, o = function(t) {
									t *= u;
									var e = Math.min(l, ~~t);
									return h[e](t - e)
								}, r = i
							} else n || (e = hd(wc(e) ? [] : {}, e));
							if (!h) {
								for (s in i) Sf.call(d, e, s, "get", i[s]);
								o = function(t) {
									return Gf(t, d) || (c ? e.p : e)
								}
							}
						}
						return Dd(r, o)
					},
					shuffle: kd
				},
				install: Fc,
				effects: Yc,
				ticker: af,
				updateRoot: Ef.updateRoot,
				plugins: zc,
				globalTimeline: Nl,
				core: {
					PropTween: Yf,
					globals: kc,
					Tween: Mf,
					Timeline: Ef,
					Animation: bf,
					getCache: Zc,
					_removeLinkedListItem: dd,
					suppressOverwrites: function(t) {
						return Dl = t
					}
				}
			};
			$c("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
				return Vf[t] = Mf[t]
			})), af.add(Ef.updateRoot), Gl = Vf.to({}, {
				duration: 0
			});
			var Wf = function(t, e) {
					for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
					return i
				},
				qf = function(t, e) {
					return {
						name: t,
						rawVars: 1,
						init: function(t, i, r) {
							r._onInit = function(t) {
								var r, n;
								if (gc(i) && (r = {}, $c(i, (function(t) {
										return r[t] = 1
									})), i = r), e) {
									for (n in r = {}, i) r[n] = e(i[n]);
									i = r
								}! function(t, e) {
									var i, r, n, o = t._targets;
									for (i in e)
										for (r = o.length; r--;)(n = t._ptLookup[r][i]) && (n = n.d) && (n._pt && (n = Wf(n, i)), n && n.modifier && n.modifier(e[i], t, o[r], i))
								}(t, i)
							}
						}
					}
				},
				Kf = Vf.registerPlugin({
					name: "attr",
					init: function(t, e, i, r, n) {
						var o, s;
						for (o in e)(s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], r, n, 0, 0, o)) && (s.op = o), this._props.push(o)
					}
				}, {
					name: "endArray",
					init: function(t, e) {
						for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
					}
				}, qf("roundProps", Xd), qf("modifiers"), qf("snap", Hd)) || Vf;
			Mf.version = Ef.version = Kf.version = "3.8.0", Ul = 1, xc() && hf(), uf.Power0, uf.Power1, uf.Power2, uf.Power3, uf.Power4, uf.Linear, uf.Quad, uf.Cubic, uf.Quart, uf.Quint, uf.Strong, uf.Elastic, uf.Back, uf.SteppedEase, uf.Bounce, uf.Sine, uf.Expo, uf.Circ;
			class Zf extends wl {
				lastJudgement = 0;
				judgementSprite;
				judgementTimeout = null;
				judgementTween = null;
				constructor(t) {
					super(), this.judgementSprite = new hh, this.addChild(this.judgementSprite), this.zIndex = 9, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showJudgement, this.judgementSprite.anchor.set(.5), this.judgementSprite.x = Pm.width / 2, this.judgementSprite.y = Pm.height - Pm.height * Pm.judgementPosition;
					const t = Pm.resources[Pm.currentSkin.getJudgement(0)].texture;
					this.judgementSprite.height = Pm.height * Pm.judgementSize, this.judgementSprite.width = t ? this.judgementSprite.height * t.width / t.height : 100
				}
				newJudgement(t) {
					this.judgementTween && null != this.judgementTimeout && (window.clearTimeout(this.judgementTimeout), this.judgementTimeout = null, this.judgementTween.kill(), this.judgementTween = null), this.judgementSprite.visible = !0, this.lastJudgement = t, this.judgementSprite.anchor.set(.5), this.judgementSprite.x = Pm.width / 2, this.judgementSprite.y = Pm.height - Pm.height * Pm.judgementPosition;
					const e = Pm.resources[Pm.currentSkin.getJudgement(t)].texture;
					e && (this.judgementSprite.texture = e), this.judgementSprite.height = Pm.height * Pm.judgementSize, this.judgementSprite.width = e ? this.judgementSprite.height * e.width / e.height : 100, this.judgementSprite.scale.set(1 + Pm.judgementBounce, 1 + Pm.judgementBounce), this.judgementTimeout = window.setTimeout((() => {
						this.judgementSprite.visible = !1
					}), 400), this.judgementTween = Mf.to(this.judgementSprite, .2, {
						pixi: {
							scale: 1
						}
					})
				}
			}
			class Jf extends wl {
				lightings = [];
				constructor(t) {
					super(), this.zIndex = 3, t.addChild(this)
				}
				redraw() {
					this.removeChildren(), this.lightings = [], this.visible = Pm.showLighting;
					const t = Pm.keyMode;
					for (let e = 0; e < t; e++) {
						const i = Pm.resources[Pm.currentSkin.getLighting(e)].texture,
							r = new hh(i);
						r.anchor.set(0, 1), r.width = Pm.width * Pm.columnSize, r.height = i ? r.width * i.height / i.width : 100, r.x = (Pm.width - r.width * t) / 2 + r.width * e, r.y = Pm.height - Pm.hitPosition * Pm.height, r.visible = !1, this.lightings.push(r), this.addChild(r)
					}
				}
				keyDown(t) {
					this.lightings[t].visible = !0
				}
				keyUp(t) {
					this.lightings[t].visible = !1
				}
			}
			class $f extends wl {
				receptors = [];
				receptorsDown = [];
				constructor(t) {
					super(), this.zIndex = 6, t.addChild(this)
				}
				redraw() {
					this.removeChildren(), this.receptors = [], this.receptorsDown = [], this.visible = Pm.showReceptors;
					const t = Pm.keyMode;
					for (let e = 0; e < t; e++) {
						const i = Pm.resources[Pm.currentSkin.getReceptor(e)].texture,
							r = new hh(i);
						r.anchor.set(0, .5), r.width = Pm.width * Pm.columnSize, r.height = i ? r.width * i.height / i.width : 100, r.x = (Pm.width - r.width * t) / 2 + r.width * e, r.y = Pm.height - Pm.hitPosition * Pm.height, r.visible = !0, this.receptors.push(r), this.addChild(r)
					}
					for (let e = 0; e < t; e++) {
						const i = Pm.resources[Pm.currentSkin.getPressedReceptor(e)].texture,
							r = new hh(i);
						r.anchor.set(0, .5), r.width = Pm.width * Pm.columnSize, r.height = i ? r.width * i.height / i.width : 100, r.x = (Pm.width - r.width * t) / 2 + r.width * e, r.y = Pm.height - Pm.hitPosition * Pm.height, r.visible = !1, this.receptorsDown.push(r), this.addChild(r)
					}
				}
				keyDown(t) {
					this.receptors[t].visible = !1, this.receptorsDown[t].visible = !0
				}
				keyUp(t) {
					this.receptors[t].visible = !0, this.receptorsDown[t].visible = !1
				}
			}
			class Qf {
				sprite;
				startTime;
				offset;
				timeout;
				constructor(t, e, i, r) {
					this.sprite = t, this.startTime = e, this.offset = i, this.timeout = r
				}
			}
			class tp extends wl {
				background;
				yellowBackground;
				greenBackground;
				blueBackground;
				whiteLine;
				timingsContainer;
				activePool;
				inactivePool;
				constructor(t) {
					super(), this.activePool = new(Yt()), this.inactivePool = new(Yt()), this.background = new hh(Sn.WHITE), this.background.anchor.set(.5), this.background.tint = 0, this.background.alpha = .5, this.addChild(this.background), this.yellowBackground = new hh(Sn.WHITE), this.yellowBackground.anchor.set(.5), this.yellowBackground.tint = 14593360, this.addChild(this.yellowBackground), this.greenBackground = new hh(Sn.WHITE), this.greenBackground.anchor.set(.5), this.greenBackground.tint = 5498890, this.addChild(this.greenBackground), this.blueBackground = new hh(Sn.WHITE), this.blueBackground.anchor.set(.5), this.blueBackground.tint = 3062758, this.addChild(this.blueBackground), this.whiteLine = new hh(Sn.WHITE), this.whiteLine.anchor.set(.5), this.addChild(this.whiteLine), this.timingsContainer = new Ur, this.addChild(this.timingsContainer), this.zIndex = 14, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showOffset;
					const t = Pm.width * Pm.offsetSizeX,
						e = Pm.height * Pm.offsetSizeY,
						i = jt.getTimingWindow(4),
						r = t * jt.getTimingWindow(1) / i,
						n = t * jt.getTimingWindow(3) / i,
						o = Pm.width / 2;
					this.background.width = t, this.background.height = e, this.background.x = o, this.background.y = Pm.height - e / 2, this.yellowBackground.width = t, this.yellowBackground.height = e / 4, this.yellowBackground.x = o, this.yellowBackground.y = Pm.height - e / 2, this.greenBackground.width = n, this.greenBackground.height = e / 4, this.greenBackground.x = o, this.greenBackground.y = Pm.height - e / 2, this.blueBackground.width = r, this.blueBackground.height = e / 4, this.blueBackground.x = o, this.blueBackground.y = Pm.height - e / 2, this.whiteLine.width = 3, this.whiteLine.height = e, this.whiteLine.x = o, this.whiteLine.y = Pm.height - e / 2
				}
				newTiming(t) {
					const e = this.getSprite(),
						i = jt.getTimingWindow(4),
						r = jt.getJudgement(t),
						n = Pm.width * Pm.offsetSizeX,
						o = Pm.height * Pm.offsetSizeY,
						s = (t + i) / (2 * i) * n;
					e.width = 3, e.height = o, e.x = Pm.width / 2 - n / 2 + s, e.y = Pm.height - o / 2, e.tint = this.getTimingColor(r);
					const a = new Qf(e, Date.now(), t, window.setTimeout((() => this.disposeGraphics()), 3e3));
					Pm.status.timings.push(a)
				}
				getSprite() {
					let t = this.inactivePool.shift();
					return t ? (t.visible = !0, this.activePool.push(t), t) : (t = new hh(Sn.WHITE), t.anchor.set(.5), t.blendMode = ii.SCREEN, this.timingsContainer.addChild(t), this.activePool.push(t), t)
				}
				disposeGraphics() {
					const t = this.activePool.shift();
					t && (t.visible = !1, this.inactivePool.push(t))
				}
				getTimingColor(t) {
					return t < 2 ? 3062758 : t < 4 ? 5498890 : 14593360
				}
			}
			class ep extends wl {
				_accTextField;
				constructor(t) {
					super(), this._accTextField = new vh(""), this.addChild(this._accTextField), this.zIndex = 11, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showAccuracy;
					const t = Pm.height * Ht,
						e = Pm.accuracySize * Pm.height;
					this._accTextField.anchor.set(1, 0), this._accTextField.x = Pm.width - t, this._accTextField.y = t, e >= 1 ? (this._accTextField.text = Pm.accuracy.toFixed(2) + "%", this._accTextField.style = new dh({
						fontSize: e,
						fill: 16777215
					})) : this.visible = !1
				}
				restart() {
					this._accTextField.text = Pm.accuracy.toFixed(2) + "%"
				}
				update() {
					this._accTextField.text = Pm.accuracy.toFixed(2) + "%"
				}
			}
			class ip extends wl {
				judgementSprites = [];
				judgementTexts = [];
				constructor(t) {
					super();
					for (let t = 0; t < 6; t++) {
						const t = new hh;
						this.addChild(t), this.judgementSprites.push(t);
						const e = new vh("");
						this.addChild(e), this.judgementTexts.push(e)
					}
					this.zIndex = 13, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showJudgements;
					const t = Pm.height * Ht,
						e = Pm.judgementsSize * Pm.height,
						i = Pm.height / 2 - 3 * e;
					if (!(e < 1))
						for (let r = 0; r < 6; r++) {
							const n = Pm.resources[Pm.currentSkin.getJudgement(r)].texture;
							n && (this.judgementSprites[r].texture = n);
							const o = n ? e * n.width / n.height : 100;
							this.judgementSprites[r].x = t, this.judgementSprites[r].y = i + e * r, this.judgementSprites[r].width = o, this.judgementSprites[r].height = e, this.judgementTexts[r].text = Pm.judgements[r].toFixed(0), this.judgementTexts[r].style = new dh({
								fontSize: e,
								fill: 16777215
							}), this.judgementTexts[r].x = t + o + t, this.judgementTexts[r].y = i + e * r
						}
				}
				restart() {
					for (let t = 0; t < 6; t++) this.judgementTexts[t].text = Pm.judgements[t].toFixed(0)
				}
				newJudgement(t) {
					this.judgementTexts[t].text = Pm.judgements[t].toFixed(0)
				}
			}
			class rp extends wl {
				_infoTextField;
				constructor(t) {
					super(), this._infoTextField = new vh(""), this.addChild(this._infoTextField), this.zIndex = 12, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showInfo;
					const t = Pm.height * Ht,
						e = Pm.infoSize * Pm.height;
					this._infoTextField.anchor.set(0, 1), this._infoTextField.x = t, this._infoTextField.y = Pm.height - t, Pm.difficulty && (this._infoTextField.text = "OD" + Pm.timingWindows.toFixed(0) + ", " + (Pm.difficulty.songRate * Pm.difficulty.difficulty.beatmap.bpm).toFixed(0) + "bpm, " + Pm.difficulty.songRate.toFixed(2) + "x"), e >= 1 ? this._infoTextField.style = new dh({
						fontSize: e,
						fill: 16777215
					}) : this.visible = !1
				}
			}
			var np = new class extends class {
				loading = "";
				pick = "";
				paused = ""
			} {
				constructor() {
					super(), this.loading = "Loading...", this.pick = "Pick a song or pattern", this.paused = "Game paused"
				}
			};
			class op extends wl {
				loadingSprite;
				pauseGraphics;
				statusText;
				countdownContainer;
				countdownTexts;
				countdownTicker;
				countdownTimeOut;
				constructor(t) {
					super(), this.loadingSprite = new hh, this.loadingSprite.visible = !1, this.loadingSprite.width = t.width, this.loadingSprite.height = t.height, this.addChild(this.loadingSprite), this.pauseGraphics = new rh, this.pauseGraphics.beginFill(0, .5).drawRect(0, 0, t.width, t.height).endFill(), this.addChild(this.pauseGraphics), this.statusText = new vh("", new dh({
						fontSize: .05 * t.height,
						fill: 16777215
					})), this.statusText.anchor.set(.5), this.statusText.x = t.width / 2, this.statusText.y = t.height / 2, this.pick(), this.addChild(this.statusText), this.countdownContainer = new Ur, this.countdownContainer.visible = !1, this.addChild(this.countdownContainer), this.countdownTexts = [];
					for (let e = 3; e > 0; e--) {
						const i = new vh(e.toFixed(0), new dh({
							fontSize: .05 * t.height,
							fill: 16777215
						}));
						i.anchor.set(.5), i.x = t.width / 2, this.countdownTexts.push(i), this.countdownContainer.addChild(i)
					}
					this.countdownTicker = new jr, this.countdownTicker.add((() => {
						this.updateCountdown()
					})), this.statusText.anchor.set(.5), this.statusText.x = t.width / 2, this.statusText.y = t.height / 2, this.pick(), this.addChild(this.statusText), this.zIndex = 15, t.addChild(this)
				}
				pick() {
					this.statusText.text = np.pick, this.statusText.visible = !0, this.pauseGraphics.visible = !1, this.loadingSprite.visible = !1
				}
				pause() {
					this.statusText.text = np.paused, this.statusText.visible = !0, this.pauseGraphics.visible = !0, this.loadingSprite.visible = !1
				}
				empty() {
					this.statusText.visible = !1, this.pauseGraphics.visible = !1, this.loadingSprite.visible = !1
				}
				load(t) {
					this.statusText.text = np.loading, this.loadingSprite.texture = Sn.from(t), this.loadingSprite.visible = !0, this.statusText.visible = !0, this.pauseGraphics.visible = !1
				}
				startCountdown() {
					this.empty(), this.countdownContainer.visible = !0, Pm.status.countdownStartTime = Date.now(), this.countdownTicker.start(), this.countdownTimeOut = window.setTimeout((() => {
						this.countdownContainer.visible = !1, this.countdownTimeOut = void 0, this.countdownTicker.stop()
					}), Xt)
				}
				updateCountdown() {
					const t = Date.now(),
						e = Pm.height - Pm.hitPosition * Pm.height,
						i = Pm.scrollSpeed;
					for (let r = 0; r < this.countdownTexts.length; r++) this.countdownTexts[r].y = e - (Pm.status.countdownStartTime - t + Xt * (r + 1) / 4) * e / i
				}
				redraw() {}
			}
			class sp extends wl {
				_pieGraphics;
				_pieBorderGraphics;
				_timeTicker;
				constructor(t) {
					super(), this._pieGraphics = new rh, this.addChild(this._pieGraphics), this._pieBorderGraphics = new rh, this.addChild(this._pieBorderGraphics), this._timeTicker = new jr, this._timeTicker.add((() => {
						this.measureTime()
					})), this.zIndex = 10, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showSongMeter;
					const t = Pm.height * Ht,
						e = .003 * Pm.height,
						i = Pm.height * Pm.songMeterSize / 2,
						r = Pm.showAccuracy ? Pm.accuracySize * Pm.height + t : 0;
					this._pieBorderGraphics.clear().lineStyle(e, 16777215).arc(Pm.width - i - e - t, i + e + t + r, i, 0, 2 * Math.PI).endFill()
				}
				measureTime() {
					if (this._pieGraphics.clear(), Pm.difficulty) {
						const t = Pm.height * Ht,
							e = .003 * Pm.height,
							i = Pm.height * Pm.songMeterSize / 2,
							r = Pm.showAccuracy ? Pm.accuracySize * Pm.height + t : 0,
							n = Pm.status.paused ? Pm.status.pauseStartTime - Pm.status.playStartTime : Date.now() - Pm.status.playStartTime,
							o = n < 0 ? 0 : n / Pm.difficulty.length,
							s = 0 === Pm.status.playStartTime || 0 === Pm.difficulty.length ? 0 : 2 * Math.PI * o;
						this._pieGraphics.beginFill(1668818).moveTo(Pm.width - i - e - t, i + e + t + r).arc(Pm.width - i - e - t, i + e + t + r, i, -Math.PI / 2, s - Math.PI / 2).lineTo(Pm.width - i - e - t, i + e + t + r).endFill()
					}
				}
			}
			class ap extends wl {
				notes;
				activePool;
				inactivePool;
				notesContainer;
				noteTicker;
				constructor(t) {
					super(), this.activePool = new(Yt()), this.inactivePool = new(Yt()), this.notesContainer = new Ur, this.addChild(this.notesContainer), this.notes = [], this.noteTicker = new jr, this.noteTicker.add((() => {
						this.updateNotes()
					})), this.zIndex = 4, t.addChild(this)
				}
				redraw() {
					for (let t = 0; t < this.notes.length; t++)
						for (let e = 0; e < this.notes[t].length; e++) {
							const i = this.notes[t].peekAt(e);
							if (i && i.sprite) {
								let e = Pm.resources[Pm.currentSkin instanceof Gt ? Pm.currentSkin.getNote(i.timing) : Pm.currentSkin.getNote(t)].texture;
								e || (e = Sn.WHITE), i.sprite.texture = e, i.sprite.width = Pm.columnSize * Pm.width, i.sprite.height = i.sprite.width * (e ? e.height / e.width : 100), i.sprite.x = (Pm.width - i.sprite.width * Pm.keyMode) / 2 + i.sprite.width * t + i.sprite.width / 2
							}
						}
				}
				restart() {
					this.end(), this.start()
				}
				start() {
					for (let t = 0; t < Pm.keyMode; t++) this.notes.push(new(Yt()));
					this.noteTicker.start()
				}
				end() {
					this.noteTicker.stop(), this.notes = [], this.disposeAllSprites()
				}
				pause() {
					this.noteTicker.stop()
				}
				resume() {
					this.noteTicker.start()
				}
				updateNotes() {
					const t = Pm.difficulty;
					if (!t) return;
					const e = Date.now(),
						i = Pm.height - Pm.hitPosition * Pm.height,
						r = Pm.scrollSpeed;
					for (let n = 0; n < this.notes.length; n++) {
						for (let t = 0; t < this.notes[n].length; t++) {
							const o = this.notes[n].peekAt(t);
							if (!o || !o.sprite) break;
							const s = Pm.status.playStartTime + Pm.visualOffset + o.startTime - e;
							o.sprite.y = i - s * i / r
						}
						for (let o = 0; o < t.notes[n].length; o++) {
							const s = t.notes[n].peekAt(o);
							if (!s) break;
							if (s.sprite) continue;
							const a = Pm.status.playStartTime + Pm.visualOffset + s.startTime - e;
							let h = Pm.resources[Pm.currentSkin instanceof Gt ? Pm.currentSkin.getNote(s.timing) : Pm.currentSkin.getNote(n)].texture;
							if (h || (h = Sn.WHITE), !(a < r + Pm.columnSize * Pm.width * h.height / h.width)) break; {
								const t = this.getSprite();
								t.texture = h, t.width = Pm.columnSize * Pm.width, t.height = t.width * h.height / h.width, t.x = (Pm.width - t.width * Pm.keyMode) / 2 + t.width * n + t.width / 2, t.y = i - a * i / r, s.sprite = t, this.notes[n].push(s)
							}
						}
					}
				}
				removeNote(t) {
					t.sprite && (this.disposeSprite(t.sprite), t.sprite = void 0), this.notes[t.key].shift()
				}
				getSprite() {
					let t = this.inactivePool.shift();
					return t ? (t.visible = !0, this.activePool.push(t), t) : (t = new hh, t.anchor.set(.5), this.notesContainer.addChild(t), this.activePool.push(t), t)
				}
				disposeSprite(t) {
					t.visible = !1;
					for (let e = 0; e < this.activePool.length; e++)
						if (this.activePool.peekAt(e) === t) {
							this.activePool.removeOne(e);
							break
						} this.inactivePool.push(t)
				}
				disposeAllSprites() {
					let t = this.activePool.pop();
					for (; t;) t.visible = !1, this.inactivePool.push(t), t = this.activePool.pop()
				}
			}
			class hp extends wl {
				_comboTextField;
				constructor(t) {
					super(), this._comboTextField = new vh(""), this._comboTextField.visible = !1, this.addChild(this._comboTextField), this.zIndex = 8, t.addChild(this)
				}
				redraw() {
					this.visible = Pm.showCombo;
					const t = Pm.comboSize * Pm.height;
					this._comboTextField.anchor.set(.5), this._comboTextField.x = Pm.width / 2, this._comboTextField.y = Pm.height - Pm.height * Pm.comboPosition, t >= 1 ? (this._comboTextField.text = Pm.combo.toFixed(0), this._comboTextField.style = new dh({
						fontSize: t,
						fill: 16777215
					})) : this.visible = !1
				}
				restart() {
					this._comboTextField.visible = !1, this._comboTextField.text = Pm.combo.toFixed(0)
				}
				update() {
					0 === Pm.combo ? this._comboTextField.visible = !1 : this._comboTextField.visible = !0, this._comboTextField.text = Pm.combo.toFixed(0)
				}
			}
			class up extends wl {
				_laneCoverTopSprite;
				_laneCoverTopGraphics;
				_laneCoverBottomSprite;
				_laneCoverBottomGraphics;
				constructor(t) {
					super(), this._laneCoverTopSprite = new hh, this.addChild(this._laneCoverTopSprite), this._laneCoverBottomSprite = new hh, this.addChild(this._laneCoverBottomSprite), this._laneCoverTopGraphics = new rh, this.addChild(this._laneCoverTopGraphics), this._laneCoverBottomGraphics = new rh, this.addChild(this._laneCoverBottomGraphics), this.zIndex = 5, t.addChild(this)
				}
				redraw() {
					this.updateLaneCoverTop(), this.updateLaneCoverBottom()
				}
				updateLaneCoverTop() {
					this._laneCoverTopSprite.visible = Pm.showLaneCoverTop, this._laneCoverTopGraphics.visible = Pm.showLaneCoverTop;
					let t = Pm.resources["./img/skins/gradient.png"].texture;
					t || (t = Sn.WHITE), this._laneCoverTopSprite.texture = t, this._laneCoverTopSprite.anchor.y = 1, this._laneCoverTopSprite.scale.y = -1;
					const e = Pm.width / 2 - Pm.width * Pm.columnSize * Pm.keyMode / 2,
						i = Pm.width * Pm.columnSize * Pm.keyMode,
						r = Pm.height * Pm.laneCoverTopFade,
						n = Pm.height * Pm.laneCoverTopPosition;
					this._laneCoverTopGraphics.clear().beginFill(0).drawRect(e, 0, i, n).endFill(), this._laneCoverTopSprite.x = e, this._laneCoverTopSprite.y = n, this._laneCoverTopSprite.width = i, this._laneCoverTopSprite.height = r
				}
				updateLaneCoverBottom() {
					this._laneCoverBottomSprite.visible = Pm.showLaneCoverBottom, this._laneCoverBottomGraphics.visible = Pm.showLaneCoverBottom;
					let t = Pm.resources["./img/skins/gradient.png"].texture;
					t || (t = Sn.WHITE), this._laneCoverBottomSprite.texture = t;
					const e = Pm.width / 2 - Pm.width * Pm.columnSize * Pm.keyMode / 2,
						i = Pm.width * Pm.columnSize * Pm.keyMode,
						r = Pm.height * Pm.laneCoverBottomFade,
						n = Pm.height * Pm.laneCoverBottomPosition;
					this._laneCoverBottomGraphics.clear().beginFill(0).drawRect(e, Pm.height - n, i, n).endFill(), this._laneCoverBottomSprite.x = e, this._laneCoverBottomSprite.y = Pm.height - n - r, this._laneCoverBottomSprite.width = i, this._laneCoverBottomSprite.height = r
				}
			}
			class lp extends wl {
				_notificationTextField;
				_notificationTimeOut;
				constructor(t) {
					super(), this._notificationTextField = new vh(""), this.addChild(this._notificationTextField), this.visible = !1, this.zIndex = 18, t.addChild(this)
				}
				redraw() {
					const t = Pm.height * Ht,
						e = .05 * Pm.height;
					this._notificationTextField.style = new dh({
						fontSize: e,
						fill: 16777215
					}), this._notificationTextField.x = t, this._notificationTextField.y = t
				}
				newNotification(t) {
					void 0 !== this._notificationTimeOut && (window.clearTimeout(this._notificationTimeOut), this._notificationTimeOut = void 0), this.visible = !0, this._notificationTextField.text = t, this._notificationTimeOut = window.setTimeout((() => this.hideNotification()), 1e3)
				}
				hideNotification() {
					this.visible = !1, this._notificationTimeOut = void 0
				}
			}
			class cp extends Ur {
				containers = {
					background: new Rl(this),
					effects: new Ol(this),
					fps: new Il(this),
					hintLine: new Pl(this),
					judgement: new Zf(this),
					lighting: new Jf(this),
					receptors: new $f(this),
					timings: new tp(this),
					accuracy: new ep(this),
					judgements: new ip(this),
					info: new rp(this),
					time: new sp(this),
					status: new op(this),
					notes: new ap(this),
					combo: new hp(this),
					cover: new up(this),
					notifications: new lp(this)
				};
				constructor(t) {
					super(), t.stage.addChild(this)
				}
				redraw() {
					for (let t of Object.values(this.containers)) t.redraw()
				}
				keyDown(t) {
					this.containers.lighting.keyDown(t), this.containers.receptors.keyDown(t)
				}
				keyUp(t) {
					this.containers.lighting.keyUp(t), this.containers.receptors.keyUp(t)
				}
				noteHit(t, e, i) {
					const r = jt.getTimingWindow(4);
					this.containers.timings.newTiming(t < 0 ? Math.max(t, -r) : Math.min(t, r)), this.containers.accuracy.update(), this.containers.judgements.newJudgement(e), this.containers.judgement.newJudgement(e), this.containers.combo.update(), this.containers.effects.newEffect(i)
				}
				noteMiss() {
					this.containers.accuracy.update(), this.containers.judgements.newJudgement(5), this.containers.judgement.newJudgement(5), this.containers.combo.update()
				}
				removeNote(t) {
					console.log(t)
				}
			}
			class dp {
				noscratch = !1;
				random = !1;
				mirror = !1
			}
			class fp {
				gameScene;
				gameLoopInterval;
				constructor(t) {
					this.gameScene = new cp(t)
				}
				stopScene() {
					this.gameScene.visible = !1
				}
				startScene() {
					this.gameScene.visible = !0
				}
				get loadingImages() {
					return Pm.status.loadingImages
				}
				get loadingPercentage() {
					return Pm.status.loadingPercentage
				}
				mounted() {
					Pm.loader.onLoad.add((t => {
						Pm.status.loadingPercentage = t.progress
					})), Pm.loader.add(Sl).load((() => this.start()))
				}
				start() {
					Pm.status.loadingImages = !1;
					const t = document.getElementById("canvasWrapper");
					t && t.appendChild(Pm.view), this.updateSkin(), qt.Howler.volume(Pm.volume), window.addEventListener("keydown", (t => this.keyDown(t))), window.addEventListener("keyup", (t => this.keyUp(t))), this.gameLoopInterval = window.setInterval((() => this.updateLogic()), 0)
				}
				updateSkin() {
					this.gameScene.redraw()
				}
				updateLogic() {
					Pm.status.playing && !Pm.status.paused && (this.checkMisses(), this.checkTimeSounds())
				}
				checkMisses() {
					if (!Pm.difficulty) return;
					const t = Date.now(),
						e = jt.getTimingWindow(4);
					for (const i of Pm.difficulty.notes) {
						let r = !1;
						for (; !0 !== r;) {
							const n = this.getFirstActiveNote(i);
							n ? "longnote" === n.objectName ? t - Pm.status.playStartTime - n.startTime >= e && !n.pressed ? (n.missed = !0, this.processMiss(n, !1)) : n.pressed && t - Pm.status.playStartTime - n.endTime >= e ? this.processMiss(n, !0) : r = !0 : t - Pm.status.playStartTime - n.startTime >= e ? this.processMiss(n, !0) : r = !0 : r = !0
						}
					}
				}
				checkTimeSounds() {
					if (Pm.difficulty)
						for (let t = Pm.status.currentTimeSound; t < Pm.difficulty.timeSounds.length; t++) {
							const e = Pm.difficulty.timeSounds[t];
							if (e.start || !(Date.now() - Pm.status.playStartTime >= (e.startTime + Pm.audioOffset) / Pm.difficulty.songRate)) break; {
								e.start = !0;
								const t = Pm.difficulty.hitSounds.get(e.name);
								if (!t || (Date.now() - Pm.status.playStartTime - e.startTime - Pm.audioOffset) / 1e3 * Pm.difficulty.songRate >= t.duration()) continue;
								t.once("play", (() => {
									Pm.difficulty && t.seek((Date.now() - Pm.status.playStartTime - e.startTime - Pm.audioOffset) / 1e3 * Pm.difficulty.songRate, e.id)
								})), e.id = t.play(), Pm.status.currentTimeSound++
							}
						}
				}
				getFirstActiveNote(t) {
					for (let e = 0; e < t.length; e++) {
						const i = t.peekAt(e);
						if (i && !i.missed) return i
					}
					return null
				}
				hasKey(t) {
					for (let e = 0; e < Pm.keyMode; e++)
						if (t === Pm.keyBindings[Pm.keyMode][e].code) return e
				}
				translate(t) {
					return t
				}
				keyDown(t) {
					if (!t.repeat) {
						t.code, Pm.keyBindings.pause.code, t.code, Pm.keyBindings.restart.code, t.code === Pm.keyBindings.fullScreen.code && this.fullScreen(), t.code === Pm.keyBindings.incrementAudioOffset.code && (Pm.audioOffset + (t.shiftKey ? 1 : 5) <= 1500 && (Pm.configs.general.audioOffset = Pm.audioOffset + (t.shiftKey ? 1 : 5), Pm.notificationController.newNotification(this.translate("general.newaudiooffset") + Pm.audioOffset.toFixed(0) + " ms"), Pm.status.playing && Pm.difficulty && (Pm.difficulty.resetTimeSounds(), Pm.status.currentTimeSound = 0)), Pm.status.lastOffsetChangeTime = Date.now()), t.code === Pm.keyBindings.decrementAudioOffset.code && (Pm.audioOffset - (t.shiftKey ? 1 : 5) >= -1500 && (Pm.configs.general.audioOffset = Pm.audioOffset - (t.shiftKey ? 1 : 5), Pm.notificationController.newNotification(this.translate("general.newaudiooffset") + Pm.audioOffset.toFixed(0) + " ms"), Pm.status.playing && Pm.difficulty && (Pm.difficulty.resetTimeSounds(), Pm.status.currentTimeSound = 0)), Pm.status.lastOffsetChangeTime = Date.now());
						const e = Date.now(),
							i = this.hasKey(t.code),
							r = jt.getTimingWindow(5);
						if (void 0 !== i && (this.gameScene.keyDown(i), Pm.status.playing && !Pm.status.paused && Pm.difficulty)) {
							const t = this.getFirstActiveNote(Pm.difficulty.notes[i]);
							if (!t || t.pressed) return;
							const n = e - Pm.status.playStartTime - t.startTime;
							Math.abs(n) <= r && this.processHit(t, n)
						}
					}
				}
				keyUp(t) {
					const e = this.hasKey(t.code);
					if (void 0 !== e && (this.gameScene.keyUp(e), Pm.status.playing && !Pm.status.paused && Pm.difficulty)) {
						const t = this.getFirstActiveNote(Pm.difficulty.notes[e]);
						t && t.objectName
					}
				}
				processHit(t, e) {
					if (!Pm.difficulty) return;
					const i = jt.getJudgement(e);
					if (Pm.status.addJudgement(i), this.gameScene.noteHit(e, i, t.key), t.hitSound) {
						const e = Pm.difficulty.hitSounds.get(t.hitSound);
						e && e.play()
					}
					"longnote" === t.objectName ? (5 === i ? (t.missed = !0, t.pressed = !1) : t.pressed = !0, this.gameScene.removeNote(t), Pm.difficulty.notes[t.key].shift()) : (this.gameScene.removeNote(t), Pm.difficulty.notes[t.key].shift())
				}
				processMiss(t, e) {
					Pm.difficulty && (Pm.status.addJudgement(5), this.gameScene.noteMiss(), e && (this.gameScene.removeNote(t), Pm.difficulty.notes[t.key].shift()))
				}
				async loadSong(t) {
					console.log(t), Pm.fullscreen && this.fullScreen(), await Pm.status.load({
						difficulty: t,
						songRate: 1,
						timingWindows: 8,
						mods: new dp
					}), this.updateSkin()
				}
				fullScreen() {
					const t = Pm.view;
					t.webkitRequestFullScreen ? t.webkitRequestFullScreen() : t.requestFullscreen()
				}
				destroy() {
					window.clearInterval(this.gameLoopInterval)
				}
			}
			class pp extends Ur {
				loadingCenterGraphics;
				loadingSidesGraphics;
				loadingTicker;
				size;
				animationLoopTime = 3e3;
				lineStyle;
				constructor(t, e) {
					super(), this.size = e / 100, this.lineStyle = {
						width: 7.5 * this.size,
						color: 2201331,
						cap: xa.ROUND
					}, this.loadingCenterGraphics = (new rh).lineStyle(this.lineStyle).moveTo(36.66 * this.size, 43 * this.size).lineTo(36.66 * this.size, 57 * this.size).moveTo(63.33 * this.size, 43 * this.size).lineTo(63.33 * this.size, 57 * this.size).moveTo(50 * this.size, 33.33 * this.size).lineTo(50 * this.size, 66.66 * this.size), this.loadingCenterGraphics.x = t.width / 2, this.loadingCenterGraphics.y = t.height / 2, this.addChild(this.loadingCenterGraphics), this.loadingSidesGraphics = new rh, this.loadingSidesGraphics.x = t.width / 2, this.loadingSidesGraphics.y = t.height / 2, this.addChild(this.loadingSidesGraphics), this.loadingTicker = new jr, this.loadingTicker.add((() => this.updateAnimation())), t.addChild(this)
				}
				startAnimation() {
					this.loadingTicker.start()
				}
				stopAnimation() {
					this.loadingTicker.stop()
				}
				updateAnimation() {
					const t = Date.now() % this.animationLoopTime / (this.animationLoopTime / 5),
						e = t % 5 - Math.floor(t);
					t < 1 ? this.loadingSidesGraphics.clear().lineStyle(this.lineStyle).moveTo((33 - 29 * e) * this.size, (80 - 30 * e) * this.size).lineTo(4 * this.size, 50 * this.size).moveTo(4 * this.size, 50 * this.size).lineTo(33 * this.size, 20 * this.size).moveTo((67 + 29 * e) * this.size, (20 + 30 * e) * this.size).lineTo(96 * this.size, 50 * this.size).moveTo(96 * this.size, 50 * this.size).lineTo(67 * this.size, 80 * this.size) : t < 2 ? this.loadingSidesGraphics.clear().lineStyle(this.lineStyle).moveTo((4 + 29 * e) * this.size, (50 - 30 * e) * this.size).lineTo(33 * this.size, 20 * this.size).moveTo((96 - 29 * e) * this.size, (50 + 30 * e) * this.size).lineTo(67 * this.size, 80 * this.size) : t < 3 ? this.loadingSidesGraphics.clear().beginFill(this.lineStyle.color).drawCircle((33 + 34 * e) * this.size, 20 * this.size, 3.75 * this.size).drawCircle((67 - 34 * e) * this.size, 80 * this.size, 3.75 * this.size) : t < 4 ? this.loadingSidesGraphics.clear().lineStyle(this.lineStyle).moveTo(33 * this.size, 80 * this.size).lineTo((33 - 29 * e) * this.size, (80 - 30 * e) * this.size).moveTo(67 * this.size, 20 * this.size).lineTo((67 + 29 * e) * this.size, (20 + 30 * e) * this.size) : t < 5 && this.loadingSidesGraphics.clear().lineStyle(this.lineStyle).moveTo(33 * this.size, 80 * this.size).lineTo(4 * this.size, 50 * this.size).moveTo(4 * this.size, 50 * this.size).lineTo((4 + 29 * e) * this.size, (50 - 30 * e) * this.size).moveTo(67 * this.size, 20 * this.size).lineTo(96 * this.size, 50 * this.size).moveTo(96 * this.size, 50 * this.size).lineTo((96 - 29 * e) * this.size, (50 + 30 * e) * this.size)
				}
			}
			class _p extends Ur {
				loadingContainer;
				loadingText;
				loadingTicker;
				alphaFilter;
				textSize = .05;
				loadingSize = .5;
				constructor(t) {
					super(), this.loadingContainer = new pp(this, this.loadingSize * t.view.height), this.loadingContainer.x = t.view.width / 2 - this.loadingSize * t.view.height / 2, this.loadingContainer.y = t.view.height / 2 - this.loadingSize * t.view.height / 2 - this.textSize * t.view.height * 2, this.addChild(this.loadingContainer), this.loadingText = new vh("0%", new dh({
						fontSize: t.view.height * this.textSize,
						fill: 16777215
					})), this.loadingText.anchor.set(.5, 0), this.loadingText.x = t.view.width / 2, this.loadingText.y = t.view.height / 2 + this.textSize * t.view.height * 3, this.addChild(this.loadingText), this.loadingTicker = new jr, this.loadingTicker.add((() => this.updateFadeAnimation())), this.alphaFilter = new Al.AlphaFilter(1), t.stage.addChild(this)
				}
				startAnimation() {
					this.loadingContainer.startAnimation()
				}
				startFadeAnimation() {
					this.filters = [this.alphaFilter], this.loadingTicker.start()
				}
				updateFadeAnimation() {
					const t = Date.now();
					Pm.loadingController.fadeStartTime && (this.alphaFilter.alpha = 1 - (t - Pm.loadingController.fadeStartTime) / Pm.loadingController.fadeAnimationTime)
				}
				stopAnimation() {
					this.loadingTicker.stop(), this.loadingContainer.stopAnimation()
				}
				updateProgress() {
					this.loadingText.text = Pm.loadingController.progress.toFixed(0) + "%"
				}
			}
			class mp {
				loadingScene;
				fadeAnimationTime = 2e3;
				textSize = .05;
				loadingSize = .5;
				progress = 0;
				fadeStartTime;
				constructor(t) {
					this.loadingScene = new _p(t)
				}
				stopScene() {
					this.loadingScene.visible = !1
				}
				startScene() {
					this.loadingScene.visible = !0
				}
				load() {
					this.loadingScene.startAnimation(), Pm.loader.onLoad.add((t => {
						this.progress = t.progress, this.loadingScene.updateProgress()
					})), Pm.loader.add(Sl).load((() => this.loadComplete()))
				}
				loadComplete() {
					this.fadeStartTime = Date.now(), this.loadingScene.startFadeAnimation(), window.setTimeout((() => this.fadeAnimationComplete()), Pm.loadingController.fadeAnimationTime)
				}
				fadeAnimationComplete() {
					Pm.appController.loadComplete()
				}
			}
			class gp extends Ur {
				constructor(t) {
					super(), this.visible = !1, t.stage.addChild(this)
				}
			}
			class yp {
				menuScene;
				constructor(t) {
					this.menuScene = new gp(t)
				}
				stopScene() {
					this.menuScene.visible = !1
				}
				startScene() {
					this.menuScene.visible = !0
				}
			}
			class vp extends Ur {
				constructor(t) {
					super(), t.stage.addChild(this)
				}
			}
			class Tp {
				notificationScene;
				constructor(t) {
					this.notificationScene = new vp(t)
				}
				stopScene() {
					this.notificationScene.visible = !1
				}
				startScene() {
					this.notificationScene.visible = !0
				}
				newNotification(t) {
					console.log(t)
				}
			}
			class bp extends Ur {
				constructor(t) {
					super(), this.visible = !1, t.stage.addChild(this)
				}
			}
			class Ep {
				optionsScene;
				constructor(t) {
					this.optionsScene = new bp(t)
				}
				stopScene() {
					this.optionsScene.visible = !1
				}
				startScene() {
					this.optionsScene.visible = !0
				}
			}
			class xp extends Ur {
				constructor(t) {
					super(), this.visible = !1, t.stage.addChild(this)
				}
			}
			class Ap {
				selectorScene;
				constructor(t) {
					this.selectorScene = new xp(t)
				}
				stopScene() {
					this.selectorScene.visible = !1
				}
				startScene() {
					this.selectorScene.visible = !0
				}
			}
			var Sp, wp, Rp, Op, Ip, Pp, Mp, Cp, Dp, Np = function() {
					return "undefined" != typeof window
				},
				Lp = function() {
					return Sp || Np() && (Sp = window.gsap) && Sp.registerPlugin && Sp
				},
				Fp = function(t) {
					return "function" == typeof t
				},
				Bp = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
				Up = .212671,
				kp = .71516,
				Gp = .072169,
				Xp = function(t, e) {
					var i, r, n = [],
						o = 0,
						s = 0;
					for (i = 0; i < 4; i++) {
						for (r = 0; r < 5; r++) s = 4 === r ? t[o + 4] : 0, n[o + r] = t[o] * e[r] + t[o + 1] * e[r + 5] + t[o + 2] * e[r + 10] + t[o + 3] * e[r + 15] + s;
						o += 5
					}
					return n
				},
				Hp = function(t, e) {
					var i = 1 - e,
						r = i * Up,
						n = i * kp,
						o = i * Gp;
					return Xp([r + e, n, o, 0, 0, r, n + e, o, 0, 0, r, n, o + e, 0, 0, 0, 0, 0, 1, 0], t)
				},
				jp = function(t, e, i) {
					var r = Rp(e),
						n = r[0] / 255,
						o = r[1] / 255,
						s = r[2] / 255,
						a = 1 - i;
					return Xp([a + i * n * Up, i * n * kp, i * n * Gp, 0, 0, i * o * Up, a + i * o * kp, i * o * Gp, 0, 0, i * s * Up, i * s * kp, a + i * s * Gp, 0, 0, 0, 0, 0, 1, 0], t)
				},
				zp = function(t, e) {
					e *= Math.PI / 180;
					var i = Math.cos(e),
						r = Math.sin(e);
					return Xp([Up + i * (1 - Up) + r * -Up, kp + i * -kp + r * -kp, Gp + i * -Gp + r * (1 - Gp), 0, 0, Up + i * -Up + .143 * r, kp + .28484 * i + .14 * r, Gp + i * -Gp + -.283 * r, 0, 0, Up + i * -Up + -.787329 * r, kp + i * -kp + r * kp, Gp + i * (1 - Gp) + r * Gp, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t)
				},
				Yp = function(t, e) {
					return Xp([e, 0, 0, 0, .5 * (1 - e), 0, e, 0, 0, .5 * (1 - e), 0, 0, e, 0, .5 * (1 - e), 0, 0, 0, 1, 0], t)
				},
				Vp = function(t, e) {
					var i, r, n = Op.filters[e],
						o = t.filters || [],
						s = o.length;
					for (n || (r = e + " not found. PixiPlugin.registerPIXI(PIXI)", console.warn(r)); --s > -1;)
						if (o[s] instanceof n) return o[s];
					return i = new n, "BlurFilter" === e && (i.blur = 0), o.push(i), t.filters = o, i
				},
				Wp = function(t, e, i, r) {
					e.add(i, t, i[t], r[t]), e._props.push(t)
				},
				qp = function(t, e) {
					var i = new Op.filters.ColorMatrixFilter;
					return i.matrix = e, i.brightness(t, !0), i.matrix
				},
				Kp = {
					contrast: 1,
					saturation: 1,
					colorizeAmount: 0,
					colorize: "rgb(255,255,255)",
					hue: 0,
					brightness: 1
				},
				Zp = function(t, e, i) {
					var r, n, o, s = Vp(t, "ColorMatrixFilter"),
						a = t._gsColorMatrixFilter = t._gsColorMatrixFilter || function(t) {
							var e, i = {};
							for (e in t) i[e] = t[e];
							return i
						}(Kp),
						h = e.combineCMF && !("colorMatrixFilter" in e && !e.colorMatrixFilter);
					o = s.matrix, e.resolution && (s.resolution = e.resolution), e.matrix && e.matrix.length === o.length ? (n = e.matrix, 1 !== a.contrast && Wp("contrast", i, a, Kp), a.hue && Wp("hue", i, a, Kp), 1 !== a.brightness && Wp("brightness", i, a, Kp), a.colorizeAmount && (Wp("colorize", i, a, Kp), Wp("colorizeAmount", i, a, Kp)), 1 !== a.saturation && Wp("saturation", i, a, Kp)) : (n = Bp.slice(), null != e.contrast ? (n = Yp(n, +e.contrast), Wp("contrast", i, a, e)) : 1 !== a.contrast && (h ? n = Yp(n, a.contrast) : Wp("contrast", i, a, Kp)), null != e.hue ? (n = zp(n, +e.hue), Wp("hue", i, a, e)) : a.hue && (h ? n = zp(n, a.hue) : Wp("hue", i, a, Kp)), null != e.brightness ? (n = qp(+e.brightness, n), Wp("brightness", i, a, e)) : 1 !== a.brightness && (h ? n = qp(a.brightness, n) : Wp("brightness", i, a, Kp)), null != e.colorize ? (e.colorizeAmount = "colorizeAmount" in e ? +e.colorizeAmount : 1, n = jp(n, e.colorize, e.colorizeAmount), Wp("colorize", i, a, e), Wp("colorizeAmount", i, a, e)) : a.colorizeAmount && (h ? n = jp(n, a.colorize, a.colorizeAmount) : (Wp("colorize", i, a, Kp), Wp("colorizeAmount", i, a, Kp))), null != e.saturation ? (n = Hp(n, +e.saturation), Wp("saturation", i, a, e)) : 1 !== a.saturation && (h ? n = Hp(n, a.saturation) : Wp("saturation", i, a, Kp))), r = n.length;
					for (; --r > -1;) n[r] !== o[r] && i.add(o, r, o[r], n[r], "colorMatrixFilter");
					i._props.push("colorMatrixFilter")
				},
				Jp = function(t, e) {
					var i = e.t,
						r = e.p,
						n = e.color;
					(0, e.set)(i, r, n[0] << 16 | n[1] << 8 | n[2])
				},
				$p = function(t, e) {
					var i = e.g;
					i && (i.dirty++, i.clearDirty++)
				},
				Qp = function(t, e) {
					e.t.visible = !!e.t.alpha
				},
				t_ = function(t, e, i, r) {
					var n = t[e],
						o = Rp(Fp(n) ? t[e.indexOf("set") || !Fp(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)]() : n),
						s = Rp(i);
					r._pt = new Ip(r._pt, t, e, 0, 0, Jp, {
						t: t,
						p: e,
						color: o,
						set: Pp(t, e)
					}), r.add(o, 0, o[0], s[0]), r.add(o, 1, o[1], s[1]), r.add(o, 2, o[2], s[2])
				},
				e_ = {
					tint: 1,
					lineColor: 1,
					fillColor: 1
				},
				i_ = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
				r_ = {
					x: "position",
					y: "position",
					tileX: "tilePosition",
					tileY: "tilePosition"
				},
				n_ = {
					colorMatrixFilter: 1,
					saturation: 1,
					contrast: 1,
					hue: 1,
					colorize: 1,
					colorizeAmount: 1,
					brightness: 1,
					combineCMF: 1
				},
				o_ = Math.PI / 180,
				s_ = function(t) {
					return "string" == typeof t
				},
				a_ = function(t) {
					return s_(t) && "=" === t.charAt(1) ? t.substr(0, 2) + parseFloat(t.substr(2)) * o_ : t * o_
				},
				h_ = function(t, e) {
					return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e5 * (e.s + e.c * t)) / 1e5, e)
				},
				u_ = function(t, e, i, r, n, o) {
					var s, a, h = 360 * (o ? o_ : 1),
						u = s_(n),
						l = u && "=" === n.charAt(1) ? +(n.charAt(0) + "1") : 0,
						c = parseFloat(l ? n.substr(2) : n) * (o ? o_ : 1),
						d = l ? c * l : c - r,
						f = r + d;
					return u && ("short" === (s = n.split("_")[1]) && (d %= h) != d % (h / 2) && (d += d < 0 ? h : -h), "cw" === s && d < 0 ? d = (d + 1e10 * h) % h - ~~(d / h) * h : "ccw" === s && d > 0 && (d = (d - 1e10 * h) % h - ~~(d / h) * h)), t._pt = a = new Ip(t._pt, e, i, r, d, h_), a.e = f, a
				},
				l_ = function() {
					Np() && (wp = window, Sp = Lp(), Op = Op || wp.PIXI, Mp = Op && Op.VERSION && "4" === Op.VERSION.charAt(0), Rp = function(t) {
						return Sp.utils.splitColor("0x" === (t + "").substr(0, 2) ? "#" + t.substr(2) : t)
					})
				};
			for (Cp = 0; Cp < i_.length; Cp++) Dp = i_[Cp], r_[Dp + "X"] = Dp, r_[Dp + "Y"] = Dp;
			var c_ = {
				version: "3.8.0",
				name: "pixi",
				register: function(t, e, i) {
					Sp = t, Ip = i, Pp = e.getSetter, l_()
				},
				registerPIXI: function(t) {
					Op = t
				},
				init: function(t, e, i, r, n) {
					if (Op || l_(), !(Op && t instanceof Op.DisplayObject)) return console.warn(t, "is not a DisplayObject or PIXI was not found. PixiPlugin.registerPIXI(PIXI);"), !1;
					var o, s, a, h, u, l, c, d, f;
					for (l in e) {
						if (o = r_[l], a = e[l], o) s = ~l.charAt(l.length - 1).toLowerCase().indexOf("x") ? "x" : "y", this.add(t[o], s, t[o][s], "skew" === o ? a_(a) : a);
						else if ("scale" === l || "anchor" === l || "pivot" === l || "tileScale" === l) this.add(t[l], "x", t[l].x, a), this.add(t[l], "y", t[l].y, a);
						else if ("rotation" === l || "angle" === l) u_(this, t, l, t[l], a, "rotation" === l);
						else if (n_[l]) h || (Zp(t, e.colorMatrixFilter || e, this), h = !0);
						else if ("blur" === l || "blurX" === l || "blurY" === l || "blurPadding" === l) {
							if (u = Vp(t, "BlurFilter"), this.add(u, l, u[l], a), 0 !== e.blurPadding)
								for (c = e.blurPadding || 2 * Math.max(u[l], a), d = t.filters.length; --d > -1;) t.filters[d].padding = Math.max(t.filters[d].padding, c)
						} else if (e_[l])
							if (("lineColor" === l || "fillColor" === l) && t instanceof Op.Graphics)
								for (f = (t.geometry || t).graphicsData, this._pt = new Ip(this._pt, t, l, 0, 0, $p, {
										g: t.geometry || t
									}), d = f.length; --d > -1;) t_(Mp ? f[d] : f[d][l.substr(0, 4) + "Style"], Mp ? l : "color", a, this);
							else t_(t, l, a, this);
						else "autoAlpha" === l ? (this._pt = new Ip(this._pt, t, "visible", 0, 0, Qp), this.add(t, "alpha", t.alpha, a), this._props.push("alpha", "visible")) : "resolution" !== l && this.add(t, l, "get", a);
						this._props.push(l)
					}
				}
			};
			Lp() && Sp.registerPlugin(c_);
			var d_, f_, p_, __, m_, g_, y_, v_ = {},
				T_ = 180 / Math.PI,
				b_ = Math.PI / 180,
				E_ = Math.atan2,
				x_ = /([A-Z])/g,
				A_ = /(?:left|right|width|margin|padding|x)/i,
				S_ = /[\s,\(]\S/,
				w_ = {
					autoAlpha: "opacity,visibility",
					scale: "scaleX,scaleY",
					alpha: "opacity"
				},
				R_ = function(t, e) {
					return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
				},
				O_ = function(t, e) {
					return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
				},
				I_ = function(t, e) {
					return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
				},
				P_ = function(t, e) {
					var i = e.s + e.c * t;
					e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
				},
				M_ = function(t, e) {
					return e.set(e.t, e.p, t ? e.e : e.b, e)
				},
				C_ = function(t, e) {
					return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
				},
				D_ = function(t, e, i) {
					return t.style[e] = i
				},
				N_ = function(t, e, i) {
					return t.style.setProperty(e, i)
				},
				L_ = function(t, e, i) {
					return t._gsap[e] = i
				},
				F_ = function(t, e, i) {
					return t._gsap.scaleX = t._gsap.scaleY = i
				},
				B_ = function(t, e, i, r, n) {
					var o = t._gsap;
					o.scaleX = o.scaleY = i, o.renderTransform(n, o)
				},
				U_ = function(t, e, i, r, n) {
					var o = t._gsap;
					o[e] = i, o.renderTransform(n, o)
				},
				k_ = "transform",
				G_ = k_ + "Origin",
				X_ = function(t, e) {
					var i = f_.createElementNS ? f_.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : f_.createElement(t);
					return i.style ? i : f_.createElement(t)
				},
				H_ = function t(e, i, r) {
					var n = getComputedStyle(e);
					return n[i] || n.getPropertyValue(i.replace(x_, "-$1").toLowerCase()) || n.getPropertyValue(i) || !r && t(e, z_(i) || i, 1) || ""
				},
				j_ = "O,Moz,ms,Ms,Webkit".split(","),
				z_ = function(t, e, i) {
					var r = (e || m_).style,
						n = 5;
					if (t in r && !i) return t;
					for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(j_[n] + t in r););
					return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? j_[n] : "") + t
				},
				Y_ = function() {
					"undefined" != typeof window && window.document && (d_ = window, f_ = d_.document, p_ = f_.documentElement, m_ = X_("div") || {
						style: {}
					}, X_("div"), k_ = z_(k_), G_ = k_ + "Origin", m_.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", y_ = !!z_("perspective"), __ = 1)
				},
				V_ = function t(e) {
					var i, r = X_("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
						n = this.parentNode,
						o = this.nextSibling,
						s = this.style.cssText;
					if (p_.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
						i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
					} catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
					return n && (o ? n.insertBefore(this, o) : n.appendChild(this)), p_.removeChild(r), this.style.cssText = s, i
				},
				W_ = function(t, e) {
					for (var i = e.length; i--;)
						if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
				},
				q_ = function(t) {
					var e;
					try {
						e = t.getBBox()
					} catch (i) {
						e = V_.call(t, !0)
					}
					return e && (e.width || e.height) || t.getBBox === V_ || (e = V_.call(t, !0)), !e || e.width || e.x || e.y ? e : {
						x: +W_(t, ["x", "cx", "x1"]) || 0,
						y: +W_(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0
					}
				},
				K_ = function(t) {
					return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !q_(t))
				},
				Z_ = function(t, e) {
					if (e) {
						var i = t.style;
						e in v_ && e !== G_ && (e = k_), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(x_, "-$1").toLowerCase())) : i.removeAttribute(e)
					}
				},
				J_ = function(t, e, i, r, n, o) {
					var s = new Yf(t._pt, e, i, 0, 1, o ? C_ : M_);
					return t._pt = s, s.b = r, s.e = n, t._props.push(i), s
				},
				$_ = {
					deg: 1,
					rad: 1,
					turn: 1
				},
				Q_ = function t(e, i, r, n) {
					var o, s, a, h, u = parseFloat(r) || 0,
						l = (r + "").trim().substr((u + "").length) || "px",
						c = m_.style,
						d = A_.test(i),
						f = "svg" === e.tagName.toLowerCase(),
						p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
						_ = 100,
						m = "px" === n,
						g = "%" === n;
					return n === l || !u || $_[n] || $_[l] ? u : ("px" !== l && !m && (u = t(e, i, r, "px")), h = e.getCTM && K_(e), !g && "%" !== l || !v_[i] && !~i.indexOf("adius") ? (c[d ? "width" : "height"] = _ + (m ? l : n), s = ~i.indexOf("adius") || "em" === n && e.appendChild && !f ? e : e.parentNode, h && (s = (e.ownerSVGElement || {}).parentNode), s && s !== f_ && s.appendChild || (s = f_.body), (a = s._gsap) && g && a.width && d && a.time === af.time ? Qc(u / a.width * _) : ((g || "%" === l) && (c.position = H_(e, "position")), s === e && (c.position = "static"), s.appendChild(m_), o = m_[p], s.removeChild(m_), c.position = "absolute", d && g && ((a = Zc(s)).time = af.time, a.width = s[p]), Qc(m ? o * u / _ : o && u ? _ / o * u : 0))) : (o = h ? e.getBBox()[d ? "width" : "height"] : e[p], Qc(g ? u / o * _ : u / 100 * o)))
				},
				tm = function(t, e, i, r) {
					var n;
					return __ || Y_(), e in w_ && "transform" !== e && ~(e = w_[e]).indexOf(",") && (e = e.split(",")[0]), v_[e] && "transform" !== e ? (n = dm(t, r), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : fm(H_(t, G_)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = om[e] && om[e](t, e, i) || H_(t, e) || Jc(t, e) || ("opacity" === e ? 1 : 0)), i && !~(n + "").trim().indexOf(" ") ? Q_(t, e, n, i) + i : n
				},
				em = function(t, e, i, r) {
					if (!i || "none" === i) {
						var n = z_(e, t, 1),
							o = n && H_(t, n, 1);
						o && o !== i ? (e = n, i = o) : "borderColor" === e && (i = H_(t, "borderTopColor"))
					}
					var s, a, h, u, l, c, d, f, p, _, m, g, y = new Yf(this._pt, t.style, e, 0, 1, kf),
						v = 0,
						T = 0;
					if (y.b = i, y.e = r, i += "", "auto" == (r += "") && (t.style[e] = r, r = H_(t, e) || r, t.style[e] = i), sf(s = [i, r]), r = s[1], h = (i = s[0]).match(Ic) || [], (r.match(Ic) || []).length) {
						for (; a = Ic.exec(r);) d = a[0], p = r.substring(v, a.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (c = h[T++] || "") && (u = parseFloat(c) || 0, m = c.substr((u + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), f = parseFloat(d), _ = d.substr((f + "").length), v = Ic.lastIndex - _.length, _ || (_ = _ || ac.units[e] || m, v === r.length && (r += _, y.e += _)), m !== _ && (u = Q_(t, e, c, _) || 0), y._pt = {
							_next: y._pt,
							p: p || 1 === T ? p : ",",
							s: u,
							c: g ? g * f : f - u,
							m: l && l < 4 || "zIndex" === e ? Math.round : 0
						});
						y.c = v < r.length ? r.substring(v, r.length) : ""
					} else y.r = "display" === e && "none" === r ? C_ : M_;
					return Mc.test(r) && (y.e = 0), this._pt = y, y
				},
				im = {
					top: "0%",
					bottom: "100%",
					left: "0%",
					right: "100%",
					center: "50%"
				},
				rm = function(t) {
					var e = t.split(" "),
						i = e[0],
						r = e[1] || "50%";
					return "top" !== i && "bottom" !== i && "left" !== r && "right" !== r || (t = i, i = r, r = t), e[0] = im[i] || i, e[1] = im[r] || r, e.join(" ")
				},
				nm = function(t, e) {
					if (e.tween && e.tween._time === e.tween._dur) {
						var i, r, n, o = e.t,
							s = o.style,
							a = e.u,
							h = o._gsap;
						if ("all" === a || !0 === a) s.cssText = "", r = 1;
						else
							for (n = (a = a.split(",")).length; --n > -1;) i = a[n], v_[i] && (r = 1, i = "transformOrigin" === i ? G_ : k_), Z_(o, i);
						r && (Z_(o, k_), h && (h.svg && o.removeAttribute("transform"), dm(o, 1), h.uncache = 1))
					}
				},
				om = {
					clearProps: function(t, e, i, r, n) {
						if ("isFromStart" !== n.data) {
							var o = t._pt = new Yf(t._pt, e, i, 0, 0, nm);
							return o.u = r, o.pr = -10, o.tween = n, t._props.push(i), 1
						}
					}
				},
				sm = [1, 0, 0, 1, 0, 0],
				am = {},
				hm = function(t) {
					return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
				},
				um = function(t) {
					var e = H_(t, k_);
					return hm(e) ? sm : e.substr(7).match(Oc).map(Qc)
				},
				lm = function(t, e) {
					var i, r, n, o, s = t._gsap || Zc(t),
						a = t.style,
						h = um(t);
					return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? sm : h : (h !== sm || t.offsetParent || t === p_ || s.svg || (n = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (o = 1, r = t.nextSibling, p_.appendChild(t)), h = um(t), n ? a.display = n : Z_(t, "display"), o && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : p_.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
				},
				cm = function(t, e, i, r, n, o) {
					var s, a, h, u = t._gsap,
						l = n || lm(t, !0),
						c = u.xOrigin || 0,
						d = u.yOrigin || 0,
						f = u.xOffset || 0,
						p = u.yOffset || 0,
						_ = l[0],
						m = l[1],
						g = l[2],
						y = l[3],
						v = l[4],
						T = l[5],
						b = e.split(" "),
						E = parseFloat(b[0]) || 0,
						x = parseFloat(b[1]) || 0;
					i ? l !== sm && (a = _ * y - m * g) && (h = E * (-m / a) + x * (_ / a) - (_ * T - m * v) / a, E = E * (y / a) + x * (-g / a) + (g * T - y * v) / a, x = h) : (E = (s = q_(t)).x + (~b[0].indexOf("%") ? E / 100 * s.width : E), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), r || !1 !== r && u.smooth ? (v = E - c, T = x - d, u.xOffset = f + (v * _ + T * g) - v, u.yOffset = p + (v * m + T * y) - T) : u.xOffset = u.yOffset = 0, u.xOrigin = E, u.yOrigin = x, u.smooth = !!r, u.origin = e, u.originIsAbsolute = !!i, t.style[G_] = "0px 0px", o && (J_(o, u, "xOrigin", c, E), J_(o, u, "yOrigin", d, x), J_(o, u, "xOffset", f, u.xOffset), J_(o, u, "yOffset", p, u.yOffset)), t.setAttribute("data-svg-origin", E + " " + x)
				},
				dm = function(t, e) {
					var i = t._gsap || new Tf(t);
					if ("x" in i && !e && !i.uncache) return i;
					var r, n, o, s, a, h, u, l, c, d, f, p, _, m, g, y, v, T, b, E, x, A, S, w, R, O, I, P, M, C, D, N, L = t.style,
						F = i.scaleX < 0,
						B = "px",
						U = "deg",
						k = H_(t, G_) || "0";
					return r = n = o = h = u = l = c = d = f = 0, s = a = 1, i.svg = !(!t.getCTM || !K_(t)), m = lm(t, i.svg), i.svg && (w = (!i.uncache || "0px 0px" === k) && !e && t.getAttribute("data-svg-origin"), cm(t, w || k, !!w || i.originIsAbsolute, !1 !== i.smooth, m)), p = i.xOrigin || 0, _ = i.yOrigin || 0, m !== sm && (T = m[0], b = m[1], E = m[2], x = m[3], r = A = m[4], n = S = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), a = Math.sqrt(x * x + E * E), h = T || b ? E_(b, T) * T_ : 0, (c = E || x ? E_(E, x) * T_ + h : 0) && (a *= Math.abs(Math.cos(c * b_))), i.svg && (r -= p - (p * T + _ * E), n -= _ - (p * b + _ * x))) : (N = m[6], C = m[7], I = m[8], P = m[9], M = m[10], D = m[11], r = m[12], n = m[13], o = m[14], u = (g = E_(N, M)) * T_, g && (w = A * (y = Math.cos(-g)) + I * (v = Math.sin(-g)), R = S * y + P * v, O = N * y + M * v, I = A * -v + I * y, P = S * -v + P * y, M = N * -v + M * y, D = C * -v + D * y, A = w, S = R, N = O), l = (g = E_(-E, M)) * T_, g && (y = Math.cos(-g), D = x * (v = Math.sin(-g)) + D * y, T = w = T * y - I * v, b = R = b * y - P * v, E = O = E * y - M * v), h = (g = E_(b, T)) * T_, g && (w = T * (y = Math.cos(g)) + b * (v = Math.sin(g)), R = A * y + S * v, b = b * y - T * v, S = S * y - A * v, T = w, A = R), u && Math.abs(u) + Math.abs(h) > 359.9 && (u = h = 0, l = 180 - l), s = Qc(Math.sqrt(T * T + b * b + E * E)), a = Qc(Math.sqrt(S * S + N * N)), g = E_(A, S), c = Math.abs(g) > 2e-4 ? g * T_ : 0, f = D ? 1 / (D < 0 ? -D : D) : 0), i.svg && (w = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !hm(H_(t, k_)), w && t.setAttribute("transform", w))), Math.abs(c) > 90 && Math.abs(c) < 270 && (F ? (s *= -1, c += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), i.x = r - ((i.xPercent = r && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + B, i.y = n - ((i.yPercent = n && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + B, i.z = o + B, i.scaleX = Qc(s), i.scaleY = Qc(a), i.rotation = Qc(h) + U, i.rotationX = Qc(u) + U, i.rotationY = Qc(l) + U, i.skewX = c + U, i.skewY = d + U, i.transformPerspective = f + B, (i.zOrigin = parseFloat(k.split(" ")[2]) || 0) && (L[G_] = fm(k)), i.xOffset = i.yOffset = 0, i.force3D = ac.force3D, i.renderTransform = i.svg ? Tm : y_ ? vm : _m, i.uncache = 0, i
				},
				fm = function(t) {
					return (t = t.split(" "))[0] + " " + t[1]
				},
				pm = function(t, e, i) {
					var r = Ld(e);
					return Qc(parseFloat(e) + parseFloat(Q_(t, "x", i + "px", r))) + r
				},
				_m = function(t, e) {
					e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, vm(t, e)
				},
				mm = "0deg",
				gm = "0px",
				ym = ") ",
				vm = function(t, e) {
					var i = e || this,
						r = i.xPercent,
						n = i.yPercent,
						o = i.x,
						s = i.y,
						a = i.z,
						h = i.rotation,
						u = i.rotationY,
						l = i.rotationX,
						c = i.skewX,
						d = i.skewY,
						f = i.scaleX,
						p = i.scaleY,
						_ = i.transformPerspective,
						m = i.force3D,
						g = i.target,
						y = i.zOrigin,
						v = "",
						T = "auto" === m && t && 1 !== t || !0 === m;
					if (y && (l !== mm || u !== mm)) {
						var b, E = parseFloat(u) * b_,
							x = Math.sin(E),
							A = Math.cos(E);
						E = parseFloat(l) * b_, b = Math.cos(E), o = pm(g, o, x * b * -y), s = pm(g, s, -Math.sin(E) * -y), a = pm(g, a, A * b * -y + y)
					}
					_ !== gm && (v += "perspective(" + _ + ym), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (T || o !== gm || s !== gm || a !== gm) && (v += a !== gm || T ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ym), h !== mm && (v += "rotate(" + h + ym), u !== mm && (v += "rotateY(" + u + ym), l !== mm && (v += "rotateX(" + l + ym), c === mm && d === mm || (v += "skew(" + c + ", " + d + ym), 1 === f && 1 === p || (v += "scale(" + f + ", " + p + ym), g.style[k_] = v || "translate(0, 0)"
				},
				Tm = function(t, e) {
					var i, r, n, o, s, a = e || this,
						h = a.xPercent,
						u = a.yPercent,
						l = a.x,
						c = a.y,
						d = a.rotation,
						f = a.skewX,
						p = a.skewY,
						_ = a.scaleX,
						m = a.scaleY,
						g = a.target,
						y = a.xOrigin,
						v = a.yOrigin,
						T = a.xOffset,
						b = a.yOffset,
						E = a.forceCSS,
						x = parseFloat(l),
						A = parseFloat(c);
					d = parseFloat(d), f = parseFloat(f), (p = parseFloat(p)) && (f += p = parseFloat(p), d += p), d || f ? (d *= b_, f *= b_, i = Math.cos(d) * _, r = Math.sin(d) * _, n = Math.sin(d - f) * -m, o = Math.cos(d - f) * m, f && (p *= b_, s = Math.tan(f - p), n *= s = Math.sqrt(1 + s * s), o *= s, p && (s = Math.tan(p), i *= s = Math.sqrt(1 + s * s), r *= s)), i = Qc(i), r = Qc(r), n = Qc(n), o = Qc(o)) : (i = _, o = m, r = n = 0), (x && !~(l + "").indexOf("px") || A && !~(c + "").indexOf("px")) && (x = Q_(g, "x", l, "px"), A = Q_(g, "y", c, "px")), (y || v || T || b) && (x = Qc(x + y - (y * i + v * n) + T), A = Qc(A + v - (y * r + v * o) + b)), (h || u) && (s = g.getBBox(), x = Qc(x + h / 100 * s.width), A = Qc(A + u / 100 * s.height)), s = "matrix(" + i + "," + r + "," + n + "," + o + "," + x + "," + A + ")", g.setAttribute("transform", s), E && (g.style[k_] = s)
				},
				bm = function(t, e, i, r, n, o) {
					var s, a, h = 360,
						u = gc(n),
						l = parseFloat(n) * (u && ~n.indexOf("rad") ? T_ : 1),
						c = o ? l * o : l - r,
						d = r + c + "deg";
					return u && ("short" === (s = n.split("_")[1]) && (c %= h) != c % 180 && (c += c < 0 ? h : -360), "cw" === s && c < 0 ? c = (c + 36e9) % h - ~~(c / h) * h : "ccw" === s && c > 0 && (c = (c - 36e9) % h - ~~(c / h) * h)), t._pt = a = new Yf(t._pt, e, i, r, c, O_), a.e = d, a.u = "deg", t._props.push(i), a
				},
				Em = function(t, e) {
					for (var i in e) t[i] = e[i];
					return t
				},
				xm = function(t, e, i) {
					var r, n, o, s, a, h, u, l = Em({}, i._gsap),
						c = i.style;
					for (n in l.svg ? (o = i.getAttribute("transform"), i.setAttribute("transform", ""), c[k_] = e, r = dm(i, 1), Z_(i, k_), i.setAttribute("transform", o)) : (o = getComputedStyle(i)[k_], c[k_] = e, r = dm(i, 1), c[k_] = o), v_)(o = l[n]) !== (s = r[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (a = Ld(o) !== (u = Ld(s)) ? Q_(i, n, o, u) : parseFloat(o), h = parseFloat(s), t._pt = new Yf(t._pt, r, n, a, h - a, R_), t._pt.u = u || 0, t._props.push(n));
					Em(r, l)
				};
			$c("padding,margin,Width,Radius", (function(t, e) {
				var i = "Top",
					r = "Right",
					n = "Bottom",
					o = "Left",
					s = (e < 3 ? [i, r, n, o] : [i + o, i + r, n + r, n + o]).map((function(i) {
						return e < 2 ? t + i : "border" + i + t
					}));
				om[e > 1 ? "border" + t : t] = function(t, e, i, r, n) {
					var o, a;
					if (arguments.length < 4) return o = s.map((function(e) {
						return tm(t, e, i)
					})), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
					o = (r + "").split(" "), a = {}, s.forEach((function(t, e) {
						return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
					})), t.init(e, a, n)
				}
			}));
			var Am, Sm, wm = {
				name: "css",
				register: Y_,
				targetTest: function(t) {
					return t.style && t.nodeType
				},
				init: function(t, e, i, r, n) {
					var o, s, a, h, u, l, c, d, f, p, _, m, g, y, v, T = this._props,
						b = t.style,
						E = i.vars.startAt;
					for (c in __ || Y_(), e)
						if ("autoRound" !== c && (s = e[c], !zc[c] || !wf(c, e, i, r, t, n)))
							if (u = typeof s, l = om[c], "function" === u && (u = typeof(s = s.call(i, r, t, n))), "string" === u && ~s.indexOf("random(") && (s = Yd(s)), l) l(this, t, c, s, i) && (v = 1);
							else if ("--" === c.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(c) + "").trim(), s += "", nf.lastIndex = 0, nf.test(o) || (d = Ld(o), f = Ld(s)), f ? d !== f && (o = Q_(t, c, o, f) + f) : d && (s += d), this.add(b, "setProperty", o, s, r, n, 0, 0, c), T.push(c);
					else if ("undefined" !== u) {
						if (E && c in E ? (o = "function" == typeof E[c] ? E[c].call(i, r, t, n) : E[c], c in ac.units && !Ld(o) && (o += ac.units[c]), gc(o) && ~o.indexOf("random(") && (o = Yd(o)), "=" === (o + "").charAt(1) && (o = tm(t, c))) : o = tm(t, c), h = parseFloat(o), (p = "string" === u && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), c in w_ && ("autoAlpha" === c && (1 === h && "hidden" === tm(t, "visibility") && a && (h = 0), J_(this, b, "visibility", h ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = w_[c]).indexOf(",") && (c = c.split(",")[0])), _ = c in v_)
							if (m || ((g = t._gsap).renderTransform && !e.parseTransform || dm(t, e.parseTransform), y = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new Yf(this._pt, b, k_, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === c) this._pt = new Yf(this._pt, g, "scaleY", g.scaleY, (p ? p * a : a - g.scaleY) || 0), T.push("scaleY", c), c += "X";
							else {
								if ("transformOrigin" === c) {
									s = rm(s), g.svg ? cm(t, s, 0, y, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && J_(this, g, "zOrigin", g.zOrigin, f), J_(this, b, c, fm(o), fm(s)));
									continue
								}
								if ("svgOrigin" === c) {
									cm(t, s, 1, y, 0, this);
									continue
								}
								if (c in am) {
									bm(this, g, c, h, s, p);
									continue
								}
								if ("smoothOrigin" === c) {
									J_(this, g, "smooth", g.smooth, s);
									continue
								}
								if ("force3D" === c) {
									g[c] = s;
									continue
								}
								if ("transform" === c) {
									xm(this, s, t);
									continue
								}
							}
						else c in b || (c = z_(c) || c);
						if (_ || (a || 0 === a) && (h || 0 === h) && !S_.test(s) && c in b) a || (a = 0), (d = (o + "").substr((h + "").length)) !== (f = Ld(s) || (c in ac.units ? ac.units[c] : d)) && (h = Q_(t, c, o, f)), this._pt = new Yf(this._pt, _ ? g : b, c, h, p ? p * a : a - h, _ || "px" !== f && "zIndex" !== c || !1 === e.autoRound ? R_ : P_), this._pt.u = f || 0, d !== f && "%" !== f && (this._pt.b = o, this._pt.r = I_);
						else if (c in b) em.call(this, t, c, o, s);
						else {
							if (!(c in t)) {
								Bc(c, s);
								continue
							}
							this.add(t, c, o || t[c], s, r, n)
						}
						T.push(c)
					}
					v && zf(this)
				},
				get: tm,
				aliases: w_,
				getSetter: function(t, e, i) {
					var r = w_[e];
					return r && r.indexOf(",") < 0 && (e = r), e in v_ && e !== G_ && (t._gsap.x || tm(t, "x")) ? i && g_ === i ? "scale" === e ? F_ : L_ : (g_ = i || {}) && ("scale" === e ? B_ : U_) : t.style && !Tc(t.style[e]) ? D_ : ~e.indexOf("-") ? N_ : Ff(t, e)
				},
				core: {
					_removeProperty: Z_,
					_getMatrix: lm
				}
			};
			Kf.utils.checkPrefix = z_, Sm = $c("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Am = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
				v_[t] = 1
			})), $c(Am, (function(t) {
				ac.units[t] = "deg", am[t] = 1
			})), w_[Sm[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Am, $c("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
				var e = t.split(":");
				w_[e[1]] = Sm[e[0]]
			})), $c("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
				ac.units[t] = "px"
			})), Kf.registerPlugin(wm);
			var Rm, Om = Kf.registerPlugin(wm) || Kf;
			Om.core.Tween,
				function(t) {
					t[t.Loading = 0] = "Loading", t[t.Menu = 1] = "Menu", t[t.Options = 2] = "Options", t[t.Selector = 3] = "Selector", t[t.Game = 4] = "Game", t[t.Notification = 5] = "Notification"
				}(Rm || (Rm = {}));
			class Im {
				application = new Rs({
					width: window.screen.width,
					height: window.screen.height,
					antialias: !0
				});
				loader = this.application.loader;
				resources = this.loader.resources;
				stage = this.application.stage;
				view = this.application.view;
				loadingController = new mp(this.application);
				menuController = new yp(this.application);
				optionsController = new Ep(this.application);
				selectorController = new Ap(this.application);
				gameController = new fp(this.application);
				notificationController = new Tp(this.application);
				currentScene = Rm.Loading;
				fullscreen = !1;
				constructor() {
					this.application.view.id = "gameCanvas", this.stage.sortableChildren = !0, Om.registerPlugin(c_), c_.registerPIXI(e)
				}
				start() {
					const t = document.getElementById("canvasWrapper");
					t && (t.appendChild(this.view), this.loadingController.load())
				}
				loadComplete() {
					this.loadingController.stopScene(), this.menuController.startScene()
				}
				async newSong(t) {
					Pm.gameController.loadSong(t)
				}
				fullScreen() {
					const t = this.view;
					t.webkitRequestFullScreen ? t.webkitRequestFullScreen() : t.requestFullscreen()
				}
			}
			var Pm = new class {
				appController = new Im;
				configs = new kt;
				currentSkin = new Gt(this.configs.skin.skin);
				status = new $t;
				loading = !1;
				get difficulty() {
					return this.status.difficulty
				}
				get keyMode() {
					return this.status.difficulty ? this.status.difficulty.keyMode : 4
				}
				get timingWindows() {
					return this.status.difficulty ? this.status.difficulty.timingWindows : 8
				}
				get combo() {
					return this.status.combo
				}
				get accuracy() {
					return 0 === this.status.totalAccuracy ? 100 : this.status.accuracy / this.status.totalAccuracy * 100
				}
				get judgements() {
					return this.status.judgements
				}
				get gameController() {
					return this.appController.gameController
				}
				get loadingController() {
					return this.appController.loadingController
				}
				get menuController() {
					return this.appController.menuController
				}
				get optionsController() {
					return this.appController.optionsController
				}
				get selectorController() {
					return this.appController.selectorController
				}
				get notificationController() {
					return this.appController.notificationController
				}
				get application() {
					return this.appController.application
				}
				get loader() {
					return this.appController.loader
				}
				get resources() {
					return this.appController.resources
				}
				get stage() {
					return this.appController.stage
				}
				get view() {
					return this.appController.view
				}
				get width() {
					return this.appController.view.width
				}
				get height() {
					return this.appController.view.height
				}
				get name() {
					return this.configs.general.name
				}
				get scrollSpeed() {
					return this.configs.general.scrollSpeed
				}
				get audioOffset() {
					return this.configs.general.audioOffset
				}
				get visualOffset() {
					return this.configs.general.visualOffset
				}
				get volume() {
					return this.configs.general.volume
				}
				get accuracySize() {
					return this.configs.skin.accuracySize
				}
				get backgroundOpacity() {
					return this.configs.skin.backgroundOpacity
				}
				get bmsStyle() {
					return this.configs.skin.bmsStyle
				}
				get columnSize() {
					return this.configs.skin.columnSize
				}
				get comboPosition() {
					return this.configs.skin.comboPosition
				}
				get comboSize() {
					return this.configs.skin.comboSize
				}
				get effectSize() {
					return this.configs.skin.effectSize
				}
				get fpsSize() {
					return this.configs.skin.fpsSize
				}
				get fullscreen() {
					return this.configs.general.fullscreen
				}
				get hitPosition() {
					return this.configs.skin.hitPosition
				}
				get infoSize() {
					return this.configs.skin.infoSize
				}
				get judgementBounce() {
					return this.configs.skin.judgementBounce
				}
				get judgementPosition() {
					return this.configs.skin.judgementPosition
				}
				get judgementSize() {
					return this.configs.skin.judgementSize
				}
				get judgementsSize() {
					return this.configs.skin.judgementsSize
				}
				get laneCoverBottomFade() {
					return this.configs.skin.laneCoverBottomFade
				}
				get laneCoverBottomPosition() {
					return this.configs.skin.laneCoverBottomPosition
				}
				get laneCoverTopFade() {
					return this.configs.skin.laneCoverTopFade
				}
				get laneCoverTopPosition() {
					return this.configs.skin.laneCoverTopPosition
				}
				get offsetSizeX() {
					return this.configs.skin.offsetSizeX
				}
				get offsetSizeY() {
					return this.configs.skin.offsetSizeY
				}
				get showAccuracy() {
					return this.configs.skin.showAccuracy
				}
				get showBackground() {
					return this.configs.skin.showBackground
				}
				get showCombo() {
					return this.configs.skin.showCombo
				}
				get showEffects() {
					return this.configs.skin.showEffects
				}
				get showFps() {
					return this.configs.skin.showFps
				}
				get showHint() {
					return this.configs.skin.showHint
				}
				get showInfo() {
					return this.configs.skin.showInfo
				}
				get showJudgement() {
					return this.configs.skin.showJudgement
				}
				get showJudgements() {
					return this.configs.skin.showJudgements
				}
				get showLaneCoverBottom() {
					return this.configs.skin.showLaneCoverBottom
				}
				get showLaneCoverTop() {
					return this.configs.skin.showLaneCoverTop
				}
				get showLighting() {
					return this.configs.skin.showLighting
				}
				get showOffset() {
					return this.configs.skin.showOffset
				}
				get showReceptors() {
					return this.configs.skin.showReceptors
				}
				get showSongMeter() {
					return this.configs.skin.showSongMeter
				}
				get skin() {
					return this.configs.skin.skin
				}
				get songMeterSize() {
					return this.configs.skin.songMeterSize
				}
				get upScroll() {
					return this.configs.skin.upScroll
				}
				get keyBindings() {
					return this.configs.keyBindings
				}
				get achievements() {
					return this.configs.achievements
				}
			};
			let Mm;

			function Cm() {
				const t = document.getElementById("canvasWrapper");
				t && (t.style.width = window.innerWidth + "px", t.style.height = window.innerHeight + "px")
			}
			window.addEventListener("resize", (() => {
				Cm()
			})), window.addEventListener("dragenter", (t => {
				Mm = t.target;
				const e = document.getElementById("dropZone");
				e && (e.style.visibility = "visible", e.style.opacity = "1")
			})), window.addEventListener("dragleave", (t => {
				if (t.preventDefault(), t.target === document || t.target === Mm) {
					const t = document.getElementById("dropZone");
					if (!t) return;
					t.style.visibility = "hidden", t.style.opacity = "0"
				}
			})), window.addEventListener("dragover", (t => {
				t.preventDefault()
			})), window.addEventListener("drop", (t => {
				t.preventDefault(), async function(t) {
					if (!t.dataTransfer) return;
					const e = [];
					for (const i of t.dataTransfer.items) null != i && "file" === i.kind && e.push(i.webkitGetAsEntry());
					if (0 === e.length) return;
					const i = new Pt,
						r = await i.parseFiles(e);
					Pm.appController.newSong(r[0])
				}(t);
				const e = document.getElementById("dropZone");
				e && (e.style.visibility = "hidden", e.style.opacity = "0")
			})), Cm(), Pm.appController.start()
		}()
}();